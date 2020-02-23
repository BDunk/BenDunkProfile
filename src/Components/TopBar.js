import React from 'react';
import '../App.css';
import AppBar from '@material-ui/core/AppBar';
import {Toolbar, Button} from "@material-ui/core";
import {makeStyles} from '@material-ui/core/styles';


const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        alignItems: 'center',
    },
    menu_bar_item: {
        flexGrow: 1,
    },
}));

function TopBar(props) {
    console.log(`Props are ${JSON.stringify(props)}`);

    const classes = useStyles();
    return (
        <div className={classes.root}>
            <div>
                Ben Dunk
                <AppBar position="static">
                    <Toolbar>
                        <div className={classes.menu_bar_item}>
                            <Button
                                onClick = {() => props.history.push('/')}
                            >
                                Home
                            </Button>
                        </div>
                        <div className={classes.menu_bar_item}>
                            <Button
                                onClick = {() => props.history.push('/about')}
                            >
                                About
                            </Button>
                        </div>
                        <div className={classes.menu_bar_item}>
                            <Button
                                onClick = {() => props.history.push('/projects')}
                            >
                                Projects
                            </Button>
                        </div>
                        <div className={classes.menu_bar_item}>
                            <Button
                                onClick = {() => props.history.push('/contact')}
                            >
                                Contact
                            </Button>
                        </div>
                    </Toolbar>
                </AppBar>
            </div>
        </div>
    );
}

export default TopBar;