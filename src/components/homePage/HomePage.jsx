import { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux";
import Post from "./ColonnaCentrale/Post";

const HomePage = () => {

    const dispatch = useDispatch();
    const postRedux = useSelector(state => state.post.post);

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
                let fiftyPost = post.slice(0,50);
                dispatch({
                    type: 'SAVE_POST',
                    payload: fiftyPost
                })
                
            }
            else {
                return new Error('Errore nella fetch:', response.status);
            }
        }
        catch (err) {
            console.error(err);
        }
    }

    useEffect(() => getPosts(), []);

    return (
        <Container>
            <Row>
                <Col xs={12} md={2}></Col>
                <Col xs={12} md={7}>
                    {
                        postRedux.map((post, index) => {
                            return (
                                <Post post={post} key={index}/>
                            )
                        })
                    }
                </Col>
                <Col xs={12} md={3}></Col>
            </Row>
        </Container>
    )
}

export default HomePage