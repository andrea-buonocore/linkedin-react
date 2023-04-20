import { useSelector } from "react-redux";

const ProfileBigCard = () => {
  const myInfo = useSelector((state) => state.userInfo.me);
  //console.log("myInfo", myInfo);
  return (
    <div className="ProfileBigCardContainer">
      <div className="profileBigCardCoverContainer">
        <img
          alt="cover"
          src="https://i.ibb.co/C6zmzQ2/cover-linkedin.jpg"
        />
      </div>
      <div className="profilepicContainer">
        <img className="profilepic" alt="profilepic" src={myInfo.image} />
      </div>
      <div className="pencil-right">
        <i class="bi bi-pencil"></i>
      </div>
      <div className="ProfileCoverPencil">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          data-supported-dps="16x16"
          fill="blue"
          className="mercado-match"
          width="20"
          height="20"
          focusable="false"
        >
          <path d="M14.13 1.86a3 3 0 00-4.17 0l-7 7L1 15l6.19-2 6.94-7a3 3 0 000-4.16zm-8.36 9.71l-1.35-1.34L9.64 5 11 6.35z"></path>
        </svg>
      </div>

      <div className="profileBigCardTextContainer">
        <h5 className="mb-0">
          {myInfo.name} {myInfo.surname}
        </h5>
        <p className="mb-2">
          <small>{myInfo.title}</small>
        </p>
        <p className="mb-2 text-secondary">
          <small>{myInfo.bio} </small>
        </p>
        <p className="text-secondary mb-2">
          <small>{myInfo.area}</small>
        </p>
        <p>
          <span className="text-primary">Informazioni di contatto </span>{" "}
        </p>
        <span className="text-primary">78 collegamenti </span>
        <div className=" my-3 ProfilePicButtons">
          <button
            type="button"
            className="rounded-pill px-3 py-1 btn btn-primary me-2"
          >
            Aggiungi sezione del profilo
          </button>
          <button
            type="button"
            className="rounded-pill px-3 py-1 btn btn-outline-primary me-2"
          >
            Aggiungi sezione del profilo
          </button>
          <button
            type="button"
            className="rounded-pill px-3 py-1 btn btn-outline-secondary"
          >
            Altro
          </button>
        </div>
        <div className="carousel container mt-3">
          <div className="carouselCard1 d-flex me-2">
            <div className="carouselTextContainer">
              <p className="mb-0"><strong>Disponibile a lavorare </strong></p>
              <p className="mb-0">Ruoli di Sviluppatore Html5, Sviluppatore </p>
              <p className="mb-0 text-primary">Mostra dettagli</p>
            </div>
            <div>
              <i className="bi bi-pencil"></i>
            </div>
          </div>
          <div className="carouselCard1 d-flex bg-light me-2">
            <div className="carouselTextContainer">
              <p className="mb-0"><strong> Fai sapere che stai facendo selezione</strong> e attrai candidati qualificati.</p>
              <p className="mb-0 text-primary"> Inizia</p>
            </div>
            <div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" data-supported-dps="16x16" fill="currentColor" class="mercado-match" width="16" height="16" focusable="false">
  <path d="M14 3.41L9.41 8 14 12.59 12.59 14 8 9.41 3.41 14 2 12.59 6.59 8 2 3.41 3.41 2 8 6.59 12.59 2z"></path>
</svg>
            </div>
          </div>


          <div className="carouselCard1 d-flex bg-light">
            <div className="carouselTextContainer">
              <p className="mb-0"><strong>Metti in risalto i servizi</strong> che offri, così tu e la tua azienda potrete apparire nei risultati di ricerca.</p>
              <p className="mb-0 text-primary"> Inizia</p>
            </div>
            <div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" data-supported-dps="16x16" fill="currentColor" class="mercado-match" width="16" height="16" focusable="false">
  <path d="M14 3.41L9.41 8 14 12.59 12.59 14 8 9.41 3.41 14 2 12.59 6.59 8 2 3.41 3.41 2 8 6.59 12.59 2z"></path>
</svg>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ProfileBigCard;
