import { Button, Card, Col, ListGroup, Row } from "react-bootstrap";

const OtherProfiles = () => {
    let messageSvg =                   
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
    <path d="M14 2L0 6.67l5 2.64 5.67-3.98L6.7 11l2.63 5L14 2z"></path>
  </svg>

  return (
    <Card className="mb-2">
      <ListGroup variant="flush" className="p-3">
        <h5>Altri profili consultati</h5>
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
                  className="rounded-pill px-3 py-1"
                  id="btn-profile"
                >
                    {messageSvg}
                  &nbsp;Messaggio
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
                  className="rounded-pill px-3 py-1"
                  id="btn-profile"
                >
                {messageSvg}
                  &nbsp;Messaggio
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
                  className="rounded-pill px-3 py-1"
                  id="btn-profile"
                >
                {messageSvg}
                  &nbsp;Messaggio
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
        >
          <path d="M1 5l7 4.61L15 5v2.39L8 12 1 7.39z"></path>
        </svg>
      </Card.Footer>
    </Card>
  );
};

export default OtherProfiles;
