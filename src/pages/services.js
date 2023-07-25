import { Container, Row } from "reactstrap";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Form } from "react-bootstrap";

const Services= () => {
    return (
        <Container fluid>
            <Row>
                <Header />
            </Row>
            <Row>
                <h1>Services</h1>
                <hr />
            </Row>
            <Row>
                <h3>What can we repair for you today!</h3>
            </Row>
            <Row>
                <Form>
                <Form.Group className="mb-5 text-start" controlId="issue">
            <Form.Label htmlFor="issue">Issue?</Form.Label>
            <Form.Control as="select">
                <option>What can we fix for you?</option>
              <option>YLOD(Yellow Light Of Death)</option>
              <option>HDMI</option>
                <option>Bluray / Disk Drive</option>
                <option>Power Supply</option>
                <option>Other</option>
            </Form.Control>
            <Form.Group className="mb-5 mt-5 text-start" controlId="Date">
            <Form.Label htmlFor="Date">Date Available</Form.Label>
            <Form.Control type="date" />
            </Form.Group>
            <Form.Group className="mb-5 text-start" controlId="phone">
            <Form.Label htmlFor="phone">Phone Number</Form.Label>
            <Form.Control type="tel" placeholder="Phone Number"/>
            </Form.Group>
            <Form.Group className="mb-5 text-start" controlId="email">
            <Form.Label htmlFor="email">Email address</Form.Label>
            <Form.Control type="email" placeholder="Email"/>
            </Form.Group>
            <Form.Group className="mb-5 text-start" controlId="contactMethod">
            <Form.Label htmlFor="contactMethod">What is your preferred method of contact?</Form.Label>
            <div>
              <Form.Check
                inline
                type="radio"
                label="Phone"
                name="contactMethod"
                id="phoneRadio"
              />
              <Form.Check
                inline
                type="radio"
                label="Email"
                name="contactMethod"
                id="emailRadio"
              />
              {/* You can add more radio buttons for other contact methods if needed */}
            </div>        
            </Form.Group>
          </Form.Group>
                <Form.Group className="mb-5 text-start" controlId="Details">
            <Form.Label htmlFor="Details">Additional Details</Form.Label>
            <Form.Control as="textarea" rows={5} />
            </Form.Group>
            
                </Form>
            </Row>
            <Row>
                <Footer />
            </Row>
        </Container>
    )
}

export default Services;