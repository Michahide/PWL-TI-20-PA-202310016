import React, { Component } from 'react'
import { Button, Form, Modal, Col, Row, Container } from "react-bootstrap";
import './Formulir.css'
import bg from "../assets/landscape.jpg";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker-cssmodules.css';
import 'react-datepicker/dist/react-datepicker.css';

export default class Formulir extends Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date().getFullYear(),
            npm: "",
            firstName: "",
            middleName: "",
            lastName: "",
            birthDate: "",
            age: "",
            show: false,
            validated: false
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleClose = this.handleClose.bind(this);
    }

    CurrentAge() {
        this.setState({
            age: this.state.date - parseInt(this.state.birthDate.slice(0, 4))
        })
    }

    onInputchange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleClose() {
        this.setState({
            show: false
        })
    }

    handleSubmit(e) {
        const form = e.currentTarget;
        if (form.checkValidity() === false) {
            e.preventDefault();
            e.stopPropagation();
        } else {
            e.preventDefault();
            this.setState({ show: true });
        }
        this.setState({ validated: true });
        this.CurrentAge();
    };

    componentDidUpdate() {
        this.ageID = setInterval(
            () => this.CurrentAge()
        );
    }


    render() {
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
                    <Form noValidate validated={this.state.validated} onSubmit={this.handleSubmit}>
                        <Form.Group className="mb-3" controlId="NPM">
                            <Form.Label>NPM</Form.Label>
                            <Form.Control
                                type="number"
                                pattern="[0-9]*"
                                placeholder="Enter NPM"
                                value={this.state.npm}
                                onChange={(e) => this.setState({ npm: Number(e.target.value) })}
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
                                    value={this.state.firstName}
                                    onChange={(e) => this.setState({ firstName: e.target.value })}
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
                                    value={this.state.middleName}
                                    onChange={(e) => this.setState({ middleName: e.target.value })}
                                />
                                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                            </Form.Group>

                            <Form.Group className="mb-3 me-2" controlId="LName">
                                <Form.Label>Last Name</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Enter Last Name"
                                    value={this.state.lastName}
                                    onChange={(e) => this.setState({ lastName: e.target.value })}
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
                                value={this.state.birthDate}
                                onChange={(e) => this.setState({ birthDate: e.target.value })}
                                required
                            />
                            {/* <DatePicker
                                wrapperClassName='datePicker'
                                dateFormat="yyyy/MM/dd"
                                value={this.state.birthDate}
                                onChange={(date) => this.setState({ birthDate: date.toLocaleString() })}
                                required
                            /> */}
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

                <Modal show={this.state.show} onHide={this.handleClose} centered>
                    <Modal.Header closeButton className="d-flex justify-content-center">
                        <Modal.Title>Your Personal Data</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Container>
                            <Row>
                                <Col xs="3">NPM</Col>
                                <Col xs="1">:</Col>
                                <Col>{this.state.npm}</Col>
                            </Row>
                            <Row>
                                <Col xs="3">Fullname</Col>
                                <Col xs="1">:</Col>
                                <Col>
                                    {this.state.firstName} {this.state.middleName} {this.state.lastName}
                                </Col>
                            </Row>
                            <Row>
                                <Col xs="3">Age</Col>
                                <Col xs="1">:</Col>
                                <Col>
                                    {this.state.age}{" "}
                                    {this.state.age.toString().slice(-1) === 1
                                        ? "st"
                                        : this.state.age.toString().slice(-1) === 2
                                            ? "nd"
                                            : this.state.age.toString().slice(-1) === 3
                                                ? "rd"
                                                : "th"}
                                </Col>
                            </Row>
                        </Container>
                    </Modal.Body>
                </Modal>
            </div>
        )
    }
}