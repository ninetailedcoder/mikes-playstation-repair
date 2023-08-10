import { Container, Row } from "reactstrap";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Form } from "react-bootstrap";
import Successmodal from "../components/modal";
import { useState } from "react";

const Services= () => {
    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);

    const [issue, setIssue] = useState("option1");
    const [date, setDate] = useState(new Date().toISOString());
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [contactMethod, setContactMethod] = useState("Phone");
    const [details, setDetails] = useState("");


    const resetForm = () => {
        setIssue("option1");
        setDate(new Date().toISOString());
        setPhone("");
        setEmail("");
        setContactMethod("Phone");
        setDetails("");
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        toggle();

    };
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
        <Form.Control as="select" value={issue} onChange={(e) => setIssue(e.target.value)}>
          <option value='option1'>What can we fix for you?</option>
          <option value='option2'>YLOD(Yellow Light Of Death)</option>
          <option value='option3'>HDMI</option>
          <option value='option3'>Bluray / Disk Drive</option>
          <option value='option4'>Power Supply</option>
          <option value='option5'>Other</option>
        </Form.Control>
        </Form.Group>
      <Form.Group className="mb-5 mt-5 text-start" controlId="Date">
        <Form.Label htmlFor="Date">Date Available</Form.Label>
        <Form.Control type="date" value={date} onChange={(e) => setDate(e.target.value)} />
      </Form.Group>
      <Form.Group className="mb-5 text-start" controlId="phone">
        <Form.Label htmlFor="phone">Phone Number</Form.Label>
        <Form.Control type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Phone Number"/>
      </Form.Group>
      <Form.Group className="mb-5 text-start" controlId="email">
        <Form.Label htmlFor="email">Email address</Form.Label>
        <Form.Control type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email"/>
      </Form.Group>
      <Form.Group className="mb-5 text-start" controlId="contactMethod">
        <Form.Label htmlFor="contactMethod">What is your preferred method of contact?</Form.Label>
        <div>
          <Form.Check
            inline
            type="radio"
            label="Phone"
            name="contactMethod"
            value="Phone"
            checked={contactMethod === "Phone"}
            onChange={(e) => setContactMethod(e.target.value)}
          />
          <Form.Check
            inline
            type="radio"
            label="Email"
            name="contactMethod"
            value="Email"
            checked={contactMethod === "Email"}
            onChange={(e) => setContactMethod(e.target.value)}
          />
          {/* You can add more radio buttons for other contact methods if needed */}
        </div>        
      </Form.Group>
      <Form.Group className="mb-5 text-start" controlId="Details">
        <Form.Label htmlFor="Details">Additional Details</Form.Label>
        <Form.Control as="textarea" rows={5} value={details} onChange={(e) => setDetails(e.target.value)} />
      </Form.Group>
    </Form>
            </Row>
            <Row>
               {/* creat submit button that opens the model when pressed */}
                <button className='btn btn-danger btn-md service-button btn-outline-dark text-black rounded-pill' style={{ border: '2px solid black', width: '120px' }} onClick={handleSubmit}>Submit</button>
                <Successmodal isOpen={modal} toggle={toggle} resetForm={resetForm} />


            </Row>
            <Row>
                <Footer />
            </Row>
        </Container>
    )
}

export default Services;