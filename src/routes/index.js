import App from '../containers/App';
import Login from '../containers/Login';
import Dash from '../containers/Dashboard';
import Register from '../containers/Register';
import { defaultHoc } from '../HOC';

let indexRoutes = [
    {
        path: '/',
        name: 'App',
        component: defaultHoc(App),
    },
    {
        path: '/login',
        name: 'Login',
        component: Login,
    },
    {
        path: '/dashboard',
        name: 'Dashboard',
        component: Dash,
    },
    {
        path: '/register',
        name: 'Register',
        component: Register,
    },
];

export default indexRoutes;