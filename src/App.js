import React from 'react';
import MainPage from './MainPage'
import AboutPage from './AboutPage'
import ProjectPage from './ProjectPage'
import RamblingsPage from './RamblingsPage'
import ContactPage from './ContactPage'


import {
  BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom'


function App() {
  return (
      <Router>
        <Switch>
          <Route exact={true} path='/projects' component={ProjectPage}/>>
          <Route exact={true} path='/' component={MainPage}/>
          <Route exact={true} path='/about' component={AboutPage}/>
            <Route exact={true} path='/ramblings' component={RamblingsPage}/>
            <Route exact={true} path='/contact' component={ContactPage}/>
        </Switch>
      </Router>
  );
}

export default App;
