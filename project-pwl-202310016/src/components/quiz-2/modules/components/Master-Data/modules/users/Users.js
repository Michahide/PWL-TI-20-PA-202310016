import React, { useEffect, useState } from "react";
import { FormUsers } from "./FormUsers";
import TableData from "./TableData";
import axios from "axios";
import LoadingSpin from "../../../../../layouts/components/loadings/LoadingSpin";
import AlertInfo from "../../../../../layouts/components/alerts/AlertInfo";
import PackageJSON from "../../../../../../../../package.json";
import { DatePicker } from 'react-datepicker';
import CallAxios from './../../../Library/CallAxios';

export function Users() {
  //const [users, setUsers] = useState([]);
  const [users, setUsers] = useState({
    loading: false,
    data: [],
    message: ""
  });

  const getUsers = () => {
    setUsers({ ...users, loading: true });
    const config = {
      method: 'GET',
      maxBodyLength: Infinity,
      url: PackageJSON.system_param.hostAPI+"api/students",
      headers: {}
    };

    axios(config)
      .then((response) => {
        // console.log(JSON.stringify(response.data));
        //setUsers(response.data.data)
        //console.log(users)
        let results = response.data.data;
        if(results){
          setUsers({ ...users, loading: false, message:"", data: results });
        } else {
          setUsers({ ...users, loading: false, message:"No record found"});
        }
      })
      .catch((error) => {
        //console.log(error);
        setUsers({ ...users, loading: false, message: error, data:[] });
      });
  }

  useEffect(() => {
    getUsers()
  }, [])

  return (
    <div id="users-master">
      <div className="row">
        <div className="col-sm-12 col-lg-8">
          <div className="d-flex flex-wrap flex-stack pb-7">
            <div className="d-flex flex-wrap align-items-center my-1">
              <h3 className="fw-bolder me-5 my-1">{Object.values(users.data).length} numbers of users</h3>
            </div>
            <div className="d-flex flex-wrap my-1">
              <div className="d-flex my-0">
                <div className="input-group me-3">
                  <input
                    type="text"
                    name="search"
                    className="form-control"
                    placeholder="Search here"
                    autoComplete="off"
                  />
                  <span className="input-group-text">
                    <i className="bi bi-search"></i>
                  </span>
                </div>
                <select name="sort" className="form-select">
                  <option value="">Sort by</option>
                  <option value="">Name</option>
                  <option value="">NPM</option>
                </select>
              </div>
            </div>
          </div>

          {(users.loading) ? <LoadingSpin /> : ''}
          {(users.message) ? <AlertInfo message={users.message.name+". "+users.message.message} variant="danger" /> : ""}
            <div className={"users-items "+ +((users.loading) ? "d-none": "")}>
              <TableData data={users.data} message={users.message} />
            </div>

        </div>
        <div className="col-sm-12 col-lg-4">
          <FormUsers getUsers={getUsers} />
        </div>
      </div>
    </div>
  );
}
