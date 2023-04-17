import { Card, Row, Col, Button } from "react-bootstrap";

const Interessi = () => {
    return (
        <Card>
            <Card.Body>
                <Card.Title>Interessi</Card.Title>
                <Row className="justify-content-start">
                    <Col xs={2}>
                        <p className="m-0">Aziende</p>
                    </Col>
                    <Col>
                        <p className="m-0">Scuole e Università</p>
                    </Col>
                </Row>
                <hr />
                <Row xs={1} md={2}>
                    {/* AZIENDA */}
                    <Col>
                        <Card>
                            <Row>
                                <Col xs={3} lg={4} >
                                    <Card.Img className="rounded rounded-0" variant="top" src="http://placekitten.com/50" />
                                </Col>
                                <Col>
                                    <Card.Body className="p-0">
                                        <p className="fw-bold m-0">Azienda</p>
                                        <p className="text-muted">893473 followers</p>
                                        <Button variant="outline-secondary">
                                            <i class="bi bi-check2"></i>
                                            Già segui
                                        </Button>
                                    </Card.Body>
                                </Col>
                            </Row>
                        </Card>
                    </Col>
                    {/* FINE AZIENDA */}
                    {/* AZIENDA */}
                    <Col>
                        <Card>
                            <Row>
                                <Col xs={3} lg={4} >
                                    <Card.Img className="rounded rounded-0" variant="top" src="http://placekitten.com/50" />
                                </Col>
                                <Col>
                                    <Card.Body className="p-0">
                                        <p className="fw-bold m-0">Azienda</p>
                                        <p className="text-muted">893473 followers</p>
                                        <Button variant="outline-secondary">
                                            <i class="bi bi-check2"></i>
                                            Già segui
                                        </Button>
                                    </Card.Body>
                                </Col>
                            </Row>
                        </Card>
                    </Col>
                    {/* FINE AZIENDA */}
                </Row>
            </Card.Body>
        </Card>
    )
}

export default Interessi;