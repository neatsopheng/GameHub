// Generic data fetching
// Generic type: it check for the type and set that data to the type 

import { AxiosRequestConfig } from "axios";
import apiClient, { CanceledError } from "../services/apiClient"
import { useEffect, useState } from "react"


interface FetchData<T> { 
    // <T> : is a generic type parameter
    count: number;
    results: T[];
}

const useData = <T> (endpoint: string, requestConfig?: AxiosRequestConfig, deps?: any[]) => {
        const [data, setData] = useState<T[]>([]);
        const [error, setError] = useState('');
        const [isLoading, setLoading] = useState(false)

    useEffect(()=>{
        const controller = new AbortController();
        setLoading(true)
        apiClient
            .get<FetchData<T>>(endpoint, {signal: controller.signal, ...requestConfig})
            .then(res => {
                setData(res.data.results);
                setLoading(false);
                console.log(res.data.results);
            })
            .catch((err)=> {
                if (err instanceof CanceledError) return;
                setError(err.message);
                setLoading(false);
            })
        return () => controller.abort();        
    }, deps ? [...deps] : []);
    return {data, error, isLoading};

    
}

export default useData