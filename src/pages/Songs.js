import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
// import { useAuthContext } from '../hooks/useAuthContext';
import { useStateContext } from '../lib/context';
import { useNavigate } from 'react-router-dom';
// import SongsList from '../features/songs/SongsList';
import SongModal from '../features/song/SongModal';
import AddSongButton from '../features/song/AddSongButton';
import SearchBar from '../components/SearchBar';
import SongsFilter from '../features/songs/SongsFilter';
import SongsWidget from '../features/songs/SongsWidget';
import { useSongsContext } from '../hooks/useSongContext';
import { useViewport } from '../hooks/useViewport';
// import moment from 'moment';
// import { differenceInCalendarDays, parseISO } from 'date-fns';

const Songs = ({
	filteredSongs,
	setFilteredSongs,
	songStatusHandler,
	setSongDetails,
}) => {
	const { dataLoaded, isFormOpen } = useStateContext();
	const [currentId, setCurrentId] = useState(null);
	const { songs } = useSongsContext();
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
				<StyledSongs
					initial={{ width: 0 }}
					animate={{ width: '100%' }}
					exit={{ x: window.innerWidth }}
				>
					{isFormOpen === true && (
						<SongModal currentId={currentId} setCurrentId={setCurrentId} />
					)}
					{/* {width > breakpoint ? ( */}
					<div className='user-actions-container'>
						<AddSongButton />
						<SongsFilter songStatusHandler={songStatusHandler} />
						<SearchBar />
					</div>
					{/* ) : (
				<div className='mobile-user-actions-container'>
					<AddSongButton />
					<SongsFilter songStatusHandler={songStatusHandler} />
				</div>
			)} */}
					<SongsWidget songs={songs} filteredSongs={filteredSongs} />
				</StyledSongs>
			) : (
				<StyledMobileSongs
					initial={{ width: 0 }}
					animate={{ width: '100%' }}
					exit={{ x: window.innerWidth }}
				>
					{isFormOpen === true && (
						<SongModal currentId={currentId} setCurrentId={setCurrentId} />
					)}
					{/* {width > breakpoint ? (
				<div className='user-actions-container'>
					<AddSongButton />
					<SongsFilter songStatusHandler={songStatusHandler} />
					{width > breakpoint && <SearchBar />}
				</div>
			) : ( */}
					<div className='mobile-user-actions-container'>
						<AddSongButton />
						<SongsFilter songStatusHandler={songStatusHandler} />
					</div>
					{/* )} */}
					<SongsWidget songs={songs} filteredSongs={filteredSongs} />
				</StyledMobileSongs>
			)}
			{/* <StyledSongs
			initial={{ width: 0 }}
			animate={{ width: '100%' }}
			exit={{ x: window.innerWidth }}
		>
			{isFormOpen === true && (
				<SongModal currentId={currentId} setCurrentId={setCurrentId} />
			)}
			{width > breakpoint ? (
				<div className='user-actions-container'>
					<AddSongButton />
					<SongsFilter songStatusHandler={songStatusHandler} />
					{width > breakpoint && <SearchBar />}
				</div>
			) : (
				<div className='mobile-user-actions-container'>
					<AddSongButton />
					<SongsFilter songStatusHandler={songStatusHandler} />
				</div>
			)}
			<SongsWidget songs={songs} filteredSongs={filteredSongs} />
		</StyledSongs> */}
		</>
	);
};

const StyledSongs = styled(motion.div)`
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	/* row-gap: 1rem; */
	max-width: 100rem;
	/* max-width: 80rem; */
	/* padding: 0.5rem 0; */
	padding: 0.5rem 1rem;
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
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 0 0 1rem 0;
		column-gap: 2rem;
		/* background-color: rgba(0, 0, 0, 0.1); */
		transition: all 200ms linear;
		/* border-bottom: 1px solid ${({ theme }) => theme.darkBrown}; */
		/* border-top: 1px solid ${({ theme }) => theme.darkBrown}; */
	}
`;
const StyledMobileSongs = styled(motion.div)`
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
		/* padding: 1rem; */
		column-gap: 2rem;
		/* background-color: rgba(0, 0, 0, 0.1); */
		transition: all 200ms linear;
		/* border-bottom: 1px solid ${({ theme }) => theme.darkBrown}; */
		/* border-top: 1px solid ${({ theme }) => theme.darkBrown}; */
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

export default Songs;
