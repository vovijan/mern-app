import React from 'react';
import { connect } from 'react-redux';
import EditGroup from '../components/groups/EditGroup.component';
import { changeGroup, addNewTask } from '../redux/actions';

const mapStateToProps = (state, ownProps) => {
	const selectedGroup = ownProps.match.params.id;

	const resultGroup = state.data.find(item => item._id === selectedGroup);
	return {
		resultGroup
	};
};

const mapDispatchToProps = dispatch => ({
	changeGroup: (id, data) => {
		console.log(id, data);
		dispatch(changeGroup({ id, data }));
	}
});

const EditGroupContainer = ({ resultGroup, changeGroup, addNewTask }) =>
	<EditGroup
		group={resultGroup}
		changeGroup={changeGroup}
		addNewTask={addNewTask}
	/>;

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(EditGroupContainer)
