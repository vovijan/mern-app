import React from 'react';
import Task from './Task.component';
import { Row, Card, ListGroup } from "react-bootstrap";

export default class TasksList extends React.Component {
  render() {

    const { items } = this.props.data;
    const { changeTitle, deleteTask, changeCompleted } = this.props;

    return (
      <Row>
        {
          items.length !== 0 ?
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
                  items.map((item, i) =>
                    <ListGroup.Item key={i}>
                      <Task
                        data={item}
                        changeCompleted={changeCompleted}
                        changeTitle={changeTitle}
                        deleteTask={deleteTask}
                      />
                    </ListGroup.Item>
                  )
                }
              </ListGroup>
            </Card> : null
        }
      </Row>
    )
  }
}

