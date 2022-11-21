import { ArtistsContext } from '../context/ArtistContext';
import { useContext } from 'react';

export const useArtistsContext = () => {
	const context = useContext(ArtistsContext);

	if (!context) {
		throw Error(
			'useArtistsContext must be used inside a ArtistsContextProvider'
		);
	}

	return context;
};
