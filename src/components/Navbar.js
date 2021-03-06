import React, { useState, useRef, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import logo from "../styles/images/computer_logo_icon.svg";

import { content } from "../content/allContent";


export default function Navbar() {

  const { linksNavbar } = content;

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
      linksContainerRef.current.style.height = "0px";
    }
  }, [showLinks]);

  return (
    <nav>
      <div className="nav-center">
        <div className="nav-header">

          {/* logo */}
          <Link to="/"><img src={logo} alt="logo" className="logo" /></Link>

          {/* button -> show/hide mobile menu */}
          <button
            className="nav-toggle"
            onClick={() => setShowLinks(!showLinks)}
          >
            <FaBars />
          </button>
        </div>

        {/* mobile menu */}
        <div className="links-container" ref={linksContainerRef}>

          <ul className="links" ref={linksRef}>

            {/* show navbar links */}
            {linksNavbar.map((link) => {
              const { id, url, text } = link;

              return (
                <li key={id}>
                  <NavLink to={url} className="a" activeClassName="active">
                    {text}
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </div>
        
      </div>
    </nav>
  );
}
