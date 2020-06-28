import React, {Fragment} from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import {Navbar} from '@blueprintjs/core';
import '@blueprintjs/core/lib/css/blueprint.css';

import {Resumes, Resume, NewResume} from './components';

function App() {
  return (
    <Fragment>
      <Navbar>
        <Navbar.Group>
          <Navbar.Heading>Resumes</Navbar.Heading>
        </Navbar.Group>
      </Navbar>
      <div style={{padding: 20}}>
        <Router>
          <Switch>
            <Route exact path='/' children={<Resumes />} />
            <Route exact path='/resume/:id' children={<Resume />} />
            <Route exact path='/resumes/new' children={<NewResume />} />
          </Switch>
        </Router>
      </div>
    </Fragment>
  );
}

export default App;
