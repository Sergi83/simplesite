import React from 'react';
import Sidebar from './sidebar/Sidebar';

import mainTextContent from '../content/mainContent';


const Main = () => {

    

    return (
        <>

            {/* Main page Container */}
            <div id="page" className="container">

                {/* Content */}
                <div id="content_sidebars"><br/>
                    <div className="title">
                        <h3>Welcome to our website</h3>
                        <br/>
                        <span className="byline">Mauris vulputate dolor sit amet nibh</span>
                    </div><br/>

                    <p>
                    {/* <img src="images/key_type.jpg" alt="Keyboard" width="100%" className="image image-full"> */}

                    </p>
                    <br/>
                    {mainTextContent.map((p,i) => <p key={i} >{p}</p>)}

                </div>
                <Sidebar />
            </div>
            <br/>
        </>
    );
};

export default Main;
