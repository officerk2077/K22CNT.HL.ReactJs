import React from 'react'
import { NavLink } from 'react-router-dom'
import '../NavBar.css'

export default function NtkNavBar() {
  return (
    <nav className="navbar">
      <NavLink to="/" className="nav-item">Home</NavLink>
      <NavLink to="/about" className="nav-item">About</NavLink>
      <NavLink to="/contact" className="nav-item">Contact</NavLink>
      <NavLink to="/car" className="nav-item">Cars</NavLink>
      <NavLink to="/users" className="nav-item">Users</NavLink>
    </nav>
  )
}
