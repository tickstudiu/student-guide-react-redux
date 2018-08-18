import App from '../containers/App';
import Login from '../containers/Login';
import Dash from '../containers/Dashboard';

let indexRoutes = [
    {
        path: '/',
        name: 'App',
        component: App,
    },
    {
        path: '/login',
        name: 'Login',
        component: Login,
    },
    {
        path: '/dashboard',
        name: 'dashboard',
        component: Dash,
    },
];

export default indexRoutes;