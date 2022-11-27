import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
// import { useAuthContext } from '../hooks/useAuthContext';
import { useStateContext } from '../lib/context';
import { useNavigate } from 'react-router-dom';
// import ArtistsList from '../features/artists/ArtistsList';
import ArtistModal from '../features/artists/ArtistModal';
import AddArtistButton from '../features/artists/AddArtistButton';
// import SearchBar from '../components/SearchBar';
// import ArtistsFilter from '../features/artists/ArtistsFilter';
import ArtistsWidget from '../features/artists/ArtistsWidget';
import { useArtistsContext } from '../hooks/useArtistContext';
import { useViewport } from '../hooks/useViewport';
// import moment from 'moment';
// import { differenceInCalendarDays, parseISO } from 'date-fns';

const Artists = () => {
	const { dataLoaded, isArtistFormOpen } = useStateContext();
	const [currentId, setCurrentId] = useState(null);
	const { artists } = useArtistsContext();
	// const { users, user } = useAuthContext();

	// const currentDay = new Date(new Date().setHours(0, 0, 0, 0));
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
			className='artists-page page'
		>
			{isArtistFormOpen === true && (
				<ArtistModal currentId={currentId} setCurrentId={setCurrentId} />
			)}
			{width < breakpoint ? (
				<div className='mobile-user-actions-container'>
					<AddArtistButton />
					{/* {width > breakpoint && <SearchBar />} */}
				</div>
			) : (
				<div className='user-actions-container'>
					<AddArtistButton />
					{/* <SearchBar /> */}
					{/* {width > breakpoint && <SearchBar />} */}
				</div>
			)}
			<ArtistsWidget artists={artists} />
		</StyledArtists>
	);
};
const StyledArtists = styled(motion.div)`
	/* display: flex;
	flex-direction: column;
	justify-content: flex-start;
	max-width: 100rem;
	padding: 0.5rem 1rem;
	overflow-y: auto;
	z-index: 1;
	transition: all 200ms linear;
	margin: 0 auto;
	flex: 1;
	overflow-y: hidden; */
	.mobile-user-actions-container {
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
	}
`;
// const StyledMobileArtists = styled(motion.div)`
// 	display: flex;
// 	flex-direction: column;
// 	justify-content: flex-start;
// 	max-width: 100rem;
// 	overflow-y: auto;
// 	z-index: 1;
// 	transition: all 200ms linear;
// 	margin: 0 auto;
// 	flex: 1;
// 	overflow-y: hidden;
// 	.mobile-user-actions-container {
// 		display: flex;
// 		justify-content: space-between;
// 		align-items: center;
// 		padding: 0 1rem 1rem 1rem;
// 		column-gap: 2rem;
// 		transition: all 200ms linear;
// 	}
// `;

// const StyledMobileArtists = styled(motion.div)`
// 	display: flex;
// 	flex-direction: column;
// 	justify-content: flex-start;
// 	/* row-gap: 1rem; */
// 	max-width: 100rem;
// 	/* max-width: 100rem; */
// 	/* padding: 0.5rem 0; */
// 	/* padding: 0.5rem 1rem; */
// 	overflow-y: auto;
// 	z-index: 1;
// 	transition: all 200ms linear;
// 	margin: 0 auto;
// 	flex: 1;
// 	overflow-y: hidden;

// 	.mobile-user-actions-container {
// 		display: flex;
// 		justify-content: space-between;
// 		align-items: center;
// 		padding: 0 1rem 1rem 1rem;
// 		/* padding: 1rem; */
// 		column-gap: 2rem;
// 		/* background-color: rgba(0, 0, 0, 0.1); */
// 		transition: all 200ms linear;
// 		/* border-bottom: 1px solid ${({ theme }) => theme.darkBrown}; */
// 		/* border-top: 1px solid ${({ theme }) => theme.darkBrown}; */
// 	}
// `;

// const StyledDayHeaderWidget = styled.div`
// 	display: flex;
// 	flex-direction: column;
// 	align-items: center;
// 	justify-content: center;
// 	.header-time {
// 		display: flex;
// 		flex-direction: column;
// 		align-items: center;
// 		justify-content: center;
// 		font-size: 1.6rem;
// 		font-size: 2rem;
// 		color: ${({ theme }) => theme.txtGrey};
// 	}
// `;

// const StyledArtistDetails = styled.div`
// 	row-gap: 1rem;
// 	transition: all 200ms linear;

// 	text-align: center;
// 	/* padding: 3rem 1rem; */
// 	/* display: none; */
// 	.artist-wrapper,
// 	.artist-wrapper {
// 		padding: 0 1rem;
// 	}
// 	.artist-wrapper {
// 		.primary-text {
// 			color: rgba(105, 54, 25, 1);
// 			font-size: 4rem;
// 			text-align: center;
// 			line-height: 4rem;
// 			margin: 0;
// 			text-transform: uppercase;
// 			&.smaller {
// 				font-size: 3rem;
// 			}
// 		}
// 		h4 {
// 			margin-top: 1rem;
// 		}
// 	}
// `;

export default Artists;
