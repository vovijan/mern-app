import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { reducer } from './reducer';

export const store = createStore(
	reducer, /*preloadedState, */
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
