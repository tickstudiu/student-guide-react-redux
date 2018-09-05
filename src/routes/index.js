import App from '../containers/App';
import Login from '../containers/Login';
import Dash from '../containers/Dashboard';
import Register from '../containers/Register';

import { defaultHoc, PrivateRoute, PublicRoute, AuthenRoute} from '../HOC';

let indexRoutes = [
    {
        path: '/',
        name: 'App',
        component: defaultHoc(App),
    },
    {
        path: '/login',
        name: 'Login',
        component: AuthenRoute(Login),
    },
    {
        path: '/dashboard',
        name: 'Dashboard',
        component: PrivateRoute(Dash),
    },
    {
        path: '/register',
        name: 'Register',
        component: AuthenRoute(Register),
    },
];

export default indexRoutes;