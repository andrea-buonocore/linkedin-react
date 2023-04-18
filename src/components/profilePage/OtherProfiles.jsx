import { useEffect, useState } from "react";
import { Button, Card, Col, ListGroup, Row } from "react-bootstrap";

const OtherProfiles = () => {
  
  const [profileData, setProfileData] = useState([]);

  const getProfileData = async () => {
    try {
      let response = await fetch("https://striveschool-api.herokuapp.com/api/profile/", {
        method: "GET",
        headers: {
          "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDNjZjI1YjE4NmE4NzAwMTQzODY3YWUiLCJpYXQiOjE2ODE3MTU4MDMsImV4cCI6MTY4MjkyNTQwM30.QtMkPVJHJwbJXrJQxCZi3t_c8ImEL7Pi8UKRK-l88Tk",
          "Content-Type": "application/json",
        },
      });
      if (response.ok) {
        let data = await response.json();
        setProfileData(data);
      } else {
        alert("something went wrong");
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getProfileData();
  }, []);

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
        {profileData.slice(0,4).map((profile) => (
        <ListGroup.Item>
          <Row className="d-flex justify-content-start">
            <Col xs={2} className="p-0 p-sm-2">
              <img
                src={profile.image}
                alt={profile.name}
                style={{ width: "50px" }}
                className="rounded-circle"
              />
            </Col>
            <Col xs={10}>
              <div>
                <h6 className="mb-1">{profile.name}&nbsp;{profile.surname}</h6>
                <p className="mb-1">
                  {profile.title}
                </p>
                <Button
                  variant="outline-secondary"
                  className="rounded-pill px-3 py-1 btn-profile"
                >
                    {messageSvg}
                  &nbsp;Messaggio
                </Button>
              </div>
            </Col>
          </Row>
        </ListGroup.Item>
        ))}
        {/* <ListGroup.Item>
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
        </ListGroup.Item> */}
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
