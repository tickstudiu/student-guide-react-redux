import axios from 'axios'
import { FETCH_OVER_VIEW } from './type';

const URL ='http://localhost:5000/api/student/overview/today';

export function fetchOverView(){
    const response =  axios.get(`${URL}`);
    return {
        type:FETCH_OVER_VIEW,
        payload: response
    }
}