import React, {Component} from 'react';
import styled from 'styled-components';
import { Link } from "react-router-dom";

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope , faLock } from '@fortawesome/free-solid-svg-icons'

import {
    Form,
    FormGroup,
    Input,
    FormText,
    Row,
    Col,
    Alert,
} from 'reactstrap';

library.add(faEnvelope, faLock);

const CornerRight = styled.div`
    position: absolute;
    top: -0.1rem;
    right: -0.6rem;
    
    width: 0; 
    height: 0; 
    
    border-left: 15px solid transparent;
    border-right: 15px solid transparent;
    
    transform:rotateZ(45deg);
    
    border-bottom: 15px solid black;
`;

const Title = styled.h2`
    margin-bottom: 50px;
`;

const IconInput = styled.span`
    position: absolute;
    margin-left: 5px;
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
            isOpen: false,
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
            this.setState({
                isOpen: true,
            });
        }
        else{
            {/* to do */}
        }
    };

    onDismiss = () => {
        this.setState({ isOpen: false });
    };


    render(){
        const { isOpen } = this.state;
        const { handleChange, handleSubmit, onDismiss } = this;

        return(
            <div className="m-4 w-25">

                <Alert color="danger" isOpen={isOpen} toggle={onDismiss} className="position-absolute fixed-bottom ml-4 mr-4">
                    I am an alert and I can be dismissed!
                </Alert>

                <div className="position-relative">
                    <CornerRight/>

                    <Form className="p-4 border">
                        <Title>Login</Title>
                        <FormGroup>
                            <IconInput>
                                <FontAwesomeIcon icon="envelope" />
                            </IconInput>
                            <Input type="email" name="email" placeholder="Email address" className="bg-transparent border-top-0 border-left-0 border-right-0 pl-4 rounded-0" onChange={handleChange}/>
                        </FormGroup>

                        <FormGroup>
                            <IconInput>
                                <FontAwesomeIcon icon="lock" />
                            </IconInput>
                            <Input type="password" name="pwd" placeholder="" className="bg-transparent border-top-0 border-left-0 border-right-0 pl-4 rounded-0" onChange={handleChange}/>
                        </FormGroup>

                        <a className="btn bg-dark text-white p-4 rounded-0 border-0 d-block" onClick={handleSubmit}>
                            <h5 className="m-0">Login to your account</h5>
                        </a>

                        <div>
                            <Row>
                                <Col>
                                    <FormGroup check>
                                        <Input type="checkbox" />
                                        <FormText>
                                            Remember me
                                        </FormText>
                                    </FormGroup>
                                </Col>
                                <Col>
                                    <FormText className="text-right">
                                        New here? <Link to="/">Sign in!</Link>
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