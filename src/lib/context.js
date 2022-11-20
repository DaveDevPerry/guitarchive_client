import React, { createContext, useContext, useState } from 'react';
// import { log } from '../utils/helper';

// This is global state
const AppContext = createContext();

export const StateContext = ({ children }) => {
	const [dataLoaded, setDataLoaded] = useState(false);
	const [isFormOpen, setIsFormOpen] = useState(false);

	return (
		<AppContext.Provider
			value={{
				dataLoaded,
				setDataLoaded,
				isFormOpen,
				setIsFormOpen,
			}}
		>
			{children}
		</AppContext.Provider>
	);
};

export const useStateContext = () => useContext(AppContext);
