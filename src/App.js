import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import EditGroupContainer   from './containers/EditGroup.container';
import GroupListContainer from './containers/GroupList.container';
import CreateGroupContainer from './containers/CreateGroup.container';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <nav className="navbar navbar-dark bg-dark">
            <div className="navbar-brand">MERN-Stack App</div>
            <CreateGroupContainer />
          </nav>
          <br/>
          <Route path="/" exact component={GroupListContainer} />
          <Route path="/:id" component={EditGroupContainer} />
        </div>
      </Router>
    )
  }
}

export default App;
