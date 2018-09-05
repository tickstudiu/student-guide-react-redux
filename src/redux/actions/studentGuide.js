import axios from 'axios'
import { FETCH_STUDENT_GUIDE } from '../type';

const URL ='http://localhost:5000/api/student-guide';

export async function fetchStudentGuide(){
    const response = await axios.get(`${URL}`);
    return {
        type:FETCH_STUDENT_GUIDE,
        payload: response
    }
}

