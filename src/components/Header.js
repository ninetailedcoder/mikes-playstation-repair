import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import Logo from '../assets/imgs/Company Logo.jpg';
import Navigation from '../components/navigation';

const Header = () => (
  <Container fluid>
    <Row className="align-items-center" style={{ height: '100%', backgroundColor: 'blue' }}>
      <Col className='logo-container' xs={6} lg={2}>
        <img className="companyLogo " src={Logo} alt="Company Logo" />
      </Col>
      <Col className="d-flex justify-content-center" lg={8}>
        <Navigation />
      </Col>
      <Col className="d-flex justify-content-end align-items-center" lg={2}>
        <button className='btn btn-secondary btn-md service-button btn-outline-dark text-white rounded-pill px-4 bg-transparent' style={{ border: '2px solid white', width: '120px', marginRight: '20px' }}>
          <i className="fa-solid fa-right-to-bracket fa-sm" /> Login
        </button>
      </Col>
    </Row>
  </Container>
);

export default Header;
