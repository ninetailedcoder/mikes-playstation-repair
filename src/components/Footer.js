/*footer*/
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import Logo from '../assets/imgs/Company Logo.jpg';

const Footer = () => (
    <footer className="footer-container-fluid text-black" style={{backgroundColor: 'gray'}}>
        <Row>
            <Col className='logo-container d-flex flex-column' xs={6} md={3} lg={2} >
                <img className="companyLogo mb-2" src={Logo} alt="Company Logo" />
                <h6 style={{paddingLeft: '30px'}}>Mike & Mike's PlayStation Repair</h6>
                <p style={{paddingLeft: '30px'}}>Serving Minnesota, WI, SD</p>
            </Col>
            <Col className="d-flex justify-content-center mt-5 flex-column" xs={6} md={6} lg={8}>
                <h3 className='text-decoration-underline'>Links</h3> 
                <NavLink style={{marginLeft: '30px'}} className="nav-link" to="/">Home</NavLink>
                <NavLink style={{marginLeft: '30px'}} className="nav-link" to="/about">About</NavLink>
                <NavLink style={{marginLeft: '30px'}} className="nav-link" to="/contact">Contact</NavLink>
            </Col>
            <Col className="d-flex flex-column justify-content-center align-items-center" md={3} lg={2}>
                <h6>Location</h6>
                <p>275 4TH STREET E, SAINT PAUL, MN 55101</p>
                <a role='button' style={{color: 'black'}} className='btn btn-link' href='tel:+16124620857' >(612) 462-0857</a>
                <a role='button' style={{color: 'black'}} className='btn btn-link' href='email: mikesPSRepair@gmail.com'> mikesPSRepair@gmail.com</a>
            </Col>
        </Row>
    </footer>
);


export default Footer;