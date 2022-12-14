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

const getArtistData = (arr) => {
	log('in artist data');
	const clonedSongs = [...arr];
	log(clonedSongs, 'cloned songs');
	// returns each song with referenced data obj just name
	const flatten = clonedSongs.map((song) => {
		return {
			...song,
			artist: song.artist.name,
			arranger: song.arranger.name,
			status: song.status.name,
			style: song.style.name,
		};
	});
	log(flatten, 'flatten');

	const getArtistNames = Object.entries(
		[...arr]
			.map(({ artist }) => artist.name)
			.reduce(function (count, currentValue) {
				return (
					count[currentValue]
						? ++count[currentValue]
						: (count[currentValue] = 1),
					count
				);
			}, {})
	)
		.map(([key, value]) => ({
			name: key,
			count: value,
		}))
		.sort((a, b) => a.name.localeCompare(b.name));
	log(getArtistNames, 'names');

	const artistArr = [];
	// loop through artist names and new array of song objects from each artist

	getArtistNames.forEach((artist) => {
		// const tempArr = [];
		const songsByArtist = [...flatten].filter((song) => {
			return song.artist === artist.name;
		});
		artistArr.push(songsByArtist);
	});
	log(artistArr, 'artist arr');

	const artistsCounterData = [];
	for (let i = 0; i < artistArr.length; i++) {
		// let aName = getArtistNames[i].name;
		let countersObj = {
			name: artistArr[i][0].artist,
			songs: artistArr[i].length,
			tab: [...artistArr[i]].filter((song) => song.isTab === true).length,
			score: [...artistArr[i]].filter((song) => song.isTab === false).length,
			fav: [...artistArr[i]].filter((song) => song.isFavourite === true).length,
			fingerstyle: [...artistArr[i]].filter(
				(song) => song.style === 'fingerstyle'
			).length,
			electric: [...artistArr[i]].filter((song) => song.style === 'electric')
				.length,
			classical: [...artistArr[i]].filter((song) => song.style === 'classical')
				.length,
			recorded: [...artistArr[i]].filter((song) => song.status === 'Recorded')
				.length,
			practicing: [...artistArr[i]].filter(
				(song) => song.status === 'Practicing'
			).length,
			ready: [...artistArr[i]].filter((song) => song.status === 'Ready').length,
			backlog: [...artistArr[i]].filter((song) => song.status === 'Backlog')
				.length,
			archived: [...artistArr[i]].filter((song) => song.status === 'Archived')
				.length,
			deadline: [...artistArr[i]].filter(
				(song) => song.deadlineDate !== null && song.status !== 'Recorded'
			).length,
			// tab: [...artistArr].filter((song) => song.isTab === true).length,
			// tab: [...artistArr].filter((song) => song.isTab === true).length,
		};
		artistsCounterData.push(countersObj);
	}
	log(artistsCounterData, 'art counter data');

	return artistsCounterData;
	// getArtistNames.forEach((artist) => {
	// 	// const tempArr = [];
	// 	const songsByArtist = [...flatten].map((song) => {
	// 		return song.artist === artist.name;
	// 	});
	// 	artistArr.push(songsByArtist);
	// });
	// log(artistArr, 'artist arr');

	// const duplicatedArtists = flatten
	// 	.map((v) => v.artist)
	// 	.filter((v, i, vNames) => vNames.indexOf(v) !== i);
	// log(duplicatedArtists, 'dup art');
	// const duplicates = flatten.filter((obj) =>
	// 	duplicatedArtists.includes(obj.id)
	// );
	// console.log(duplicates, 'dups');
	// 	const duplicateIds = values
	//   .map(v => v.id)
	//   .filter((v, i, vIds) => vIds.indexOf(v) !== i)
	// const duplicates = values
	//   .filter(obj => duplicateIds.includes(obj.id));
	// console.log(duplicates)
};
const getArrangerData = (arr) => {
	log('in arranger data');
	const clonedSongs = [...arr];
	log(clonedSongs, 'cloned songs');
	// returns each song with referenced data obj just name
	const flatten = clonedSongs.map((song) => {
		return {
			...song,
			artist: song.artist.name,
			arranger: song.arranger.name,
			status: song.status.name,
			style: song.style.name,
		};
	});
	log(flatten, 'flatten');

	const getArrangerNames = Object.entries(
		[...arr]
			.map(({ arranger }) => arranger.name)
			.reduce(function (count, currentValue) {
				return (
					count[currentValue]
						? ++count[currentValue]
						: (count[currentValue] = 1),
					count
				);
			}, {})
	)
		.map(([key, value]) => ({
			name: key,
			count: value,
		}))
		.sort((a, b) => a.name.localeCompare(b.name));
	log(getArrangerNames, 'names');

	const arrangerArr = [];
	// loop through arranger names and new array of song objects from each arranger

	getArrangerNames.forEach((arranger) => {
		// const tempArr = [];
		const songsByArranger = [...flatten].filter((song) => {
			return song.arranger === arranger.name;
		});
		arrangerArr.push(songsByArranger);
	});
	log(arrangerArr, 'arranger arr');

	const arrangersCounterData = [];
	for (let i = 0; i < arrangerArr.length; i++) {
		// let aName = getArtistNames[i].name;
		let countersObj = {
			name: arrangerArr[i][0].arranger,
			songs: arrangerArr[i].length,
			tab: [...arrangerArr[i]].filter((song) => song.isTab === true).length,
			score: [...arrangerArr[i]].filter((song) => song.isTab === false).length,
			fav: [...arrangerArr[i]].filter((song) => song.isFavourite === true)
				.length,
			fingerstyle: [...arrangerArr[i]].filter(
				(song) => song.style === 'fingerstyle'
			).length,
			electric: [...arrangerArr[i]].filter((song) => song.style === 'electric')
				.length,
			classical: [...arrangerArr[i]].filter(
				(song) => song.style === 'classical'
			).length,
			recorded: [...arrangerArr[i]].filter((song) => song.status === 'Recorded')
				.length,
			practicing: [...arrangerArr[i]].filter(
				(song) => song.status === 'Practicing'
			).length,
			ready: [...arrangerArr[i]].filter((song) => song.status === 'Ready')
				.length,
			backlog: [...arrangerArr[i]].filter((song) => song.status === 'Backlog')
				.length,
			archived: [...arrangerArr[i]].filter((song) => song.status === 'Archived')
				.length,
			deadline: [...arrangerArr[i]].filter(
				(song) => song.deadlineDate !== null && song.status !== 'Recorded'
			).length,
			// tab: [...arrangerArr].filter((song) => song.isTab === true).length,
			// tab: [...arrangerArr].filter((song) => song.isTab === true).length,
		};
		arrangersCounterData.push(countersObj);
	}
	log(arrangersCounterData, 'art counter data');

	return arrangersCounterData;
	// getArtistNames.forEach((artist) => {
	// 	// const tempArr = [];
	// 	const songsByArtist = [...flatten].map((song) => {
	// 		return song.artist === artist.name;
	// 	});
	// 	artistArr.push(songsByArtist);
	// });
	// log(artistArr, 'artist arr');

	// const duplicatedArtists = flatten
	// 	.map((v) => v.artist)
	// 	.filter((v, i, vNames) => vNames.indexOf(v) !== i);
	// log(duplicatedArtists, 'dup art');
	// const duplicates = flatten.filter((obj) =>
	// 	duplicatedArtists.includes(obj.id)
	// );
	// console.log(duplicates, 'dups');
	// 	const duplicateIds = values
	//   .map(v => v.id)
	//   .filter((v, i, vIds) => vIds.indexOf(v) !== i)
	// const duplicates = values
	//   .filter(obj => duplicateIds.includes(obj.id));
	// console.log(duplicates)
};

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

// const getSongsByArtist = (arr) => {
// 	log('in func')
// 	const clonedSongs = [...arr];
// 	const mapped = clonedSongs.map(({song}) => {

// 	})
// }

export const songsReducer = (state, action) => {
	switch (action.type) {
		case 'SET_SONGS':
			// getMusicianStats(action.payload);
			// getSongsByArtist(action.payload)
			getArtistData(action.payload);
			return {
				...state,
				// songs: action.payload,
				songs: action.payload.sort(function (a, b) {
					return (a.deadlineDate === null) - (b.deadlineDate === null);
				}),
				artists: Object.entries(
					[...action.payload]
						.map(({ artist }) => artist.name)
						.reduce(function (count, currentValue) {
							return (
								count[currentValue]
									? ++count[currentValue]
									: (count[currentValue] = 1),
								count
							);
						}, {})
				)
					.map(([key, value]) => ({
						name: key,
						count: value,
					}))
					.sort((a, b) => a.name.localeCompare(b.name)),
				artistsCounters: getArtistData(action.payload),
				arrangers: Object.entries(
					[...action.payload]
						.map(({ arranger }) => arranger.name)
						.reduce(function (count, currentValue) {
							return (
								count[currentValue]
									? ++count[currentValue]
									: (count[currentValue] = 1),
								count
							);
						}, {})
				)
					.map(([key, value]) => ({
						name: key,
						count: value,
					}))
					.sort((a, b) => a.name.localeCompare(b.name)),
				arrangersCounters: getArrangerData(action.payload),
				artistSongs: action.payload,
				arrangerSongs: action.payload,
				nextDeadlineSong: action.payload[0],
				myArrangementStats: [
					{
						statName: 'terrorvision',
						statCount: [
							...action.payload.filter(
								(song) =>
									song.arranger.name === 'dave perry' &&
									song.artist.name === 'terrorvision'
							),
						].length,
						statSongs: [
							...action.payload.filter(
								(song) =>
									song.arranger.name === 'dave perry' &&
									song.artist.name === 'terrorvision'
							),
						],
					},
					{
						statName: 'other',
						statCount: [
							...action.payload.filter(
								(song) =>
									song.arranger.name === 'dave perry' &&
									song.artist.name !== 'terrorvision'
							),
						].length,
						statSongs: [
							...action.payload.filter(
								(song) =>
									song.arranger.name === 'dave perry' &&
									song.artist.name !== 'terrorvision'
							),
						],
					},
				],
				styleStats: [
					{
						statName: 'fingerstyle',
						statCount: [
							...action.payload.filter(
								(song) => song.style.name === 'fingerstyle'
							),
						].length,
						statSongs: [
							...action.payload.filter(
								(song) => song.style.name === 'fingerstyle'
							),
						],
					},
					{
						statName: 'classical',
						statCount: [
							...action.payload.filter(
								(song) => song.style.name === 'classical'
							),
						].length,
						statSongs: [
							...action.payload.filter(
								(song) => song.style.name === 'classical'
							),
						],
					},
				],
				sheetMusicTypeStats: [
					{
						statName: 'tablature',
						statCount: [...action.payload.filter((song) => song.isTab === true)]
							.length,
						statSongs: [
							...action.payload.filter((song) => song.isTab === true),
						],
					},
					{
						statName: 'music',
						statCount: [
							...action.payload.filter((song) => song.isTab === false),
						].length,
						statSongs: [
							...action.payload.filter((song) => song.isTab === false),
						],
					},
				],
				musicianStats: [
					{
						statName: 'artists',
						statCount: Object.entries(
							[...action.payload]
								.map(({ artist }) => artist.name)
								.reduce(function (count, currentValue) {
									return (
										count[currentValue]
											? ++count[currentValue]
											: (count[currentValue] = 1),
										count
									);
								}, {})
						).map(([key, value]) => ({
							name: key,
							count: value,
						})).length,
						statSongs: [
							// ...action.payload.filter((song) => song.isTab === true),
						],
					},
					{
						statName: 'arrangers',
						statCount: Object.entries(
							[...action.payload]
								.map(({ arranger }) => arranger.name)
								.reduce(function (count, currentValue) {
									return (
										count[currentValue]
											? ++count[currentValue]
											: (count[currentValue] = 1),
										count
									);
								}, {})
						).map(([key, value]) => ({
							name: key,
							count: value,
						})).length,
						statSongs: [
							// ...action.payload.filter((song) => song.isTab === false),
						],
					},
				],
				songStats: [
					{
						statName: 'all songs',
						statCount: action.payload.length,
						statSongs: action.payload.sort(function (a, b) {
							return (a.deadlineDate === null) - (b.deadlineDate === null);
						}),
					},
					{
						statName: 'Recorded',
						statCount: [
							...action.payload.filter(
								(song) => song.status.name === 'Recorded'
							),
						].length,
						statSongs: [
							...action.payload.filter(
								(song) => song.status.name === 'Recorded'
							),
						],
					},
					{
						statName: 'Ready',
						statCount: [
							...action.payload.filter((song) => song.status.name === 'Ready'),
						].length,
						statSongs: [
							...action.payload.filter((song) => song.status.name === 'Ready'),
						],
					},
					{
						statName: 'Practicing',
						statCount: [
							...action.payload.filter(
								(song) => song.status.name === 'Practicing'
							),
						].length,
						statSongs: [
							...action.payload.filter(
								(song) => song.status.name === 'Practicing'
							),
						],
					},

					{
						statName: 'Backlog',
						statCount: [
							...action.payload.filter(
								(song) => song.status.name === 'Backlog'
							),
						].length,
						statSongs: [
							...action.payload.filter(
								(song) => song.status.name === 'Backlog'
							),
						],
					},
					{
						statName: 'Archived',
						statCount: [
							...action.payload.filter(
								(song) => song.status.name === 'Archived'
							),
						].length,
						statSongs: [
							...action.payload.filter(
								(song) => song.status.name === 'Archived'
							),
						],
					},
				],
				readySongs: [
					...action.payload.filter((song) => song.status.name === 'Ready'),
				],
				practicingSongs: [
					...action.payload.filter((song) => song.status.name === 'Practicing'),
				],
				recordedSongs: [
					...action.payload.filter((song) => song.status.name === 'Recorded'),
				],
				backlogSongs: [
					...action.payload.filter((song) => song.status.name === 'Backlog'),
				],
				archivedSongs: [
					...action.payload.filter((song) => song.status.name === 'Archived'),
				],
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
				songs: state.songs.filter((song) => song._id !== action.payload),
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
					...state.songs.filter((song) => song.artist.name === action.payload),
				],
				// artistSongs: [
				// 	...state.songs.filter((song) => song.artist._id === action.payload),
				// ],
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
					...state.songs.filter(
						(song) => song.arranger.name === action.payload
					),
				],
			};
		case 'LOGOUT':
			return {
				song: null,
				songs: null,
				artists: null,
				artistsCounters: null,
				artistSongs: null,
				artistStats: null,
				arrangers: null,
				arrangersCounters: null,
				arrangerSongs: null,
				readySongs: null,
				practicingSongs: null,
				recordedSongs: null,
				backlogSongs: null,
				archivedSongs: null,
				songStats: null,
				myArrangementStats: null,
				nextDeadlineSong: null,
				sheetMusicTypeStats: null,
				musicianStats: null,
				styleStats: null,
			};
		default:
			return state;
	}
};

export const SongsContextProvider = ({ children }) => {
	const [state, dispatch] = useReducer(songsReducer, {
		song: null,
		songs: null,
		artists: null,
		artistsCounters: null,
		artistSongs: null,
		artistStats: null,
		arrangers: null,
		arrangersCounters: null,
		arrangerSongs: null,
		readySongs: null,
		practicingSongs: null,
		recordedSongs: null,
		backlogSongs: null,
		archivedSongs: null,
		songStats: null,
		myArrangementStats: null,
		nextDeadlineSong: null,
		sheetMusicTypeStats: null,
		musicianStats: null,
		styleStats: null,
		// currentUser: null,
	});

	return (
		<SongsContext.Provider value={{ ...state, dispatch }}>
			{children}
		</SongsContext.Provider>
	);
};
