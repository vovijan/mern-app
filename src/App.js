import React, { Component } from 'react';
import styled, {createGlobalStyle} from 'styled-components';
import { connect } from "react-redux";
import { getGroupList } from './redux/actions';
import GroupListContainer from './containers/GroupList.container';
import CreateGroupContainer from './containers/CreateGroup.container';
import { Col, Container, Row } from "react-bootstrap";
import SidebarContainer from "./containers/Sidebar.container";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
      "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
    monospace;
  }
`;

const Footer = styled.footer`
  position: fixed;
  left: 0px;
  bottom: 0px;
  width: 100%;
  line-height: 60px;
  background-color: #f5f5f5;
`;

const Wrapper = styled.main`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  margin-bottom: 60px;
`;

const mapDispatchToProps = dispatch => ({
  getGroupList: () => {
    dispatch(getGroupList());
  }
});

class App extends Component {

  componentDidMount() {
    this.props.getGroupList();
  }

  render() {
    return (
      <Wrapper>
        <GlobalStyle/>
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
        </Container>
        <Footer>
          <Container>
              <span className="text-muted">
                MERN App (Todo) with Bootstrap 4
              </span>
          </Container>
        </Footer>
      </Wrapper>
    )
  }
}

export default connect(
  null,
  mapDispatchToProps
)(App);
