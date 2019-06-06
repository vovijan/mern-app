import React from 'react';
import { connect } from 'react-redux';
import EditGroup from '../components/EditGroup.component';
//import { } from '../redux/actions';

const mapStateToProps = (state, ownProps) => {
	const selectedGroup = ownProps.match.params.id;
	console.log(selectedGroup);

	const resultGroup = state.data.find(item => item._id === selectedGroup);
	console.log(resultGroup);
	return {
		resultGroup
	};
};

const EditGroupContainer = ({ resultGroup }) =>
	<EditGroup group={resultGroup} />;

export default connect(
	mapStateToProps,
	null
)(EditGroupContainer)
