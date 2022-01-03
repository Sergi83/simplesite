import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';


const Error = () => {
    return (
        <>
            <Navbar />
            <section className="error-page section">
                <div className="error-container">
                    <h1>No such page</h1>
                    <Link to="/" className="btn btn-primary">
                    back home
                    </Link>
                </div>
            </section>
            <Footer />
        </>
    );
};

export default Error;
