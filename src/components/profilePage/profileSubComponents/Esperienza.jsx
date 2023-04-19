import { useEffect } from "react";
import { Card, Col, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

const Esperienza = () => {

    const dispatch = useDispatch();
    const id=useSelector(state => state.myInfo.myInfo._id);
    const experiences = useSelector(state => state.experiences.experiences);
    //console.log('experiences', experiences);
    //console.log(id)

    const getExperiences = async () => {
        try {
            let response = await fetch(`https://striveschool-api.herokuapp.com/api/profile/${id}/experiences`, {
                method: "GET",
                headers: {
                    Authorization:
                        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDNjZjI1YjE4NmE4NzAwMTQzODY3YWUiLCJpYXQiOjE2ODE3MTU4MDMsImV4cCI6MTY4MjkyNTQwM30.QtMkPVJHJwbJXrJQxCZi3t_c8ImEL7Pi8UKRK-l88Tk",
                },
            })
            if (response.ok) {
                let data = await response.json();
                dispatch({
                    type: 'ADD_TO_EXPERIENCES',
                    payload: data
                })
            }
            else {
                return new Error('Errore nella fetch');
            }
        }
        catch (err) {
            console.log(err);
        }
    }


    useEffect(() => {
        
        getExperiences();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [id])

    return (
        <Card className="mb-3">
            <Card.Body>
                <div className="d-flex justify-content-between">
                    <Card.Title>Esperienza</Card.Title>
                    <div>
                        <i className="bi bi-plus-lg px-3"></i>
                        <i className="bi bi-pencil"></i>
                    </div>
                </div>
                {
                    experiences.map((experience, index) => {
                        return (
                            <>
                                <Card key={index} Card className="my-3 insideCards" >
                                    <Row>
                                        <Col xs={3} lg={1} >
                                            <Card.Img className="rounded rounded-0" variant="top" src="http://placekitten.com/50" />
                                        </Col>
                                        <Col>
                                            <Card.Body className="p-0">
                                                <p className="fw-bold m-0">{experience.role}</p>
                                                <p className="m-0">{experience.company}</p>
                                                <small className="text-muted">{experience.startDate} - {experience.endDate ? experience.endDate : 'In corso'}</small>
                                                <p>{experience.description}</p>
                                            </Card.Body>
                                        </Col>
                                    </Row>
                                </Card>
                                {index !== experiences.length-1 ? <hr className="my-4" /> : null }
                            </>

                        )
                    })
                }
            </Card.Body >
        </Card >
    )
}

export default Esperienza;