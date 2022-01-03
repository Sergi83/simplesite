import React from 'react';
import { Link } from 'react-router-dom';


const Error = () => {
    return (
        <section >
            <div >
                <h1>No such page</h1>
                <Link to="/" >
                back home
                </Link>
            </div>
        </section>
    );
};

export default Error;
