import apiClient, { CanceledError } from "../services/apiClient"
import { useEffect, useState } from "react"

interface Genre {
    id: number;
    name: string;
}
interface FetchGenreData {
    count: number;
    results: Genre[]
}

const useGenres = () => {
        const [genres, setGenres] = useState<Genre[]>([]);
        const [error, setError] = useState('');
        const [isLoading, setLoading] = useState(false)

    useEffect(()=>{
        const controller = new AbortController();
        setLoading(true)
        apiClient.get<FetchGenreData>('/genres', {signal: controller.signal})
            .then(res => {
                setGenres(res.data.results);
                setLoading(false);
                console.log(res.data.results);
            })
            .catch((err)=> {
                if (err instanceof CanceledError) return;
                setError(err.message);
                setLoading(false);
            })
        return () => controller.abort();        
    }, []);
    return {genres, error, isLoading};

    
}

export default useGenres