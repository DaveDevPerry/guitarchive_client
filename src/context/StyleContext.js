import { createContext, useReducer } from 'react';
import { log } from '../utils/helper';

export const StylesContext = createContext();

export const stylesReducer = (state, action) => {
	switch (action.type) {
		case 'SET_STYLES':
			return { styles: action.payload };
		case 'SET_STYLE':
			return { style: null };
		case 'CREATE_STYLE':
			return {
				styles: [action.payload, ...state.styles],
			};
		case 'UPDATE_STYLE':
			log(action.payload, 'payload - update styles');
			log(state, 'state');
			// return {
			// 	...state,
			// 	style: action.payload,
			// };
			return {
				styles: state.styles.map((style) =>
					style._id === action.payload._id ? action.payload : style
				),
			};
		case 'DELETE_STYLE':
			return {
				styles: state.styles.filter(
					(style) => style._id !== action.payload._id
				),
			};
		default:
			return state;
	}
};

export const StylesContextProvider = ({ children }) => {
	const [state, dispatch] = useReducer(stylesReducer, {
		style: null,
		styles: null,
		// currentUser: null,
	});

	return (
		<StylesContext.Provider value={{ ...state, dispatch }}>
			{children}
		</StylesContext.Provider>
	);
};
