import React from 'react';
import '../App.css';
import TopBar from '../Components/TopBar.js';
import head_shot from '../Images/1.jpg'
import {makeStyles} from "@material-ui/core";


const useStyles = makeStyles(theme => ({
    root: {
    },
    photo: {
        marginLeft: "15px",
        marginRight: "25px",
    },

}));


function MainPage(props) {
    const classes = useStyles();
    return (
            <div>
                <header>
                <TopBar />
                </header>
                <div className={classes.photo}>
                    <img
                        
                        src={head_shot}
                        alt="Logo"
                    />
                        My name is Ben Dunk
                </div>

            </div>
    );
}

export default MainPage;
