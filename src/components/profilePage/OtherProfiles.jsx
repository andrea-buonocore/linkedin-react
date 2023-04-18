import { useEffect, useState } from "react";
import { Button, Card, Col, ListGroup, Row } from "react-bootstrap";

const OtherProfiles = () => {
  const [profileData, setProfileData] = useState([]);
  const [visibleProfiles, setVisibleProfiles] = useState(4);
  const [showMore, setShowMore] = useState(true);

  const getProfileData = async () => {
    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/profile/",
        {
          method: "GET",
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDNjZjI1YjE4NmE4NzAwMTQzODY3YWUiLCJpYXQiOjE2ODE3MTU4MDMsImV4cCI6MTY4MjkyNTQwM30.QtMkPVJHJwbJXrJQxCZi3t_c8ImEL7Pi8UKRK-l88Tk",
          },
        }
      );
      let data = await response.json();
      setProfileData(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProfileData();
  }, []);

  const handleShowMore = () => {
    if (visibleProfiles === 4) {
      setVisibleProfiles(visibleProfiles + 3);
      setShowMore(false);
    } else {
      setVisibleProfiles(4);
      setShowMore(true);
    }
  };

  let messageSvg = (
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
  );

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

  let showLessSvg = (
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
      <path d="M15 11L8 6.39 1 11V8.61L8 4l7 4.61z"></path>
    </svg>
  );

  return (
    <Card className="mb-2">
      <ListGroup variant="flush" className="p-3">
        <h5>Altri profili consultati</h5>
        {profileData.slice(0, visibleProfiles).map((profile) => (
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
                  <h6 className="mb-1">
                    {profile.name}&nbsp;{profile.surname}
                  </h6>
                  <p className="mb-1">{profile.title}</p>
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
      </ListGroup>
      <Card.Footer id="showMore" onClick={handleShowMore}>
        {showMore ? (
          <>Visualizza altro {showMoreSvg}</>
        ) : (
          <>Meno dettagli {showLessSvg}</>
        )}
      </Card.Footer>
    </Card>
  );
};

export default OtherProfiles;

