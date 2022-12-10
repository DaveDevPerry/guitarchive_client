import { createContext, useReducer } from 'react';
import { log } from '../utils/helper';

export const RequestsContext = createContext();

// const getArtistStats = async (arr) => {
// 	log(arr, 'artist requests in get stats func');
// 	const stats = {
// 		myArrangements: [
// 			...arr.filter((request) => request.arranger.name === 'dave perry'),
// 		].length,
// 		myFavourites: [...arr.filter((request) => request.isFavourite === true)].length,
// 		tabCount: [...arr.filter((request) => request.isTab === true)].length,
// 		scoreCount: [...arr.filter((request) => request.isTab === false)].length,
// 		deadlineCount: [
// 			...arr.filter(
// 				(request) => request.deadlineDate !== null && request.status.name !== 'Recorded'
// 			),
// 		].length,
// 		practicingCount: [
// 			...arr.filter((request) => request.status.name === 'Practicing'),
// 		].length,
// 		readyCount: [...arr.filter((request) => request.status.name === 'Ready')].length,
// 		recordedCount: [...arr.filter((request) => request.status.name === 'Recorded')]
// 			.length,
// 		backlogCount: [...arr.filter((request) => request.status.name === 'Backlog')]
// 			.length,
// 		archivedCount: [...arr.filter((request) => request.status.name === 'Archived')]
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

export const requestSongsReducer = (state, action) => {
	switch (action.type) {
		case 'SET_SONGS':
			// getMusicianStats(action.payload);
			return {
				...state,
				// requests: action.payload,
				requests: action.payload,
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
				// 				(request) =>
				// 					request.arranger.name === 'dave perry' &&
				// 					request.artist.name === 'terrorvision'
				// 			),
				// 		].length,
				// 		statSongs: [
				// 			...action.payload.filter(
				// 				(request) =>
				// 					request.arranger.name === 'dave perry' &&
				// 					request.artist.name === 'terrorvision'
				// 			),
				// 		],
				// 	},
				// 	{
				// 		statName: 'other',
				// 		statCount: [
				// 			...action.payload.filter(
				// 				(request) =>
				// 					request.arranger.name === 'dave perry' &&
				// 					request.artist.name !== 'terrorvision'
				// 			),
				// 		].length,
				// 		statSongs: [
				// 			...action.payload.filter(
				// 				(request) =>
				// 					request.arranger.name === 'dave perry' &&
				// 					request.artist.name !== 'terrorvision'
				// 			),
				// 		],
				// 	},
				// ],
				// styleStats: [
				// 	{
				// 		statName: 'fingerstyle',
				// 		statCount: [
				// 			...action.payload.filter(
				// 				(request) => request.style.name === 'fingerstyle'
				// 			),
				// 		].length,
				// 		statSongs: [
				// 			...action.payload.filter(
				// 				(request) => request.style.name === 'fingerstyle'
				// 			),
				// 		],
				// 	},
				// 	{
				// 		statName: 'classical',
				// 		statCount: [
				// 			...action.payload.filter(
				// 				(request) => request.style.name === 'classical'
				// 			),
				// 		].length,
				// 		statSongs: [
				// 			...action.payload.filter(
				// 				(request) => request.style.name === 'classical'
				// 			),
				// 		],
				// 	},
				// ],
				// sheetMusicTypeStats: [
				// 	{
				// 		statName: 'tablature',
				// 		statCount: [...action.payload.filter((request) => request.isTab === true)]
				// 			.length,
				// 		statSongs: [
				// 			...action.payload.filter((request) => request.isTab === true),
				// 		],
				// 	},
				// 	{
				// 		statName: 'music',
				// 		statCount: [
				// 			...action.payload.filter((request) => request.isTab === false),
				// 		].length,
				// 		statSongs: [
				// 			...action.payload.filter((request) => request.isTab === false),
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
				// 			// ...action.payload.filter((request) => request.isTab === true),
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
				// 			// ...action.payload.filter((request) => request.isTab === false),
				// 		],
				// 	},
				// ],
				// requestStats: [
				// 	{
				// 		statName: 'all requests',
				// 		statCount: action.payload.length,
				// 		statSongs: action.payload.sort(function (a, b) {
				// 			return (a.deadlineDate === null) - (b.deadlineDate === null);
				// 		}),
				// 	},
				// 	{
				// 		statName: 'Recorded',
				// 		statCount: [
				// 			...action.payload.filter(
				// 				(request) => request.status.name === 'Recorded'
				// 			),
				// 		].length,
				// 		statSongs: [
				// 			...action.payload.filter(
				// 				(request) => request.status.name === 'Recorded'
				// 			),
				// 		],
				// 	},
				// 	{
				// 		statName: 'Ready',
				// 		statCount: [
				// 			...action.payload.filter((request) => request.status.name === 'Ready'),
				// 		].length,
				// 		statSongs: [
				// 			...action.payload.filter((request) => request.status.name === 'Ready'),
				// 		],
				// 	},
				// 	{
				// 		statName: 'Practicing',
				// 		statCount: [
				// 			...action.payload.filter(
				// 				(request) => request.status.name === 'Practicing'
				// 			),
				// 		].length,
				// 		statSongs: [
				// 			...action.payload.filter(
				// 				(request) => request.status.name === 'Practicing'
				// 			),
				// 		],
				// 	},

				// 	{
				// 		statName: 'Backlog',
				// 		statCount: [
				// 			...action.payload.filter(
				// 				(request) => request.status.name === 'Backlog'
				// 			),
				// 		].length,
				// 		statSongs: [
				// 			...action.payload.filter(
				// 				(request) => request.status.name === 'Backlog'
				// 			),
				// 		],
				// 	},
				// 	{
				// 		statName: 'Archived',
				// 		statCount: [
				// 			...action.payload.filter(
				// 				(request) => request.status.name === 'Archived'
				// 			),
				// 		].length,
				// 		statSongs: [
				// 			...action.payload.filter(
				// 				(request) => request.status.name === 'Archived'
				// 			),
				// 		],
				// 	},
				// ],
				// readySongs: [
				// 	...action.payload.filter((request) => request.status.name === 'Ready'),
				// ],
				// practicingSongs: [
				// 	...action.payload.filter((request) => request.status.name === 'Practicing'),
				// ],
				// recordedSongs: [
				// 	...action.payload.filter((request) => request.status.name === 'Recorded'),
				// ],
				// backlogSongs: [
				// 	...action.payload.filter((request) => request.status.name === 'Backlog'),
				// ],
				// archivedSongs: [
				// 	...action.payload.filter((request) => request.status.name === 'Archived'),
				// ],
			};
		case 'SET_SONG':
			return {
				...state,
				request: action.payload,
			};
		// return { request: action.payload[0] };
		case 'CREATE_SONG':
			return {
				...state,
				// requests: ...state.requests, action.payload,
				requests: [...state.requests, action.payload],
				// requests: [action.payload, ...state.requests],
			};
		case 'UPDATE_SONG':
			log(action.payload, 'payload - update requests');
			log(state, 'state');

			return {
				...state,
				requests: state.requests.map((request) =>
					request._id === action.payload._id
						? { ...request, isComplete: !request.isComplete }
						: request
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
		// 	log(action.payload, 'payload - update requests');
		// 	log(state, 'state');

		// 	return {
		// 		...state,
		// 		requests: state.requests.map((request) =>
		// 			request._id === action.payload._id ? action.payload : request
		// 		),
		// 	};
		case 'DELETE_SONG':
			return {
				...state,
				requests: state.requests.filter(
					(request) => request._id !== action.payload
				),
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
		// 	// 	...state.requests.filter((request) => request.artist._id === action.payload),
		// 	// ]);
		// 	return {
		// 		...state,
		// 		// artist:
		// 		artistStats: getArtistStats([
		// 			...state.requests.filter((request) => request.artist._id === action.payload),
		// 		]),
		// 		// artistStats: getStats,
		// 		artistSongs: [
		// 			...state.requests.filter((request) => request.artist.name === action.payload),
		// 		],
		// 		// artistSongs: [
		// 		// 	...state.requests.filter((request) => request.artist._id === action.payload),
		// 		// ],
		// 	};
		// case 'SET_ARRANGER':
		// 	log(action.payload, 'payload - sng context - set arranger');
		// 	// const getStats = getArtistStats([
		// 	// 	...state.requests.filter((request) => request.artist._id === action.payload),
		// 	// ]);
		// 	return {
		// 		...state,
		// 		// artist:
		// 		// arrangerStats: getArtistStats([
		// 		// 	...state.requests.filter((request) => request.arranger._id === action.payload),
		// 		// ]),
		// 		// arrangerStats: getStats,
		// 		arrangerSongs: [
		// 			...state.requests.filter(
		// 				(request) => request.arranger.name === action.payload
		// 			),
		// 		],
		// 	};
		case 'LOGOUT':
			return {
				request: null,
				requests: null,
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
				// requestStats: null,
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

export const RequestsContextProvider = ({ children }) => {
	const [state, dispatch] = useReducer(requestSongsReducer, {
		request: null,
		requests: null,
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
		// requestStats: null,
		// myArrangementStats: null,
		// nextDeadlineSong: null,
		// sheetMusicTypeStats: null,
		// musicianStats: null,
		// styleStats: null,
		// currentUser: null,
	});

	return (
		<RequestsContext.Provider value={{ ...state, dispatch }}>
			{children}
		</RequestsContext.Provider>
	);
};
