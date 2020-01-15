import React from 'react';
import './App.css';
import AppBar from '@material-ui/core/AppBar';
import {Toolbar, Button} from "@material-ui/core";
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    home: {
        marginRight: theme.spacing(2),
    },
    projects: {
        flexGrow: 1,
    },
}));


function TopBar() {
    const classes = useStyles();
    return (
        <div>
            <div>
                Ben Dunk
            </div>
            <div className={classes.root}>
                <AppBar position="static">
                    <Toolbar>
                        <div className={classes.home}>
                            Home
                        </div>
                        <div className={classes.projects}>
                            Projects
                        </div>
                        <Button>
                            Button
                        </Button>
                    </Toolbar>
                </AppBar>
            </div>
        </div>
    );
}

export default TopBar;