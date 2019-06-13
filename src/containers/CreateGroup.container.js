import React  from 'react';
import { connect } from 'react-redux';
import CreateGroup from '../components/groups/CreateGroup.component';
import { addGroup } from '../redux/actions';

const mapDispatchToProps = dispatch => ({
  addGroup: (title) => {
    dispatch(addGroup({ title }));
  }
});

const CreateGroupContainer = ({ addGroup }) => <CreateGroup addGroup={addGroup} />;

export default connect(
  null,
  mapDispatchToProps
)(CreateGroupContainer)
