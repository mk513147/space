import React from 'react'
import './Navbar.css'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='navbar-container'>
      <div className="logo"><svg xmlns="http://www.w3.org/2000/svg" width="48" height="48"><g fill="none" fillRule="evenodd"><circle cx="24" cy="24" r="24" fill="#FFF" /><path fill="#0B0D17" d="M24 0c0 16-8 24-24 24 15.718.114 23.718 8.114 24 24 0-16 8-24 24-24-16 0-24-8-24-24z" /></g></svg></div>
      <div className="line"></div>

      <ul className='list'>
        <NavLink to="/" className={({ isActive }) => isActive ? 'active' : ''}>
          <li>
            <strong>00</strong> HOME
          </li>
        </NavLink>
        <NavLink to="/destination" className={({ isActive }) => isActive ? 'active' : ''}>
          <li>
            <strong>01</strong> DESTINATION
          </li>
        </NavLink>
        <NavLink to="/crew" className={({ isActive }) => isActive ? 'active' : ''}>
          <li>
            <strong>02</strong> CREW
          </li>
        </NavLink>
        <NavLink to="/technology" className={({ isActive }) => isActive ? 'active' : ''}>
          <li>
            <strong>03</strong> TECNOLOGY
          </li>
        </NavLink>
      </ul>

    </div>
  )
}

export default Navbar
