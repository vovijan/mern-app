import React from 'react';
import Task from './Task.component';

import '../style.components.css';
import {Row, Card, ListGroup} from "react-bootstrap";

const TasksList = ({ data, changeCompleted }) => (
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
