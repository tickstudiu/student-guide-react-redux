import React, {Component} from "react";
import { Container } from 'reactstrap';
import { LoginForm, LoginNavbar } from '../components';
import { LoginText } from '../texts';
import styled, { keyframes } from 'styled-components';
import * as tools from '../utils';
import {connect} from 'react-redux';
import * as actions from '../actions';

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
    componentDidMount() {
        this.props.fetchHello();
    };

    render() {

        const { express } = this.props.hello;
        const lang = tools.getLanguage();
        const staticText = tools.checkLanguage(lang, LoginText);

        console.log(lang);

        return (
            <Container fluid className="p-0">
                <LoginNavbar text={staticText}/>
                <LoginBox>
                    <LoginForm text={staticText}/>
                    {express}
                </LoginBox>
            </Container>
        );
    }
}

const mapStateToProps = ({hello, lang}) => {
    return {
        lang,
        hello,
    }
};

export default connect(mapStateToProps, actions)(Login);