import {
	GROUP_STARTED,
	GROUP_SUCCESS,
	ADD_NEW_GROUP_STARTED,
	ADD_NEW_GROUP_SUCCESS
} from "./constants";
import axios from 'axios';

export const groupList = () => {
	return (dispatch, getState) => {
		dispatch(groupStarted());

		console.log('Current State', getState());

		axios.get("/boards")
			.then(res => dispatch(groupSuccess(res.data)))
			.catch(error => {
				throw(error);
			});
	};
};

const groupStarted = () => ({
	type: GROUP_STARTED
});

const groupSuccess = payload => ({
	type: GROUP_SUCCESS,
	payload
});

export const addGroup = (title, items, _id, __v) => {
	return dispatch => {
		dispatch(addNewGroupStarted());

		axios.post("/board", {title, items, _id, __v})
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
