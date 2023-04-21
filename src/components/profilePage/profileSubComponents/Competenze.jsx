import { Card, Button } from "react-bootstrap";


const Competenze = () => {
    return (
        <Card className="mb-3">
            <Card.Body>
                <div className="d-flex justify-content-between mb-2">
                    <Card.Title>Competenze</Card.Title>
                    <div>
                        <Button className="d-none d-lg-inline" variant="outline-primary">Quiz valutazione competenze</Button>
                        <i className="bi bi-plus-lg px-3"></i>
                        <i className="bi bi-pencil"></i>                        
                    </div>
                </div>
                <Button className="d-block d-lg-none mb-3" variant="outline-primary">Quiz valutazione competenze</Button>
                {/* COMPETENZA 1 */}
                <p className="fw-bold m-0">Competenza</p>
                <hr/>
                <p className="fw-bold m-0">Competenza</p>
                <hr/>
                <p className="fw-bold m-0">Competenza</p>
                <hr/>
            </Card.Body>
            <Card.Footer>
                <span>Mostra tutte le competenze</span><i className="bi bi-arrow-right"></i>
            </Card.Footer>
        </Card> 
    )
}

export default Competenze;