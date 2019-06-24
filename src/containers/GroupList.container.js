import React, { Component } from 'react';
import { connect } from 'react-redux';
import GroupList from '../components/groups/GroupList.component';
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
		console.log(state);
		return (
			<GroupList
				data={state}
				deleteGroup={this.props.deleteGroup}
			/>
		)
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(GroupListContainer)
