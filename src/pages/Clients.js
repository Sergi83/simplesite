import React from 'react';
import { Link } from 'react-router-dom';


const Clients = () => {
    return (
        <div>
            <h3>[Our Clients]</h3>
            <div>
                <Link to="/" >
                    to homepage
                </Link>
            </div>
        </div>
    );
};

export default Clients;
