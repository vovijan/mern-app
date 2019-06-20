import React from 'react';
import Task from './Task.component';

import '../style.components.css';

const TasksList = props => (
  <div className="card col-md-6 text-center">
    <div className="card-header">
      <h3>TASKS</h3>
    </div>
    <div className="card-body">
      <ul className="list-group list-group-flush">
        {
          props.data.items.map((item, i) => {
            return <li className="list-group-item" key={i}>
	              <Task title={item.title}/>
              </li>
          })
        }
      </ul>
    </div>
  </div>
);

export default TasksList;
