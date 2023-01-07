import { createContext, useReducer } from 'react';
import { log } from '../utils/helper';

export const YoutubeTargetsContext = createContext();

export const youtubeTargetsReducer = (state, action) => {
	switch (action.type) {
		case 'SET_TARGET_DATA':
			log(action.payload, 'payload -  target data context');
			return {
				...state,
				targetData: action.payload,
			};
		case 'SET_YOUTUBE_TARGET':
			log(action.payload, 'payload - yt target views user context');
			return {
				...state,
				youtubeTarget: action.payload,
			};

		case 'LOGOUT':
			return {
				targetData: null,
				youtubeTarget: null,
			};
		default:
			return state;
	}
};

export const YoutubeTargetsContextProvider = ({ children }) => {
	const [state, dispatch] = useReducer(youtubeTargetsReducer, {
		targetData: null,
		youtubeTarget: null,
	});

	return (
		<YoutubeTargetsContext.Provider value={{ ...state, dispatch }}>
			{children}
		</YoutubeTargetsContext.Provider>
	);
};
