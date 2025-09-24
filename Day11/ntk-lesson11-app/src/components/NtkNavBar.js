// // Menu điều hướng site
// import React from 'react'
// import { NavLink } from 'react-router-dom'

// export default function NtkNavBar() {
//   return (
//     <nav className='text-center' style={{padding:'1rem', background:'#eee'}}>
//         <NavLink to={'/'} style={{padding:'0.5rem 1rem'}}>Home</NavLink>
//         <NavLink to={'/about'} style={{padding:'0.5rem 1rem'}}>About</NavLink>
//         <NavLink to={'/contact'} style={{padding:'0.5rem 1rem'}}>Contact</NavLink>
//         <NavLink to={'/product'} style={{padding:'0.5rem 1rem'}}>Product</NavLink>
//         <NavLink to={'/users'} style={{padding:'0.5rem 1rem'}}>Users</NavLink>
//     </nav>
//   )
// }
import React from 'react'
import { NavLink } from 'react-router-dom'
import '../NavBar.css'

export default function NtkNavBar() {
  return (
    <nav className="navbar">
      <NavLink to="/" className="nav-item">Home</NavLink>
      <NavLink to="/about" className="nav-item">About</NavLink>
      <NavLink to="/contact" className="nav-item">Contact</NavLink>
      <NavLink to="/product" className="nav-item">Product</NavLink>
      <NavLink to="/users" className="nav-item">Users</NavLink>
      <NavLink to="/categories" className="nav-item">Category</NavLink>
    </nav>
  )
}
