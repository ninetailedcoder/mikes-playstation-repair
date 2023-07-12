import {Row, Col, Container, Navbar, NavbarToggler} from 'reactstrap'
//import {NavLink} from 'react-router-dom'
import Logo from '../assets/imgs/Company Logo.jpg'
import Navigation from '../components/navigation'
import { useState } from 'react';
import ps3ps4 from '../images/ps3-ps4.png'

const Home = () => {
    const [selectedOption, setSelectedOption] = useState(''); // State to track the selected option

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };
    return (
        <Container>
            <Row>
                <Col className='logo-container' xs={6} lg={2} >
                    <img className="companyLogo" src={Logo} alt="Company Logo" />
                </Col>
                <Col className="d-flex justify-content-center" lg={8}>
                    <Navigation />
                </Col>
                <Col className="mt-4" lg={2}>
                    <h4><i className="fa-solid fa-right-to-bracket fa-sm" /> Login</h4>
                </Col>
            </Row>
            <Row className='mt-2 banner-row'>
                <Col xs="auto">
                </Col>
                <Col>
                </Col>
                <Col xs='auto' className="d-flex justify-content-end align-items-end">
                    <select className="form-select form-select-lg custom-mb" value={selectedOption} onChange={handleOptionChange}>
                        <option value="">What can we fix for you?</option>
                        <option value="option1">YLOD(Yellow light of death)</option>
                        <option value="option2">HDMI Repair</option>
                        <option value="option3">Bluray / Disk drive</option>
                        <option value="option3">Power Supply</option>
                        <option value="option3">Bluray / Disk drive</option>
                        <option value="option3">Other</option>
                    </select>
                </Col>
            </Row>
            <Row className='mt-2 rounded' style={{backgroundColor: 'red'}}>
                <Col lg={5} className='d-flex justify-content-start mt-4'>
                    <h2> Why work with us ! </h2>
                </Col>
                <Col lg={5}>
                </Col>
                <Col lg={5} className='d-flex justify-content-start'>
                    <p>Mike has been repairing ps3 since thier initial release date not only that mike has owned every generartion of playstation so his knowlege of the consoleds is unmatched in the twin cities</p>
                </Col>
                <Col lg={6}>
                    <img src={ps3ps4} alt="ps3 and ps4" />
                </Col>
                <Col lg={12}>
                    <button className='btn btn-primary btn-lg d-flex justify-content-start service-button'>services</button>
                </Col>
            </Row>
            <Row>
                <Col>
                    <h2>reason 1</h2>
                    <p>We're the second oldest repair shop in the twin cities but we are the #1 rated repair shop in the twin cities</p>
                </Col>
                <Col>
                    <h2>reason 2</h2>
                    <p>No need to send your playstaion to sony for 5 to 6 weeks only to loose your original system with a referbished unit</p>
                </Col>
                <Col>
                    <h2>reason 3</h2>
                    <p>We can repair the infamous HDMI problem with broken/bent pins</p>
                </Col>
                <Col>
                    <h2>reason 4</h2>
                    <p>99.9% success rate for YLOD ( Yellow light of death )</p>
                </Col>
            </Row>
            <Row>
                <Col>
                    <h2>ps3 repair services</h2>
                    <p>Mike has been repairing ps3 since thier initial release date not only that mike has owned every generartion of playstation so his knowlege of the consoleds is unmatched in the twin cities</p>
                </Col>
                <Col>
                    <h2>ps3 repair image</h2>
                </Col>
            </Row>
            <Row>
                <Col>
                    <h2>ps4 repair image</h2>
                </Col>
                <Col>
                    <h2>ps4 repair image</h2>
                    <p>Here all we repair is playstaions and playstations only so the knowlege here is bar none the best in the local industry</p>
                </Col>
            </Row>
            <Row>
                <Col>
                    <h2>Footer</h2>
                </Col>
            </Row>
        </Container>
    )
}

export default Home