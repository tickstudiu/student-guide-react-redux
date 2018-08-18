import { CHANG_LANGUAGE } from '../actions/type';
import * as tools from '../utils';

export default (state = {}, action) => {
    switch (action.type) {
        case CHANG_LANGUAGE:
            tools.saveLanguageToStorage(action.payload);
            return action.payload;
        default:
            return state;
    }
}