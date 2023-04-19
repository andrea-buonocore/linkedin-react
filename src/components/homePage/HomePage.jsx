import { Col, Container, Row } from "react-bootstrap"
import CreazionePost from "./ColonnaCentrale/creazionePost"

const HomePage = () => {
    return (
        <Container className="pageContainer">
            <Row>
                <Col xs={12} md={2}></Col>
                <Col xs={12} md={7}>
                    <Row xs={1}>
                        <Col><CreazionePost /> </Col>
                    
                    </Row>
                </Col>
                <Col xs={12} md={3}></Col>
            </Row>
        </Container>
    )
}

export default HomePage