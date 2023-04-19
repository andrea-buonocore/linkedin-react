import { Col, Container, Row } from "react-bootstrap"
import { FooterHome } from "./FooterHome/FooterHome"

const HomePage = () => {
    return (
        <Container>
            <Row>
                <Col xs={12} md={2}></Col>
                <Col xs={12} md={7}></Col>
                <Col xs={12} md={3}><FooterHome></FooterHome> </Col>
            </Row>
        </Container>
    )
}

export default HomePage