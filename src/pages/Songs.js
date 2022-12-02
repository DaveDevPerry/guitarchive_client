import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
// import { useAuthContext } from '../hooks/useAuthContext';
import { useStateContext } from '../lib/context';
import { useNavigate } from 'react-router-dom';
// import SongsList from '../features/songs/SongsList';
import SongModal from '../features/song/SongModal';
// import AddSongButton from '../features/song/AddSongButton';
// import SearchBar from '../features/songs/SearchBar';
// import SongsFilter from '../features/songs/SongsFilter';
// import SongsWidget from '../features/songs/SongsWidget';
import { useSongsContext } from '../hooks/useSongContext';
import { useViewport } from '../hooks/useViewport';
// import SongsSort from '../features/songs/SongsSort';
import SongsListContainer from '../features/songs/SongsListContainer';

const Songs = ({
	filteredSongs,
	setFilteredSongs,
	songStatusHandler,
	setSongDetails,
}) => {
	const { dataLoaded, isFormOpen } = useStateContext();
	const [currentId, setCurrentId] = useState(null);
	const { songs } = useSongsContext();

	const { width } = useViewport();
	const breakpoint = 620;

	let navigate = useNavigate();
	useEffect(() => {
		if (dataLoaded === false) {
			navigate('/');
		}
	}, [navigate, dataLoaded]);

	return (
		<StyledSongs
			initial={{ width: 0 }}
			animate={{ width: '100%' }}
			exit={{ x: window.innerWidth }}
			className={`page songs-page ${width < breakpoint ? 'mobile' : ''}`}
		>
			{isFormOpen === true && (
				<SongModal currentId={currentId} setCurrentId={setCurrentId} />
			)}
			<SongsListContainer
				songs={songs}
				filteredSongs={filteredSongs}
				songStatusHandler={songStatusHandler}
			/>
			{/* {width < breakpoint ? (
				<div className='mobile-user-actions-container'>
					<AddSongButton />
					<SongsFilter songStatusHandler={songStatusHandler} />
				</div>
			) : (
				<div className='user-actions-container'>
					<AddSongButton />
					<SongsFilter songStatusHandler={songStatusHandler} />
					<SongsSort songStatusHandler={songStatusHandler} />
					<SearchBar songStatusHandler={songStatusHandler} />
				</div>
			)}
			<SongsWidget songs={songs} filteredSongs={filteredSongs} /> */}
		</StyledSongs>
	);
};

const StyledSongs = styled(motion.div)`
	padding: 0 0.5rem;
	&.mobile {
		padding: 0;
		row-gap: 0rem;
	}
	.user-actions-container {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 0 0.5rem 1rem 0.5rem;
		column-gap: 2rem;
	}
	.mobile-user-actions-container {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 0 1rem 1rem 1rem;
		column-gap: 2rem;
	}
`;

export default Songs;
