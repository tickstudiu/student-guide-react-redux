import React, { Component, Fragment } from "react";
import { connect } from "react-redux";

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