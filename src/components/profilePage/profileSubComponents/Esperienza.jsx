import { useEffect, useState } from "react";
import { Card, Col, Row, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

const Esperienza = () => {

    const [show, setShow] = useState(false)
    const dispatch = useDispatch();
    const experiences = useSelector(state => state.experiences.experiences);
    const params=useParams()
    const myInfo = useSelector(state => state.userInfo.me)
    console.log('myInfo', myInfo);
    
    console.log('experiences', experiences);
    //console.log(id)
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const formData = new FormData();

    // const changeExperiencePic = async () => {

    //     try {
    //         let response = await fetch(`https://striveschool-api.herokuapp.com/api/profile/${id}/experiences/:expId/picture`, {
    //             method: "POST",
    //             headers: {
    //                 Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDNjZjI1YjE4NmE4NzAwMTQzODY3YWUiLCJpYXQiOjE2ODE3MTU4MDMsImV4cCI6MTY4MjkyNTQwM30.QtMkPVJHJwbJXrJQxCZi3t_c8ImEL7Pi8UKRK-l88Tk',
    //             },
    //             body: formData
    //         })
    //         if (response.ok) {
    //             alert("Your profile pic has been changed!")
    //         }
    //         else {
    //             return new Error('Errore nella fetch');
    //         }
    //     }
    //     catch (err) {
    //         console.log(err);
    //     }
    // }

    const getExperiences = async () => {
        try {
            let response = await fetch(`https://striveschool-api.herokuapp.com/api/profile/${myInfo._id}/experiences`, {
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
        console.log(params)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [myInfo])

    return (
        <>
            <Card className="mb-3">
                <Card.Body>
                    <div className="d-flex justify-content-between">
                        <Card.Title>Esperienza</Card.Title>
                        <div>
                            <i className="bi bi-plus-lg px-3" ></i>
                            <i className="bi bi-pencil"></i>
                        </div>
                    </div>
                    {
                        experiences.map((experience, index) => {
                            let startDate = new Date(experience.startDate);
                            let startYear = startDate.getFullYear();
                            let endDate = new Date(experience.endDate);
                            let endYear = endDate.getFullYear();
                            return (
                                <>
                                    <Card key={index} Card className="my-3 insideCards" >
                                        <Row>
                                            <Col xs={3} lg={1} >
                                                <Card.Img className="rounded rounded-0" variant="top" src="http://placekitten.com/50" onClick={handleShow}/>
                                            </Col>
                                            <Col>
                                                <Card.Body className="p-0">
                                                    <p className="fw-bold m-0">{experience.role}</p>
                                                    <p className="m-0">{experience.company}</p>
                                                    <small className="text-muted">{startYear} - {endYear ? endYear : 'In corso'}</small>
                                                    <p>{experience.description}</p>
                                                </Card.Body>
                                            </Col>
                                        </Row>
                                    </Card>
                                    {index !== experiences.length - 1 ? <hr className="my-4" /> : null}
                                </>

                            )
                        })
                    }
                </Card.Body >
            </Card >
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Change Experience Image</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group controlId="formFile" className="mb-3">
                            <Form.Label>Choose a pic.</Form.Label>
                            <Form.Control type="file" onChange={(e) => {
                                const file = e.target.files[0];
                                console.log(file);
                            }} />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={() => {
                        // changeExperiencePic();
                        handleClose();
                    }}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default Esperienza;