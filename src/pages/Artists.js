import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
// import { useAuthContext } from '../hooks/useAuthContext';
import { useStateContext } from '../lib/context';
import { useNavigate } from 'react-router-dom';
// import ArtistsList from '../features/artists/ArtistsList';
import ArtistModal from '../features/artists/ArtistModal';
import AddArtistButton from '../features/artists/AddArtistButton';
import SearchBar from '../components/SearchBar';
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
		<>
			{width > breakpoint ? (
				<StyledArtists
					initial={{ width: 0 }}
					animate={{ width: '100%' }}
					exit={{ x: window.innerWidth }}
				>
					{isArtistFormOpen === true && (
						<ArtistModal currentId={currentId} setCurrentId={setCurrentId} />
					)}
					{/* <StyledArtistDetails className='artists-details-container'>
						<div className='artist-wrapper'>
							<p className='primary-text'>artists</p>
						</div>
					</StyledArtistDetails> */}
					<div className='user-actions-container'>
						<AddArtistButton />
						<SearchBar />
						{/* {width > breakpoint && <SearchBar />} */}
					</div>
					<ArtistsWidget artists={artists} />
				</StyledArtists>
			) : (
				<StyledMobileArtists
					initial={{ width: 0 }}
					animate={{ width: '100%' }}
					exit={{ x: window.innerWidth }}
				>
					{isArtistFormOpen === true && (
						<ArtistModal
							// setInputText={setInputText}
							// inputText={inputText}
							// posts={posts}
							// setArtists={setArtists}
							// setArtistStatus={setArtistStatus}
							// inputDate={inputDate}
							// setInputDate={setInputDate}
							// inputDescription={inputDescription}
							// setInputDescription={setInputDescription}
							currentId={currentId}
							setCurrentId={setCurrentId}
						/>
					)}
					<StyledArtistDetails className='artists-details-container'>
						<div className='artist-wrapper'>
							<p className='primary-text'>artists</p>
							{/* <h4 className='secondary-text'>{artist.artist.name}</h4> */}
						</div>
					</StyledArtistDetails>

					<div className='mobile-user-actions-container'>
						<AddArtistButton />
						{/* {width > breakpoint && <SearchBar />} */}
					</div>
					{/* {width > breakpoint && <ArtistsFilter />} */}

					{/* <ArtistsList /> */}
					<ArtistsWidget artists={artists} />
				</StyledMobileArtists>
			)}
		</>
	);
};
const StyledArtists = styled(motion.div)`
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	/* row-gap: 1rem; */
	max-width: 100rem;
	/* max-width: 80rem; */
	padding: 0.5rem 1rem;
	/* padding: 0.5rem 1rem; */
	overflow-y: auto;
	z-index: 1;
	transition: all 200ms linear;
	margin: 0 auto;
	flex: 1;
	overflow: auto;
	.user-actions-container {
		/* @include flex(flex-start, center, row); */
		display: flex;
		justify-content: flex-start;
		align-items: center;
		padding: 0 0 1rem 0;

		// background-color: green;
		/* margin: 1rem 2rem; */
	}
`;
const StyledMobileArtists = styled(motion.div)`
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	/* row-gap: 1rem; */
	max-width: 100rem;
	/* max-width: 80rem; */
	/* padding: 0.5rem 0; */
	/* padding: 0.5rem 1rem; */
	overflow-y: auto;
	z-index: 1;
	transition: all 200ms linear;
	margin: 0 auto;
	flex: 1;
	overflow: auto;

	.mobile-user-actions-container {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 0 1rem 1rem 1rem;
		column-gap: 2rem;
		transition: all 200ms linear;
	}
`;

// const StyledMobileArtists = styled(motion.div)`
// 	display: flex;
// 	flex-direction: column;
// 	justify-content: flex-start;
// 	/* row-gap: 1rem; */
// 	max-width: 100rem;
// 	/* max-width: 80rem; */
// 	/* padding: 0.5rem 0; */
// 	/* padding: 0.5rem 1rem; */
// 	overflow-y: auto;
// 	z-index: 1;
// 	transition: all 200ms linear;
// 	margin: 0 auto;
// 	flex: 1;
// 	overflow: auto;

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

const StyledArtistDetails = styled.div`
	row-gap: 1rem;
	transition: all 200ms linear;

	text-align: center;
	/* padding: 3rem 1rem; */
	display: none;
	.artist-wrapper,
	.artist-wrapper {
		padding: 0 1rem;
	}
	.artist-wrapper {
		.primary-text {
			color: rgba(105, 54, 25, 1);
			font-size: 4rem;
			text-align: center;
			line-height: 4rem;
			margin: 0;
			text-transform: uppercase;
			&.smaller {
				font-size: 3rem;
			}
		}
		h4 {
			margin-top: 1rem;
		}
	}
`;

export default Artists;
