import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

import * as tools from "../utils";
import * as actions from "../redux/actions";

export const PublicRoute = ComposedComponent => {
    class PublicRoute extends Component {
        componentWillMount() {
            if (!tools.getLanguage()) {
                tools.setDefaultLanguage();
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

    return connect(mapStateToProps, actions)(PublicRoute);
};