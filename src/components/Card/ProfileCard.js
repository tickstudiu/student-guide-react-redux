import React, { Component } from 'react';
import { Nav, NavLink } from 'reactstrap';
import styled from 'styled-components';

const ProfileImg = styled.img`
  height: 64px;
  width: 64px;
  border-radius: 50%;
`;

class ProfileCard extends Component{
    render(){
        const { ProfileImage, ProfileName, ProfileDescription } = this.props;

        return(
            <Nav className="align-items-center">
                <NavLink href="#">
                    <ProfileImg src={ProfileImage} alt={ProfileImage}/>
                </NavLink>
                <div>
                    <h5 className="text-white mb-1">{ProfileName}</h5>
                    <small className="text-white-50">{ProfileDescription}</small>
                </div>
            </Nav>
        )
    }
}

export default ProfileCard;

