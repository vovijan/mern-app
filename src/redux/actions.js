import { GROUP_TODOS, GROUP_TODOS_STARTED, GROUP_TODOS_SUCCESS } from "./constants";
import axios from 'axios';

export const groupTodos = () => {
	return dispatch => {
		dispatch(groupTodosStarted());

		axios.get("http://localhost:3001/test")
			.then(response => response.json())
			.then(json => dispatch(groupTodosSuccess(json)))
	}
};

const groupTodosStarted = () => ({
	type: GROUP_TODOS_STARTED
});

export const groupTodosSuccess = (payload) => ({
	type: GROUP_TODOS_SUCCESS,
	payload
});