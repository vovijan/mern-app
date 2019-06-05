import React from 'react';
import { connect } from 'react-redux';
import EditGroup from '../components/EditGroup.component';
//import { } from '../redux/actions';

const mapStateToProps = (state, ownProps) => {
	const selectedGroup = ownProps.match.params.id;
	const resultGroup = state.data.find(item => item._id === selectedGroup);
	return resultGroup;
};

const EditGroupContainer = ({ resultGroup }) =>
	<EditGroup group={resultGroup} />;

export default connect(
	mapStateToProps,
	null
)(EditGroupContainer)
