import React  from 'react';
import { connect } from 'react-redux';
import GroupList from '../components/groups/GroupList.component';
import { deleteGroup, changeGroup } from '../redux/actions';

const mapStateToProps = state => ({
	state: state.data
});

const mapDispatchToProps = dispatch => ({
	deleteGroup: (id) => {
		dispatch(deleteGroup(id));
	},
	changeGroup: (id, data) => {
		dispatch(changeGroup({ id, data }));
	}
});

const GroupListContainer = ({ state, deleteGroup, changeGroup }) =>
	<GroupList
		data={state}
		deleteGroup={deleteGroup}
		changeGroup={changeGroup}
	/>;

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(GroupListContainer)
