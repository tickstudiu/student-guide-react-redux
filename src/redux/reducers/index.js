import {combineReducers} from 'redux'

import languageReducer from './languageReducer';
import hello from './helloReducer';
import overviewReducer from './overviewReducer';

const rootReducers = combineReducers({
    lang: languageReducer,
    overview: overviewReducer,
    hello,
});

export default  rootReducers;