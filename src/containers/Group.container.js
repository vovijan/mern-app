import React from 'react';
import { connect } from 'react-redux';
import Group from '../components/groups/Group.component';
import { changeGroup } from '../redux/actions';

const mapDispatchToProps = dispatch => ({
	changeGroup: (id, data) => {
		dispatch(changeGroup({ id, data }));
	}
});

const GroupContainer = ({ changeGroup }) =>
	<Group
		changeGroup={changeGroup}
	/>;

export default connect(
	null,
	mapDispatchToProps
)(GroupContainer)
