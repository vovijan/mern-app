import React from 'react';
import Task from './Task.component';

import '../style.components.css';
import {Row, Card, ListGroup} from "react-bootstrap";

const TasksList = ({ data, changeCompleted, changeTaskTitle }) => (
  <Row>
    {
      data.items.length !== 0 ?
        <Card className="mt-2" style={{ border: 'none', width: '100%' }}>
          <ListGroup variant="flush">
            {
              data.items.map((item, i) => {
                return <ListGroup.Item key={i}>
                  <Task
                    data={item}
                    changeCompleted={changeCompleted}
                    changeTaskTitle={changeTaskTitle}
                  />
                </ListGroup.Item>
              })
            }
          </ListGroup>
        </Card> : null
    }
  </Row>
);

export default TasksList;
