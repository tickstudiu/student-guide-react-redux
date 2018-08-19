import React, { Component } from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';
import {library} from '@fortawesome/fontawesome-svg-core'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faHome, faFlag} from '@fortawesome/free-solid-svg-icons'

library.add(faHome, faFlag);

class SideNavbar extends Component{
    render(){
        const { staticText } = this.props;

        return(
            <Nav vertical pills className="px-3">
                <NavItem>
                    <NavLink active href="#" className="text-uppercase p-3 mb-3 bg-white text-dark">
                        <FontAwesomeIcon icon="home" className="mr-4"/>{staticText.dashboard}
                    </NavLink>
                </NavItem>

                <NavItem>
                    <NavLink href="#" className="text-uppercase text-white p-3 mb-3">
                        <FontAwesomeIcon icon="flag" className="mr-4"/>{staticText.myTour}
                    </NavLink>
                </NavItem>

            </Nav>
        )
    }
}

export default SideNavbar;

