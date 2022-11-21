import { StatusContext } from '../context/StatusContext';
import { useContext } from 'react';

export const useStatusContext = () => {
	const context = useContext(StatusContext);

	if (!context) {
		throw Error('useStatusContext must be used inside a StatusContextProvider');
	}

	return context;
};
