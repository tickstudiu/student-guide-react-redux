import * as tools from '../../utils';

export const getApi = request => async dispatch => {
    const { url, type, typeErr, callback } = request;
    const res = await tools.getApi(url);
    if (res.success) {
        await dispatch({
            type,
            payload: res.data
        });
        await callback();
    } else {
        console.log(res.error);
        await dispatch({
            type: typeErr,
            payload: res.error.data.message
        });
    }
};
