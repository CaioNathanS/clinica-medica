import React from 'react';
import './Header.css';
import logo from '../../assets/logo.jpg';
export function Header() {

  return (
    <div className='header-Container'>
      <div className='header-logo'>
        <img src={logo} alt='logo'/>
      </div>
    </div>
  );
}