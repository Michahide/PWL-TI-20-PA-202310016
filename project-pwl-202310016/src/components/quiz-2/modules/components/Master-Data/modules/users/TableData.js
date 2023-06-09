import React from "react";
import AlertInfo from './../../../../../../latihan-3-1/layouts/components/alerts/AlertInfo';
import Messages from './../../../Messages/Messages';
export default function TableData({ data, message }) {
  const ItemProduct = ({ item, index }) => {
    return (
      <tr>
        <td>{item.firstname}</td>
        <td>{item.middlename}</td>
        <td>{item.lastname}</td>
        <td>{item.birthdate}</td>
        <td>{item.npm}</td>
      </tr>
    );
  };


  return (
    <div className="list-users">
      <table className="table table-light">
        <thead className="thead-light">
          <tr>
            <th>First Name</th>
            <th>Middle Name</th>
            <th>Last Name</th>
            <th>Birth Date</th>
            <th>NPM</th>
          </tr>
        </thead>
        {
          (Object.values(data).length > 0) ? (
            data.map((e, index) => (
              <tbody key={index}>
                <ItemProduct item={e} index={index} />
              </tbody>
            ))
          ) : (
            <div className="col-12">
              <p>No record found</p>
            </div>
          )
        }
      </table>
    </div>
  );
}
