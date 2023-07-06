import React, { Component } from 'react'
// import Widget1 from './Widget1'
import jwt_decode from 'jwt-decode';

export default class Home extends Component {
  render() {
    var id_token = localStorage.getItem("id_token");
    var decodeIDToken = jwt_decode(id_token);
    // var decodeIDToken = jwt_decode(id_token);
    return (
      <div className='container'>
        <div className='row'>
          <div className='col-lg-8'>
            <h1>
              Hello
              <span className='text-danger'>
                {decodeIDToken.identity.firstname} 
                {decodeIDToken.identity.middlename} 
                {decodeIDToken.identity.lastname}
              </span>, this is a HOME page
            </h1>
          </div>
          <div className='col-lg-4'>
            <div className='bg-info p-3 rounded'>
              <p className='fw-bolder'>ID Token: </p>
              <pre>{id_token}</pre>
              <p className='fw-bolder'>Decode ID Token: </p>
              <pre className='bg-light '>
                {JSON.stringify(decodeIDToken, undefined, 2)}
              </pre>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
