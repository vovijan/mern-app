import React from 'react';
import { connect } from 'react-redux';
import EditGroup from '../components/groups/EditGroup.component';
import {changeGroup, groupList} from '../redux/actions';

const mapStateToProps = (state, ownProps) => {
	return {
		state: state.data,
		selectedGroup: ownProps.match.params.id
	};
};

const mapDispatchToProps = dispatch => ({
	groupList: () => {
		dispatch(groupList());
	},
	changeGroup: (id, data) => {
		dispatch(changeGroup({ id, data }));
	}
});

class EditGroupContainer extends React.Component {
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
}

/*const EditGroupContainer = ({ resultGroup, changeGroup }) =>
	<EditGroup
		group={resultGroup}
		changeGroup={changeGroup}
	/>;
*/
export default connect(
	mapStateToProps,
	mapDispatchToProps
)(EditGroupContainer)
