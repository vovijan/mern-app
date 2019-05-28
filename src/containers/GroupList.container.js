import React, { Component } from 'react';
import { connect } from 'react-redux';
import GroupTodos from '../components/GroupTodos.component';
import { groupTodos } from '../redux/actions';

const mapStateToProps = state => ({
	state
});

const mapDispatchToProps = dispatch => ({
	groupTodos: () => {
		dispatch(groupTodos())
	}
});

class GroupListContainer extends Component {

	componentDidMount() {
		this.props.groupTodos();
	}

	render() {
		const { state } = this.props;
		return (
			<GroupTodos data={state} />
		)
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(GroupListContainer)
