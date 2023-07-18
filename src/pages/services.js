import { Container, Row } from "reactstrap";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Services= () => {
    return (
        <Container fluid>
            <Row>
                <Header />
            </Row>
            <Row>
                <h1>Services</h1>
            </Row>
            <Row>
                <Footer />
            </Row>
        </Container>
    )
}

export default Services;