import React, { Component } from 'react';
import { Nav, NavLink, Badge } from 'reactstrap';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell, faSlidersH, faCommentDots } from '@fortawesome/free-solid-svg-icons'
import styled from 'styled-components';

library.add(faBell, faSlidersH, faCommentDots);

const EmptyBox = styled.div`
  height: 64px;
  width: 0;
`;

class Navbar extends Component{
    render() {
        return (
            <Nav className="justify-content-end align-items-center shadow">
                <NavLink><EmptyBox/></NavLink>

                <NavLink href="#" className="border rounded-circle position-relative mr-3 text-dark">
                    <FontAwesomeIcon icon="comment-dots"/>
                    <Badge color="danger" className="position-absolute" style={{top: '-5px',right: '-5px'}}>1</Badge>
                </NavLink>

                <NavLink href="#" className="border rounded-circle position-relative mr-3 text-dark">
                    <FontAwesomeIcon icon="bell"/>
                    <Badge color="danger" className="position-absolute" style={{top: '-5px',right: '-5px'}}>4</Badge>
                </NavLink>

                <NavLink href="#" className="border rounded-circle position-relative mr-3 text-dark">
                    <FontAwesomeIcon icon="sliders-h"/>
                </NavLink>

            </Nav>
        )
    }
}

export default Navbar;

