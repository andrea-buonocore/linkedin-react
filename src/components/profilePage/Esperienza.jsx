import { Card, Col, Row } from "react-bootstrap";

const Esperienza = () => {
    return (
        <Card  className="mb-3">
            <Card.Body>
                <div className="d-flex justify-content-between">
                    <Card.Title>Esperienza</Card.Title>
                    <div>
                        <i className="bi bi-plus-lg px-3"></i>
                        <i className="bi bi-pencil"></i>
                    </div>
                </div>

                {/* INIZIO SINGOLA ESPERIENZA */}
                <Card className="my-3 insideCards">
                    <Row>
                        <Col xs={3} lg={1} >
                            <Card.Img className="rounded rounded-0" variant="top" src="http://placekitten.com/50" />
                        </Col>
                        <Col>
                            <Card.Body className="p-0">
                                <p className="fw-bold m-0">Professione</p>
                                <p className="m-0">AZIENDA</p>
                                <small className="text-muted">data inizio - data fine</small>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab commodi dignissimos, corrupti veniam explicabo mollitia...</p>
                            </Card.Body>
                        </Col>
                    </Row>
                </Card>
                {/* FINE SINGOLA ESPERIENZA */}
                <hr className="my-4" />
                {/* INIZIO SINGOLA ESPERIENZA */}
                <Card className="insideCards">
                    <Row>
                        <Col xs={3} lg={1} >
                            <Card.Img className="rounded rounded-0" variant="top" src="http://placekitten.com/50" />
                        </Col>
                        <Col>
                            <Card.Body className="p-0">
                                <p className="fw-bold m-0">Professione</p>
                                <p className="m-0">AZIENDA</p>
                                <small className="text-muted">data inizio - data fine</small>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab commodi dignissimos, corrupti veniam explicabo mollitia...</p>
                            </Card.Body>
                        </Col>
                    </Row>
                </Card>
                {/* FINE SINGOLA ESPERIENZA */}
                <hr className="my-4" />
                {/* INIZIO SINGOLA ESPERIENZA */}
                <Card className="insideCards">
                    <Row>
                        <Col xs={3} lg={1} >
                            <Card.Img className="rounded rounded-0" variant="top" src="http://placekitten.com/50" />
                        </Col>
                        <Col>
                            <Card.Body className="p-0">
                                <p className="fw-bold m-0">Professione</p>
                                <p className="m-0">AZIENDA</p>
                                <small className="text-muted">data inizio - data fine</small>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab commodi dignissimos, corrupti veniam explicabo mollitia...</p>
                            </Card.Body>
                        </Col>
                    </Row>
                </Card>
                {/* FINE SINGOLA ESPERIENZA */}
            </Card.Body>
        </Card>
    )
}

export default Esperienza;