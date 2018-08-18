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
            setTimeout(this.onDismiss, 3000);
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

    onDismiss = () => {
        this.setState({ isOpen: false });
    };


    render(){
        const { login, email, loginTo, Remem, newHere, SignIn } = this.props.text;
        const { isOpen } = this.state;
        const { handleChange, handleSubmit, onDismiss, handleKeyPress } = this;

        return(
            <div className="m-4 w-25">

                <Alert color="danger" isOpen={isOpen} toggle={onDismiss} className="position-absolute fixed-bottom ml-4 mr-4">
                    I am an alert and I can be dismissed!
                </Alert>

                <div className="position-relative">
                    <CornerRight/>

                    <Form className="p-4 border">
                        <Title>{login}</Title>
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

                        <a className="btn bg-dark text-white p-4 rounded-0 border-0 d-block" onClick={handleSubmit}>
                            <h5 className="m-0">{loginTo}</h5>
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
                                        {newHere} <Link to="/">{SignIn}!</Link>
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