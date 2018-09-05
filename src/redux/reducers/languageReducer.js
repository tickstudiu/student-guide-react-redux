import { CHANG_LANGUAGE } from '../type';
import * as tools from '../../utils/index';

export default (state = 'en', action) => {
    switch (action.type) {
        case CHANG_LANGUAGE:
            tools.saveLanguageToStorage(action.payload);
            return action.payload;
        default:
            tools.setDefaultLanguage();
            return state;
    }
}