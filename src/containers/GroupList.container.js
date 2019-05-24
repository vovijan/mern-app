import React, {useEffect} from 'react';
import { connect } from 'react-redux';
import GroupTodos from '../components/GroupTodos.component';
import { groupTodos } from '../redux/actions';

const mapStateToProps = state => ({
	state: state.data
});

const mapDispatchToProps = dispatch => ({
	groupTodos: () => {
		dispatch(groupTodos())
	}
});

const GroupListContainer = ({ groupTodos, state }) => {
	useEffect(groupTodos, []);
	return (
		<GroupTodos state={state} />
	)
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(GroupListContainer)