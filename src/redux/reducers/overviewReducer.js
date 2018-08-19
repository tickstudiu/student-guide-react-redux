import { FETCH_OVER_VIEW } from '../actions/type';

const initalState = {
    overviewStu: [],
};

export default (state = initalState,action) => {
    switch (action.type){
        case FETCH_OVER_VIEW:
            return {...state, overviewStu:action.payload.data};
        default:
            return state;
    }
}