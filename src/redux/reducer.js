import { GROUP_TODOS_SUCCESS } from "./constants";

export const reducer = (state = {state: []}, action) => {
	switch (action.type) {
		case GROUP_TODOS_SUCCESS:
			return {
				state: action.payload
			};
		default:
			return state;
	}
};
