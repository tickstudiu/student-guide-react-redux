import axios from 'axios'
import { FETCH_HELLO } from './type';

const URL ='http://localhost:5000/api/hello/';

export function fetchHello(){
    const response =  axios.get(`${URL}`);
    return {
        type:FETCH_HELLO,
        payload: response
    }
}