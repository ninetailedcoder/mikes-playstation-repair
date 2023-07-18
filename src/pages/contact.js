import { Col, Container, Row } from "reactstrap";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const Contact = () => {
  return (
    <Container fluid>
      <Row>
        <Header />
      </Row>
      <Row>
        <h1>Contact</h1>
      </Row>
      <Row>
        <h2 style={{marginLeft: '20px'}} className="d-flex align-item-left">Contact us</h2>
        <hr/>
      </Row>
      <Row>
        <Col>
            <h3>Our Address</h3>
            <p>275 4TH STREET E, SAINT PAUL, MN 55101</p>
            <div>
            <iframe
                title="Map"
                width="600"
                height="250"
                frameborder="0"
                style={{ border: 0 }}
                src={`https://www.google.com/maps/embed/v1/place?q=275+4TH+STREET+E%2C+SAINT+PAUL%2C+MN+55101&key=AIzaSyAgaalscUq8MacRHUVinXDHOd4J4msye14`}
                allowfullscreen
            ></iframe>
            </div>
        </Col>
        <Col style={{marginTop: '150px'}}>
            <a role='button' style={{color: 'black'}} className='btn btn-link' href='tel:+16124620857' ><i className="fa-solid fa-phone" />
 (612) 462-0857</a> <br />
            <a role='button' style={{color: 'black'}} className='btn btn-link' href='email: mikesPSRepair@gmail.com'><i className="fa-solid fa-envelope" /> mikesPSRepair@gmail.com</a>
        </Col>
      </Row>
      <Row>
        <Footer />
      </Row>
    </Container>
  );
};

export default Contact;
