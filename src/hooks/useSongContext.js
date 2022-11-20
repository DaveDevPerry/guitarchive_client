import { SongsContext } from '../context/SongContext';
import { useContext } from 'react';

export const useSongsContext = () => {
	const context = useContext(SongsContext);

	if (!context) {
		throw Error('useSongsContext must be used inside a SongsContextProvider');
	}

	return context;
};
