import { Container, Row } from "reactstrap";
import Header from "../components/Header";
import Footer from "../components/Footer";

const About= () => {
    return (
        <Container fluid>
            <Row>
                <Header />
            </Row>
            <Row>
                <h1>About</h1>
            </Row>
            <Row>
                <Footer />
            </Row>
        </Container>
    )
}

export default About;