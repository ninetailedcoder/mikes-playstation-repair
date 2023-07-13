/* header */

import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import Logo from '../assets/imgs/Company Logo.jpg';
import Navigation from '../components/navigation'  

const Header = () => (
    <Container fluid>
        <Row>
            <Col className='logo-container' xs={6} lg={2} >
                <img className="companyLogo" src={Logo} alt="Company Logo" />
            </Col>
            <Col className="d-flex justify-content-center" lg={8}>
                <Navigation />
            </Col>
            <Col className="mt-5" lg={2}>
                <h4><i className="fa-solid fa-right-to-bracket fa-sm" /> Login</h4>
            </Col>
        </Row>
    </Container>
);

export default Header;

