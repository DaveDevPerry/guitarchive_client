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
// import SongsList from '../features/home/SongsList';
// import SongsFilter from '../features/home/SongsFilter';
import { CgPlayListAdd } from 'react-icons/cg';
import SongsListContainer from '../features/home/SongsListContainer';
// import moment from 'moment';
// import { differenceInCalendarDays, parseISO } from 'date-fns';

const Home = ({ youtubeData, theme }) => {
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
			<div className='add-btns-container'>
				<QuickAddButton
				// 	onClick={() => {
				// 	isFormOpen === true ? setIsFormOpen(false) : setIsFormOpen(true);
				// }}
				>
					<CgPlayListAdd
						className='quick-add-icon'
						// onClick={() => {
						// 	isFormOpen === true ? setIsFormOpen(false) : setIsFormOpen(true);
						// }}
					/>
					<p>add song</p>
					{/* {width > breakpoint && <p>add song</p>} */}
				</QuickAddButton>
			</div>
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
			<NextDeadlineSong theme={theme} />
			{/* <SongStatusStats /> */}
			<SongsListContainer
				filterValue={filterValue}
				homeSongFilterHandler={homeSongFilterHandler}
				setFilterValue={setFilterValue}
				theme={theme}
			/>

			{/* <SongsFilter
				filterValue={filterValue}
				homeSongFilterHandler={homeSongFilterHandler}
				setFilterValue={setFilterValue}
			/>
			<SongsList
				filterValue={filterValue}
				homeSongFilterHandler={homeSongFilterHandler}
			/> */}
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
	/* overflow-y: auto; */
	z-index: 1;
	transition: all 200ms linear;
	margin: 0 auto;
	flex: 1;
	overflow-y: hidden;
	&.mobile {
		row-gap: 1rem;
	}
	.add-btns-container {
		display: flex;
		justify-content: space-between;
		align-items: center;
		gap: 1rem;
		border: 1px solid black;
		display: none;
	}
`;

// const SongsListContainer = styled.div`
// 	padding: 1rem 2rem 2rem;
// 	border-radius: 1rem;
// 	display: flex;
// 	flex-direction: column;
// 	justify-content: flex-start;
// 	background-image: url('/images/dark wood texture.webp');
// 	background-repeat: no-repeat;
// 	background-size: cover;
// 	row-gap: 1rem;
// 	box-shadow: 3px 3px 4px rgb(0 0 0);
// 	flex: 1;
// 	overflow-y: hidden;
// 	&.mobile {
// 		border-radius: 0.4rem;
// 	}
// `;

const QuickAddButton = styled.div`
	background-image: url('/images/dark wood texture.webp');
	padding: 0 1rem;
	/* flex: 1; */
	display: flex;
	align-items: center;
	justify-content: flex-start;
	column-gap: 0.5rem;
	border-radius: 0.5rem;
	/* background-color: ${({ theme }) => theme.lightBrown}; */
	box-shadow: rgb(0 0 0 / 30%) 2px 2px 2px, rgb(0 0 0 / 10%) -2px -2px 2px;
	/* background-color: #9a9a9a; */
	height: 100%;
	/* width: 9em; */
	/* height: 2em; */
	cursor: pointer;

	.quick-add-icon {
		font-size: 2.5rem;
		color: white;
	}
	p {
		/* font-family: 'Roboto'; */
		font-family: 'NewTegomin';
		color: white;
		text-transform: uppercase;
		font-size: 1.6rem;
		/* font-size: 1.2rem; */
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
