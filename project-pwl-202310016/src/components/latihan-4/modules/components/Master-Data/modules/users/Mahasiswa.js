import React, { useEffect, useState } from "react";
import { FormUsers } from "./FormUsers";
import TableData from "./TableData";
import axios from "axios";
import LoadingSpin from "../../../../../layouts/components/loadings/LoadingSpin";
import AlertInfo from "../../../../../layouts/components/alerts/AlertInfo";
import PackageJSON from "../../../../../../../../package.json";
import { DatePicker } from 'react-datepicker';
import CallAxios from '../../../Library/CallAxios';

export function Mahasiswa() {
  //const [mahasiswa, setMahasiswa] = useState([]);
  const [mahasiswa, setMahasiswa] = useState({
    loading: false,
    data: [],
    message: ""
  });

  const getMahasiswa = () => {
    setMahasiswa({ ...mahasiswa, loading: true });
    const config = {
      method: 'GET',
      maxBodyLength: Infinity,
      url: PackageJSON.system_param.hostAPI+"api/mahasiswa",
      headers: {}
    };

    axios(config)
      .then((response) => {
        // console.log(JSON.stringify(response.data));
        //setMahasiswa(response.data.data)
        //console.log(mahasiswa)
        let results = response.data.data;
        if(results){
          setMahasiswa({ ...mahasiswa, loading: false, message:"", data: results });
        } else {
          setMahasiswa({ ...mahasiswa, loading: false, message:"No record found"});
        }
      })
      .catch((error) => {
        //console.log(error);
        setMahasiswa({ ...mahasiswa, loading: false, message: error, data:[] });
      });
  }

  useEffect(() => {
    getMahasiswa()
  }, [])

  return (
    <div id="mahasiswa-master">
          <FormMahasiswa getMahasiswa={getMahasiswa} />
    </div>
  );
}
