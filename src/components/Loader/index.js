import React, {Component} from 'react';
import './style.css';

class Loader extends Component {

    render() {

        return (
            <div className="d-flex justify-content-center align-items-center" style={{
                background: '#eaeaea',
                height: '100vh',
            }}>
                <div id="loading"></div>
            </div>
        )
    }
}

export default Loader;