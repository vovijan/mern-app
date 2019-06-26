import React, { Component } from 'react';

import './App.css';

import GroupListContainer from './containers/GroupList.container';
import CreateGroupContainer from './containers/CreateGroup.container';
import Sidebar from "./components/groups/Sidebar.component";
import { Col, Container, Row } from "react-bootstrap";

export default class App extends Component {
  render() {
    return (
      <Container fluid role="main">
        <CreateGroupContainer />
        <Row>
          <Col md="2">
            <Sidebar />
          </Col>
          <Col md="10">
            <GroupListContainer />
          </Col>
        </Row>

        <footer className="footer">
          <Container>
            <span className="text-muted">
              MERN App (Todo) with Bootstrap 4
            </span>
          </Container>
        </footer>
      </Container>
    )
  }
};
