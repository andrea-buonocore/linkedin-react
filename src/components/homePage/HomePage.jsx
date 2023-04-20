import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Annuncio from "./ColonnaDestra/Annuncio";
import LinkedinNotizie from "./ColonnaDestra/LinkedinNotizie";
import { FooterHome } from "./FooterHome/FooterHome";
import Messaggistica from "./ColonnaDestra/Messaggistica";

import HomeProfile from "./ColonnaSinistra/HomeProfile"
import { useDispatch, useSelector } from "react-redux";
import Spinner from "react-bootstrap/Spinner";
import Post from "./ColonnaCentrale/Post";
import CreazionePost from "./ColonnaCentrale/creazionePost";
import Scopri from "./ColonnaSinistra/Scopri";

const HomePage = () => {
  const dispatch = useDispatch();
  const postRedux = useSelector((state) => state.post.post);
  const counter = useSelector((state) => state.counter.counter);

  //const myInfo=useSelector(state=>state.myInfo)
  const [isLoading, setIsLoading] = useState(true);

    const getPosts = async () => {
        try {
            let response = await fetch('https://striveschool-api.herokuapp.com/api/posts/', {
                method: "GET",
                headers: {
                    Authorization:
                        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDNjZjI1YjE4NmE4NzAwMTQzODY3YWUiLCJpYXQiOjE2ODE3MTU4MDMsImV4cCI6MTY4MjkyNTQwM30.QtMkPVJHJwbJXrJQxCZi3t_c8ImEL7Pi8UKRK-l88Tk",
                },
            });
            if (response.ok) {
                let post = await response.json();
                console.log('tutti i post', post);
                let fiftyPost = post.reverse().slice(0, 50);
                dispatch({
                    type: 'SAVE_POST',
                    payload: fiftyPost
                })
                setIsLoading(false);

            }
            else {
                return new Error('Errore nella fetch:', response.status);
            }
        }
        catch (err) {
            console.error(err);
        }

    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/profile/me",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDNjZjI1YjE4NmE4NzAwMTQzODY3YWUiLCJpYXQiOjE2ODE3MTU4MDMsImV4cCI6MTY4MjkyNTQwM30.QtMkPVJHJwbJXrJQxCZi3t_c8ImEL7Pi8UKRK-l88Tk",
          },
        }
      );
      let data = await response.json();
      dispatch({
        type: "HOMEPAGE_SAVE_MY_INFO",
        payload: data,
      });
      console.log("Dati", data);
    } catch (error) {
      console.log(error);
    }
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() =>{
    getPosts()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  } ,[counter]);

  return (
    <Container className="pageContainer">
      <Row>
        <Col xs={12} md={3}>
                    <HomeProfile/>
                    <Scopri/>

                </Col>
        <Col xs={12} md={6}>
                    <Row xs={1}>
                        <Col><CreazionePost /> </Col>
                    
                    </Row>
                
                    {
                        isLoading && (
                            <div className="text-center">
                            <Spinner animation="border" variant="primary"/>
                            </div>
                        )
                    }
                    {
                        postRedux.map((post, index) => {
                            return (
                                <Post post={post} key={index} />
                            )
                        })
                    }
                </Col>
        <Col xs={12} md={3}>
          <LinkedinNotizie />
          <Annuncio />
          <FooterHome></FooterHome>
          <Messaggistica />
        </Col>
      </Row>
    </Container>
  );
};

export default HomePage;
