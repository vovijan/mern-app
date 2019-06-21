import React from 'react';
import { connect } from 'react-redux';
import EditGroup from '../components/groups/EditGroup.component';
import { changeGroup } from '../redux/actions';

const mapStateToProps = (state, ownProps) => {
	const selectedGroup = ownProps.match.params.id;
	console.log(selectedGroup);
	const resultGroup = state.data.find(item => item._id === selectedGroup);
	console.log(resultGroup);
	return {
		resultGroup
	};
};

const mapDispatchToProps = dispatch => ({
	changeGroup: (id, data) => {
		dispatch(changeGroup({ id, data }));
	}
});

const EditGroupContainer = ({ resultGroup, changeGroup }) =>
	<EditGroup
		group={resultGroup}
		changeGroup={changeGroup}
	/>;

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(EditGroupContainer)
