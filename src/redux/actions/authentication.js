import * as tools from '../../utils';
import { LOGIN_ERROR } from '../type';
import { selectLoginError } from '../../texts';

//AUTHENTICATION ONLY
export const Login = (profile, callback) => async dispatch => {
    const res = await tools.requestToken('http://localhost:5000/login', profile);
    if(res.success) {
        await tools.registerToken(res.token);
        await tools.registerUser(res.user);
        await callback();
    } else {
        console.log(res.error);
        dispatch({
            type: LOGIN_ERROR,
            payload: selectLoginError(res.error.data.message)
        })
    }
};