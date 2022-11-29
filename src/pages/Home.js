import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
// import { useAuthContext } from '../hooks/useAuthContext';
import { useStateContext } from '../lib/context';
import { useNavigate } from 'react-router-dom';
// import { songsReducer } from '../context/SongContext';
// import Song from '../features/songs/Song';
// import { useSongsContext } from '../hooks/useSongContext';
// import SongStatusStats from '../components/SongStatusStats';
import NextDeadlineSong from '../components/NextDeadlineSong';
// import YoutubeStats from '../components/YoutubeStats';
import { useViewport } from '../hooks/useViewport';
import SongsList from '../features/home/SongsList';
import SongsFilter from '../features/home/SongsFilter';
// import moment from 'moment';
// import { differenceInCalendarDays, parseISO } from 'date-fns';

const Home = ({ youtubeData }) => {
	const { dataLoaded } = useStateContext();
	const { width } = useViewport();
	const breakpoint = 620;

	const [filterValue, setFilterValue] = useState('favourites');

	// function sand events
	const homeSongFilterHandler = (e) => {
		console.log(e, 'e');
		switch (e.target.value) {
			case 'tabs':
				setFilterValue('tabs');
				break;
			case 'scores':
				setFilterValue('scores');
				break;
			case 'favourites':
				setFilterValue('favourites');
				break;
			// case 'deadline':
			// 	setFilterValue(
			// 		songs &&
			// 			songs.filter(
			// 				(song) =>
			// 					song.deadlineDate !== null && song.status.name !== 'Recorded'
			// 			)
			// 	);
			// 	break;
			// case 'practicing':
			// 	setFilterValue(
			// 		songs && songs.filter((song) => song.status.name === 'Practicing')
			// 	);
			// 	break;
			// case 'ready':
			// 	setFilterValue(
			// 		songs && songs.filter((song) => song.status.name === 'Ready')
			// 	);
			// 	break;
			// case 'recorded':
			// 	setFilterValue(
			// 		songs && songs.filter((song) => song.status.name === 'Recorded')
			// 	);
			// 	break;
			// case 'backlog':
			// 	setFilterValue(
			// 		songs && songs.filter((song) => song.status.name === 'Backlog')
			// 	);
			// 	break;
			// case 'archived':
			// 	setFilterValue(
			// 		songs && songs.filter((song) => song.status.name === 'Archived')
			// 	);
			// 	break;
			// case 'pdf':
			// 	setFilterValue(
			// 		songs && songs.filter((song) => song.fileType === 'pdf')
			// 	);
			// 	break;
			// case 'gp':
			// 	setFilterValue(
			// 		songs && songs.filter((song) => song.fileType !== 'pdf')
			// 	);
			// 	break;
			// case 'difficulty-lth':
			// 	setFilterValue(
			// 		songs &&
			// 			songs.sort((a, b) => {
			// 				return b.difficulty - a.difficulty;
			// 			})
			// 	);
			// 	break;
			// case 'difficulty-htl':
			// 	setFilterValue(
			// 		songs &&
			// 			songs.sort((a, b) => {
			// 				return a.difficulty - b.difficulty;
			// 			})
			// 	);
			// 	break;
			// case 'remove-sort':
			// 	setFilterValue(
			// 		songs &&
			// 			songs
			// 				.sort((a, b) => {
			// 					return new Date(b.deadlineDate) > new Date(a.deadlineDate);
			// 				})
			// 				.sort(function (a, b) {
			// 					return (a.deadlineDate === null) - (b.deadlineDate === null);
			// 				})
			// 	);
			// 	break;
			// case 'all':
			// 	setFilterValue(songs && songs);
			// 	break;
			default:
				setFilterValue('favourites');
				break;
		}
	};

	// const { users, user } = useAuthContext();
	// const [currentId, setCurrentId] = useState(null);
	// const { songStats } = useSongsContext();

	// const currentDay = new Date(new Date().setHours(0, 0, 0, 0));

	let navigate = useNavigate();
	useEffect(() => {
		if (dataLoaded === false) {
			navigate('/');
		}
	}, [navigate, dataLoaded]);

	return (
		<StyledHome
			initial={{ width: 0 }}
			animate={{ width: '100%' }}
			exit={{ x: window.innerWidth }}
			// className={{width < breakpoint ? {'mobile page'}: {'page'}}}}
			className={`page ${width < breakpoint ? 'mobile' : ''}`}

			// className='page'
		>
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

				<h2>
					the home page will be to show youtube api and also certain songs
					(perhaps, upcoming deadlines or ready to rec?)
				</h2>
			</StyledDayHeaderWidget> */}
			{/* <YoutubeStats youtubeData={youtubeData} /> */}
			<NextDeadlineSong />
			{/* <SongStatusStats /> */}
			<SongsFilter
				filterValue={filterValue}
				homeSongFilterHandler={homeSongFilterHandler}
				setFilterValue={setFilterValue}
			/>
			<SongsList
				filterValue={filterValue}
				homeSongFilterHandler={homeSongFilterHandler}
			/>
		</StyledHome>
	);
};
const StyledHome = styled(motion.div)`
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	row-gap: 2rem;
	max-width: 100rem;
	padding: 0.5rem 1rem;
	overflow-y: auto;
	z-index: 1;
	transition: all 200ms linear;
	margin: 0 auto;
	flex: 1;
	/* overflow-y: hidden; */
	&.mobile {
		row-gap: 1rem;
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
// 	h2 {
// 		font-size: 1.2rem;
// 	}
// `;

export default Home;
