import axios, {CanceledError} from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '0941841fe440452d9ad3ee6c8637a351'
    }
})  

export {CanceledError};
//const url = 'https://api.rawg.io/games/api?key=2fa64620efdb4181bea815d172733ebf';