import React, { Component } from "react";
import {createStore,applyMiddleware} from 'redux';
import reduxThunk from 'redux-thunk';
import {Provider} from 'react-redux';
import reducers from './redux/reducers';
import 'bootstrap/dist/css/bootstrap.css';

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import indexRoutes from "./routes";

const createStoreApplyMiddleware = applyMiddleware(reduxThunk)(createStore);
const store = createStoreApplyMiddleware(reducers);

class Root extends Component {

    render() {
        return (
            <Provider store={store}>
                <div>
                    <Router>
                        <Switch>
                            {indexRoutes.map(route => (
                                <Route
                                    exact
                                    path={route.path}
                                    key={route.name}
                                    component={route.component}
                                />
                            ))}
                        </Switch>
                    </Router>
                </div>
            </Provider>
        );
    }
}

export default Root;
