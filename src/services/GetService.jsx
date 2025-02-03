import axios from "axios";
import Conf from "../Conf/Conf";
const api = axios.create({
    baseURL:
        'http://www.omdbapi.com/',
})

//  create a get req function
const getMovie = () => {
    return api.get(`?apikey=${Conf.API_KEY}&s=titanic&page=1`)
}

export default getMovie