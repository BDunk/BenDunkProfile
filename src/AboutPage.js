import React from 'react';
import {Button} from "@material-ui/core";
import TopBar from "./Components/TopBar";

function AboutPage(props) {
    return (
        <div>
            <header>
                <TopBar />
            </header>
            <body>
                This is the about page
            </body>
        </div>
    );
}

export default AboutPage;