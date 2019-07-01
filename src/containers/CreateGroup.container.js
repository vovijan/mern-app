import React  from 'react';
import { connect } from 'react-redux';
import NavBar from '../components/NavBar.component';
import { addGroup } from '../redux/actions';

const mapDispatchToProps = dispatch => ({
  addGroup: (title) => {
    dispatch(addGroup({ title }));
  }
});

const CreateGroupContainer = ({ addGroup }) =>
  <NavBar addGroup={addGroup} />;

export default connect(
  null,
  mapDispatchToProps
)(CreateGroupContainer)
