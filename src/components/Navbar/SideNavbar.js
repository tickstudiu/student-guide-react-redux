import React, { Component } from 'react';
import { Nav, NavLink } from 'reactstrap';

class SideNavbar extends Component{
    render(){
        return(
            <Nav vertical className="px-3">
                <NavLink href="#" className="text-uppercase text-dark bg-white p-3">
                    Link
                </NavLink>
                <NavLink href="#">Link</NavLink>
                <NavLink href="#">Another Link</NavLink>
                <NavLink disabled href="#">Disabled Link</NavLink>
            </Nav>
        )
    }
}

export default SideNavbar;

