import { GROUP_TODOS_SUCCESS } from "./constants";

const initialState = [];

export const reducer = (state = initialState, action) => {
	switch (action.type) {
		case GROUP_TODOS_SUCCESS:
			return {
				data: action.payload
			};
		default:
			return state;
	}
};
