import React, { createContext, useContext, useState } from 'react';
// import { log } from '../utils/helper';

// This is global state
const AppContext = createContext();

export const StateContext = ({ children }) => {
	const [dataLoaded, setDataLoaded] = useState(false);
	const [isFormOpen, setIsFormOpen] = useState(false);
	const [isArtistFormOpen, setIsArtistFormOpen] = useState(false);
	const [isArrangerFormOpen, setIsArrangerFormOpen] = useState(false);
	const [songToView, setSongToView] = useState(null);
	const [artistToView, setArtistToView] = useState(null);
	const [arrangerToView, setArrangerToView] = useState(null);
	const [isEditFormOpen, setIsEditFormOpen] = useState(false);

	const [isMenuOpen, setIsMenuOpen] = useState(false);

	return (
		<AppContext.Provider
			value={{
				dataLoaded,
				setDataLoaded,
				isFormOpen,
				setIsFormOpen,
				songToView,
				setSongToView,
				isArtistFormOpen,
				setIsArtistFormOpen,
				isArrangerFormOpen,
				setIsArrangerFormOpen,
				isMenuOpen,
				setIsMenuOpen,
				artistToView,
				setArtistToView,
				arrangerToView,
				setArrangerToView,
				isEditFormOpen,
				setIsEditFormOpen,
			}}
		>
			{children}
		</AppContext.Provider>
	);
};

export const useStateContext = () => useContext(AppContext);
