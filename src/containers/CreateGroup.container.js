import React  from 'react';
import { connect } from 'react-redux';
import CreateGroup from '../components/CreateGroup.component';
import { addGroup } from '../redux/actions';

const mapDispatchToProps = dispatch => ({
  addGroup: (title, id) => {
    dispatch(addGroup({ title, id }));
  }
});

const CreateGroupContainer = ({ addGroup }) => <CreateGroup addGroup={addGroup} />;

export default connect(
  null,
  mapDispatchToProps
)(CreateGroupContainer)
