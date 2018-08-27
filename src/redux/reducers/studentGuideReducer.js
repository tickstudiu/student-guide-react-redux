import { FETCH_STUDENT_GUIDE } from '../actions/type';

const initalState = {
    studentGuideList: [],
};

export default (state = initalState,action) => {
    switch (action.type){
        case FETCH_STUDENT_GUIDE:
            return {...state, studentGuideList:action.payload.data.data};
        default:
            return state;
    }
}