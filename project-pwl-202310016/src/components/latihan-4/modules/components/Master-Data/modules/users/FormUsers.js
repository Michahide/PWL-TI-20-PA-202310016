import React, { useState } from "react";
import { openModal } from "../../../../../layouts/components/modals/ModalPopUp";
import PackageJSON from "../../../../../../../../package.json";
import axios from "axios";
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

export function FormUsers(props) {
  var today = new Date();
  const currDate = formatDate(today);
  const [postData, setPostData] = useState({
    birthdate: currDate,
    email: "",
    firstname: "",
    middlename: "",
    lastname: "",
    npm: "",
    // programstudy: "",
    // programs: ""
  });

  const submitForm = (e) => {
    e.preventDefault();
    const config = {
      method: "POST",
      url: PackageJSON.system_param.hostAPI + "api/students",
      headers: { "Content-Type": "application/json" },
      data: postData,
    };
    axios
      .request(config)
      .then((response) => {
        let results = response.data.data;
        if (results) {
          openModal({ header: "Info", message: "Successfully submited" });
          props.getUsers();
        } else {
          openModal({ header: "Error", message: "Failed submit" });
        }
      })
      .catch((error) => {
        openModal({ header: "Error", message: error });
      });
  };

  return (
    <div className="card bg-white">
      <div className="card-header border-0 py-3">
        <div className="card-title d-flex flex-column">
          <h3 className="text-dark">Form Users</h3>
          <p className="text-muted fs-7">
            Please fill up the form with correctly
          </p>
        </div>
      </div>
      <div className="card-body pt-0">
        <form
          method="post"
          autoComplete="off"
          id="form-users"
          onSubmit={(e) => submitForm(e)}
        >
          <div className="mb-3">
            <label className="form-label">First Name</label>
            <input
              type="text"
              name="firstName"
              className="form-control"
              required
              defaultValue={postData.firstname}
              onChange={(e) =>
                setPostData({ ...postData, firstname: e.target.value })
              }
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Middle Name</label>
            <input
              type="text"
              name="middleName"
              className="form-control"
              defaultValue={postData.middlename}
              onChange={(e) =>
                setPostData({ ...postData, middlename: e.target.value })
              }
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Last Name</label>
            <input
              type="text"
              name="lastName"
              className="form-control"
              required
              defaultValue={postData.lastname}
              onChange={(e) =>
                setPostData({ ...postData, lastname: e.target.value })
              }
            />
          </div>
          <div className="mb-3">
            <label className="form-label">NPM</label>
            <input
              type="text"
              name="npm"
              className="form-control"
              defaultValue={postData.npm}
              onChange={(e) =>
                setPostData({ ...postData, npm: e.target.value })
              }
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input
              type="email"
              name="email"
              className="form-control"
              required
              defaultValue={postData.email}
              onChange={(e) =>
                setPostData({ ...postData, email: e.target.value })
              }
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Birthdate</label>
            {/* <DatePicker
              selected={new Date(postData.birthdate)}
              onChange={(value) => setPostData({ ...postData, birthdate: formatDate(value) })}
              className="form-control form-control-lg form-control-solid"
              dateFormat="yyyy-MM-dd"
              placeholderText="Choose Date"
            /> */}
            <input
              className="form-control"
              type="date"
              placeholder="YYYY-MM-DD"
              value={postData.birthdate}
              onChange={(e) => setPostData({ ...postData, birthdate: e.target.value })}
              required
            />
          </div>
          {/* <div className="mb-3">
            <label className="form-label">Program Study</label>
            <input
              type="text"
              name="programStudyId"
              className="form-control"
              required
              defaultValue={postData.programStudy}
              onChange={(e) =>
                setPostData({ ...postData, programStudy: e.target.value })
              }
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Program</label>
            <input
              type="text"
              name="programId"
              className="form-control"
              required
              defaultValue={postData.programs}
              onChange={(e) =>
                setPostData({ ...postData, programs: e.target.value })
              }
            />
          </div> */}
          <div className="text-end mt-3">
            <button className="btn btn-light" type="button">
              Cancel
            </button>
            <button className="btn btn-primary" type="submit">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

const formatDate = (datestring) => {
  const today = new Date(datestring);
  const yyyy = today.getFullYear();
  let mm = today.getMonth() + 1; // Months start at 0!
  let dd = today.getDate();

  if (dd < 10) dd = '0' + dd;
  if (mm < 10) mm = '0' + mm;

  return yyyy + "-" + mm + "-" + dd;
}
