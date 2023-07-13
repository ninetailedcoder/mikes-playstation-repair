import {Row, Col, Container, Navbar, NavbarToggler} from 'reactstrap'
//import {NavLink} from 'react-router-dom'
import Logo from '../assets/imgs/Company Logo.jpg'
import Navigation from '../components/navigation'
import { useState } from 'react';
import ps3ps4 from '../images/ps3-ps4.png'
import stockphoto1 from '../assets/imgs/stock photo 1.jpg';
import stockphoto2 from '../assets/imgs/stock photo 2.jpg';
import stockphoto3 from '../assets/imgs/stock photo 3.jpg';
import stockphoto4 from '../assets/imgs/stock photo 4.jpg';
import stockphoto5 from '../images/stockplaystation4.webp'
import Footer from '../components/Footer'

const Home = () => {
    const [selectedOption, setSelectedOption] = useState(''); // State to track the selected option

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };
    return (
        <Container fluid>
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
            <Row className='mt-5 banner-row'>
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
                    <h2> Fun Fact! </h2>
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
                    <button className='btn btn-primary btn-lg d-flex justify-content-start service-button bg-black text-white'>services</button>
                </Col>
            </Row>
            <Row className='mt-5'>
                <Col lg={12} className='mb-2'>
                    <h2>Why work with us!</h2>
                </Col>
                <Col>
                    <img src={stockphoto3} alt="repair photo 3" className='stockphoto rounded'/>
                    <p>We're the second oldest repair shop in the twin cities but we are the #1 rated repair shop in the twin cities</p>
                </Col>
                <Col>
                    <img src={stockphoto2} alt="repair photo 2" className='stockphoto rounded'/>
                    <p>No need to send your playstaion to sony for 5 to 6 weeks only to loose your original system with a referbished unit</p>
                </Col>
                <Col>
                    <img src={stockphoto1} alt="repair photo 1" className='stockphoto rounded'/>
                    <p>We can repair the infamous HDMI problem with broken/bent pins</p>
                </Col>
                <Col>
                    <img src={stockphoto4} alt="repair photo 4" className='stockphoto rounded'/>
                    <p>99.9% success rate for YLOD ( Yellow light of death )</p>
                </Col>
            </Row>
            <Row className='mt-5 text-white rounded' style={{backgroundColor: 'black'}}>
                <Col>
                    <img src={stockphoto5} alt="stock playstation 4" className='stockplaystaion rounded'/>
                </Col>
                <Col className='mt-5'>
                    <p>Here all we repair is playstaions and playstations only so the knowlege here is bar none the best in the local industry</p>
                </Col>
            </Row>
            <Row>
               <Footer />
            </Row>
        </Container>
    )
}

export default Home