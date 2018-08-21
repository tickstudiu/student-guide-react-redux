import React, { Component } from "react";
import { connect } from 'react-redux';
import * as tools from '../utils';
import * as actions from '../redux/actions';

import { DashNavbar, Navbar, OverViewMedia, UserMedia } from '../components';
import { Container, Row, Col } from 'reactstrap';
import { DashText } from "../texts";

class Dashboard extends Component {
    componentDidMount() {
        this.props.fetchOverView();
    };


    render() {
        const { overviewStu } = this.props.overview;
        const lang = tools.getLanguage();
        const staticText = tools.checkLanguage(lang, DashText);

        return (
            <Container fluid>
                <Row>
                    <Col md="2" className="px-0">
                        <DashNavbar staticText={staticText}/>
                    </Col>
                    <Col className="px-0">
                        <Navbar/>

                        <Row className="m-0 p-4">
                            <Col>
                                <h5>{staticText.today}</h5>
                                <OverViewMedia mediaList={overviewStu}/>
                            </Col>
                        </Row>
                        <Row className="m-0 p-4">
                            <Col md="9">
                                <h5>Users</h5>
                                <UserMedia/>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        )
    }
}

const mapStateToProps = ({lang, overview}) => {
    return {
        lang,
        overview,
    }
};

export default connect(mapStateToProps, actions)(Dashboard);