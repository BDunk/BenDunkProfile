import React from 'react';

import {
    Link
} from 'react-router-dom'

import {Button} from "@material-ui/core";

function MainPage(props) {
    console.log(`Props are ${JSON.stringify(props)}`);

    return (
        <div>
            Main Page

            {/*todo: can update history directly */}
            <Button
                onClick = {() => props.history.push('/projects')}
            >
                Go to Projects
            </Button>
        </div>
    );
}

export default MainPage;


//            <Link to={'./projects'}>
//                 Go to projects
//             </Link>