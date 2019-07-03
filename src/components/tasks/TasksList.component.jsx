import React, { Component } from 'react';
import Task from './Task.component';
import {Row, Card, ListGroup, Alert} from "react-bootstrap";

export default class TasksList extends  Component {
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
    )
  }
}

