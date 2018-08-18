import axios from 'axios'
import { FETCH_HELLO } from './type';

const URL ='http://localhost/api/hello/';

export function fetchHello(){
    const response =  axios.get(`${URL}`);
    return {
        type:FETCH_HELLO,
        payload: response
    }
}