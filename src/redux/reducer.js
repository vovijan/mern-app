import {
	GROUP_TODOS_SUCCESS,
	GROUP_TODOS_STARTED,
	ADD_NEW_GROUP_SUCCESS,
	ADD_NEW_GROUP_STARTED
} from "./constants";

const initialState = {
	loading: false,
	data: [],
	error: null
};

export const reducer = (state = initialState, action) => {
	switch (action.type) {
		case GROUP_TODOS_STARTED:
			return {
				...state,
				loading: true
			};
		case GROUP_TODOS_SUCCESS:
			return {
				...state,
				loading: false,
				error: null,
				data: action.payload
			};
		default:
			return state;
	}
};
