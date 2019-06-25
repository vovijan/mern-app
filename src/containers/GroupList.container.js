import React, { Component } from 'react';
import { connect } from 'react-redux';
import GroupList from '../components/groups/GroupList.component';
import {groupList, deleteGroup, changeGroup} from '../redux/actions';

const mapStateToProps = state => ({
	state: state.data
});

const mapDispatchToProps = dispatch => ({
	groupList: () => {
		dispatch(groupList());
	},
	deleteGroup: (id) => {
		dispatch(deleteGroup(id));
	},
	changeGroup: (id, data) => {
		dispatch(changeGroup({ id, data }));
	}
});

class GroupListContainer extends Component {

	componentDidMount() {
		this.props.groupList();
	}

	render() {
		const { state } = this.props;
		return (
			<GroupList
				data={state}
				deleteGroup={this.props.deleteGroup}
				changeGroup={this.props.changeGroup}
			/>
		)
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(GroupListContainer)
