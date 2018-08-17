import App from '../containers/App';
import Login from '../containers/Login';

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
];

export default indexRoutes;