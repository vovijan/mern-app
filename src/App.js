import React, { Component } from 'react';

import './App.css';

import GroupListContainer from './containers/GroupList.container';
import CreateGroupContainer from './containers/CreateGroup.container';
import Sidebar from "./components/groups/Sidebar.component";

class App extends Component {
  render() {
    return (
      <main role="main" className="container-fluid">
        <CreateGroupContainer />
        <div className="row">
          <div className="col-md-2">
            <Sidebar />
          </div>
          <div className="col-md-10">
            <GroupListContainer />
          </div>
        </div>

        <footer className="footer">
          <div className="container">
            <span className="text-muted">
              MERN App (Todo) with Bootstrap 4
            </span>
          </div>
        </footer>
      </main>
    )
  }
}

export default App;
