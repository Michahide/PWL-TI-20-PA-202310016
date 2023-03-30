import React, { Component, useState } from 'react'
import { Button, Form, Modal, Col, Row, Container, Table, TableProps } from "react-bootstrap";
import './Formulir.css'
import bg from "../assets/landscape.jpg";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker-cssmodules.css';
import 'react-datepicker/dist/react-datepicker.css';
import Layout from './Layout';

export default function RowItem({ data, index, props }) {
    return (
        <tr>
            {props.children}
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
