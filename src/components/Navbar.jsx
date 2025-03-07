import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({setShowLogin}) => {

  return (
    <div>
    <nav className='navbar'>
      <Link to="/dashboard">Dashboard</Link>
      <Link to="/">Home</Link>
      <Link to="/invoices">Invoices</Link>
      <Link to="/products">Products</Link>
      <button className='nav-btn' onClick={() => setShowLogin(true)}>Sign In</button>
      </nav>
      </div>
  )
}

export default Navbar
