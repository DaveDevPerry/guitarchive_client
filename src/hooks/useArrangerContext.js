import { ArrangersContext } from '../context/ArrangerContext';
import { useContext } from 'react';

export const useArrangersContext = () => {
	const context = useContext(ArrangersContext);

	if (!context) {
		throw Error(
			'useArrangersContext must be used inside a ArrangersContextProvider'
		);
	}

	return context;
};
