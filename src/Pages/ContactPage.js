import React from 'react';
import TopBar from "../Components/TopBar";
import {makeStyles} from "@material-ui/core";
import phone from '../Images/3.png'
import email from '../Images/4.png'
import web from '../Images/5.png'


const useStyles = makeStyles(theme => ({
    root: {

    },
    section: {
        flexGrow: 1
    },

}));


function ContactPage(props) {
    const classes = useStyles();
    return (
        <div>
            <header>
                <TopBar />
            </header>
            <div  id="container" >
            <div id="section">
                <img
                    src={phone}
                    alt="phone"
                    width={100}
                    height={100}
                />
                <div>
                    <b>Email</b>
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