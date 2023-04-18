import { Col, Container, Row } from "react-bootstrap";
import MyFooter from "../MyFooter";
import Analisi from "./Analisi";
import Risorse from "./Risorse";
import Attivita from "./Attivita";
import Esperienza from "./Esperienza";
import Formazione from "./Formazione";
import Competenze from "./Competenze";
import Interessi from "./Interessi";
import SideProfileInfo from "./SideProfileInfo";
import OtherProfiles from "./OtherProfiles";
import PeopleWhoMightKnow from "./PeopleWhoMightKnow";
import Interests from "./Interests";
import ProfileBigCard from "./profileSubComponents/ProfileBigCard";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const ProfilePage = () => {

    const dispatch = useDispatch();
    const myInfo = useSelector(state => state.userInfo.me);
    const params = useParams();
    console.log('params', params);
    const myID = "643cf25b186a8700143867ae";
    //fetch per ottenere info sul profilo
    // profile/me --> miei dati
    // profile/123 --> dati di utente con id 123

    const getUserInfo = async () => {
        try {
            let response = await fetch('https://striveschool-api.herokuapp.com/api/profile/me', {
                method: "GET",
                headers: {
                    Authorization:
                        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDNjZjI1YjE4NmE4NzAwMTQzODY3YWUiLCJpYXQiOjE2ODE3MTU4MDMsImV4cCI6MTY4MjkyNTQwM30.QtMkPVJHJwbJXrJQxCZi3t_c8ImEL7Pi8UKRK-l88Tk",
                },
            });
            if (response.ok) {
                let data = await response.json();
                console.log("dati ottenuti dalla fetch:", data);
                dispatch({
                    type: 'SAVE_MY_INFO',
                    payload: data
                })
            }
            else{
                return new Error('Errore nella fetch');
            }
        }
        catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        getUserInfo();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]) // componentDidMount 

    console.log('useSelector:', myInfo);

    return (
        <Container id="profilePageContainer">
            <Row>
                {/* COLONNA SX */}
                <Col xs={12} md={6} lg={8}>
                    <Row xs={1}>
                        <Col><ProfileBigCard /></Col>
                        <Col><Analisi /></Col>
                        <Col><Risorse /></Col>
                        <Col><Attivita /></Col>
                        <Col><Esperienza /></Col>
                        <Col><Formazione /></Col>
                        <Col><Competenze /></Col>
                        <Col><Interessi /></Col>
                    </Row>
                </Col>
                {/* FINE COLONNA SX */}

                {/* COLONNA DX */}
                <Col xs={12} md={6} lg={4}>
                    <Row xs={1}>
                        <Col><SideProfileInfo /></Col>
                        <Col><OtherProfiles /></Col>
                        <Col><PeopleWhoMightKnow /></Col>
                        <Col><Interests /></Col>
                    </Row>
                </Col>
                {/* FINE COLONNA DX */}
            </Row>
            <MyFooter />
        </Container>
    )
}

export default ProfilePage;