import React, { Component } from "react";
import { connect } from 'react-redux';
import * as tools from '../utils';
import * as action  from '../redux/actions';

import { Container } from 'reactstrap';
import { LoginForm, LoginNavbar } from '../components';
import { LoginText } from '../texts';
import styled, { keyframes } from 'styled-components';
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

const LoginBox = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    width: 100vw;
    animation: ${fadeIn} 2s ease-in 1;
`;


class Login extends Component {
    
    render() {

        const lang = tools.getLanguage();
        const staticText = tools.checkLanguage(lang, LoginText);

        console.log(lang);

        return (
            <Container fluid className="p-0" style={{backgroundImage: `url(${Background})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
            }}>
                <LoginBox>
                    <LoginForm text={staticText}/>
                </LoginBox>
            </Container>
        );
    }
}

const mapStateToProps = ({lang}) => {
    return {
        lang,
    }
};

export default connect(mapStateToProps, action)(Login);