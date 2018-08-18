import {combineReducers} from 'redux'

import languageReducer from './languageReducer';
import hello from './helloReducer';

const rootReducers = combineReducers({
    lang: languageReducer,
    hello,
});

export default  rootReducers;