import { createContext, useReducer } from 'react';
import { log } from '../utils/helper';

export const StatusContext = createContext();

export const statusReducer = (state, action) => {
	switch (action.type) {
		case 'SET_STATUSES':
			return { statuses: action.payload };
		case 'SET_STATUS':
			return { status: null };
		case 'CREATE_STATUS':
			return {
				statuses: [action.payload, ...state.statuses],
			};
		case 'UPDATE_STATUS':
			log(action.payload, 'payload - update statuss');
			log(state, 'state');
			// return {
			// 	...state,
			// 	status: action.payload,
			// };
			return {
				statuses: state.statuses.map((status) =>
					status._id === action.payload._id ? action.payload : status
				),
			};
		case 'DELETE_STATUS':
			return {
				statuses: state.statuses.filter(
					(status) => status._id !== action.payload._id
				),
			};
		case 'LOGOUT':
			return {
				status: null,
				statuses: null,
			};
		default:
			return state;
	}
};

export const StatusContextProvider = ({ children }) => {
	const [state, dispatch] = useReducer(statusReducer, {
		status: null,
		statuses: null,
		// currentUser: null,
	});

	return (
		<StatusContext.Provider value={{ ...state, dispatch }}>
			{children}
		</StatusContext.Provider>
	);
};
