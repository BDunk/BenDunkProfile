import React from 'react';
import TopBar from "../Components/TopBar";
import {makeStyles} from "@material-ui/core";
import phone from '../Images/3.png'
import email from '../Images/4.png'
import web from '../Images/5.png'
import landscape from "../Images/6.jpg";


const useStyles = makeStyles(theme => ({
    root: {

    },
    section: {
        flexGrow: 1
    },
    photo: {
        width: "100%",
    },

    overlay: {
        position: 'absolute',
        top: '150',
        color: 'black',
        textAlign: 'center',
        fontSize: '60px',
        width: '100%',
    },


}));


function ContactPage(props) {
    const classes = useStyles();
    return (
        <div>
            <header>
                <TopBar />
            </header>
            <div className={classes.overlayDiv}>
                <img
                    className={classes.photo}
                    src={landscape}
                    alt="landscape"
                />
                <div className={classes.overlay}>
                    Contact
                </div>
            </div>
            <div  id="container" >
            <div id="section">
                <img
                    src={phone}
                    alt="phone"
                    width={100}
                    height={100}
                />
                <div>
                    <b>Phone</b>
                    <br/> 519-760-2828
                </div>
            </div>
                <div id="section">
                    <img
                        src={email}
                        alt="email"
                        width={100}
                        height={100}
                    />
                    <div>
                        <b>Email</b>
                        <br/> benkdunk@gmail.com
                    </div>
            </div>
                <div id="section">
                    <img
                        src={web}
                        alt="web"
                        width={100}
                        height={100}
                    />
                    <div>
                        <b>Web</b>
                        <br/> LinkedIn
                        <br/> GitHub
                    </div>

            </div>
            </div>
        </div>
    );
}

export default ContactPage;