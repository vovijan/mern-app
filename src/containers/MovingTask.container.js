import React, { Component } from 'react';
import { connect } from 'react-redux';
import MovingTask from '../components/tasks/MovingTask.component';
import { groupList } from '../redux/actions';

const mapStateToProps = state => ({
	state: state.data
});

const mapDispatchToProps = dispatch => ({
	groupList: () => {
		dispatch(groupList());
	}
});

class MovingTaskContainer extends Component {

	componentDidMount() {
		this.props.groupList();
	}

	render() {
		const { state, show, closeModalMoving } = this.props;
		return (
			<MovingTask
				data={ state }
				show={ show }
				closeModalMoving={ closeModalMoving }
			/>
		)
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(MovingTaskContainer)
