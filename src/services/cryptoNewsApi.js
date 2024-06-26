
import axios from "axios";


const baseUrl='https://news-api14.p.rapidapi.com/';


export const _useGetCryptoNewsQuery=async(query, limit)=>{
    const url = `${baseUrl}v2/search/articles?query=${query}&limit=${limit}&language=en`
    const res = await axios.get(url, {
        headers: {
            'x-rapidapi-key': '66ce7bd1famsh5f8d446e9722c3fp160b17jsna35b2ae072b5',
            'x-rapidapi-host': 'news-api14.p.rapidapi.com'
        }
    });

    return res.data;
}