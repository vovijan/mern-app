import {
	GET_GROUP_STARTED,
	GET_GROUP_SUCCESS,
	ADD_NEW_GROUP_SUCCESS,
	DELETE_GROUP,
	CHANGE_GROUP, GET_GROUP_ERROR
} from "./constants";
import axios from 'axios';

export const getGroupList = () => {
	return (dispatch) => {
		dispatch(getStarted());

		axios.get("/boards")
			.then(res => dispatch(getGroupSuccess(res.data)))
			.catch(error => {
				dispatch(getGroupError(error));
				throw(error);
			});
	};
};

const getStarted = () => ({
	type: GET_GROUP_STARTED
});

const getGroupSuccess = payload => ({
	type: GET_GROUP_SUCCESS,
	payload
});

const getGroupError = payload => ({
	type: GET_GROUP_ERROR,
	payload
});

export const addGroup = ({ title }) => {
	return dispatch => {
		axios.post("/board", { title })
			.then(res => dispatch(addNewGroupSuccess(res.data)))
			.catch(error => {
				throw(error);
			});
	};
};

const addNewGroupSuccess = payload => ({
	type: ADD_NEW_GROUP_SUCCESS,
  payload
});

export const deleteGroup = id => {
	return dispatch => {
		axios.delete(`/board/${ id }`)
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

export const changeGroup = ({ id, data }) => {
	return dispatch => {
		axios.put(`/board/${ id }`, {
			items: data.items,
			title: data.title
		})
			.then(res => dispatch(changeGroupSuccess({
				_id: id,
				items: data.items,
				title: data.title
			})))
			.catch(error => {
				throw(error);
			});
	}
};

const changeGroupSuccess = payload => ({
	type: CHANGE_GROUP,
	payload
});
