import { Row, Col, Container, Navbar, NavbarToggler } from "reactstrap";
//import {NavLink} from 'react-router-dom'
import Logo from "../assets/imgs/Company Logo.jpg";
import Navigation from "../components/navigation";
import { useState } from "react";
import ps3ps4 from "../images/ps3-ps4.png";
import stockphoto1 from "../assets/imgs/stock photo 1.jpg";
import stockphoto2 from "../assets/imgs/stock photo 2.jpg";
import stockphoto3 from "../assets/imgs/stock photo 3.jpg";
import stockphoto4 from "../assets/imgs/stock photo 4.jpg";
import stockphoto5 from "../images/stockplaystation4.webp";
import Footer from "../components/Footer";
import Header from "../components/Header";

const Home = () => {
  const [selectedOption, setSelectedOption] = useState(""); // State to track the selected option

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };
  return (
    <Container fluid>
      <Row style={{ backgroundColor: "blue",height: '80px' }}  className="text-white align-items-center">
        <Header />
      </Row>
      <Row className="mt-5 banner-row">
        <Col xs="auto"></Col>
        <Col></Col>
        <Col xs="auto" className="d-flex justify-content-end align-items-end">
          <select
            className="form-select form-select-lg custom-mb"
            value={selectedOption}
            onChange={handleOptionChange}
          >
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
      <Row className="mt-2 pt-4" style={{ backgroundColor: "red" }}>
        <Col lg={6} className="d-flex flex-column text-start funfact">
          <h2>Repairs while you wait!</h2>
          <p>
            Mike has been repairing PS3 & PS4's since their initial release date. Not
            only that, Mike has owned every generation of PlayStation, <b>so his
            knowledge of the consoles is unmatched in the Twin Cities!</b>
          </p>
          <div className="d-flex justify-content-start">
            <button className='btn btn-secondary btn-md service-button btn-outline-dark text-black rounded-pill px-4 bg-transparent' style={{ border: '2px solid black', width: '120px' }}>services</button>
          </div>
        </Col>
        <Col lg={5}>
          <img src={ps3ps4} alt="ps3 and ps4" />
        </Col>
      </Row>

      <Row className="mt-5">
        <Col lg={12} className="mb-2">
          <h2>Why work with us!</h2>
        </Col>
      </Row>
      <Row className="mt-5">
        <Col >
          <img
            src={stockphoto3}
            alt="repair photo 3"
            className="stockphoto rounded"
          />
          <p>
            We're the second oldest repair shop in the twin cities but we are
            the #1 rated repair shop in the twin cities
          </p>
        </Col>
        <Col>
          <img
            src={stockphoto2}
            alt="repair photo 2"
            className="stockphoto rounded"
          />
          <p>
            No need to send your playstaion to sony for 5 to 6 weeks only to
            loose your original system with a referbished unit
          </p>
        </Col>
        <Col>
          <img
            src={stockphoto1}
            alt="repair photo 1"
            className="stockphoto rounded"
          />
          <p>We can repair the infamous HDMI problem with broken/bent pins</p>
        </Col>
        <Col>
          <img
            src={stockphoto4}
            alt="repair photo 4"
            className="stockphoto rounded"
          />
          <p>99.9% success rate for YLOD ( Yellow light of death )</p>
        </Col>
      </Row>
      <Row className="mt-5 text-white" style={{ backgroundColor: "black" }}>
        <Col>
          <img
            src={stockphoto5}
            alt="stock playstation 4"
            className="stockplaystaion rounded"
          />
        </Col>
        <Col className="mt-5">
          <p>
            Here all we repair is playstaions and playstations only so the
            knowlege here is bar none the best in the local industry
          </p>
        </Col>
      </Row>
      <Row>
        <Footer />
      </Row>
    </Container>
  );
};

export default Home;
