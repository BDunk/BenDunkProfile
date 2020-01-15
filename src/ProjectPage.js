import React from 'react';
import {Button} from "@material-ui/core";

function ProjectPage(props) {
    return (
        <div>
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