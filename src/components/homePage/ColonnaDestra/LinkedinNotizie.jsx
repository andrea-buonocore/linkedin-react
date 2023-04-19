import { Button, Card, Col, ListGroup, ListGroupItem, Row } from "react-bootstrap";

const LinkedinNotizie = () => {
    let showMoreSvg = (
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
      );
  return (
    <Card className="mb-2">
      <div className="d-flex justify-content-between">
        <h2>Linkedin Notizie</h2>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-info-square-fill"
          viewBox="0 0 16 16"
        >
          <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm8.93 4.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM8 5.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
        </svg>
      </div>
      <ListGroup>
        <ListGroupItem>
            <h3>Le Top Companies del 2023 in Italia</h3>
            <p className="fw-light">Notizie principali · 206 lettori</p>
        </ListGroupItem>
        <ListGroupItem>
            <h3>Come si posiziona il soft pover italiano</h3>
            <p className="fw-light">21 ore fa</p>
        </ListGroupItem>
        <ListGroupItem>
            <h3>Scaldare le case con la grappa</h3>
            <p className="fw-light">2 giorni fa · 9999 lettori</p>
        </ListGroupItem>
        <ListGroupItem>
            <h3>Pettinare le barbie con le forchette</h3>
            <p className="fw-light">4 giorni fa · 54 lettori</p>
        </ListGroupItem>
        <ListGroupItem>
            <h3>SONDAGGIO: cosa mangia Franchino?</h3>
            <p className="fw-light">5 giorni fa · 506 lettori</p>
        </ListGroupItem>
      </ListGroup>
      <Card.Footer id="showMore">
        {/* {showMore ? ( */}
          <>Visualizza altro {showMoreSvg}</>
        {/* ) : (
          <>Meno dettagli {showLessSvg}</>
        )} */}
      </Card.Footer>
    </Card>
  );
};

export default LinkedinNotizie;
