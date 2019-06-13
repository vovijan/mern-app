import React from 'react';
import { connect } from 'react-redux';
import EditGroup from '../components/groups/EditGroup.component';
import { changeGroupName, addNewTask } from '../redux/actions';

const mapStateToProps = (state, ownProps) => {
	const selectedGroup = ownProps.match.params.id;

	const resultGroup = state.data.find(item => item._id === selectedGroup);
	return {
		resultGroup
	};
};

const mapDispatchToProps = dispatch => ({
	changeGroupName: (id, data) => {
		dispatch(changeGroupName({ id, data }));
	}
});

const EditGroupContainer = ({ resultGroup, changeGroupName, addNewTask }) =>
	<EditGroup
		group={resultGroup}
		changeGroupName={changeGroupName}
		addNewTask={addNewTask}
	/>;

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(EditGroupContainer)
