const ProfileBigCard = () => {
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
        
      </div><div className="pencil-right">ciao</div>
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
      
      <div className="profileBigCardTextContainer">Hansel Sarpong</div>
    </div>
  );
};

export default ProfileBigCard;
