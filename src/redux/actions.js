import {
	GROUP_TODOS_STARTED,
	GROUP_TODOS_SUCCESS,
	GROUP_TODOS_FAILURE,
	ADD_NEW_GROUP_STARTED,
	ADD_NEW_GROUP_SUCCESS
} from "./constants";
import axios from 'axios';

export const groupTodos = () => {
	return (dispatch, getState) => {
		dispatch(groupTodosStarted());

		console.log('Current State', getState());

		axios.get("http://localhost:3001/test")
			.then(response => {
				return response.data;
			})
			.then(data => dispatch(groupTodosSuccess(data)))
			.catch(err => {
				dispatch(groupTodosSFailure(err.message));
			});
	};
};

const groupTodosStarted = () => ({
	type: GROUP_TODOS_STARTED
});

const groupTodosSuccess = payload => ({
	type: GROUP_TODOS_SUCCESS,
	payload
});

const groupTodosSFailure = error => ({
	type: GROUP_TODOS_FAILURE,
	payload: {
		error
	}
});

/*const addNewGroupStarted = () => ({
	type: ADD_NEW_GROUP_STARTED
});*/

export const addNewGroupSuccess = payload => ({
	type: ADD_NEW_GROUP_SUCCESS,
	payload
});
