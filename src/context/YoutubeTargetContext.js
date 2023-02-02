import { createContext, useReducer } from 'react';
import { log } from '../utils/helper';

export const YoutubeTargetsContext = createContext();

const sortTargetData = (arr) => {
	log(arr, 'arr sort targets');
	const cloned = [...arr];
	log(cloned, 'cloned yt');

	// const newData = cloned.map((obj) => {

	// 	// check data arr for next target
	// 	return
	// })
};

const getTargetViewCount = (arr) => {
	log(arr, 'arr view targets');

	const getYTTargetNumber = [...arr[0].data].filter(
		(obj) => obj.isComplete === false
	)[0].target;

	log(getYTTargetNumber, 'getYTTargetNumber - views');

	return getYTTargetNumber;
};

const getTargetSubCount = (arr) => {
	log(arr, 'arr sub targets');

	const getYTTargetNumber = [...arr[1].data].filter(
		(obj) => obj.isComplete === false
	)[0].target;

	log(getYTTargetNumber, 'getYTTargetNumber - subs');

	return getYTTargetNumber;
};

const getTargetVideoCount = (arr) => {
	log(arr, 'arr video targets');

	const getYTTargetNumber = [...arr[2].data].filter(
		(obj) => obj.isComplete === false
	)[0].target;

	log(getYTTargetNumber, 'getYTTargetNumber - videos');

	return getYTTargetNumber;
};
// const getTargetViewCount = (arr) => {
// 	log(arr, 'arr view targets');
// 	const getYTTargetViewCount = [...arr].filter(
// 		(obj) => obj.isComplete === false
// 	)[0].target;

// 	return getYTTargetViewCount;
// };

export const youtubeTargetsReducer = (state, action) => {
	switch (action.type) {
		case 'SET_YOUTUBE_DATA':
			log(action.payload, 'payload -  youtube data context');
			return {
				...state,
				targetViewCount: getTargetViewCount(action.payload),
				// trophyViewData:
				targetSubCount: getTargetSubCount(action.payload),
				targetVideoCount: getTargetVideoCount(action.payload),
				// targetViewCount: getTargetViewCount(action.payload[0].data),
				youtubeTargetData: action.payload,
				testYoutubeTargetData: sortTargetData(action.payload),
				// testYoutubeTargetData: sortTargetData(action.payload),
				dummyYoutubeTargetData: [
					{
						ytViewData: [...action.payload][0],
					},
					{
						ytSubData: [...action.payload][1],
					},
					{
						ytVideoData: [...action.payload][2],
					},
				],
			};
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
		case 'SET_HAS_YOUTUBE':
			log(action.payload, 'payload -  has youtube data context');
			return {
				...state,
				hasYoutubeAccount: action.payload,
			};

		case 'LOGOUT':
			return {
				dummyYoutubeTargetData: null,
				testYoutubeTargetData: null,
				youtubeTargetData: null,
				targetData: null,
				youtubeTarget: null,
				targetViewCount: null,
				targetSubCount: null,
				targetVideoCount: null,
				hasYoutubeAccount: false,
			};
		default:
			return state;
	}
};

export const YoutubeTargetsContextProvider = ({ children }) => {
	const [state, dispatch] = useReducer(youtubeTargetsReducer, {
		testYoutubeTargetData: null,
		dummyYoutubeTargetData: null,

		youtubeTargetData: null,
		targetData: null,
		youtubeTarget: null,
		targetViewCount: null,
		targetSubCount: null,
		targetVideoCount: null,
		hasYoutubeAccount: false,
	});

	return (
		<YoutubeTargetsContext.Provider value={{ ...state, dispatch }}>
			{children}
		</YoutubeTargetsContext.Provider>
	);
};
