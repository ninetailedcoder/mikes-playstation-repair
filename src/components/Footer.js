/*footer*/
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import Logo from '../assets/imgs/Company Logo.jpg';

const Footer = () => (
    <footer className="footer-container-fluid text-white" style={{backgroundColor: 'gray'}}>
        <Row>
            <Col className='logo-container d-flex flex-column' xs={6} lg={2} >
                <img className="companyLogo mb-2" src={Logo} alt="Company Logo" />
                <h6 style={{paddingLeft: '30px'}}>Mike & Mike's PlayStation Repair</h6>
                <p style={{paddingLeft: '30px'}}>Serving Minnesota, WI, SD</p>
            </Col>
            <Col className="d-flex justify-content-center mt-5" lg={8}>
                <NavLink className="nav-link" to="/">Home</NavLink>
                <NavLink className="nav-link" to="/about">About</NavLink>
                <NavLink className="nav-link" to="/contact">Contact</NavLink>
            </Col>
            <Col className="d-flex flex-column justify-content-center align-items-center" lg={2}>
                <h6>Location</h6>
                <p>275 4TH STREET E, SAINT PAUL, MN 55101</p>
                <a role='button' style={{color: 'black'}} className='btn btn-link' href='tel:+16124620857' >(612) 462-0857</a>
            </Col>
        </Row>
    </footer>
);


export default Footer;