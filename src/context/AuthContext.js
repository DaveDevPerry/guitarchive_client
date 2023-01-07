import { createContext, useReducer, useEffect } from 'react';
import { log } from '../utils/helper';

export const AuthContext = createContext();

export const authReducer = (state, action) => {
	switch (action.type) {
		case 'LOGIN':
			return {
				user: action.payload,
			};
		case 'LOGOUT':
			return { user: null, currentUser: null, youtubeTarget: null };
		case 'SET_USER':
			return {
				...state,
				currentUser: action.payload,
			};
		case 'SET_YOUTUBE_TARGET':
			log(action.payload, 'payload - yt target views user context');
			return {
				...state,
				youtubeTarget: action.payload,
			};
		case 'UPDATE_USER_TARGETS':
			log(action.payload, 'payload - update yt target arr user context');
			return {
				...state,
				user: action.payload,
				// youtubeTarget: action.payload,
			};
		case 'UPDATE_USER':
			log(action.payload, 'payload - update user');
			log(state, 'state');
			return {
				...state,
				currentUser: action.payload,
			};
		default:
			return state;
	}
};

export const AuthContextProvider = ({ children }) => {
	const [state, dispatch] = useReducer(authReducer, {
		user: null,
		currentUser: null,
		youtubeTarget: null,
	});

	useEffect(() => {
		const user = JSON.parse(localStorage.getItem('guitarchive'));
		if (user) {
			dispatch({ type: 'LOGIN', payload: user });
			// localStorage.removeItem('user-my-planner');
		}
	}, []);

	return (
		<AuthContext.Provider value={{ ...state, dispatch }}>
			{children}
		</AuthContext.Provider>
	);
};
