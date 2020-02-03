import React from 'react';
import {Button} from "@material-ui/core";

function ContactPage(props) {
    return (
        <div>
             This is the Contact page
            <Button
                onClick = {() => props.history.push('/')}
            >
                Go to Main
            </Button>
        </div>
    );
}

export default ContactPage;