import axios, {CanceledError} from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '2fa64620efdb4181bea815d172733ebf'
    }
})  

export {CanceledError};