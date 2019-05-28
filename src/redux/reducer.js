import { GROUP_TODOS_SUCCESS } from "./constants";

export const reducer = (state = { data: [] }, action) => {
	switch (action.type) {
		case GROUP_TODOS_SUCCESS:
			return {
				data: action.payload
			};
		default:
			return state;
	}
};
