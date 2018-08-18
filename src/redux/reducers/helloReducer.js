import { FETCH_HELLO } from '../actions/type';

const initalState = {
    express: '',
};

export default (state = initalState,action) => {
    switch (action.type){
        case FETCH_HELLO:
            return {...state, express:action.payload.data};
        default:
            return state;
    }
}