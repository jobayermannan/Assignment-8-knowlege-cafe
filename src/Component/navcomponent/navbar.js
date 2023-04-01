import React from 'react';
import './navbar.css'
import logo from '../../assets/image/xman.jpg'

const Navbar = () => {
    return (
        <div>
    <nav className="navbar">
      <div className="navbar-brand">
        <span className="company-title">ddddddd</span>
      </div>
      <div className="navbar-user">
        <img  src={logo} alt="pic" className="user-image" />
      </div>
    </nav>
 
            
        </div>
    );
};

export default Navbar;