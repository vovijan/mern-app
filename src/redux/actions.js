import {
	GROUP_STARTED,
	GROUP_SUCCESS,
	ADD_NEW_GROUP_SUCCESS,
	DELETE_GROUP
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

export const addGroup = ({title}) => {
	return dispatch => {
		axios.post("/board", {title})
			.then(res => dispatch(addNewGroupSuccess(res.data)))
			.catch(error => {
				throw(error);
			});
	};
};

const addNewGroupSuccess = (payload) => ({
	type: ADD_NEW_GROUP_SUCCESS,
  payload
});

export const deleteGroup = id => {
	return dispatch => {
		axios.delete(`/board/${id}`)
			.then(res => dispatch(deleteGroupSuccess(res.data)))
			.catch(error => {
				throw(error);
			});
	}
};

const deleteGroupSuccess = payload => ({
	type: DELETE_GROUP,
	payload
});

