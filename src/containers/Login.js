import React, {Component} from "react";
import {connect} from 'react-redux';
import * as tools from '../utils';
import * as action from '../redux/actions';
import * as types from '../redux/type';

import {Container} from 'reactstrap';
import {LoginForm} from '../components';
import {LoginText} from '../texts';
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

const LoginBox = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    width: 100vw;
    animation: ${fadeIn} 2s ease-in 1;
`;


class Login extends Component {

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
        const profile = {
            email,
            pwd
        };

        if(email === '' || pwd === ''){
            this.props.notifyMsg("login fail", types.ERROR_MSG);
        }
        else{
            this.props.Login(profile, async () => {
                await this.props.history.push("/dashboard");
            });
        }
    };

    handleRouteToRegister = async e => {
        await e.preventDefault();
        await this.props.history.push("/register");
    };

    render() {
        const staticText = tools.checkLanguage(LoginText);
        const { email,  pwd} = this.state;
        const { handleSubmit, handleChange, handleRouteToRegister } = this;

        return (
            <Container fluid className="p-0" style={{
                backgroundImage: `url(${Background})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                minHeight: '100vh'
            }}>

                <LoginBox>
                    <LoginForm
                        text={staticText}
                        email={email}
                        pwd={pwd}
                        handleSubmit={handleSubmit}
                        handleChange={handleChange}
                        handleRouteToRegister={handleRouteToRegister}
                    />
                </LoginBox>

            </Container>
        );
    }
}

const mapStateToProps = ({lang, notify}) => {
    return {
        lang,
        notify
    }
};

export default connect(mapStateToProps, action)(Login);