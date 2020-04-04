import React from 'react';
import '../App.css';
import AppBar from '@material-ui/core/AppBar';
import ProjectMenu from './ProjectMenu';
import StyledButton from "./StyledButton";
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
  //console.log(`Props are ${JSON.stringify(props)}`);


  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClose = () => {
    setAnchorEl(null);
  };


  const handleClick = event => {
        setAnchorEl(event.currentTarget);
    };



    const drone = () => {
        setAnchorEl(null);
        props.history.push('/projects/drone')
    };

    const music = () => {
        setAnchorEl(null);
        props.history.push('/projects/music')
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
                            <StyledButton destination={'/'} label={'Ben Dunk'} />
                        </div>

                        <div className={classes.menu_bar_item}>
                          <StyledButton destination={'/about'} label={'About'} />
                        </div>
                        <div className={classes.menu_bar_item}>
                            <Button
                                aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}
                                style={{color: '#FFFFFF' }}
                            >
                                Projects
                            </Button>

                            <ProjectMenu onClose={handleClose} anchorEl={anchorEl}>
                                <MenuItem onClick={drone}>Drone</MenuItem>
                                <MenuItem onClick={music}>Music</MenuItem>
                            </ProjectMenu>
                            
                        </div>
                        <div className={classes.menu_bar_item}>
                            <StyledButton destination={'/contact'} label={'Contact'} />
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
