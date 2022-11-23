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
// import { useViewport } from '../hooks/useViewport';
// import moment from 'moment';
// import { differenceInCalendarDays, parseISO } from 'date-fns';

const Artists = () => {
	const { dataLoaded, isArtistFormOpen } = useStateContext();
	const [currentId, setCurrentId] = useState(null);
	const { artists } = useArtistsContext();
	// const { users, user } = useAuthContext();

	// const currentDay = new Date(new Date().setHours(0, 0, 0, 0));
	// const { width } = useViewport();
	// const breakpoint = 620;

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
			{/* <StyledDayHeaderWidget>
				<p className='header-time'>
					<strong>
						{new Date(currentDay).toLocaleDateString('en-us', {
							weekday: 'long',
							year: 'numeric',
							month: 'long',
							day: 'numeric',
						})}
					</strong>
				</p>
			</StyledDayHeaderWidget> */}
			{/* <h1>artists</h1> */}
			<div className='user-actions-container'>
				<AddArtistButton />
				{/* {width > breakpoint && <SearchBar />} */}
			</div>
			{/* {width > breakpoint && <ArtistsFilter />} */}

			{/* <ArtistsList /> */}
			<ArtistsWidget artists={artists} />
		</StyledArtists>
	);
};
const StyledArtists = styled(motion.div)`
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	row-gap: 1rem;
	max-width: 100rem;
	/* max-width: 80rem; */
	padding: 0.5rem 0;
	/* padding: 0.5rem 1rem; */
	overflow-y: auto;
	z-index: 1;
	transition: all 200ms linear;
	margin: 0 auto;
	flex: 1;
	overflow: auto;
	.sober-widget {
		background-color: white;
		padding: 2rem;
		border-radius: 4px;
		display: none;
	}
	.user-actions-container {
		/* @include flex(flex-start, center, row); */
		display: flex;
		justify-content: flex-start;
		align-items: center;
		padding: 0 1rem;

		// background-color: green;
		/* margin: 1rem 2rem; */
	}
`;

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

export default Artists;
