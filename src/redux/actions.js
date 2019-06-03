import {
	GROUP_TODOS_STARTED,
	GROUP_TODOS_SUCCESS,
	ADD_NEW_GROUP_STARTED,
	ADD_NEW_GROUP_SUCCESS
} from "./constants";
import axios from 'axios';

export const groupTodos = () => {
	return (dispatch, getState) => {
		dispatch(groupTodosStarted());

		console.log('Current State', getState());

		axios.get("/boards")
			.then(res => dispatch(groupTodosSuccess(res.data)))
			.catch(error => {
				throw(error);
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

export const addGroup = title => {
	return dispatch => {
		dispatch(addNewGroupStarted());

		axios.post("/board", {title})
			.then(res => dispatch(addNewGroupSuccess(res.data)))
			.catch(error => {
				throw(error);
			});
	};
};

const addNewGroupStarted = () => ({
	type: ADD_NEW_GROUP_STARTED
});

const addNewGroupSuccess = payload => ({
	type: ADD_NEW_GROUP_SUCCESS,
	payload
});
