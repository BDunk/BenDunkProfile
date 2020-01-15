import React from 'react';
import MainPage from './MainPage'
import ProjectPage from './ProjectPage'

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
        </Switch>
      </Router>
  );
}

export default App;
