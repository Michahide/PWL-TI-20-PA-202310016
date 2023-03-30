import React, { useState } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Navigate } from "react-router-dom";
import { openModal } from '../../../../layouts/components/modals/ModalPopUp';
import ModalPopUp from './../../../../layouts/components/modals/ModalPopUp';

export default function FormLogin() {
    var today = new Date();
    const objLogin = {
        email: '',
        password: ""
    }

    const [login, setLogin] = useState(objLogin);
    const [successSubmit, setSuccsessSubmit] = useState(false);

    const handlerSubmit = (e) => {
        e.preventDefault();
        var formid = e.target.id;
        var target = document.getElementById(formid);
        var myButton = target.getElementsByClassName("btn-submit")[0];
        myButton.textContent = "Processing...";
        myButton.disabled = true;
        if (login.email === "test@gmail.com" && login.password === "halo") {
            openModal({ header: "Information", message: <RenderMessage login={login} /> });
            setSuccsessSubmit(true);
        } else {
            openModal({ header: "Information", message: <p className="text-danger">Your email or password is incorrect.</p> });
        }
        myButton.textContent = "Submit";
        myButton.disabled = false;
    }

    return (
        (successSubmit) ? <Navigate to="/home" replace={true} /> : (
            <main className='mt-20 py-10'>
                <div className='card '>
                    <div className="card-header">
                        <h3 className="card-title align-items-start flex-column">
                            <span className="card-label fw-bolder text-dark">Form add data user</span>
                            <span className="text-gray-400 mt-1 fw-bold fs-6">Please fill up the form with correctly</span>
                        </h3>
                    </div>
                    <div className="card-body">
                        <form className='form-login' method='post' onSubmit={(e) => handlerSubmit(e)} id="form-login" >
                            <div className="fv-row mb-10 fv-plugins-icon-container">
                                <label className="required form-label fs-6 fw-bolder text-dark">Email</label>
                                <input type="email" name="email" required className='form-control form-control-lg form-control-solid' defaultValue={login.email} onChange={(e) => setLogin({ ...login, email: e.target.value })} />
                            </div>

                            <div className="fv-row mb-10 fv-plugins-icon-container">
                                <label className="required form-label fs-6 fw-bolder text-dark">Password</label>
                                <input type="password" name="password" required className='form-control form-control-lg form-control-solid' defaultValue={login.password} onChange={(e) => setLogin({ ...login, password: e.target.value })} />
                            </div>

                            <div className="text-center">
                                <button type="button" className='btn btn-lg btn-light'>Clear</button>
                                <button type="submit" className='btn btn-lg btn-primary mx-2 btn-submit'>Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
                <ModalPopUp />
            </main>
        )
    )
}

const RenderMessage = ({ login }) => {
    return (
        <div className="login">
            <p className="text-dark">Email: {login.email}</p>
            <p className="text-dark">Login Successful</p>
        </div>
    )
}