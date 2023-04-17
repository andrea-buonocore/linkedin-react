import { Card } from "react-bootstrap";

const Info = () => {
    return (
        <Card>
            <Card.Body>
                <div className="d-flex justify-content-between">
                    <Card.Title>Informazioni</Card.Title>
                    <i class="bi bi-pencil"></i>
                </div>
                <Card.Text>
                    Attualmente sto affrontando un percorso di Stage presso Goriziane Group S.p.A. come “Analista e Progettista di Software”
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default Info;