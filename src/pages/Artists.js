import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useStateContext } from '../lib/context';
import { useNavigate } from 'react-router-dom';
import ArtistModal from '../features/artists/ArtistModal';
// import AddArtistButton from '../features/artists/AddArtistButton';
// import ArtistsWidget from '../features/artists/ArtistsWidget';
// import { useArtistsContext } from '../hooks/useArtistContext';
import { useViewport } from '../hooks/useViewport';
import ArtistsListContainer from '../features/artists/ArtistsListContainer';
import { useSongsContext } from '../hooks/useSongContext';

const Artists = () => {
	const { dataLoaded, isArtistFormOpen } = useStateContext();
	const [currentId, setCurrentId] = useState(null);
	// const { artists } = useArtistsContext();
	// const { artists } = useSongsContext();
	const { artistsCounters } = useSongsContext();

	const { width } = useViewport();
	const breakpoint = 620;

	let navigate = useNavigate();
	useEffect(() => {
		if (dataLoaded === false) {
			navigate('/');
		}
	}, [navigate, dataLoaded]);

	return (
		<StyledArtists
			initial={{ width: 0 }}
			animate={{ width: '100%' }}
			exit={{ x: window.innerWidth }}
			className={`artists-page page ${width < breakpoint ? 'mobile' : ''}`}
		>
			{isArtistFormOpen === true && (
				<ArtistModal currentId={currentId} setCurrentId={setCurrentId} />
			)}
			{/* {width < breakpoint ? (
				<div className='mobile-user-actions-container'>
					<AddArtistButton />
					{width > breakpoint && <SearchBar />}
				</div>
			) : (
				<div className='user-actions-container'>
					<AddArtistButton />
					<SearchBar />
					{width > breakpoint && <SearchBar />}
				</div>
			)} */}
			<ArtistsListContainer artists={artistsCounters} />
		</StyledArtists>
	);
};
const StyledArtists = styled(motion.div)`
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	row-gap: 0.5rem;
	max-width: 100rem;
	padding: 0.5rem 1rem;
	z-index: 1;
	transition: all 200ms linear;
	margin: 0 auto;
	flex: 1;
	overflow-y: hidden;
	&.mobile {
		row-gap: 0rem;
		padding: 0;
	}
	/* .mobile-user-actions-container {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 0 1rem 1rem 1rem;
		column-gap: 2rem;
		transition: all 200ms linear;
	}
	.user-actions-container {
		display: flex;
		justify-content: flex-start;
		align-items: center;
		padding: 0 0 1rem 0;
	} */
`;

export default Artists;
