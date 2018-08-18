import React, { Component } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSignInAlt } from '@fortawesome/free-solid-svg-icons'
import { Nav, NavLink} from 'reactstrap';

library.add(faSignInAlt);

class LoginNavbar extends Component{
    render(){
        const { SignIn } = this.props.text;

        return(
            <Nav className="justify-content-end position-fixed fixed-top bg-dark">
                <NavLink href="#" className="text-white">{SignIn} <FontAwesomeIcon icon="sign-in-alt"/></NavLink>
            </Nav>
        )
    }
}

export default LoginNavbar;