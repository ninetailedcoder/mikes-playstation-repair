import { Col, Container, Row } from "reactstrap";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { apiKey } from "../components/config";
import { Form } from "react-bootstrap";


const Contact = () => {
  return (
    <Container fluid>
      <Row>
        <Header />
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
                src={`https://www.google.com/maps/embed/v1/place?q=275+4TH+STREET+E%2C+SAINT+PAUL%2C+MN+55101&key=${apiKey}`}
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
      <Row style={{margin: '20px 20px'}}>
        <h2>shipping</h2>
        <hr/>
        <p className="text-start">If you would like to ship your system/console to us, please complete the following list.</p>
        <ol className="text-start">
          <li>Download,Print,Fill out, and email the signed form: <b>no repairs can or will be done until we have this form. </b></li>
          <li>Fill out the form below to give us the details of your issue; Then wait to here back from us before sending in your console</li>
          <li>Ship your system to: <br />
            Mikes PS3/4 Repair <br />
            829 7th Street E. <br />
            St. Paul, MN 55106</li>
        </ol>
        <p className="text-start"><b>There is a $20.00 return shipping charge and all repairs take about 5 to 7 business days.</b></p>
      </Row>
      <Row>
        <Form className="text-start" style={{margin: '20px 20px'}}>
          <Form.Group className="mb-3" controlId="name">
            <Form.Label htmlFor="name">Name</Form.Label>
            <Form.Control type="text" placeholder="Name" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="email">
            <Form.Label htmlFor="email">Email address</Form.Label>
            <Form.Control type="email" placeholder="Email"/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="phone">
            <Form.Label htmlFor="phone">Phone Number</Form.Label>
            <Form.Control type="tel" placeholder="Phone Number"/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="contact">
            <Form.Label htmlFor="contact">What is your preferred method of contact?</Form.Label>
            <Form.Control as="select">
              <option>Phone</option>
              <option>Email</option>
            </Form.Control>
          </Form.Group>
          <Form.Group className="mb-3" controlId="payment">
            <Form.Label htmlFor="payment">What is your preferred method of payment?</Form.Label>
            <Form.Control as="select">
              <option>Cash</option>
              <option>Credit Card</option>
              <option>Paypal</option>
              <option>Cryptocurrency</option>
            </Form.Control>
          </Form.Group>  
          <Form.Group className="mb-3" controlId="textarea">
            <Form.Label htmlFor="textarea">Describe the issue with your console.</Form.Label>
            <Form.Control as="textarea" rows={3} />
          </Form.Group>
          <button className='btn btn-primary btn-md service-button btn-outline-dark text-black rounded-pill px-4' style={{ border: '2px solid black', width: '120px', backgroundColor:'red' }}>Submit</button>
        </Form> 
      </Row>
      <Row>
        <Footer />
      </Row>
    </Container>
  );
};

export default Contact;
