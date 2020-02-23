import React from 'react';
import {Button} from "@material-ui/core";
import TopBar from "./Components/TopBar";

function ContactPage(props) {
    return (
        <div>
            <header>
                <TopBar />
            </header>
            <body>
            This is the contact page
            </body>
        </div>
    );
}

export default ContactPage;