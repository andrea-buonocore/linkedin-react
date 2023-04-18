import { Button, Card, Col, ListGroup, Row } from "react-bootstrap";
const PeopleWhoMightKnow = () => {
  let connectSvg = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
      data-supported-dps="16x16"
      fill="currentColor"
      class="mercado-match"
      width="16"
      height="16"
      focusable="false"
      className="mb-1"
    >
      <path d="M9 4a3 3 0 11-3-3 3 3 0 013 3zM6.75 8h-1.5A2.25 2.25 0 003 10.25V15h6v-4.75A2.25 2.25 0 006.75 8zM13 8V6h-1v2h-2v1h2v2h1V9h2V8z"></path>
    </svg>
  );

  return (
    <Card className="mb-2">
      <ListGroup variant="flush" className="p-3">
        <h5 className="mb-0">Persone che potresti conoscere</h5>
        <p className="text-secondary">
          <em>Dalla tua scuola o dalla tua università</em>
        </p>
        <ListGroup.Item>
          <Row className="d-flex justify-content-start">
            <Col xs={2} className="p-0 p-sm-2">
              <img
                src="https://picsum.photos/200"
                alt="placeholder"
                style={{ width: "50px" }}
                className="rounded-circle"
              />
            </Col>
            <Col xs={10}>
              <div>
                <h6 className="mb-1">Nome Cognome</h6>
                <p className="mb-1">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
                <Button
                  variant="outline-secondary"
                  className="rounded-pill px-3 py-1 btn-profile"
                >
                  {connectSvg}
                  &nbsp;Collegati
                </Button>
              </div>
            </Col>
          </Row>
        </ListGroup.Item>
        <ListGroup.Item>
          <Row className="d-flex justify-content-start">
            <Col xs={2} className="p-0 p-sm-2">
              <img
                src="https://picsum.photos/200"
                alt="placeholder"
                style={{ width: "50px" }}
                className="rounded-circle"
              />
            </Col>
            <Col xs={10}>
              <div>
                <h6 className="mb-1">Nome Cognome</h6>
                <p className="mb-1">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
                <Button
                  variant="outline-secondary"
                  className="rounded-pill px-3 py-1 btn-profile"
                >
                  {connectSvg}
                  &nbsp;Collegati
                </Button>
              </div>
            </Col>
          </Row>
        </ListGroup.Item>
        <ListGroup.Item>
          <Row className="d-flex justify-content-start">
            <Col xs={2} className="p-0 p-sm-2">
              <img
                src="https://picsum.photos/200"
                alt="placeholder"
                style={{ width: "50px" }}
                className="rounded-circle"
              />
            </Col>
            <Col xs={10}>
              <div>
                <h6 className="mb-1">Nome Cognome</h6>
                <p className="mb-1">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
                <Button
                  variant="outline-secondary"
                  className="rounded-pill px-3 py-1 btn-profile"
                >
                  {connectSvg}
                  &nbsp;Collegati
                </Button>
              </div>
            </Col>
          </Row>
        </ListGroup.Item>
      </ListGroup>
      <Card.Footer id="showMore">
        Visualizza altro&nbsp;
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          data-supported-dps="16x16"
          fill="currentColor"
          class="mercado-match"
          width="16"
          height="16"
          focusable="false"
          className="mb-1"
        >
          <path d="M1 5l7 4.61L15 5v2.39L8 12 1 7.39z"></path>
        </svg>
      </Card.Footer>
    </Card>
  );
};

export default PeopleWhoMightKnow;
