import React, { Component } from "react";
import { connect } from 'react-redux';
import * as tools from '../utils';
import * as actions from '../redux/actions';

import { DashNavbar, Navbar, OverViewMedia, UserMedia } from '../components';
import { Container, Row, Col } from 'reactstrap';
import { DashText } from "../texts";

class Dashboard extends Component {

    componentDidMount() {
        this.props.fetchStudentGuide();
        this.props.fetchOverView();
    };

    render() {
        const { studentGuideList } = this.props.guide;
        const { overviewStudentList } = this.props.overview;

        const staticText = tools.checkLanguage(DashText);
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
                                <h5>{staticText.toDay}</h5>
                                <OverViewMedia mediaList={overviewStudentList}/>
                            </Col>
                        </Row>
                        <Row className="m-0 p-4">
                            <Col md="9">
                                <h5>Users</h5>
                                {
                                    studentGuideList.map((data, index) => {
                                        return <UserMedia data={data} key={index} highlight={data.highlight} />
                                    })
                                }
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        )
    }
}

const mapStateToProps = ({lang, overview, guide}) => {
    return {
        lang,
        overview,
        guide,
    }
};

export default connect(mapStateToProps, actions)(Dashboard);