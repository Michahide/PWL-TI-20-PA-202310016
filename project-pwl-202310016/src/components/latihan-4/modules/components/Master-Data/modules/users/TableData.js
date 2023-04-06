import React from "react";
import AlertInfo from './../../../../../../latihan-3-1/layouts/components/alerts/AlertInfo';
import Messages from './../../../Messages/Messages';
export default function TableData({data, message}) {
  const ItemProduct = ({item}) => {
    return (
      // <div className="card item mb-8">
      //   <div className="card-body p-0">
      //     <div className="img">
      //       <img
      //         src={require("../../../../../assets/media/products/user.jpg")}
      //         alt="logo-product"
      //         className="w-100"
      //       />
      //     </div>
      //     <div className="desc">
      //       <p className="title ps-7 mb-2 px-2">{item.firstName}</p>
      //       <p className="fw-bolder mb-2 px-2 fs-6">{item.npm}</p>
      //       <div className="info px-2 mb-2">
      //         <div className="d-flex justify-content-start align-items-center">
      //           <div className="stock me-2">
      //             <span className="ms-2">Birthdate {item.birthDate}</span>
      //           </div>
      //         </div>
      //       </div>
      //     </div>
      //   </div>
      // </div>
      <tr>
        <td>{item.firstname}</td>
        <td>{item.middlename}</td>
        <td>{item.lastname}</td>
        <td>{item.birthdate}</td>
        <td>{item.npm}</td>
        {/* <td>{item.programStudy}</td>
        <td>{item.programs}</td> */}
      </tr>
    );
  };

  // const ItemUsers = ({item}) => {
  //   return (
  //     <tr>
  //       <td>
  //         {item.firstName}
  //       </td>
  //     </tr>
  //   );
  // };

  return (
    <div className="list-users">
      {/* <div className="row">
        {
          (Object.values(data).length > 0) ? (
          data.map((e, index) => (
            <div className="col-3" key={index}>
              <ItemProduct item={e} />
            </div>
          ))
          ) : (
            <div className="col-12">
              <p>No record found</p>
            </div>
          )
        }
      </div> */}
      <table className="table table-light">
        <thead className="thead-light">
          <tr>
            <th>First Name</th>
            <th>Middle Name</th>
            <th>Last Name</th>
            <th>Birth Date</th>
            <th>NPM</th>
            {/* <th>Program Study</th> */}
          </tr>
        </thead>
        {
          (Object.values(data).length > 0) ? (
          data.map((e, index) => (
            <tbody key={index}>
              <ItemProduct item={e} />
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
