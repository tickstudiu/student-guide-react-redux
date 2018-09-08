import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

import * as tools from "../utils";
import * as actions from "../redux/actions";
import { Loader } from '../components/';

export const AuthenRoute = ComposedComponent => {
    class AuthenRoute extends Component {
        constructor(props) {
            super(props);
            this.state = {
                loading: true
            }
        }

        componentWillMount() {
            if (!tools.getLanguage()) {
                tools.setDefaultLanguage();
            }

            if (tools.isAuth()) {
                this.props.history.push("/dashboard");
            }
        }

        componentDidMount() {
            setTimeout(() => {
                this.setState({loading: false})
            }, 1500)
        }

        render() {
            const { loading } = this.state;
            if (loading) {
                return <Loader />
            }

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