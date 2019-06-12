import React from 'react';
import { connect } from 'react-redux';
import EditGroup from '../components/groups/EditGroup.component';
import { changeGroupName } from '../redux/actions';

const mapStateToProps = (state, ownProps) => {
	const selectedGroup = ownProps.match.params.id;
	console.log(selectedGroup);

	const resultGroup = state.data.find(item => item._id === selectedGroup);
	return {
		resultGroup
	};
};

const mapDispatchToProps = dispatch => ({
	changeGroupName: (id, data) => {
		console.log(data);
		dispatch(changeGroupName({ id, data }));
	}
});

const EditGroupContainer = ({ resultGroup, changeGroupName }) =>
	<EditGroup
		group={resultGroup}
		changeGroupName={changeGroupName}
	/>;

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(EditGroupContainer)
