import React from 'react';
import Main from '../components/Main';
// import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';


const About = () => {
    return (
        <>
            <main className="wrapper">
                <Main/>
                <Link to="/" >
                back home
                </Link>
            </main>
        </>
    );
};

export default About;
