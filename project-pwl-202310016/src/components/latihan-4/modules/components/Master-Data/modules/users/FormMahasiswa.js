import React, { useState } from "react";
import { openModal } from "../../../../../layouts/components/modals/ModalPopUp";
import PackageJSON from "../../../../../../../../package.json";
import axios from "axios";
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

export function FormMahasiswa(props) {
  var today = new Date();
  const currDate = formatDate(today);
  const [postData, setPostData] = useState({
    npm: "",
    firstname: "",
    lastname: "",
    middlename: "",
    program_id: "",
    department_id: "",
    status: false
  });

  const submitForm = (e) => {
    e.preventDefault();
    const config = {
      method: "POST",
      url: PackageJSON.system_param.hostAPI + "api/mahasiswa",
      headers: { "Content-Type": "application/json" },
      data: postData,
    };
    axios
      .request(config)
      .then((response) => {
        let results = response.data.data;
        if (results) {
          openModal({ header: "Info", message: "Successfully submited" });
          props.getMahasiswa();
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
          <h3 className="text-dark">Form Mahasiswa</h3>
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
            <label className="form-label">First Name</label>
            <input
              type="text"
              name="firstname"
              className="form-control"
              required
              defaultValue={postData.firstname}
              onChange={(e) =>
                setPostData({ ...postData, firstname: e.target.value })
              }
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Last Name</label>
            <input
              type="text"
              name="lastname"
              className="form-control"
              required
              defaultValue={postData.lastname}
              onChange={(e) =>
                setPostData({ ...postData, lastname: e.target.value })
              }
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Middle Name</label>
            <input
              type="text"
              name="middlename"
              className="form-control"
              defaultValue={postData.middlename}
              onChange={(e) =>
                setPostData({ ...postData, middlename: e.target.value })
              }
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Program ID</label>
            <input
              type="text"
              name="program_id"
              className="form-control"
              defaultValue={postData.program_id}
              onChange={(e) =>
                setPostData({ ...postData, program_id: e.target.value })
              }
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Department ID</label>
            <input
              type="text"
              name="department_id"
              className="form-control"
              defaultValue={postData.department_id}
              onChange={(e) =>
                setPostData({ ...postData, department_id: e.target.value })
              }
            />
          </div>
      </div>
      <div className="text-end mt-3">
        <button className="btn btn-light" type="button">
          Cancel
        </button>
        <button className="btn btn-primary" type="submit">
          Submit
        </button>
      </div>
    </form>
    </div >
  );
}
