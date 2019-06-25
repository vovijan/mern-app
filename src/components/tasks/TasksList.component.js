import React from 'react';
import Task from './Task.component';

import '../style.components.css';

const TasksList = ({ data }) => (
  <div className="row">
    {
      data.items.length !== 0 ?
        <div className="card mt-2" style={{ border: 'none', width: '100%' }}>
          <div className="card-header">
            <h6>TASKS</h6>
          </div>
          <ul className="list-group list-group-flush">
            {
              data.items.map((item, i) => {
                return <li className="list-group-item " key={i}>
                  <Task title={item.title}/>
                </li>
              })
            }
          </ul>
        </div> : null
    }
  </div>
);

export default TasksList;
