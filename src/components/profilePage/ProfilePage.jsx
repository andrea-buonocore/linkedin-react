import { Col, Container, Row } from "react-bootstrap";
import Footer from "../Footer";
import ProfileBigCard from "./profileSubComponents/ProfileBigCard";

const ProfilePage = () => {
    return (
        <Container id="profilePageContainer">
            <Row>
                {/* COLONNA SX */}
                <Col xs={12} md={6} lg={8}>
                    <Row xs={1}>
                        <Col><ProfileBigCard/></Col>
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