import React, { Component } from 'react';
import styled from 'styled-components';
import { SideNavbar, ProfileCard} from '../index';

const Line = styled.hr`
    margin-top: 0;
    margin-bottom: 2rem;
    padding 0;
`;

class DashNavbar extends Component{
    render(){
        return(
            <div style={{minHeight: '100vh', background: '#484d53'}}>
                <ProfileCard
                    ProfileImage="https://a3-images.myspacecdn.com/images03/1/240e42b5d9ce48a78983961e7fcb3c39/600x600.jpg"
                    ProfileName="InwZa5555"
                    ProfileDescription="Wanchalerm Suksawat."
                />
                <Line/>
                <SideNavbar/>
            </div>
        )
    }
}

export default DashNavbar;

