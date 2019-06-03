import {
	GROUP_SUCCESS,
	GROUP_STARTED,
	ADD_NEW_GROUP_SUCCESS
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
						title: action.payload,
						items: []
					}
				]
			};
		default:
			return state;
	}
};
