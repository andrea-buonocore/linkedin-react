import { Container, Row, Col, Dropdown } from "react-bootstrap";
import { Link } from "react-router-dom";



export const MyFooter = () => {
    return (
      <Container>
        <Row>
              <Col xs={12} md={6}>
              <div className="d-flex justify-content-start">       
              <img className="mb-3" id="logoFooter"src="https://1000marche.net/linkedin-logo/"/>

              <ul className="list-unstyled">
              <li> <Link className="collegamenti" to={"https://about.linkedin.com/it-it"}>
                    Informazioni</Link> </li>
                    <li>
                  <Link className="collegamenti text-secondary"
                    to={"https://it.linkedin.com/legal/professional-community-policies?"}> Linee guida della community</Link> </li>
                  <li>
                    <Dropdown>
                    <Dropdown.Toggle id="generesDropdown">
                        <span>Privacy e condizioni</span>
                    </Dropdown.Toggle>
                    <Dropdown.Menu className="dropdown-menu dropdown-menu-dark text-light">
                        <Dropdown.Item href="#/action-1"> Informativa sulla privacy</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Contratto di licenza</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Informativa sui cookie</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Informativa sul copyright</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                    </li>

                  <li><Link to={ "https://business.linkedin.com/sales-solutions?trk=flagship_nav&veh=li-footer-lss-control&src=li-footer"}
                  className="collegamenti">Sales Solutions</Link> </li>
                  <li><Link to={"https://safety.linkedin.com/"} className="collegamenti">Centro sicurezza</Link> </li>
              
                  <li> <Link to={"https://it.linkedin.com/accessibility?"}className="collegamenti">Accessibilità</Link> </li>

                  <li><Link to={"https://careers.linkedin.com"} className="collegamenti"> Carriera</Link> </li>

                  <li><Link to={"https://www.linkedin.com/help/linkedin/answer/a1342443?lang=it"} 
                  className="collegamenti">Opzioni per gli annunci pubblicitari</Link></li>

                  <li> <Link to={"https://mobile.linkedin.com/it-it"} className="collegamenti">Mobile</Link> </li>

                <li> <Link to={ "https://business.linkedin.com/it-it/talent-solutions?trk=flagship_nav&veh=li-footer-lts-control-it-it&src=li-footer"}
                  className="collegamenti">Talent Solutions</Link></li>

                  <li><Link to={"https://business.linkedin.com/it-it/marketing-solutions?trk=n_nav_lms_f&src=li-footer"}
                    className="collegamenti">Soluzioni di marketing</Link> </li>

                  <li><Link to={"https://business.linkedin.com/it-it/marketing-solutions/ads?trk=n_nav_ads_f"}
                    className="collegamenti">Pubbilictà</Link></li>

                    <li><Link to={"https://business.linkedin.com/grow?&src=li-footer"} className="collegamenti">Piccole imprese</Link></li>
    
                  <li><Link to={"https://www.linkedin.com/help/linkedin?trk=d_flagship3_profile_view_base&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3Bru6up1A6Seq3bJvMtE7iUQ%3D%3D"
                    }className="collegamenti domande"> <i class="bi bi-question-circle-fill">Domande? </i></Link>
                  <p className="footerQuestion">Visita il nostro Centro assistenza.</p> </li>

                  <li> <Link to={"https://www.linkedin.com/mypreferences/d/categories/account"}
                    className="collegamenti domande"><i class="bi bi-gear-fill"> Gestisci il tuo account e la tua privacy</i> </Link>
                  <p className="footerQuestion">Vai alle impostazioni</p> </li>
          
                  <li><Link to={"https://www.linkedin.com/help/linkedin/answer/a1339724"}
                    className="collegamenti domande"><i class="bi bi-shield-shaded"> Trasparenza sui contenuti consigliati </i> </Link>
                  <p className="footerQuestion">Scopri di più sui contenuti consigliati.</p></li>
 <Col xs={12} md={6}>
                  <li>
                  <p className="footerQuestion mb-1 ">Seleziona lingua</p>
                  <select className="px-2 py-1" id="language" name="languageList" form="form">
                    <option value="Italiano">Italiano</option>
                    <option value="Inglese">Inglese</option>
                    <option value="Francese">Francese</option>
                    <option value="Spagnolo">Spagnolo</option>
                  </select> </li>
                  </Col>

              <li><p className="footerQuestion">LinkedIn Corporation © 2023</p></li>
              </ul>
              </div>
              </Col>
            </Row>
      </Container>
    );
  };export default MyFooter