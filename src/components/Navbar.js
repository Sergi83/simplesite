import React from 'react';
import { Link } from 'react-router-dom';


export default function Navbar() {
  return (
    <div id="header" className="container">

            {/* Logo */}
            <div id="logo">
                <Link to='/'>
                    {/* <img src={logo} alt='logo' className='logo' /> */}
                    <h1>Simplesite</h1>
                </Link>
            </div>

            {/* Menu */}
            <div id="menu">
                <ul>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <li>
                        <Link to='/about'>About</Link>
                    </li>
                    <li>
                        <Link to='/jobs'>Jobs</Link>
                    </li>
                    <li>
                        <Link to='/contact'>Contact</Link>
                    </li>
                </ul>
            </div>
        </div>
  );
};