import React from 'react';
import MainPage from './Pages/MainPage';
import AboutPage from './Pages/AboutPage';
import ProjectPage from './Pages/ProjectPage';
import DronePage from './Pages/Projects/DronePage'
import MusicPage from './Pages/Projects/MusicPage'
import ContactPage from './Pages/ContactPage';
//TODO: projects page doesn't exist, and may never exist, consider removing it

import {
  BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom'


function App() {
  return (
      <Router>
        <Switch>
          <Route exact={true} path='/' component={MainPage}/>
          <Route exact={true} path='/about' component={AboutPage}/>
          <Route exact={true} path='/projects' component={ProjectPage}/>
          <Route exact={true} path='/projects/drone' component={DronePage}/>
          <Route exact={true} path='/projects/music' component={MusicPage}/>
          <Route exact={true} path='/contact' component={ContactPage}/>

        </Switch>
      </Router>
  );
}

export default App;
