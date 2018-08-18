import React, { Component } from 'react';
import { Nav, NavLink } from 'reactstrap';
import {library} from '@fortawesome/fontawesome-svg-core'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faHome} from '@fortawesome/free-solid-svg-icons'

library.add(faHome);

class SideNavbar extends Component{
    render(){
        return(
            <Nav vertical className="px-3">
                <NavLink href="#" className="text-uppercase text-white bg-dark p-3 mb-3">
                    <FontAwesomeIcon icon="home" className="mr-4"/>dashboard
                </NavLink>
            </Nav>
        )
    }
}

export default SideNavbar;

