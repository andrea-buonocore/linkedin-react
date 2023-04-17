import { Card, Col, Row } from "react-bootstrap";


const Analisi = () => {
    return (
        <Card>
            <Card.Body>
                <div className="mb-3">
                    <Card.Title className="m-0">Analisi</Card.Title>
                    <i class="bi bi-eye-fill"></i>
                    <span> Solo per te</span>
                </div>
                <Row>
                    {/* COL SX */}
                    <Col xs={4}>
                        <Row>
                            <Col xs={1}><i class="bi bi-people-fill"></i></Col>
                            <Col>
                                <p className="m-0 fw-bold">9 visualizzazioni del profilo</p>
                                <small>Scopri chi ha visitato il tuo profilo</small>
                            </Col>
                        </Row>
                    </Col>
                    {/* FINE COL SX */}

                    {/* COL DX */}
                    <Col xs={5}>
                        <Row>
                            <Col xs={1}><i class="bi bi-search"></i></Col>
                            <Col>
                                <p className="m-0 fw-bold">3 comparse nei motori di ricerca</p>
                                <small>Vedi quante volte compari nei risultati di ricerca.</small>
                            </Col>
                        </Row>
                    </Col>
                    {/* FINE COL DX */}
                </Row>
            </Card.Body>
        </Card >
    )
}

export default Analisi;