/* eslint-disable jsx-a11y/anchor-is-valid */
import { Card } from "react-bootstrap";
import { useSelector } from "react-redux";

const Messaggistica = () => {
  const myInfo = useSelector((state) => state.userInfo.me);

  return (
    <Card className="">
      <Card.Body className="">
        <div className="d-flex justify-content-between fixed-bottom">
          <div className="d-flex">
            <img
              src={myInfo.image}
              alt="placeholder"
              className="rounded-circle"
              style={{ width: "70px" }}
            />
            <h4>Messaggistica</h4>
          </div>
          <div className="d-flex">
            <a href="#">
              <i class="bi bi-three-dots"></i>
            </a>
            <a href="#">
            <i class="bi bi-pencil-square"></i>
            </a>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
};

export default Messaggistica