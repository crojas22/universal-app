import React from 'react'
import { NavLink } from 'react-router-dom'

const NavBar = () => (
  <div>
    <NavLink to='/' >Home</NavLink>
    <NavLink to='/list' >List</NavLink>
  </div>
)

export default NavBar
