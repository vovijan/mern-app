import React, { Component } from 'react';

import EditGroupContainer   from './containers/EditGroup.container';
import GroupListContainer from './containers/GroupList.container';
import CreateGroupContainer from './containers/CreateGroup.container';

class App extends Component {
  render() {
    return (
      <div className="container-fluid">

          <CreateGroupContainer />
        <div className="row">
          <div className="col-md-2">
            <GroupListContainer />
          </div>
          <div className="col-md-10">
            <EditGroupContainer />
          </div>
        </div>


        {/**/}
      </div>
    )
  }
}

export default App;
