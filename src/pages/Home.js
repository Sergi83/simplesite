import React from 'react';

// import components
import Navbar from '../components/Navbar';
import Banner from '../components/Banner';


const Home = () => {
    return (
        <>
            <header id="header-wrapper">

                {/* Header container */}
                <Navbar />
                <br/>

                {/* Header banner */}
                <div id="header-featured">
                    <Banner/>
                </div>

            </header>
        </>
    );
};

export default Home;
