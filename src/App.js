import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import EditTodo   from './components/edit-todo.component';
import GroupListContainer from './containers/GroupList.container';
import CreateGroupContainer from './containers/CreateGroup.container';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <span className="navbar-brand">MERN-Stack App</span>
            <div className="collpase navbar-collapse">
              <ul className="navbar-nav mr-auto">
                <li className="navbar-item">
                  <Link to="/" className="nav-link">Groups</Link>
                </li>
                <li className="navbar-item">
                  <Link to="/create" className="nav-link">Create Group of Tasks</Link>
                </li>
              </ul>
            </div>
          </nav>
          <br/>
          <Route path="/" exact component={GroupListContainer} />
          <Route path="/edit/:id" component={EditTodo} />
          <Route path="/create" component={CreateGroupContainer} />
        </div>
      </Router>
    )
  }
}

export default App;
