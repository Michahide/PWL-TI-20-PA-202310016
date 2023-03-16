import React from "react";
import { useState } from "react";
import { Button, Form, Modal, Col, Row, Container } from "react-bootstrap";
import bg from "../assets/landscape.jpg";

const Formulir = () => {
  const date = new Date();
  const currentYear = date.getFullYear();

  const [NPM, setNPM] = useState(0);
  const [FirstName, setFirstName] = useState("");
  const [MiddleName, setMiddleName] = useState("");
  const [LastName, setLastName] = useState("");
  const [Birthdate, setBirthdate] = useState("");
  const [show, setShow] = useState(false);
  const [validated, setValidated] = useState(false);

  const handleClose = () => setShow(false);

  const handleSubmit = (e) => {
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
    } else {
      e.preventDefault();
      setShow(true);
    }
    setValidated(true);
  };

  const Age = currentYear - parseInt(Birthdate.slice(0, 4));

  return (
    <div
      className="d-flex justify-content-center align-items-center vh-100"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="mw-50 mx-auto border rounded p-4 bg-white drop-shadow">
        <h2 className="mb-5 text-center">Personal Data Form </h2>
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="NPM">
            <Form.Label>NPM</Form.Label>
            <Form.Control
              type="number"
              pattern="[0-9]*"
              placeholder="Enter NPM"
              onChange={(e) => setNPM(e.target.value)}
              required
              maxLength={10}
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            <Form.Control.Feedback type="invalid">
              NPM is a required field with a maximum of 10 numeric digits
            </Form.Control.Feedback>
          </Form.Group>

          <div className="d-flex justify-content-between">
            <Form.Group className="mb-3 me-2" controlId="FName">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter First Name"
                onChange={(e) => setFirstName(e.target.value)}
                required
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              <Form.Control.Feedback type="invalid">
                Firstname is a required field
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3 me-2" controlId="MName">
              <Form.Label>Middle Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Middle Name"
                onChange={(e) => setMiddleName(e.target.value)}
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3 me-2" controlId="LName">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Last Name"
                onChange={(e) => setLastName(e.target.value)}
                required
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              <Form.Control.Feedback type="invalid">
                Lastname is a required field
              </Form.Control.Feedback>
            </Form.Group>
          </div>

          <Form.Group className="mb-3 me-2" controlId="LName">
            <Form.Label>Birthdate</Form.Label>
            <Form.Control
              type="text"
              placeholder="YYYY-MM-DD"
              onChange={(e) => setBirthdate(e.target.value)}
              required
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            <Form.Control.Feedback type="invalid">
              Birthdate is a required field
            </Form.Control.Feedback>
          </Form.Group>

          <Button variant="primary" className="mt-2" type="submit">
            Submit
          </Button>
        </Form>
      </div>

      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton className="d-flex justify-content-center">
          <Modal.Title>Your Personal Data</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container>
            <Row>
              <Col xs="3">NPM</Col>
              <Col xs="1">:</Col>
              <Col>{NPM}</Col>
            </Row>
            <Row>
              <Col xs="3">Fullname</Col>
              <Col xs="1">:</Col>
              <Col>
                {FirstName} {MiddleName} {LastName}
              </Col>
            </Row>
            <Row>
              <Col xs="3">Age</Col>
              <Col xs="1">:</Col>
              <Col>
                {Age}{" "}
                {Age.toString().slice(-1) === 1
                  ? "st"
                  : Age.toString().slice(-1) === 2
                  ? "nd"
                  : Age.toString().slice(-1) === 3
                  ? "rd"
                  : "th"}
              </Col>
            </Row>
          </Container>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default Formulir;