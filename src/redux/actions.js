import {
	GROUP_TODOS_STARTED,
	GROUP_TODOS_SUCCESS,
	GROUP_TODOS_FAILURE,
	ADD_NEW_GROUP_STARTED,
	ADD_NEW_GROUP_SUCCESS,
	ADD_NEW_GROUP_FAILURE
} from "./constants";
import axios from 'axios';

export const groupTodos = () => {
	return (dispatch, getState) => {
		dispatch(groupTodosStarted());

		console.log('Current State', getState());

		axios.get("http://localhost:3001/test")
			.then(response => response.data)
			.then(data => dispatch(groupTodosSuccess(data)))
			.catch(err => dispatch(groupTodosFailure(err.message)));
	};
};

export const addGroup = ({ title }) => {
	return dispatch => {
		dispatch(addNewGroupStarted());

		axios.post("http://localhost:3001/test/add", {title})
			.then(res => dispatch(addNewGroupSuccess(res.data)))
			.catch(err => dispatch(addNewGroupFailure(err.message)));
	};
};

const groupTodosStarted = () => ({
	type: GROUP_TODOS_STARTED
});

const groupTodosSuccess = payload => ({
	type: GROUP_TODOS_SUCCESS,
	payload
});

const groupTodosFailure = error => ({
	type: GROUP_TODOS_FAILURE,
	payload: {
		error
	}
});

const addNewGroupStarted = () => ({
	type: ADD_NEW_GROUP_STARTED
});

const addNewGroupSuccess = payload => ({
	type: ADD_NEW_GROUP_SUCCESS,
	payload
});

const addNewGroupFailure = error => ({
	type:ADD_NEW_GROUP_FAILURE,
	payload: {
		error
	}
});
