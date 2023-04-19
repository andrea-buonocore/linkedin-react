import { Col, Container, Row } from "react-bootstrap"

const HomePage = () => {
    return (
        <Container>
            <Row>
                <Col xs={12} md={2}></Col>
                <Col xs={12} md={7}></Col>
                <Col xs={12} md={3}></Col>
            </Row>
        </Container>
    )
}

export default HomePage