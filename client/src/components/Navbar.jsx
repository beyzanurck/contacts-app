import React from 'react'
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <div>
      <nav className='navbar'>
      <Link to="/" className='contact-app'> Contacts App </Link>
        <ul>
            <li>
            <Link to='/new-contact'> New Contact </Link>
            </li>
            <li>
            <Link to='/about'> About </Link>
            </li>
        </ul>
      </nav>
    </div>
  )
}
