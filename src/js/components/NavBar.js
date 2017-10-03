import React from 'react'
import { NavLink } from 'react-router-dom'

const NavBar = () => (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <NavLink to='/' className="navbar-brand">Universal App</NavLink>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav">
        <li className="nav-item active">
          <NavLink to='/' className="nav-link"> Home </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to='/list' className="nav-link">List</NavLink>
        </li>
      </ul>
    </div>
  </nav>
)

export default NavBar
