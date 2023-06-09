import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { NavLink } from 'react-router-dom';

export default class Home extends Component {
  render() {
    return (
      <div className='container'>
        <h1>Hello this is a HOME page</h1>
        <p className="text-center">
          Clik <NavLink to="/profile">here</NavLink> to access the profile page.
          Clik <NavLink to="/explore">here</NavLink> to access the explore page.
        </p>
      </div>
    )
  }
}
