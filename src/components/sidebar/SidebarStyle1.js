import React from 'react';
import { Link } from 'react-router-dom';

import { sidebarStyle1TextContent } from '../../content/sidebarContent';


const SidebarStyle1 = () => {
    
    return (
        <ul className="style1">
            {sidebarStyle1TextContent.map((liItem,index) => {
                return (index === 0)
                    ?(
                        <li className="sidebar_1li" key={index} >
                            <h5>{liItem.title}</h5>
                            <p><Link to='/clients'>{liItem.textLink}</Link></p>
                        </li>
                    )
                    :(
                        <li key={index} >
                            <h5>{liItem.title}</h5>
                            <p><Link to='/clients'>{liItem.textLink}</Link></p>
                        </li>
                    );
                }
            )}
        </ul>
    );
};

export default SidebarStyle1;
