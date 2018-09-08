import { LOGIN_ERROR } from '../type';

export default (state = {}, action) => {
    switch (action.type) {
        case LOGIN_ERROR:
            return action.payload;
        default:
            return state;
    }
}