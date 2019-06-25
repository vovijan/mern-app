import React, { Component } from 'react';

import GroupListContainer from './containers/GroupList.container';
import CreateGroupContainer from './containers/CreateGroup.container';
import Sidebar from "./components/groups/Sidebar.component";

class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        <CreateGroupContainer />
        <div className="row">
          <div className="col-md-2">
            <Sidebar />
          </div>
          <div className="col-md-10">
            <GroupListContainer />
          </div>
        </div>


        {/**/}
      </div>
    )
  }
}

export default App;
