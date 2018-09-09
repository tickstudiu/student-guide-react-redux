import { combineReducers } from 'redux';

import languageReducer from './languageReducer';
import hello from './helloReducer';
import overviewReducer from './overviewReducer';
import studentGuideReducer from './studentGuideReducer';
import error from './errorReducer';
import notifyReducer from './notifyReducer';

const rootReducers = combineReducers({
    lang: languageReducer,
    overview: overviewReducer,
    hello,
    guide: studentGuideReducer,
    error,
    notify: notifyReducer,
});

export default  rootReducers;