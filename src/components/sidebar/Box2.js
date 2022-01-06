import React from 'react';
import { Link } from 'react-router-dom';
import { sidebarBox2 } from '../../content/sidebarContent';


export const Box2 = () => {
    const { boxTitle, textLinks } = sidebarBox2;
    return (
        <div className="sbox2">
                    <h5>{boxTitle}</h5>
                    
                    <ul className="style2">
                        {textLinks.map((itemLink, index) => {
                            return <li key={index} >
                                <Link to="/contact"> {itemLink}</Link>
                            </li>;
                        })}
                    </ul>
                </div>
    );
};
