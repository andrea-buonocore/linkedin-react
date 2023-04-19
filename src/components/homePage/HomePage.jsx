import { Col, Container, Row } from "react-bootstrap"
import HomeProfile from "./ColonnaSinistra/HomeProfile"

const HomePage = () => {
    return (
        <Container className="pageContainer">
            <Row>
                <Col xs={12} md={2}>
                    <HomeProfile/>
                </Col>
                <Col xs={12} md={7}></Col>
                <Col xs={12} md={3}></Col>
            </Row>
        </Container>
    )
}

export default HomePage