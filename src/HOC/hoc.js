import React, { Component } from "react";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';


export default function(ComposedComponent) {
    class HOC extends Component {

        render() {
            return (
                <div>
                    <p className="text-center display-3">HOC: Header</p>
                    <ComposedComponent {...this.props}/>
                    <ToastContainer/>
                </div>
            );
        }
    }

    return HOC;
}