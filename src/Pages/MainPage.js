import React from 'react';
import '../App.css';
import TopBar from '../Components/TopBar.js';
import head_shot from '../Images/1.jpg'
import {makeStyles} from "@material-ui/core";


const useStyles = makeStyles(theme => ({
    root: {
    },
    photo: {
        width: "40%",
        display: "inline-block",
    },
    photoContainer: {
      marginLeft: "40px",
      marginTop: "40px",
      marginRight: "40px",
    },
    inlineText: {
      display: "inline",
    }

}));


function MainPage(props) {
    const classes = useStyles();
    return (
            <div>
                <header>
                <TopBar />
                </header>
                <div>
                <div className={classes.photoContainer}>
                    <img
                        className={classes.photo}
                        src={head_shot}
                        alt="Ben Dunk"
                    />
                  <div className={classes.inlineText}>
                    <p className={classes.inlineText}> This is now beside perhaps? </p>
                  </div>
                </div>


                </div>

            </div>
    );
}

export default MainPage;
