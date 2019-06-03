import React, { Component } from 'react';
import { connect } from 'react-redux';
import GroupTodos from '../components/GroupTodos.component';
import { groupList } from '../redux/actions';

const mapStateToProps = state => ({
	state: state.data
});

const mapDispatchToProps = dispatch => ({
	groupList: () => {
		dispatch(groupList())
	}
});

class GroupListContainer extends Component {

	componentDidMount() {
		this.props.groupList();
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
