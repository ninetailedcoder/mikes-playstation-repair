import {Row, Col, Container, Navbar, NavbarToggler} from 'reactstrap'
//import {NavLink} from 'react-router-dom'
import Logo from '../assets/imgs/Company Logo.jpg'
import Navigation from '../components/navigation'
const Home = () => {
    return (
        <Container>
            <Row>
                <Col className='logo-container' xs={6} lg={8} >
                    <img className="companyLogo" src={Logo} alt="Company Logo" />
                    <div>
                        <p>Mike and Mikes Playstation Repair </p>
                        <hr />
                        <p>Servicing MN, WI, and SD</p>
                    </div>
                </Col>
                <Col>
                    <Navigation />
                </Col>
            </Row>
            <Row>
                <Col>
                    <h2>carousel</h2>
                    <p>random information in carousel</p>
                </Col>
            </Row>
            <Row>
                <Col>
                    <h2> why work with us </h2>
                </Col>
            </Row>
            <Row>
                <Col>
                    <h2>reason 1</h2>
                    <p>We're the second oldest repair shop in the twin cities but we are the #1 rated repair shop in the twin cities</p>
                </Col>
                <Col>
                    <h2>reason 2</h2>
                    <p>No need to send your playstaion to sony for 5 to 6 weeks only to loose your original system with a referbished unit</p>
                </Col>
                <Col>
                    <h2>reason 3</h2>
                    <p>We can repair the infamous HDMI problem with broken/bent pins</p>
                </Col>
                <Col>
                    <h2>reason 4</h2>
                    <p>99.9% success rate for YLOD ( Yellow light of death )</p>
                </Col>
            </Row>
            <Row>
                <Col>
                    <h2>ps3 repair services</h2>
                    <p>Mike has been repairing ps3 since thier initial release date not only that mike has owned every generartion of playstation so his knowlege of the consoleds is unmatched in the twin cities</p>
                </Col>
                <Col>
                    <h2>ps3 repair image</h2>
                </Col>
            </Row>
            <Row>
                <Col>
                    <h2>ps4 repair image</h2>
                </Col>
                <Col>
                    <h2>ps4 repair image</h2>
                    <p>Here all we repair is playstaions and playstations only so the knowlege here is bar none the best in the local industry</p>
                </Col>
            </Row>
            <Row>
                <Col>
                    <h2>Footer</h2>
                </Col>
            </Row>
        </Container>
    )
}

export default Home