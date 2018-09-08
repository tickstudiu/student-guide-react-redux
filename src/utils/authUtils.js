import axios from 'axios';

export const requestToken = async (url, profile) => {
    try {
        const res = await axios.post(url, profile);
        return {
            user: res.data.user,
            token: res.data.token,
            success: true
        };
    } catch (error) {
        return {
            error: error.response,
            success: false
        };
    }
};

export const registerToken = async (token) => {
    await localStorage.setItem('token', token);
};

export const registerUser = async (user) => {
    await localStorage.setItem('user', JSON.stringify(user));
};

export const getToken = () => {
    return localStorage.getItem('token');
};

export const getUserInformation = () => {
    return JSON.parse(localStorage.getItem('token'));
};

export const isAuth = () => {
    return getToken() ? true : false;
};

export const isNotAuth = () => {
    return (!getToken()) ? true : false;
}; //not used

export const userLogout = async (callback) => {
    await localStorage.removeItem('token');
    await localStorage.removeItem('user');
    await callback();
};

export const checkPasswordConfirm = (password, passwordConfirm) => {
    return (password === passwordConfirm) ? true : false;
};