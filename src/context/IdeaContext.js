import { createContext, useReducer } from 'react';
import { log } from '../utils/helper';

export const IdeasContext = createContext();

// const getArtistStats = async (arr) => {
// 	log(arr, 'artist ideas in get stats func');
// 	const stats = {
// 		myArrangements: [
// 			...arr.filter((idea) => idea.arranger.name === 'dave perry'),
// 		].length,
// 		myFavourites: [...arr.filter((idea) => idea.isFavourite === true)].length,
// 		tabCount: [...arr.filter((idea) => idea.isTab === true)].length,
// 		scoreCount: [...arr.filter((idea) => idea.isTab === false)].length,
// 		deadlineCount: [
// 			...arr.filter(
// 				(idea) => idea.deadlineDate !== null && idea.status.name !== 'Recorded'
// 			),
// 		].length,
// 		practicingCount: [
// 			...arr.filter((idea) => idea.status.name === 'Practicing'),
// 		].length,
// 		readyCount: [...arr.filter((idea) => idea.status.name === 'Ready')].length,
// 		recordedCount: [...arr.filter((idea) => idea.status.name === 'Recorded')]
// 			.length,
// 		backlogCount: [...arr.filter((idea) => idea.status.name === 'Backlog')]
// 			.length,
// 		archivedCount: [...arr.filter((idea) => idea.status.name === 'Archived')]
// 			.length,
// 	};

// 	log(stats, 'stats');
// 	const newStats = await stats;

// 	return newStats;
// };

// const getMusicianStats = async (arr) => {
// 	const clonedSongs = [...arr];
// 	const musicianCountObj = clonedSongs
// 		.map(({ artist }) => artist.name)
// 		.reduce(function (count, currentValue) {
// 			return (
// 				count[currentValue] ? ++count[currentValue] : (count[currentValue] = 1),
// 				count
// 			);
// 		}, {});

// 	log(musicianCountObj, 'musician ');

// 	const artistArr = Object.entries(musicianCountObj).map(([key, value]) => ({
// 		name: key,
// 		count: value,
// 	}));

// 	log(artistArr, 'artist');
// };

export const ideaSongsReducer = (state, action) => {
	switch (action.type) {
		case 'SET_SONGS':
			// getMusicianStats(action.payload);
			return {
				...state,
				// ideas: action.payload,
				ideas: action.payload,
				// artists: Object.entries(
				// 	[...action.payload]
				// 		.map(({ artist }) => artist.name)
				// 		.reduce(function (count, currentValue) {
				// 			return (
				// 				count[currentValue]
				// 					? ++count[currentValue]
				// 					: (count[currentValue] = 1),
				// 				count
				// 			);
				// 		}, {})
				// )
				// 	.map(([key, value]) => ({
				// 		name: key,
				// 		count: value,
				// 	}))
				// 	.sort((a, b) => a.name.localeCompare(b.name)),
				// arrangers: Object.entries(
				// 	[...action.payload]
				// 		.map(({ arranger }) => arranger.name)
				// 		.reduce(function (count, currentValue) {
				// 			return (
				// 				count[currentValue]
				// 					? ++count[currentValue]
				// 					: (count[currentValue] = 1),
				// 				count
				// 			);
				// 		}, {})
				// )
				// 	.map(([key, value]) => ({
				// 		name: key,
				// 		count: value,
				// 	}))
				// 	.sort((a, b) => a.name.localeCompare(b.name)),
				// artistSongs: action.payload,
				// arrangerSongs: action.payload,
				// nextDeadlineSong: action.payload[0],
				// myArrangementStats: [
				// 	{
				// 		statName: 'terrorvision',
				// 		statCount: [
				// 			...action.payload.filter(
				// 				(idea) =>
				// 					idea.arranger.name === 'dave perry' &&
				// 					idea.artist.name === 'terrorvision'
				// 			),
				// 		].length,
				// 		statSongs: [
				// 			...action.payload.filter(
				// 				(idea) =>
				// 					idea.arranger.name === 'dave perry' &&
				// 					idea.artist.name === 'terrorvision'
				// 			),
				// 		],
				// 	},
				// 	{
				// 		statName: 'other',
				// 		statCount: [
				// 			...action.payload.filter(
				// 				(idea) =>
				// 					idea.arranger.name === 'dave perry' &&
				// 					idea.artist.name !== 'terrorvision'
				// 			),
				// 		].length,
				// 		statSongs: [
				// 			...action.payload.filter(
				// 				(idea) =>
				// 					idea.arranger.name === 'dave perry' &&
				// 					idea.artist.name !== 'terrorvision'
				// 			),
				// 		],
				// 	},
				// ],
				// styleStats: [
				// 	{
				// 		statName: 'fingerstyle',
				// 		statCount: [
				// 			...action.payload.filter(
				// 				(idea) => idea.style.name === 'fingerstyle'
				// 			),
				// 		].length,
				// 		statSongs: [
				// 			...action.payload.filter(
				// 				(idea) => idea.style.name === 'fingerstyle'
				// 			),
				// 		],
				// 	},
				// 	{
				// 		statName: 'classical',
				// 		statCount: [
				// 			...action.payload.filter(
				// 				(idea) => idea.style.name === 'classical'
				// 			),
				// 		].length,
				// 		statSongs: [
				// 			...action.payload.filter(
				// 				(idea) => idea.style.name === 'classical'
				// 			),
				// 		],
				// 	},
				// ],
				// sheetMusicTypeStats: [
				// 	{
				// 		statName: 'tablature',
				// 		statCount: [...action.payload.filter((idea) => idea.isTab === true)]
				// 			.length,
				// 		statSongs: [
				// 			...action.payload.filter((idea) => idea.isTab === true),
				// 		],
				// 	},
				// 	{
				// 		statName: 'music',
				// 		statCount: [
				// 			...action.payload.filter((idea) => idea.isTab === false),
				// 		].length,
				// 		statSongs: [
				// 			...action.payload.filter((idea) => idea.isTab === false),
				// 		],
				// 	},
				// ],
				// musicianStats: [
				// 	{
				// 		statName: 'artists',
				// 		statCount: Object.entries(
				// 			[...action.payload]
				// 				.map(({ artist }) => artist.name)
				// 				.reduce(function (count, currentValue) {
				// 					return (
				// 						count[currentValue]
				// 							? ++count[currentValue]
				// 							: (count[currentValue] = 1),
				// 						count
				// 					);
				// 				}, {})
				// 		).map(([key, value]) => ({
				// 			name: key,
				// 			count: value,
				// 		})).length,
				// 		statSongs: [
				// 			// ...action.payload.filter((idea) => idea.isTab === true),
				// 		],
				// 	},
				// 	{
				// 		statName: 'arrangers',
				// 		statCount: Object.entries(
				// 			[...action.payload]
				// 				.map(({ arranger }) => arranger.name)
				// 				.reduce(function (count, currentValue) {
				// 					return (
				// 						count[currentValue]
				// 							? ++count[currentValue]
				// 							: (count[currentValue] = 1),
				// 						count
				// 					);
				// 				}, {})
				// 		).map(([key, value]) => ({
				// 			name: key,
				// 			count: value,
				// 		})).length,
				// 		statSongs: [
				// 			// ...action.payload.filter((idea) => idea.isTab === false),
				// 		],
				// 	},
				// ],
				// ideaStats: [
				// 	{
				// 		statName: 'all ideas',
				// 		statCount: action.payload.length,
				// 		statSongs: action.payload.sort(function (a, b) {
				// 			return (a.deadlineDate === null) - (b.deadlineDate === null);
				// 		}),
				// 	},
				// 	{
				// 		statName: 'Recorded',
				// 		statCount: [
				// 			...action.payload.filter(
				// 				(idea) => idea.status.name === 'Recorded'
				// 			),
				// 		].length,
				// 		statSongs: [
				// 			...action.payload.filter(
				// 				(idea) => idea.status.name === 'Recorded'
				// 			),
				// 		],
				// 	},
				// 	{
				// 		statName: 'Ready',
				// 		statCount: [
				// 			...action.payload.filter((idea) => idea.status.name === 'Ready'),
				// 		].length,
				// 		statSongs: [
				// 			...action.payload.filter((idea) => idea.status.name === 'Ready'),
				// 		],
				// 	},
				// 	{
				// 		statName: 'Practicing',
				// 		statCount: [
				// 			...action.payload.filter(
				// 				(idea) => idea.status.name === 'Practicing'
				// 			),
				// 		].length,
				// 		statSongs: [
				// 			...action.payload.filter(
				// 				(idea) => idea.status.name === 'Practicing'
				// 			),
				// 		],
				// 	},

				// 	{
				// 		statName: 'Backlog',
				// 		statCount: [
				// 			...action.payload.filter(
				// 				(idea) => idea.status.name === 'Backlog'
				// 			),
				// 		].length,
				// 		statSongs: [
				// 			...action.payload.filter(
				// 				(idea) => idea.status.name === 'Backlog'
				// 			),
				// 		],
				// 	},
				// 	{
				// 		statName: 'Archived',
				// 		statCount: [
				// 			...action.payload.filter(
				// 				(idea) => idea.status.name === 'Archived'
				// 			),
				// 		].length,
				// 		statSongs: [
				// 			...action.payload.filter(
				// 				(idea) => idea.status.name === 'Archived'
				// 			),
				// 		],
				// 	},
				// ],
				// readySongs: [
				// 	...action.payload.filter((idea) => idea.status.name === 'Ready'),
				// ],
				// practicingSongs: [
				// 	...action.payload.filter((idea) => idea.status.name === 'Practicing'),
				// ],
				// recordedSongs: [
				// 	...action.payload.filter((idea) => idea.status.name === 'Recorded'),
				// ],
				// backlogSongs: [
				// 	...action.payload.filter((idea) => idea.status.name === 'Backlog'),
				// ],
				// archivedSongs: [
				// 	...action.payload.filter((idea) => idea.status.name === 'Archived'),
				// ],
			};
		case 'SET_SONG':
			return {
				...state,
				idea: action.payload,
			};
		// return { idea: action.payload[0] };
		case 'CREATE_SONG':
			return {
				...state,
				// ideas: ...state.ideas, action.payload,
				ideas: [...state.ideas, action.payload],
				// ideas: [action.payload, ...state.ideas],
			};
		case 'UPDATE_SONG':
			log(action.payload, 'payload - update ideas');
			log(state, 'state');

			return {
				...state,
				ideas: state.ideas.map((idea) =>
					idea._id === action.payload._id
						? { ...idea, isComplete: !idea.isComplete }
						: idea
				),
				// filteredDays: state.filteredDays.map((item) => {
				// 	if (item._id === action.payload._id) {
				// 		return {
				// 			...item,
				// 			isComplete: !item.isComplete,
				// 		};
				// 	}
				// 	return item;
				// }),
			};
		// case 'UPDATE_SONG':
		// 	log(action.payload, 'payload - update ideas');
		// 	log(state, 'state');

		// 	return {
		// 		...state,
		// 		ideas: state.ideas.map((idea) =>
		// 			idea._id === action.payload._id ? action.payload : idea
		// 		),
		// 	};
		case 'DELETE_SONG':
			return {
				...state,
				ideas: state.ideas.filter((idea) => idea._id !== action.payload),
			};

		// case 'DELETE_PLAYLIST':
		// 	log(action.payload, 'delete playlist context');
		// 	log(state, 'state, delete playlist');
		// 	log(
		// 		state.playlists.filter(
		// 			(playlist) => playlist._id !== action.payload._id
		// 		),
		// 		'test'
		// 	);
		// 	return {
		// 		// users: state.users.filter((user) => user._id === action.payload._id),
		// 		playlists: state.playlists.filter(
		// 			(playlist) => playlist._id !== action.payload._id
		// 		),
		// 	};
		// case 'SET_ARTIST':
		// 	log(action.payload, 'payload - sng context - set artist');
		// 	// const getStats = getArtistStats([
		// 	// 	...state.ideas.filter((idea) => idea.artist._id === action.payload),
		// 	// ]);
		// 	return {
		// 		...state,
		// 		// artist:
		// 		artistStats: getArtistStats([
		// 			...state.ideas.filter((idea) => idea.artist._id === action.payload),
		// 		]),
		// 		// artistStats: getStats,
		// 		artistSongs: [
		// 			...state.ideas.filter((idea) => idea.artist.name === action.payload),
		// 		],
		// 		// artistSongs: [
		// 		// 	...state.ideas.filter((idea) => idea.artist._id === action.payload),
		// 		// ],
		// 	};
		// case 'SET_ARRANGER':
		// 	log(action.payload, 'payload - sng context - set arranger');
		// 	// const getStats = getArtistStats([
		// 	// 	...state.ideas.filter((idea) => idea.artist._id === action.payload),
		// 	// ]);
		// 	return {
		// 		...state,
		// 		// artist:
		// 		// arrangerStats: getArtistStats([
		// 		// 	...state.ideas.filter((idea) => idea.arranger._id === action.payload),
		// 		// ]),
		// 		// arrangerStats: getStats,
		// 		arrangerSongs: [
		// 			...state.ideas.filter(
		// 				(idea) => idea.arranger.name === action.payload
		// 			),
		// 		],
		// 	};
		case 'LOGOUT':
			return {
				idea: null,
				ideas: null,
				// artists: null,
				// artistSongs: null,
				// artistStats: null,
				// arrangers: null,
				// arrangerSongs: null,
				// readySongs: null,
				// practicingSongs: null,
				// recordedSongs: null,
				// backlogSongs: null,
				// archivedSongs: null,
				// ideaStats: null,
				// myArrangementStats: null,
				// nextDeadlineSong: null,
				// sheetMusicTypeStats: null,
				// musicianStats: null,
				// styleStats: null,
			};
		default:
			return state;
	}
};

export const IdeasContextProvider = ({ children }) => {
	const [state, dispatch] = useReducer(ideaSongsReducer, {
		idea: null,
		ideas: null,
		// artists: null,
		// artistSongs: null,
		// artistStats: null,
		// arrangers: null,

		// arrangerSongs: null,
		// readySongs: null,
		// practicingSongs: null,
		// recordedSongs: null,
		// backlogSongs: null,
		// archivedSongs: null,
		// ideaStats: null,
		// myArrangementStats: null,
		// nextDeadlineSong: null,
		// sheetMusicTypeStats: null,
		// musicianStats: null,
		// styleStats: null,
		// currentUser: null,
	});

	return (
		<IdeasContext.Provider value={{ ...state, dispatch }}>
			{children}
		</IdeasContext.Provider>
	);
};
