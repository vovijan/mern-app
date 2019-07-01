import React, { Component } from 'react';
import { connect } from 'react-redux';
import MovingTask from '../components/tasks/MovingTask.component';
import {changeGroup, getGroupList} from '../redux/actions';

const mapStateToProps = state => ({
	state: state.data
});

const mapDispatchToProps = dispatch => ({
	getGroupList: () => {
		dispatch(getGroupList());
	},
	changeGroup: (id, data) => {
		dispatch(changeGroup({ id, data }));
	}
});

class MovingTaskContainer extends Component {

	componentDidMount() {
		this.props.getGroupList();
	}

	render() {
		const { state, show, closeModalMoving, changeGroup, deleteTask, _id, title, completed } = this.props;
		return (
			<MovingTask
				data={ state }
				show={ show }
				_id={_id}
				title={title}
				completed={completed}
				closeModalMoving={ closeModalMoving }
				changeGroup={changeGroup}
				deleteTask={deleteTask}
			/>
		)
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(MovingTaskContainer)
