import { Col, Container, Row } from "reactstrap";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { apiKey } from "../components/config";


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
        <Footer />
      </Row>
    </Container>
  );
};

export default Contact;
