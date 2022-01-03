import React from 'react';
import SidebarStyle1 from './SidebarStyle1';
import { Box1 } from './Box1';
import { Box2 } from './Box2';


const Sidebar = () => {
    return (
        <div id="sidebar">

            {/* Sidebar with one colon */}
            <br/>
            <SidebarStyle1 />

            {/* Sidebar with two colons (sbox1, sbox2) */}
            <br/>
            <div id="stwo-col">
                <Box1 />
                <Box2 />
            </div>
        </div>
    );
};

export default Sidebar;
