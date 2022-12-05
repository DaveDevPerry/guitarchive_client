import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useStateContext } from '../lib/context';
import { useNavigate } from 'react-router-dom';
import SongModal from '../features/song/SongModal';
import { useSongsContext } from '../hooks/useSongContext';
import { useViewport } from '../hooks/useViewport';
import SongsListContainer from '../features/songs/SongsListContainer';

const Songs = ({ filteredSongs, songStatusHandler }) => {
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
