import React from 'react';
import {Button} from "@material-ui/core";

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