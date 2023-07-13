/*footer*/
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import Logo from '../assets/imgs/Company Logo.jpg';

const Footer = () => (
    <footer className="footer-container-fluid text-white" style={{backgroundColor: 'blue'}}>
        <Row>
            <Col className='logo-container' xs={6} lg={2} >
                <img className="companyLogo" src={Logo} alt="Company Logo" />
            </Col>
            <Col className="d-flex justify-content-center mt-5" lg={8}>
                <NavLink className="nav-link" to="/home">Home</NavLink>
                <NavLink className="nav-link" to="/about">About</NavLink>
                <NavLink className="nav-link" to="/contact">Contact</NavLink>
            </Col>
            <Col className="mt-5" lg={2}>
                <h4><i className="fa-solid fa-right-to-bracket fa-sm" /> Login</h4>
            </Col>
        </Row>
    </footer>
);


export default Footer;