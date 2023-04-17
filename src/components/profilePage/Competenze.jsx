import { Card, Row, Col, Button } from "react-bootstrap";


const Competenze = () => {
    return (
        <Card>
            <Card.Body>
                <div className="d-flex justify-content-between mb-2">
                    <Card.Title>Competenze</Card.Title>
                    <div>
                        <Button variant="outline-primary">Quiz valutazione competenze</Button>
                        <i className="bi bi-plus-lg px-3"></i>
                        <i className="bi bi-pencil"></i>                        
                    </div>
                </div>
                {/* COMPETENZA 1 */}
                <p className="fw-bold m-0">Competenza</p>
                <hr/>
                <p className="fw-bold m-0">Competenza</p>
                <hr/>
                <p className="fw-bold m-0">Competenza</p>
                <hr/>
            </Card.Body>
            <Card.Footer>
                <span>Mostra tutte le competenze</span><i class="bi bi-arrow-right"></i>
            </Card.Footer>
        </Card> 
    )
}

export default Competenze;