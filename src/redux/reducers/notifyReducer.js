import { ERROR_MSG } from '../type';
import * as tools from '../../utils/index';

export default (state = {}, action) => {
    switch (action.type) {
        case ERROR_MSG:
            tools.errorNotify(action.payload);
            return action.payload;
        default:
            return state;
    }
}