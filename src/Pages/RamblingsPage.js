//To be used at a later date when I think I can actually do this

import React from 'react';
import {Button} from "@material-ui/core/index";

function RamblingsPage(props) {
    return (
        <div>
             This is the ramblings page
            <Button
                onClick = {() => props.history.push('/')}
            >
                Go to Main
            </Button>
        </div>
    );
}

export default RamblingsPage;