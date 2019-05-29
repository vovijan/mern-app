import React  from 'react';
import { connect } from 'react-redux';
import CreateGroup from '../components/CreateGroup.component';
import { addNewGroupSuccess } from '../redux/actions';

const mapDispatchToProps = dispatch => ({
  addNewGroupSuccess: title => {
    dispatch(addNewGroupSuccess(title));
  }
});

const CreateGroupContainer = ({ addNewGroupSuccess }) => <CreateGroup addGroup={addNewGroupSuccess} />;

export default connect(
  null,
  mapDispatchToProps
)(CreateGroupContainer)
