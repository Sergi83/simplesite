import React from 'react';

// import components
import Navbar from '../components/Navbar';
import Banner from '../components/Banner';
import About from './About';


const Home = () => {
    return (
        <>
            <header id="header-wrapper">
                <div id="header" className="container">

                    {/* Header container */}
                    <Navbar />
                    <br/>

                    {/* Header banner */}
                    <div id="header-featured">
                        <Banner/>
                    </div>

                </div>
            </header>
            <About />
        </>    
    );
};

export default Home;
