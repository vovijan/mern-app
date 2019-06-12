import React, { Component } from 'react';
import { connect } from 'react-redux';
import GroupTodos from '../components/groups/GroupTodos.component';
import { groupList, deleteGroup } from '../redux/actions';

const mapStateToProps = state => ({
	state: state.data
});

const mapDispatchToProps = dispatch => ({
	groupList: () => {
		dispatch(groupList());
	},
	deleteGroup: (id) => {
		dispatch(deleteGroup(id));
	}
});

class GroupListContainer extends Component {

	componentDidMount() {
		this.props.groupList();
	}

	render() {
		const { state } = this.props;
		return (
			<GroupTodos data={state} deleteGroup={this.props.deleteGroup} />
		)
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(GroupListContainer)
