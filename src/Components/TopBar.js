import React from 'react';
import '../App.css';
import AppBar from '@material-ui/core/AppBar';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import {Toolbar, Button} from "@material-ui/core";
import {makeStyles} from '@material-ui/core/styles';
import { withRouter } from "react-router";



const useStyles = makeStyles(theme => ({
    root: {
    },
    title: {
        marginLeft: "40px",
    },
    menu_bar_item: {
        marginLeft: "40px",
        marginRight: "40px",
    },
}));



function TopBar(props) {
    console.log(`Props are ${JSON.stringify(props)}`);

    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = event => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const classes = useStyles();
    return (
        <div className={classes.root}>
            <div className={classes.menu_bar_item}>
                <Button
                    onClick = {() => props.history.push('/')}
                >
                    Ben Dunk
                </Button>
            </div>

            <div>


                <AppBar position="static">
                    <Toolbar>

                        <div className={classes.menu_bar_item}>
                            <Button
                                onClick = {() => props.history.push('/about')}
                            >
                                About
                            </Button>
                        </div>
                        <div className={classes.menu_bar_item}>
                            <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                                Open Menu
                            </Button>
                            <Menu
                                id="simple-menu"
                                anchorEl={anchorEl}
                                keepMounted
                                open={Boolean(anchorEl)}
                                onClose={handleClose}
                            >
                                <MenuItem onClick={handleClose}>Drone</MenuItem>
                                <MenuItem onClick={handleClose}>Lorem</MenuItem>
                                <MenuItem onClick={handleClose}>Ipsum</MenuItem>
                            </Menu>
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
            <div>

            </div>
        </div>
    );
}

export default withRouter(TopBar);