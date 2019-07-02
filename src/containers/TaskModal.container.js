import React  from 'react';
import { connect } from 'react-redux';
import { changeGroup } from '../redux/actions';
import TaskModal from "../components/tasks/TaskModal.component";

const mapStateToProps = state => ({
	state: state.data
});

const mapDispatchToProps = dispatch => ({
	changeGroup: (id, data) => {
		dispatch(changeGroup({ id, data }));
	}
});

const TaskModalContainer = ({ state, show, closeModal, changeGroup, deleteTask, _id, title, completed, modalTitle }) =>
	<TaskModal
		data={ state }
		show={ show }
		_id={_id}
		title={title}
		completed={completed}
		closeModal={ closeModal }
		changeGroup={changeGroup}
		deleteTask={deleteTask}
		modalTitle={modalTitle}
	/>;

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(TaskModalContainer)
