import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

import * as tools from "../utils";
import * as actions from "../redux/actions";

export const AuthenRoute = ComposedComponent => {
    class AuthenRoute extends Component {
        componentWillMount() {
            if (!tools.getLanguage()) {
                tools.setDefaultLanguage();
            }

            if (tools.isAuth()) {
                this.props.history.push("/dashboard");
            }
        }

        render() {
            return (
                <Fragment>
                    <ComposedComponent {...this.props} />
                    <ToastContainer/>
                </Fragment>
            );
        }
    }

    const mapStateToProps = ({ lang }) => {
        return {
            lang
        };
    };

    return connect(mapStateToProps, actions)(AuthenRoute);
};