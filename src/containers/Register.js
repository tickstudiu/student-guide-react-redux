import React, {Component} from "react";
import {connect} from 'react-redux';
import * as tools from '../utils';
import * as action from '../redux/actions';

import {Container, Row, Col} from 'reactstrap';

import {RegisterText} from '../texts';
import {RegisterForm, RegisterCard} from '../components';
import styled, {keyframes} from 'styled-components';

import Background from '../assets/images/login-background.jpg';



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
        const staticText = tools.checkLanguage(RegisterText);

        console.log(lang);

        return (
            <Container fluid style={{
                backgroundImage: `url(${Background})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                minHeight: '100vh'
            }}>
                <Row>
                    <Col xl={{size: 6, offset: 3}} lg={{size: 8, offset: 2}} md={{size: 10, offset: 1}} sm="12" className="p-lg-0 shadow" style={{height: '70vh', marginTop: '15vh', marginBottom: '15vh'}}>

                        <RegisForm>
                            <Row className="h-100">
                                <Col lg="5" className="px-lg-0 d-lg-block d-none">
                                    <RegisterCard/>
                                </Col>
                                <Col lg="7" md="12" className="px-lg-0 bg-white">
                                    <RegisterForm/>
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