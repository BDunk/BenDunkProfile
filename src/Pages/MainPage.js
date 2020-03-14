import React from 'react';
import '../App.css';
import TopBar from '../Components/TopBar.js';
import head_shot from '../Images/0.jpeg'


function MainPage(props) {
    return (
            <div>
                <header>
                <TopBar />
                </header>
                <div>
                    <img src={head_shot} alt="Logo" />
                        My name is Ben Dunk
                </div>

            </div>
    );
}

export default MainPage;
