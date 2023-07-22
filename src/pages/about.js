import { Container, Row,Col } from "reactstrap";
import Header from "../components/Header";
import Footer from "../components/Footer";
import AccordionCards from "../components/accordiancards";

const About= () => {
    return (
        <Container fluid>
            <Row>
                <Header />
            </Row>
            <Row>
                <h2>Established in 2009</h2>
                <hr />
            </Row>
            <Row>
                <Col>
                    <h3>FAQs</h3>
                    <AccordionCards />
                </Col>
                <Col style={{backgroundColor: "black",margin: '200px 30px', height: '250px'}} className="d-flex flex-column text-white rounded">
                    <h3>About Mike</h3>
                    <p>
                    Mike has been repairing PS3 & PS4's since their initial release date. Not
                    only that, Mike has owned every generation of PlayStation, so his
                    knowledge of the consoles is unmatched in the Twin Cities!
                    We have a 95% success rate at repairing Playstations. Our specialty is with Playstations and only Playstations only. We are the 2nd oldest repair shop around the Twin Cities. However, our services & Google rank us #1 in Minnesota.
                    </p>
                </Col>
            </Row>
            <Row>
                <Footer />
            </Row>
        </Container>
    )
}

export default About;