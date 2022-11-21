import { StylesContext } from '../context/StyleContext';
import { useContext } from 'react';

export const useStylesContext = () => {
	const context = useContext(StylesContext);

	if (!context) {
		throw Error('useStylesContext must be used inside a StylesContextProvider');
	}

	return context;
};
