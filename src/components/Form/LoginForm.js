import React, {Component} from 'react';
import styled from 'styled-components';
import { Link } from "react-router-dom";
import * as tools from '../../utils';

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope , faLock, faTimesCircle } from '@fortawesome/free-solid-svg-icons'

import {
    Form,
    FormGroup,
    Input,
    FormText,
    Row,
    Col,
} from 'reactstrap';

library.add(faEnvelope, faLock, faTimesCircle);

const IconInput = styled.span`
    position: absolute;
    margin-left: 15px;
    height: 38px;
    display: flex;
    align-items: center;
`;

class LoginForm extends Component{
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            pwd: '',
        }
    }


    handleChange = (event) => {
        let name = event.target.name,
            value = event.target.value;

        this.setState({
            [name]: value
        });
    };

    handleSubmit = () => {
        const {email, pwd} = this.state;
        if(email === '' || pwd === ''){
            tools.errorNotify("login fail");
        }
        else{
            {/* to do */}
        }
    };

    handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            this.handleSubmit()
        }
    };

    render(){
        const { login, email, loginTo, Remem, newHere, SignIn } = this.props.text;
        const { handleChange, handleSubmit, handleKeyPress } = this;

        return(
            <div>
                <div>
                    <h2 className="display-4 text-center">Welcome to <br/>Unitour System</h2>
                    <Form className="p-4 border bg-white shadow my-4">
                        <h2 className="text-center mb-5 mt-2">{login}</h2>
                        <FormGroup>
                            <IconInput>
                                <FontAwesomeIcon icon="envelope" />
                            </IconInput>
                            <Input type="email" name="email" placeholder={email} className="bg-transparent border-top-0 border-left-0 border-right-0 pl-5 rounded-0" onChange={handleChange}/>
                        </FormGroup>

                        <FormGroup>
                            <IconInput>
                                <FontAwesomeIcon icon="lock" />
                            </IconInput>
                            <Input type="password" name="pwd" placeholder="" className="bg-transparent border-top-0 border-left-0 border-right-0 pl-5 rounded-0" onChange={handleChange} onKeyPress={handleKeyPress}/>
                        </FormGroup>

                        <a className="btn bg-dark text-white p-4 rounded-0 border-0 d-block" onClick={handleSubmit} >
                            <h5 className="m-0 text-uppercase">{loginTo}</h5>
                        </a>

                        <div>
                            <Row>
                                <Col>
                                    <FormGroup check>
                                        <Input type="checkbox" />
                                        <FormText>
                                            {Remem}
                                        </FormText>
                                    </FormGroup>
                                </Col>
                                <Col>
                                    <FormText className="text-right">
                                        {newHere} <Link to="/register">{SignIn}!</Link>
                                    </FormText>
                                </Col>
                            </Row>
                        </div>
                    </Form>
                </div>
            </div>
        )
    }
}

export default LoginForm;