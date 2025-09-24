import React from 'react'
import { NavLink } from 'react-router-dom'

export default function NtkNavBar() {
  return (
    <nav className='text-center' style={{padding:'1rem', background:'#eee'}}>
        <NavLink to={'/'} style={{padding:'0.5rem 1rem'}}>Home</NavLink>
        <NavLink to={'/info'} style={{padding:'0.5rem 1rem'}}>Thông tin sinh viên</NavLink>
        <NavLink to={'/list'} style={{padding:'0.5rem 1rem'}}>Danh sách sinh viên</NavLink>
    </nav>
  )
}
