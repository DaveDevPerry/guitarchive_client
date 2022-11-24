import { createContext, useReducer } from 'react';
import { log } from '../utils/helper';

export const SongsContext = createContext();

const getArtistStats = async (arr) => {
	log(arr, 'artist songs in get stats func');
	const stats = {
		myArrangements: [
			...arr.filter((song) => song.arranger.name === 'dave perry'),
		].length,
		myFavourites: [...arr.filter((song) => song.isFavourite === true)].length,
		tabCount: [...arr.filter((song) => song.isTab === true)].length,
		scoreCount: [...arr.filter((song) => song.isTab === false)].length,
		deadlineCount: [
			...arr.filter(
				(song) => song.deadlineDate !== null && song.status.name !== 'Recorded'
			),
		].length,
		practicingCount: [
			...arr.filter((song) => song.status.name === 'Practicing'),
		].length,
		readyCount: [...arr.filter((song) => song.status.name === 'Ready')].length,
		recordedCount: [...arr.filter((song) => song.status.name === 'Recorded')]
			.length,
		backlogCount: [...arr.filter((song) => song.status.name === 'Backlog')]
			.length,
		archivedCount: [...arr.filter((song) => song.status.name === 'Archived')]
			.length,
	};

	log(stats, 'stats');
	const newStats = await stats;

	return newStats;
};

export const songsReducer = (state, action) => {
	switch (action.type) {
		case 'SET_SONGS':
			return {
				...state,
				songs: action.payload,
				artistSongs: action.payload,
				arrangerSongs: action.payload,
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
		case 'SET_ARTIST':
			log(action.payload, 'payload - sng context - set artist');
			// const getStats = getArtistStats([
			// 	...state.songs.filter((song) => song.artist._id === action.payload),
			// ]);
			return {
				...state,
				// artist:
				artistStats: getArtistStats([
					...state.songs.filter((song) => song.artist._id === action.payload),
				]),
				// artistStats: getStats,
				artistSongs: [
					...state.songs.filter((song) => song.artist._id === action.payload),
				],
			};
		case 'SET_ARRANGER':
			log(action.payload, 'payload - sng context - set arranger');
			// const getStats = getArtistStats([
			// 	...state.songs.filter((song) => song.artist._id === action.payload),
			// ]);
			return {
				...state,
				// artist:
				// arrangerStats: getArtistStats([
				// 	...state.songs.filter((song) => song.arranger._id === action.payload),
				// ]),
				// arrangerStats: getStats,
				arrangerSongs: [
					...state.songs.filter((song) => song.arranger._id === action.payload),
				],
			};
		case 'LOGOUT':
			return {
				song: null,
				songs: null,
				artistSongs: null,
				artistStats: null,
				arrangerSongs: null,
			};
		default:
			return state;
	}
};

export const SongsContextProvider = ({ children }) => {
	const [state, dispatch] = useReducer(songsReducer, {
		song: null,
		songs: null,
		artistSongs: null,
		artistStats: null,
		arrangerSongs: null,
		// currentUser: null,
	});

	return (
		<SongsContext.Provider value={{ ...state, dispatch }}>
			{children}
		</SongsContext.Provider>
	);
};
