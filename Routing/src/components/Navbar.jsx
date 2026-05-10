import React from 'react'
import { Link } from 'react-router-dom'
import '../css/Navbar.css'
function Navbar() {
  return (
    <div className='nav'>
        <ul>
            <li>
                <Link to="/">Home</Link>
                
            </li>
            <li>
            <Link to="/about">About</Link>
            </li>
            <li>
                <Link to="/dashboard">Dashboard</Link>
            </li>
        </ul>
    </div>
  )
}

export default Navbar