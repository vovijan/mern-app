import React from 'react';
import Task from './Task.component';

import '../style.components.css';
import { Row, Card, ListGroup } from "react-bootstrap";
import { Droppable } from "react-beautiful-dnd";

export default class TasksList extends React.Component {
  render() {

    const {_id, items, changeCompleted, changeTitle, deleteTask} = this.props.data;

    return (
      <Row>
        {
          items.length !== 0 ?
            <Card className="mt-2" style={{border: 'none', width: '100%'}}>
              <Droppable droppableId={_id}>
                {
                  (provided, snapshot) => (
                    <ListGroup
                      variant="flush"
                      ref={provided.innerRef}
                      {...provided.droppableProps}
                      isDraggingOver={snapshot.isDraggingOver}
                      style={{ backgroundColor: `${props => (props.isDraggingOver ? 'skyblue' : 'white')}` }}
                    >
                      {
                        items.map((item, i, index) =>
                          <ListGroup.Item key={i}>
                            <Task
                              data={item}
                              changeCompleted={changeCompleted}
                              changeTitle={changeTitle}
                              deleteTask={deleteTask}
                              index={index}
                            />
                          </ListGroup.Item>
                        )
                      }
                      {
                        provided.placeholder
                      }
                    </ListGroup>
                  )
                }
              </Droppable>
            </Card> : null
        }
      </Row>
    )
  }
}

