import { createContext, useReducer } from 'react';
import { log } from '../utils/helper';

export const SongsContext = createContext();

export const songsReducer = (state, action) => {
	switch (action.type) {
		case 'SET_SONGS':
			return {
				...state,
				songs: action.payload,
			};
		case 'SET_SONG':
			return {
				...state,
				song: action.payload,
			};
		// return { song: action.payload[0] };
		case 'CREATE_SONG':
			return {
				...state,
				// songs: ...state.songs, action.payload,
				songs: [...state.songs, action.payload],
				// songs: [action.payload, ...state.songs],
			};
		case 'UPDATE_SONG':
			log(action.payload, 'payload - update songs');
			log(state, 'state');
			// return {
			// 	...state,
			// 	song: action.payload,
			// };
			return {
				...state,
				songs: state.songs.map((song) =>
					song._id === action.payload._id ? action.payload : song
				),
			};
		case 'DELETE_SONG':
			return {
				...state,
				songs: state.songs.filter((song) => song._id !== action.payload._id),
			};
		default:
			return state;
	}
};

export const SongsContextProvider = ({ children }) => {
	const [state, dispatch] = useReducer(songsReducer, {
		song: null,
		songs: null,
		// currentUser: null,
	});

	return (
		<SongsContext.Provider value={{ ...state, dispatch }}>
			{children}
		</SongsContext.Provider>
	);
};
