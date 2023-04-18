import { useSelector } from "react-redux";

const ProfileBigCard = () => {

  const myInfo = useSelector(state => state.userInfo.me);
  console.log('myInfo', myInfo);
  return (
    <div className="ProfileBigCardContainer">
      <div className="profileBigCardCoverContainer">
        <img
          alt="cover"
          src="https://media.licdn.com/dms/image/D4E16AQHoUy27joLDsA/profile-displaybackgroundimage-shrink_350_1400/0/1681248955424?e=1687392000&v=beta&t=szvFwPl4IHx-s3hoJ76ml8-gpAwEDuu2AdpzyAeB0Uo"
        />
      </div>
      <div className="profilepicContainer">
        <img
          className="profilepic"
          alt="profilepic"
          src="https://media.licdn.com/dms/image/D4E35AQEI-SA5CGOldg/profile-framedphoto-shrink_200_200/0/1680040710302?e=1682326800&v=beta&t=pQUm4JEVPJ3p9SAmPWX9ZS6VEEV4vpiQ3ePd64Bcia4"
        />
      </div>
      <div className="pencil-right"><i class="bi bi-pencil"></i></div>
      <div className="ProfileCoverPencil">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          data-supported-dps="16x16"
          fill="blue"
          clasName="mercado-match"
          width="20"
          height="20"
          focusable="false"
        >
          <path d="M14.13 1.86a3 3 0 00-4.17 0l-7 7L1 15l6.19-2 6.94-7a3 3 0 000-4.16zm-8.36 9.71l-1.35-1.34L9.64 5 11 6.35z"></path>
        </svg>
      </div>

      <div className="profileBigCardTextContainer">
        <h5 className="mb-0">{myInfo.name} {myInfo.surname}</h5>
        <p className="mb-2">
          <small>{myInfo.title}</small>
        </p>
        <p className="mb-2 text-secondary">
          <small>{myInfo.bio} </small>
        </p>
        <p className="text-secondary mb-2">
          <small>{myInfo.area}</small>
          <br/>
          <span className="text-primary">Informazioni di contatto </span>
        </p>
        <span className="text-primary">78 collegamenti </span>
        <div className=" mt-2 ProfilePicButtons">
        <button type="button" class="rounded-pill px-3 py-1 btn btn-primary me-2">Aggiungi sezione del profilo</button>
          <button type="button" class="rounded-pill px-3 py-1 btn btn-outline-primary me-2">Aggiungi sezione del profilo</button>
          <button type="button" class="rounded-pill px-3 py-1 btn btn-outline-secondary">Altro</button>
        </div>
        <div className="carousel container mt-3">
          <div className="carouselCard1 d-flex me-3">
            <div className="carouselTextContainer">
            <p className='mb-0'>Disponibilie a lavorare</p>
            <p className='mb-0'>Ruoli di Sviluppatore Html5, Sviluppatore </p>
            <p className='mb-0 text-primary'>Mostra dettagli</p>
            </div>
            <div>
            <i class="bi bi-pencil"></i>
            </div>
          </div>
          <div className="carouselCard1 d-flex">
            <div className="carouselTextContainer">
            <p className='mb-0'>Disponibilie a lavorare</p>
            <p className='mb-0'>Ruoli di Sviluppatore Html5, Sviluppatore </p>
            <p className='mb-0 text-primary'>Mostra dettagli</p>
            </div>
            <div>
            <i class="bi bi-pencil"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileBigCard;
