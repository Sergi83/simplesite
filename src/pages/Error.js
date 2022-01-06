import React from 'react';
import { Link } from 'react-router-dom';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';


const Error = () => {
    return (
        <>
            <main className="wrapper">
                <div className="container">
                    <Navbar/>
                    <div className="content"><br/>
                        <div className="title">
                            <h3>No such page</h3>
                            <br/>
                            <Link to="/">
                                to homepage
                            </Link>
                        </div>
                    </div>
                </div>
            </main>
            <Footer/>
        </>
    );
};

export default Error;

// <>
//     <Navbar />
//     <section className="error-page section">
//         <div className="error-container">
//             <h1></h1>
//             <Link to="/" className="btn btn-primary">
//             back home
//             </Link>
//         </div>
//     </section>
//     <Footer />
// </>