import React from 'react';
import Main from '../components/Main';
// import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';


const About = () => {
    return (
        <>
            <main className="wrapper">
                <Link to="/" >
                    to homepage
                </Link>
                <Main/>
            </main>
            <Footer />
        </>
    );
};

export default About;
