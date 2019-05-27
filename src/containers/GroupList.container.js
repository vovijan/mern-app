import React, { Component } from 'react';
import { connect } from 'react-redux';
import GroupTodos from '../components/GroupTodos.component';
import { groupTodos } from '../redux/actions';

const mapStateToProps = state => ({
	data: state.data
});

const mapDispatchToProps = dispatch => ({
	groupTodos: () => {
		dispatch(groupTodos())
	}
});

/*const GroupListContainer = ({ groupTodos, state }) => {
	useEffect(groupTodos, []);
	return (
		<GroupTodos state={state} />
	)
};*/

class GroupListContainer extends Component {

	componentDidMount() {
		this.props.groupTodos();
	}

	render() {
		const { data } = this.props;
		return (
			<GroupTodos data={data} />
		)
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(GroupListContainer)
