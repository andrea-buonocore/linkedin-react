import { useEffect, useState } from "react";
import { Card, Col, ListGroup, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const HomeProfile = () => {
 const [profileInfo, setProfileInfo] = useState([]);

 const getProfileInfo = async () => {
    try {
        let response = await fetch("https://striveschool-api.herokuapp.com/api/profile/me", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDNjZjI1YjE4NmE4NzAwMTQzODY3YWUiLCJpYXQiOjE2ODE3MTU4MDMsImV4cCI6MTY4MjkyNTQwM30.QtMkPVJHJwbJXrJQxCZi3t_c8ImEL7Pi8UKRK-l88Tk"
            },
        }
        );
        let data = await response.json();
        setProfileInfo(data);
    } catch (error) {
        console.log(error);
    }
 };

 useEffect(() => {
    getProfileInfo();
 }, []);

  const randomNum100 = Math.floor(Math.random() * 100) + 1;
  const randomNum500 = Math.floor(Math.random() * 500) + 1;

  return (
    <Card className="mb-2">
      <ListGroup variant="flush">
        <ListGroup.Item className="p-0">
          <Row className="d-flex flex-column">
            <Col>
              <div className="sidebarCover">
                <img
                  src="https://randomwordgenerator.com/img/picture-generator/55e7d1414d53af14f1dc8460962e33791c3ad6e04e507440762e7adc9f49c1_640.jpg"
                  alt=""
                />
              </div>
              <div className="position-relative">
                <img
                  src={profileInfo.image}
                  alt="Profile"
                  className="rounded-circle"
                  width={80}
                  height={80}
                  style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                  }}
                ></img>
              </div>
            </Col>
            <Col className="mt-5">
              <Link to={"/profile/me"} className="text-decoration-none">
              <p className="sidebarProfileName mb-1">{profileInfo.name}&nbsp;{profileInfo.surname}</p>
              </Link>
              <p className="sidebarProfileRole">{profileInfo.title} <br /> {profileInfo.bio}</p>
            </Col>
          </Row>
        </ListGroup.Item>
        <ListGroup.Item className="p-1 px-2">
          <Row className="d-flex justify-content-between mb-2 p-0">
            <Col xs={8} className="sidebarStats">
              Chi ha visualizzato il tuo profilo?
            </Col>
            <Col xs={4} className="text-primary sidebarText text-end">
              {randomNum100}
            </Col>
          </Row>
          <Row className="d-flex justify-content-between">
            <Col xs={8} className="sidebarStats">
              Visualizzazioni del tuo post
            </Col>
            <Col xs={4} className="text-primary sidebarText text-end">
              {randomNum500}
            </Col>
          </Row>
        </ListGroup.Item>
        <ListGroup.Item className="p-1 px-2">
          <div>
            <p className="sidebarText mb-1">
              Accedi a strumenti e informazioni in esclusiva
            </p>
            <Row className="d-flex flex-nowrap">
                <Col xs={1}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  data-supported-dps="24x24"
                  className="mercado-match"
                  width="18"
                  height="18"
                  focusable="false"
                >
                  <path
                    d="M20 20a3.36 3.36 0 001-2.39V6.38A3.38 3.38 0 0017.62 3H6.38A3.36 3.36 0 004 4z"
                    fill="#f8c77e"
                  ></path>
                  <path
                    d="M4 4a3.36 3.36 0 00-1 2.38v11.24A3.38 3.38 0 006.38 21h11.24A3.36 3.36 0 0020 20z"
                    fill="#e7a33e"
                  ></path>
                </svg>
                </Col>
                <Col xs={11}>
                <p className="sidebarTextPremium mb-0">Fatti assumere più velocemente. <br /> Prova Premium gratis.</p>
                </Col>
            </Row>
          </div>
        </ListGroup.Item>
        <ListGroup.Item className="p-1">
          <p className="mb-1">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="grey"
                className="bi bi-bookmark-fill"
                viewBox="0 0 16 16"
              >
                <path d="M2 2v13.5a.5.5 0 0 0 .74.439L8 13.069l5.26 2.87A.5.5 0 0 0 14 15.5V2a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2z" />
              </svg>
            </span>
            &nbsp;
            <span className="sidebarTextPremium text-decoration-none">
              I miei elementi
            </span>
          </p>
        </ListGroup.Item>
      </ListGroup>
      </Card>
  );
};

export default HomeProfile;
