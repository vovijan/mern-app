import React, { Component } from 'react';
import styled from 'styled-components';
import GroupListContainer from './containers/GroupList.container';
import CreateGroupContainer from './containers/CreateGroup.container';
import { Col, Container, Row } from "react-bootstrap";
import SidebarContainer from "./containers/Sidebar.container";

const Footer = styled.footer`
  flex: 0 0 auto;
  line-height: 60px;
  background-color: #f5f5f5;
`;

const Wrapper = styled.main`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export default class App extends Component {
  render() {
    return (
      <Wrapper>
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
      </Wrapper>
    )
  }
};
