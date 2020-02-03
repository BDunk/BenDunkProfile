import React from 'react';
import {Button} from "@material-ui/core";

function AboutPage(props) {
    return (
        <div>
             This is the about page
            <Button
                onClick = {() => props.history.push('/')}
            >
                Go to Main
            </Button>
        </div>
    );
}

export default AboutPage;