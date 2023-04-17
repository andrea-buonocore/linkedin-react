import { Col, Container, Row } from "react-bootstrap";
import Footer from "../Footer";
import Analisi from "./Analisi";
import Risorse from "./Risorse";
import Attivita from "./Attivita";
import Esperienza from "./Esperienza";
import Formazione from "./Formazione";
import Competenze from "./Competenze";

const ProfilePage = () => {
    return (
        <Container id="profilePageContainer">
            <Row>
                {/* COLONNA SX */}
                <Col xs={12} md={6} lg={8}>
                    <Row xs={1}>
                        <Col>Colonna sx</Col>
                        <Analisi/>
                        <Risorse/>
                        <Attivita/>
                        <Esperienza/>
                        <Formazione/>
                        <Competenze/>
                    </Row>
                </Col>
                {/* FINE COLONNA SX */}

                {/* COLONNA DX */}
                <Col xs={12} md={6} lg={4}>
                    <Row xs={1}>
                        <Col>Colonna dx</Col>
                    </Row>
                </Col>
                {/* FINE COLONNA DX */}
            </Row>
            <Footer/>
        </Container>
    )
}

export default ProfilePage;