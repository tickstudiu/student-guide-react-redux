import React, {Component} from "react";
import { LoginForm, LoginNavbar } from '../components';
import { Container } from 'reactstrap';
import styled, { keyframes } from 'styled-components';

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
        return (
            <Container fluid className="p-0">
                <LoginNavbar/>
                <LoginBox>
                    <LoginForm/>
                </LoginBox>
            </Container>
        );
    }
}

export default Login;