import { Col, Container, Row } from "react-bootstrap";
import Footer from "../Footer";
import Analisi from "./Analisi";
import Risorse from "./Risorse";
import Attivita from "./Attivita";
import Esperienza from "./Esperienza";
import Formazione from "./Formazione";
import Competenze from "./Competenze";
import Interessi from "./Interessi";
import SideProfileInfo from "./SideProfileInfo";
import OtherProfiles from "./OtherProfiles";
import PeopleWhoMightKnow from "./PeopleWhoMightKnow";
import Interests from "./Interests";
import ProfileBigCard from "./profileSubComponents/ProfileBigCard";

const ProfilePage = () => {
    return (
        <Container id="profilePageContainer">
            <Row>
                {/* COLONNA SX */}
                <Col xs={12} md={6} lg={8}>
                    <Row xs={1}>
                        <Col><ProfileBigCard/></Col>
                        <Col><Analisi/></Col>
                        <Col><Risorse/></Col>
                        <Col><Attivita/></Col>
                        <Col><Esperienza/></Col>
                        <Col><Formazione/></Col>
                        <Col><Competenze/></Col>
                        <Col><Interessi/></Col>
                    </Row>
                </Col>
                {/* FINE COLONNA SX */}

                {/* COLONNA DX */}
                <Col xs={12} md={6} lg={4}>
                    <Row xs={1}>
                        <Col><SideProfileInfo/></Col>
                        <Col><OtherProfiles/></Col>
                        <Col><PeopleWhoMightKnow/></Col>
                        <Col><Interests/></Col>
                    </Row>
                </Col>
                {/* FINE COLONNA DX */}
            </Row>
            <Footer/>
        </Container>
    )
}

export default ProfilePage;