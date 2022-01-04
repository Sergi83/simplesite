import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../styles/images/computer_logo_icon.svg';


export default function Navbar() {
  return (
    <div id="header" className="container">

            {/* Logo */}
            <div id="logo">
                <Link to='/'>
                    {/* {logo
                    ? <img src={logo} alt='computer logo' className='logo' />
                    : <h1>Simplesite</h1>} */}
                    <h1>Simplesite</h1>
                </Link>
            </div>

            {/* Menu */}
            <div id="menu">
                <ul>
                    <li>
                        <Link to='/'>Homepage</Link>
                    </li>
                    <li>
                        <Link to='/clients'>Our Clients</Link>
                    </li>
                    <li>
                        <Link to='/about'>About us</Link>
                    </li>
                    <li>
                        <Link to='/careers'>Careers</Link>
                    </li>
                    <li>
                        <Link to='/contact'>Contact</Link>
                    </li>
                </ul>
            </div>
        </div>
  );
};