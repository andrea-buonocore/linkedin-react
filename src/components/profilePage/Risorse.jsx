import { Card, Row, Col } from "react-bootstrap";


const Risorse = () => {
    return (
        <Card>
            <Card.Body>
                <div className="mb-3">
                    <Card.Title className="m-0">Risorse</Card.Title>
                    <i class="bi bi-eye-fill"></i>
                    <span> Solo per te</span>
                </div>
                <Row>
                    <Col>
                        <Row>
                            <Col xs={1}><i class="bi bi-reception-4"></i></Col>
                            <Col xs={11}>
                                <p className="m-0 fw-bold">Modalità creazione di contenuti</p>
                                <small>Fatti scoprire, metti in risalto i contenuti sul tuo profilo e accedi agli strumenti di creazione</small>
                            </Col>
                        </Row>
                        <hr className="my-4"/>
                        <Row>
                            <Col xs={1}><i class="bi bi-people-fill"></i></Col>
                            <Col xs={11}>
                                <p className="m-0 fw-bold">La mia rete</p>
                                <small>Salva e gestisci i tuoi collegamenti e interessi.</small>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Card.Body>
        </Card>
    )
}

export default Risorse;