import React from 'react'
import './Navbar.css'
import {Link} from 'react-router-dom'
const Navbar = () => {
  return (
    <div>
        <nav>
            <ul className="navbar">
                <li><Link className='link' to="/">Home</Link></li>
                <li><Link className='link' to="/about">About</Link></li>
                <li><Link className='link' to="/service">Service</Link></li>
                <li><Link className='link' to="/contact">Contact</Link></li>
                <li><Link className='link' to="/usestate">UseState</Link></li>    
                <li><Link className='link' to="/hook">Hook</Link></li>
                <li><Link className='link' to="/login">login</Link></li>
                <li><Link className='link' to="/signup">signup</Link></li>
                <li><Link className='link' to="/Todo">Todo</Link></li>
    
            </ul>
        </nav>
    </div>
  )
}

export default Navbar