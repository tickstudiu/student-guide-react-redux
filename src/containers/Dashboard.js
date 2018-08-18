import React, {Component} from "react";
import {connect} from 'react-redux';
import * as tools from '../utils';
import * as actions from '../redux/actions';
import { DashText } from "../texts";
import { DashNavbar, Navbar } from '../components';
import { Container, Row, Col } from 'reactstrap';

class Dashboard extends Component{

    render(){
        const lang = tools.getLanguage();
        const staticText = tools.checkLanguage(lang, DashText);

        return(
            <Container fluid>
                <Row>
                    <Col md="3" className="px-0">
                        <DashNavbar/>
                    </Col>
                    <Col className="px-0">
                        <Navbar/>

                        <div className="p-4">
                            <Row>
                                <Col>
                                    content
                                </Col>
                            </Row>
                        </div>

                    </Col>
                </Row>
            </Container>
        )
    }
}

const mapStateToProps = ({hello, lang}) => {
    return {
        lang,
        hello,
    }
};

export default connect(mapStateToProps, actions)(Dashboard);