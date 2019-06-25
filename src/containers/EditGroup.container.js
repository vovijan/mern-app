import React from 'react';
import { connect } from 'react-redux';
import EditGroup from '../components/groups/EditGroup.component';
import { changeGroup } from '../redux/actions';

const mapStateToProps = state => {
	return {
		resultGroup: state.data
	};
};

const mapDispatchToProps = dispatch => ({
	changeGroup: (id, data) => {
		dispatch(changeGroup({ id, data }));
	}
});

/*class EditGroupContainer extends React.Component {
	componentDidMount() {
		this.props.groupList();
	}
	render() {
		const { selectedGroup, state } = this.props;
		if (state === []) return <div />;
		const resultGroup = state.find(item => item._id === selectedGroup);
		console.log(resultGroup);

		return (
			<EditGroup
				group={resultGroup}
				changeGroup={changeGroup}
			/>
		)
	}
}*/

const EditGroupContainer = ({ resultGroup, changeGroup }) =>
	<EditGroup
		group={resultGroup}
		changeGroup={changeGroup}
	/>;

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(EditGroupContainer)
