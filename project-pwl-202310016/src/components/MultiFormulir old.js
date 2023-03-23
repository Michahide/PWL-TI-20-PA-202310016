import React, { Component } from 'react'
import { Button, Form, Modal, Col, Row, Container, Table, TableProps } from "react-bootstrap";
import './Formulir.css'
import bg from "../assets/landscape.jpg";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker-cssmodules.css';
import 'react-datepicker/dist/react-datepicker.css';

function resultPost({props, obj}) {
    return (
        <div className="result">
            {(obj.map((v, index) => (
                (v) ? (
                    <div className="border-bottom mb-3" key={index}>
                        <p><span className="fw-bolder">NPM:</span> {props.v.npm}</p>
                        <p><span className="fw-bolder">Fullname:</span> {props.firstName} {props.middleName} {props.lastName} </p>
                        <p><span className="fw-bolder">Birthdate:</span> {props.birthDate} </p>
                        <p><span className="fw-bolder">Age:</span> {this.calculateAge(props.birthDate)} years old </p>
                    </div>
                ) : ""
            )))}
        </div>
    );
}

function RowItem({ data, index }) {
    return (
        <tr>
            <td>
                <input
                    className='form-control'
                    type="number"
                    pattern="[0-9]*"
                    placeholder="Enter NPM"
                    value={this.state.npm}
                    onChange={(e) => this.setState({ npm: Number(e.target.value) })}
                    required
                    maxLength={10}
                />
            </td>

            <td>
                <input
                    className='form-control'
                    type="text"
                    placeholder="Enter First Name"
                    value={this.state.firstName}
                    onChange={(e) => this.setState({ firstName: e.target.value })}
                    required
                />
            </td>

            <td>
                <input
                    className='form-control'
                    type="text"
                    placeholder="Enter Middle Name"
                    value={this.state.middleName}
                    onChange={(e) => this.setState({ middleName: e.target.value })}
                />
            </td>

            <td>
                <input
                    type="text"
                    placeholder="Enter Last Name"
                    value={this.state.lastName}
                    onChange={(e) => this.setState({ lastName: e.target.value })}
                    required
                />
            </td>

            <td>
                <DatePicker
                    className="form-control"
                    placeholderText="YYYY-MM-DD"
                    dateFormat="yyyy-MM-dd"
                    value={this.state.birthDate}
                    onChange={(date) => this.setState({ birthDate: this.formatDate(date.target.value)})}
                    required
                />
            </td>
            {index !== 0 ? (
                <td>
                    <button className="btn btn-icon btn-sm btn-danger" type='button' onClick={(e) => this.setState({
                        profData: ((prev) =>
                        {
                            const newData = [...prev]
                            delete newData[index]
                            return newData
                        }
                        )
                    })}>
                        <i className="bi bi-trash"></i>
                    </button>
                </td>
            ) : ''}
        </tr>
    )
}

export default class MultiFormulir extends Component {
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
            validated: false,
            profData: []
        };
        this.onInputchange = this.onInputchange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.calculateAge = this.calculateAge.bind(this);
        this.RowItem = this.RowItem.bind(this);
        this.formatDate = this.formatDate.bind(this);
        this.resultPost = this.resultPost.bind(this);
    }

    onInputchange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    formatDate(datestring) {
        const today = new Date(datestring);
        const yyyy = today.getFullYear();
        let mm = today.getMonth() + 1; // Months start at 0!
        let dd = today.getDate();

        if (dd < 10) dd = '0' + dd;
        if (mm < 10) mm = '0' + mm;

        return yyyy + "-" + mm + "-" + dd;
    }

    CurrentAge() {
        this.setState({
            age: this.state.date - parseInt(this.state.birthDate.slice(0, 4))
        })
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

    resultPost(obj) {
        return (
            <div className="result">
                {(obj.map((v, index) => (
                    (v) ? (
                        <div className="border-bottom mb-3" key={index}>
                            <p><span className="fw-bolder">NPM:</span> {v.this.state.npm}</p>
                            <p><span className="fw-bolder">Fullname:</span> {v.this.state.firstName} {v.this.state.middleName} {v.this.state.lastName} </p>
                            <p><span className="fw-bolder">Birthdate:</span> {v.this.state.birthDate} </p>
                            <p><span className="fw-bolder">Age:</span> {this.calculateAge(v.this.state.birthDate)} years old </p>
                        </div>
                    ) : ""
                )))}
            </div>
        );
    }

    calculateAge(birthdate) {
        var today = new Date();
        var birthDate = new Date(birthdate);
        var age = today.getFullYear() - birthDate.getFullYear();
        var m = today.getMonth() - birthDate.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }
        return age;
    }

    RowItem({ data, index }) {
        return (
            <tr>
                <td>
                    <input
                        className='form-control'
                        type="number"
                        pattern="[0-9]*"
                        placeholder="Enter NPM"
                        value={this.state.npm}
                        onChange={(e) => this.setState({ npm: Number(e.target.value) })}
                        required
                        maxLength={10}
                    />
                </td>

                <td>
                    <input
                        className='form-control'
                        type="text"
                        placeholder="Enter First Name"
                        value={this.state.firstName}
                        onChange={(e) => this.setState({ firstName: e.target.value })}
                        required
                    />
                </td>

                <td>
                    <input
                        className='form-control'
                        type="text"
                        placeholder="Enter Middle Name"
                        value={this.state.middleName}
                        onChange={(e) => this.setState({ middleName: e.target.value })}
                    />
                </td>

                <td>
                    <input
                        type="text"
                        placeholder="Enter Last Name"
                        value={this.state.lastName}
                        onChange={(e) => this.setState({ lastName: e.target.value })}
                        required
                    />
                </td>

                <td>
                    <DatePicker
                        className="form-control"
                        placeholderText="YYYY-MM-DD"
                        dateFormat="yyyy-MM-dd"
                        value={this.state.birthDate}
                        onChange={(date) => this.setState({ birthDate: this.formatDate(date.target.value)})}
                        required
                    />
                </td>
                {index !== 0 ? (
                    <td>
                        <button className="btn btn-icon btn-sm btn-danger" type='button' onClick={(e) => this.setState({
                            profData: ((prev) =>
                            {
                                const newData = [...prev]
                                delete newData[index]
                                return newData
                            }
                            )
                        })}>
                            <i className="bi bi-trash"></i>
                        </button>
                    </td>
                ) : ''}
            </tr>
        )
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
                        <Table>
                            <thead className='border-gray-200 fs-5 fw-bold bg-lighten'>
                                <tr>
                                    <th>NPM</th>
                                    <th>First Name</th>
                                    <th>Middle Name</th>
                                    <th>Last Name</th>
                                    <th>Birthdate</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.profData.map((v, index) => (
                                    (v) ? <this.RowItem key={index} data={v} index={index} /> : ''
                                ))}
                                <RowItem data={this.state} index={this.state} />
                            </tbody>
                            <tfoot>
                                <tr>
                                    <td colSpan={5}>
                                        <button className="btn btn-sm btn-light-primary" type='button'>
                                            <i className="bi bi-plus-circle me-2"></i>
                                            Add new row
                                        </button>
                                    </td>
                                </tr>
                            </tfoot>
                        </Table>
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
                        {this.resultPost(this.state.profData)}
                    </Modal.Body>
                </Modal>
            </div>
        )
    }
}