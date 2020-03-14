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
        marginLeft: "15px",
        marginRight: "25px",
    },
    menu_bar_item: {
        marginLeft: "15px",
        marginRight: "25px",
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
            <div>
                <AppBar
                    position="static"
                    style={{ background: '#482e55' }}
                >
                    <Toolbar>
                        <div className={classes.title}>
                            <Button
                                onClick = {() => props.history.push('/')}
                                style={{ fontSize: '20px', color: '#FFFFFF' }}
                            >
                                Ben Dunk
                            </Button>
                        </div>

                        <div className={classes.menu_bar_item}>
                            <Button
                                onClick = {() => props.history.push('/about')}
                                style={{color: '#FFFFFF' }}
                            >
                                About
                            </Button>
                        </div>
                        <div className={classes.menu_bar_item}>
                            <Button
                                aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}
                                style={{color: '#FFFFFF' }}
                            >
                                Projects
                            </Button>
                            <Menu
                                id="simple-menu"
                                anchorEl={anchorEl}
                                keepMounted
                                open={Boolean(anchorEl)}
                                onClose={handleClose}
                            >
                                <MenuItem onClick={handleClose}>Drone</MenuItem>
                                <MenuItem onClick={handleClose}>Music</MenuItem>

                            </Menu>
                        </div>
                        <div className={classes.menu_bar_item}>
                            <Button
                                onClick = {() => props.history.push('/contact')}
                                style={{color: '#FFFFFF' }}
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