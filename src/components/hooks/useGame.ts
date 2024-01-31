import apiClient, { CanceledError } from "../services/apiClient"
import { useEffect, useState } from "react"

export interface Platform {
    id: number;
    name: string;
    slug: string
}

export interface Game {
    id: number,
    name: string
    background_image: string;
    parent_platforms: {platform: Platform}[];
    metacritic: number
}
interface FetchGameData {
    count: number,
    results: Game[]
}

const useGame = () => {
        const [games, setGames] = useState<Game[]>([]);
        const [error, setError] = useState('');

    useEffect(()=>{
        const controller = new AbortController();
        apiClient.get<FetchGameData>('/games', {signal: controller.signal})
            .then(res => {
                setGames(res.data.results);
                console.log(res.data.results)
            })
            .catch((err)=> {
                if (err instanceof CanceledError) return;
                setError(err.message);
            })
        return () => controller.abort();        
    }, [1]);
    return {games, error};

    
}

export default useGame