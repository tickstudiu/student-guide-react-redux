import React, {Component} from 'react';
import {Form, FormGroup, Input} from 'reactstrap';
import {library} from '@fortawesome/fontawesome-svg-core'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faEnvelope, faLock, faUserAlt} from '@fortawesome/free-solid-svg-icons'
import styled from "styled-components";

library.add(faEnvelope, faLock, faUserAlt);

const IconInput = styled.span`
    position: absolute;
    margin-left: 15px;
    height: 38px;
    display: flex;
    align-items: center;
`;

class RegisterForm extends Component {
    render() {
        return (
            <div className="d-flex justify-content-center align-items-center h-100">
                <Form className="col-lg-8 col-md-11 col-12">
                    <h2 className="text-center mb-5 mt-2">Register Form</h2>
                    <FormGroup>
                        <IconInput>
                            <FontAwesomeIcon icon="user-alt"/>
                        </IconInput>
                        <Input type="text" name="name" placeholder="example" className="bg-transparent border-top-0 border-left-0 border-right-0 pl-5 rounded-0"/>
                    </FormGroup>

                    <FormGroup>
                        <IconInput>
                            <FontAwesomeIcon icon="envelope"/>
                        </IconInput>
                        <Input type="email" name="email" placeholder="example@email" className="bg-transparent border-top-0 border-left-0 border-right-0 pl-5 rounded-0"/>
                    </FormGroup>

                    <FormGroup>
                        <IconInput>
                            <FontAwesomeIcon icon="lock"/>
                        </IconInput>
                        <Input type="password" name="pwd" placeholder="" className="bg-transparent border-top-0 border-left-0 border-right-0 pl-5 rounded-0"/>
                    </FormGroup>

                    <a className="btn bg-dark text-white p-4 rounded-0 border-0 d-block" >
                        <h5 className="m-0 text-uppercase">ok</h5>
                    </a>
                </Form>
            </div>
        )
    }
}

export default RegisterForm;