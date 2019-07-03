import React from 'react';
import Task from './Task.component';
import { Row, Card, ListGroup, Alert } from "react-bootstrap";

const TasksList = ({ data, changeTitle, deleteTask, changeCompleted }) => (
  <Row>
    {
      data.items.length !== 0 ?
        <Card
          className="mt-2"
          style={{
            border: 'none',
            width: '100%'
          }}
        >
          <ListGroup
            variant="flush"
          >
            {
              data.items.map((item, i) =>
                <ListGroup.Item key={i}>
                  <Task
                    data={item}
                    idGroup={data._id}
                    changeCompleted={changeCompleted}
                    changeTitle={changeTitle}
                    deleteTask={deleteTask}
                  />
                </ListGroup.Item>
              )
            }
          </ListGroup>
        </Card> :
        <Alert
          variant="info"
          style={{
            width: '100%',
            marginTop: '1.3rem',
            textAlign: 'center'
          }}
        >No Tasks!</Alert>
    }
  </Row>
);

export default TasksList;
