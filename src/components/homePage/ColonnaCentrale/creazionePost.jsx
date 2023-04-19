import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

const CreazionePost = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  return (
    <div className="card"> 
        
        <div className="d-flex flex-column ">
      <div className="d-flex picAndButtonContainer">
        <div className="imgPostContainer me-3">
          <img
            alt="profilePicture"
            src="https://media.licdn.com/dms/image/D4E35AQEI-SA5CGOldg/profile-framedphoto-shrink_100_100/0/1680040710302?e=1682499600&v=beta&t=UcGobhn27mcA4S5yRP21ndI8OGPsrOublvKpGfFnxU8"
          />
        </div>
        <div className="buttonContainer">
          <button className="buttonCreationPost" onClick={handleShow}>
            <span>Avvia un post</span>
          </button>
        </div>
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className='h5'>Crea un post</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="name@example.com"
                autoFocus
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Example textarea</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
      <div className="PostCreationIconsContainer my-3">
        <button className="postButtonContainer">
          <li-icon aria-hidden="true" type="image" class="artdeco-button__icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              data-supported-dps="24x24"
              fill="currentColor"
              class="mercado-match"
              width="24"
              height="24"
              focusable="false"
            >
              <path d="M19 4H5a3 3 0 00-3 3v10a3 3 0 003 3h14a3 3 0 003-3V7a3 3 0 00-3-3zm1 13a1 1 0 01-.29.71L16 14l-2 2-6-6-4 4V7a1 1 0 011-1h14a1 1 0 011 1zm-2-7a2 2 0 11-2-2 2 2 0 012 2z"></path>
            </svg>
          </li-icon>
          <span class="artdeco-button__text">Foto</span>
        </button>

        <button className="postButtonContainer">
          <li-icon aria-hidden="true" type="video" class="artdeco-button__icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              data-supported-dps="24x24"
              fill="currentColor"
              class="mercado-match videoIcon"
              width="24"
              height="24"
              focusable="false"
            >
              <path d="M19 4H5a3 3 0 00-3 3v10a3 3 0 003 3h14a3 3 0 003-3V7a3 3 0 00-3-3zm-9 12V8l6 4z"></path>
            </svg>
          </li-icon>
          <span class="artdeco-button__text">Video</span>
        </button>

        <button className="postButtonContainer">
          <li-icon aria-hidden="true" type="calendar" size="medium">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              data-supported-dps="24x24"
              fill="currentColor"
              class="mercado-match eventIcon"
              width="24"
              height="24"
              focusable="false"
            >
              <path d="M3 3v15a3 3 0 003 3h12a3 3 0 003-3V3zm13 1.75A1.25 1.25 0 1114.75 6 1.25 1.25 0 0116 4.75zm-8 0A1.25 1.25 0 116.75 6 1.25 1.25 0 018 4.75zM19 18a1 1 0 01-1 1H6a1 1 0 01-1-1V9h14zm-5.9-3a1 1 0 00-1-1H12a3.12 3.12 0 00-1 .2l-1-.2v-3h3.9v1H11v1.15a3.7 3.7 0 011.05-.15 1.89 1.89 0 012 1.78V15a1.92 1.92 0 01-1.84 2H12a1.88 1.88 0 01-2-1.75 1 1 0 010-.25h1a.89.89 0 001 1h.1a.94.94 0 001-.88z"></path>
            </svg>
          </li-icon>
          <span class="artdeco-button__text">Evento</span>
        </button>

        <button className="postButtonContainer">
          <li-icon aria-hidden="true" type="content-align-left" size="medium">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              data-supported-dps="24x24"
              fill="currentColor"
              class="mercado-match articleIcon"
              width="24"
              height="24"
              focusable="false"
            >
              <path d="M21 3v2H3V3zm-6 6h6V7h-6zm0 4h6v-2h-6zm0 4h6v-2h-6zM3 21h18v-2H3zM13 7H3v10h10z"></path>
            </svg>
          </li-icon>
          <span class="artdeco-button__text">Scrivi un articolo</span>
        </button>
      </div>
    </div>
        

    </div>

    
  );
};

export default CreazionePost;
