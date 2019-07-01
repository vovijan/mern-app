import React, { Component } from 'react';
import styled from 'styled-components';
import GroupListContainer from './containers/GroupList.container';
import CreateGroupContainer from './containers/CreateGroup.container';
import { Col, Container, Row } from "react-bootstrap";
import SidebarContainer from "./containers/Sidebar.container";

const Footer = styled.footer`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 60px;
  line-height: 60px;
  background-color: #f5f5f5;
`;

export default class App extends Component {
  render() {
    return (
      <Container fluid role="main">
        <CreateGroupContainer />
        <Row>
          <Col md="2">
            <SidebarContainer />
          </Col>
          <Col md="10">
            <GroupListContainer />
          </Col>
        </Row>

        <Footer>
          <Container>
            <span className="text-muted">
              MERN App (Todo) with Bootstrap 4
            </span>
          </Container>
        </Footer>
      </Container>
    )
  }
};
