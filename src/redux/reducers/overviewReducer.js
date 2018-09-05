import { FETCH_OVER_VIEW } from '../type';

const initalState = {
    overviewStudentList: [],
};

export default (state = initalState,action) => {
    switch (action.type){
        case FETCH_OVER_VIEW:
            return {...state, overviewStudentList:action.payload.data};
        default:
            return state;
    }
}