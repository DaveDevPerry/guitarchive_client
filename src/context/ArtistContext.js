import { createContext, useReducer } from 'react';
import { log } from '../utils/helper';

export const ArtistsContext = createContext();

export const artistsReducer = (state, action) => {
	switch (action.type) {
		case 'SET_ARTISTS':
			return { artists: action.payload };
		case 'SET_ARTIST':
			return { artist: null };
		case 'CREATE_ARTIST':
			return {
				artists: [action.payload, ...state.artists],
			};
		case 'UPDATE_ARTIST':
			log(action.payload, 'payload - update artists');
			log(state, 'state');
			// return {
			// 	...state,
			// 	artist: action.payload,
			// };
			return {
				artists: state.artists.map((artist) =>
					artist._id === action.payload._id ? action.payload : artist
				),
			};
		case 'DELETE_ARTIST':
			return {
				artists: state.artists.filter(
					(artist) => artist._id !== action.payload._id
				),
			};
		default:
			return state;
	}
};

export const ArtistsContextProvider = ({ children }) => {
	const [state, dispatch] = useReducer(artistsReducer, {
		artist: null,
		artists: null,
		// currentUser: null,
	});

	return (
		<ArtistsContext.Provider value={{ ...state, dispatch }}>
			{children}
		</ArtistsContext.Provider>
	);
};
