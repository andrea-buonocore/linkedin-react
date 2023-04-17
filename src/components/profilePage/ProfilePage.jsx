import { Col, Container, Row } from "react-bootstrap";
import Footer from "../Footer";
import SideProfileInfo from "./SideProfileInfo";
import OtherProfiles from "./OtherProfiles";
import PeopleWhoMightKnow from "./PeopleWhoMightKnow";
import Interests from "./Interests";

const ProfilePage = () => {
    return (
        <Container id="profilePageContainer">
            <Row>
                {/* COLONNA SX */}
                <Col xs={12} md={6} lg={8}>
                    <Row xs={1}>
                        <Col>Colonna sx</Col>
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