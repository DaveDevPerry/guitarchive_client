import { YoutubeTargetsContext } from '../context/YoutubeTargetContext';
import { useContext } from 'react';

export const useYoutubeTargetsContext = () => {
	const context = useContext(YoutubeTargetsContext);

	if (!context) {
		throw Error(
			'useYoutubeTargetsContext must be used inside a YoutubeTargetsContextProvider'
		);
	}

	return context;
};
