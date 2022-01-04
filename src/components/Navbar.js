import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import { linksNavbar } from '../content/navContent';
import logo from '../styles/images/computer_logo_icon.svg';


// TODO: make navbar with hooks, mapping links, get from external data file

export default function Navbar() {

    // hook for button -> show/hide mobile menu
    const [showLinks, setShowLinks] = useState(false);

    // ref hook open/close container for navbar links inside mobile menu
    const linksContainerRef = useRef(null);

    // measure space for rendering navbar links
    const linksRef = useRef(null);

    // depending on open or close mobile menu measure space for links and establish the height of the links container
    useEffect(() => {

        const linksHeight = linksRef.current.getBoundingClientRect().height;

        if (showLinks) {
            linksContainerRef.current.style.height = `${linksHeight}px`;
        } else {
            linksContainerRef.current.style.height = '0px';
        }
    }, [showLinks]);
        
    return (
        <nav>
            <div className='nav-center'>
                <div className='nav-header'>
                    {/* logo */}
                    <img src={logo} alt="logo"  className='logo'/>
                    
                    {/* button -> show/hide mobile menu */}
                    <button className="nav-toggle" onClick={() => setShowLinks(!showLinks)} >
                        <FaBars />
                    </button>
                </div>
                <div className='links-container' ref= {linksContainerRef}>
                    <ul className='links' ref={linksRef}>
                        {/* show navbar links */}
                        {linksNavbar.map((link) => {
                            const { id, url, text } = link;
                            return (
                                <li key={id} >
                                    <Link to={url} className='a' >{text}</Link>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </div>
        </nav>
    );
};

// old navbar
{/* <> */}
{/* Logo */}
//     <div id="logo">
//         <Link to="/">
//             {/* {logo
//             ? <img src={logo} alt='computer logo' className='logo' />
//             : <h1>Simplesite</h1>} */}
//             <h1>Simplesite</h1>
//         </Link>
//     </div>

//     {/* Menu */}
//     <div id="menu">
//         <ul>
//             <li>
//                 <Link to='/'>Homepage</Link>
//             </li>
//             <li>
//                 <Link to='/clients'>Our Clients</Link>
//             </li>
//             <li>
//                 <Link to='/about'>About us</Link>
//             </li>
//             <li>
//                 <Link to='/careers'>Careers</Link>
//             </li>
//             <li>
//                 <Link to='/contact'>Contact</Link>
//             </li>
//         </ul>
//     </div>
// </>