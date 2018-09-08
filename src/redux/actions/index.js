import { CHANG_LANGUAGE } from '../type';

export * from './helloServer';
export * from './overviewStudent';
export * from './studentGuide';
export * from './authentication';

export const changeLanguage = lang => dispatch => {
    dispatch({
        type: CHANG_LANGUAGE,
        payload: lang
    });
};