import React from 'react';
import TopBar from './Components/TopBar.js'
import {Button} from "@material-ui/core";

function ProjectPage(props) {
    return (
        <div>
            <TopBar />
             This is the project page
            <Button
                onClick = {() => props.history.push('/')}
            >
                Go to Main
            </Button>
        </div>
    );
}

export default ProjectPage;