import { combineReducers } from 'redux';

import languageReducer from './languageReducer';
import hello from './helloReducer';
import overviewReducer from './overviewReducer';
import studentGuideReducer from './studentGuideReducer';
import error from './errorReducer';

const rootReducers = combineReducers({
    lang: languageReducer,
    overview: overviewReducer,
    hello,
    guide: studentGuideReducer,
    error,
});

export default  rootReducers;