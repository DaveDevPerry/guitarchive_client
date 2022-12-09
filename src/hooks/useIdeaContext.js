import { IdeasContext } from '../context/IdeaContext';
import { useContext } from 'react';

export const useIdeasContext = () => {
	const context = useContext(IdeasContext);

	if (!context) {
		throw Error('useIdeasContext must be used inside a IdeasContextProvider');
	}

	return context;
};
