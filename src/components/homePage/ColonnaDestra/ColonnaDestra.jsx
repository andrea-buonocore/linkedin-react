import { Button, Card } from "react-bootstrap";
import { useSelector } from "react-redux";

const ColonnaDestra = () => {

    const myInfo = useSelector(state => state.userInfo.me);
  

<Card className="mb-2">
<Card.Body className="p-1">
  <div className="text-end" id="ad-dx">
    <span>Annuncio</span>&nbsp;<i class="bi bi-three-dots"></i>
  </div>
  <div className="d-flex flex-column text-center p-2">
    <small>Scopri le ultime offerte di lavoro</small>
    <div className="d-flex justify-content-center my-2">
      <img
        src={myInfo.image}
        alt="placeholder"
        className="rounded-circle"
        style={{ width: "70px" }}
      />
      <img
        src="https://picsum.photos/200"
        alt="placeholder"
        className="ms-3"
        style={{ width: "70px" }}
      />
    </div>
    <p>{myInfo.name}, scopri le opportunità offerte da XXX</p>
    <div>
      <Button
        variant="outline-primary"
        className="rounded-pill px-3 py-1"
      >
        Segui
      </Button>
    </div>
  </div>
</Card.Body>
</Card>
}

export default ColonnaDestra