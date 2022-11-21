import { createContext, useReducer } from 'react';
import { log } from '../utils/helper';

export const ArrangersContext = createContext();

export const arrangersReducer = (state, action) => {
	switch (action.type) {
		case 'SET_ARRANGERS':
			return { arrangers: action.payload };
		case 'SET_ARRANGER':
			return { arranger: null };
		case 'CREATE_ARRANGER':
			return {
				arrangers: [action.payload, ...state.arrangers],
			};
		case 'UPDATE_ARRANGER':
			log(action.payload, 'payload - update arrangers');
			log(state, 'state');
			// return {
			// 	...state,
			// 	arranger: action.payload,
			// };
			return {
				arrangers: state.arrangers.map((arranger) =>
					arranger._id === action.payload._id ? action.payload : arranger
				),
			};
		case 'DELETE_ARRANGER':
			return {
				arrangers: state.arrangers.filter(
					(arranger) => arranger._id !== action.payload._id
				),
			};
		default:
			return state;
	}
};

export const ArrangersContextProvider = ({ children }) => {
	const [state, dispatch] = useReducer(arrangersReducer, {
		arranger: null,
		arrangers: null,
		// currentUser: null,
	});

	return (
		<ArrangersContext.Provider value={{ ...state, dispatch }}>
			{children}
		</ArrangersContext.Provider>
	);
};
