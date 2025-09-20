// Menu điều hướng site
import React from 'react'
import { NavLink } from 'react-router-dom'

export default function NtkNavBar() {
  return (
    <nav className='text-center' style={{padding:'1rem', background:'#eee'}}>
        <NavLink to={'/'} style={{padding:'0.5rem 1rem'}}>Home</NavLink>
        <NavLink to={'/about'} style={{padding:'0.5rem 1rem'}}>About</NavLink>
        <NavLink to={'/contact'} style={{padding:'0.5rem 1rem'}}>Contact</NavLink>
        <NavLink to={'/product'} style={{padding:'0.5rem 1rem'}}>Product</NavLink>

    </nav>
  )
}
