import { Col, Container, Row } from "react-bootstrap";
import Annuncio from "./ColonnaDestra/Annuncio";
import LinkedinNotizie from "./ColonnaDestra/LinkedinNotizie";
import { FooterHome } from "./FooterHome/FooterHome";
import Messaggistica from "./ColonnaDestra/Messaggistica";

const HomePage = () => {
  return (
    <Container className="pageContainer">
      <Row>
        <Col xs={12} md={2}></Col>
        <Col xs={12} md={7}></Col>
        <Col xs={12} md={3}>
          <LinkedinNotizie />
          <Annuncio />
          <FooterHome></FooterHome>
          <Messaggistica />
        </Col>
      </Row>
    </Container>
  );
};

export default HomePage;
