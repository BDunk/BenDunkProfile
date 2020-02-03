import React from 'react';
import './App.css';
import AppBar from '@material-ui/core/AppBar';
import {Toolbar, Button} from "@material-ui/core";
import {makeStyles} from '@material-ui/core/styles';
import {
    Link
} from 'react-router-dom'

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        alignItems: 'center',
    },
    menu_bar_item: {
        flexGrow: 1,
    },
}));

function MainPage(props) {
    console.log(`Props are ${JSON.stringify(props)}`);

    const classes = useStyles();
    return (
            <div className={classes.root}>
                <AppBar position="static">
                    <Toolbar>
                        <div className={classes.menu_bar_item}>
                            Ben Dunk
                        </div>
                        <div className={classes.menu_bar_item}>
                            About
                        </div>
                        <div className={classes.menu_bar_item}>
                            Projects
                        </div>
                        <div className={classes.menu_bar_item}>
                            Ramblings
                        </div>
                        <div className={classes.menu_bar_item}>
                            Contact
                        </div>
                    </Toolbar>
                </AppBar>
            </div>
    );
}

export default MainPage;


//            <Link to={'./projects'}>
//                 Go to projects
//             </Link>