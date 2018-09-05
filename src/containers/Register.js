import React, {Component} from "react";
import {connect} from 'react-redux';
import * as tools from '../utils';
import * as action from '../redux/actions';

import {Container, Row, Col, Card, CardTitle, CardText, CardBody, Form,
    FormGroup,
    Input,
    FormText,} from 'reactstrap';
import {RegisterText} from '../texts';
import styled, {keyframes} from 'styled-components';
import {RegisterForm} from '../components';
import Background from '../assets/images/login-background.jpg';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Link} from "react-router-dom";


const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  50% {
    opacity: 0.9;
  }  
  100% {
    opacity: 1;
  }
`;

const RegisForm = styled.div`
    height: 100%;
    animation: ${fadeIn} 2s ease-in 1;
`;


class Register extends Component {

    render() {

        const lang = tools.getLanguage();
        const staticText = tools.checkLanguage(lang, RegisterText);

        console.log(lang);

        return (
            <Container fluid style={{
                backgroundImage: `url(${Background})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                minHeight: '100vh'
            }}>
                <Row>
                    <Col xl={{size: 6, offset: 3}} lg={{size: 8, offset: 2}} md={{size: 10, offset: 1}} sm="12" className="p-0 shadow" style={{height: '70vh', marginTop: '15vh', marginBottom: '15vh'}}>
                        <RegisForm>
                            <Row className="h-100">
                                <Col lg="5" className="px-0 d-lg-block d-none">
                                    <Card inverse className="rounded-0 h-100" style={{
                                        backgroundImage: 'url(https://media.licdn.com/media-proxy/ext?w=800&h=800&hash=qzXixMBEHcySQF0cga8JlV0jdM4%3D&ora=1%2CaFBCTXdkRmpGL2lvQUFBPQ%2CxAVta5g-0R6jnhodx1Ey9KGTqAGj6E5DQJHUA3L0CHH05IbfPWi4e5LfLeChokAQfi4AjQAwf-e1EjfiE47tfoPpfo8j2sa3IZD5aRUPbhU4hGUB5sE-Pg',
                                        backgroundSize: 'cover',
                                        backgroundPosition: 'center',
                                    }}>
                                        <CardBody style={{background: 'rgba(0,0,0,0.65)'}} className="h-100">
                                            <CardTitle className="text-center display-4">What's up</CardTitle>
                                            <CardText className="text-center lead">How are you doing ?</CardText>
                                            <CardText>Lorem ipsum dolor sit amet, consectetur adipiscing
                                                elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                                minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                                consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
                                                eu.
                                            </CardText>
                                        </CardBody>
                                    </Card>
                                </Col>
                                <Col lg="7" md="12" className="px-0 bg-white">
                                    <div className="d-flex justify-content-center align-items-center h-100">
                                        <Form className="col-lg-8 col-md-11 col-12">
                                            <h2 className="text-center mb-5 mt-2">Register Form</h2>
                                            <FormGroup>-
                                                <Input type="text" name="name" placeholder="example" className="bg-transparent border-top-0 border-left-0 border-right-0 pl-5 rounded-0"/>
                                            </FormGroup>

                                            <FormGroup>
                                                <Input type="email" name="email" placeholder="example@email" className="bg-transparent border-top-0 border-left-0 border-right-0 pl-5 rounded-0"/>
                                            </FormGroup>

                                            <FormGroup>
                                                <Input type="password" name="pwd" placeholder="" className="bg-transparent border-top-0 border-left-0 border-right-0 pl-5 rounded-0"/>
                                            </FormGroup>

                                            <a className="btn bg-dark text-white p-4 rounded-0 border-0 d-block" >
                                                <h5 className="m-0 text-uppercase">ok</h5>
                                            </a>
                                        </Form>
                                    </div>
                                </Col>
                            </Row>
                        </RegisForm>
                    </Col>
                </Row>
            </Container>
        );
    }
}

const mapStateToProps = ({lang}) => {
    return {
        lang,
    }
};

export default connect(mapStateToProps, action)(Register);