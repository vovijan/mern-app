import {
	GROUP_SUCCESS,
	GROUP_STARTED,
	ADD_NEW_GROUP_SUCCESS,
	DELETE_GROUP, CHANGE_GROUP_NAME, ADD_NEW_TASK
} from "./constants";

const initialState = {
	loading: false,
	data: [],
	error: null
};

export const reducer = (state = initialState, action) => {
	switch (action.type) {
		case GROUP_STARTED:
			return {
				...state,
				loading: true
			};
		case GROUP_SUCCESS:
			return {
				...state,
				loading: false,
				error: null,
				data: action.payload
			};
		case ADD_NEW_GROUP_SUCCESS:
			return {
				...state,
				loading: false,
				error: null,
				data: [
					...state.data,
					{
						_id: action.payload._id,
						title: action.payload.title,
						items: []
					}
				]
			};
		case CHANGE_GROUP_NAME:
			return {
				...state,
				data: [
					state.data.map(item => {
						if (item._id === action.payload._id) {
							item.title = action.payload.title;
							item.items = action.payload.items;
						}
						return item;
					})
				]
			};
		case DELETE_GROUP:
			return {
				...state,
				loading: false,
				error: null,
				data: state.data.filter(item => item._id !== action.payload._id)
			};
		case ADD_NEW_TASK:
			return {
				...state,
				data: [
					state.data.map(group => {
						if (group._id ===action.payload._id) {
							return {
								...group,
								items: [
									...group.items,
									{
										_id: Date.now(),
										title: action.payload.title,
										completed: false
									}
								]
							}
						}
						return group;
					})
				]
			};
		default:
			return state;
	}
};
