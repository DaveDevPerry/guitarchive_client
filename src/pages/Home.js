import { AnimatePresence, motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useStateContext } from '../lib/context';
import { useNavigate } from 'react-router-dom';
import { useViewport } from '../hooks/useViewport';
import SongsListContainer from '../features/home/SongsListContainer';
import SongModal from '../features/home/SongModal';
import AlertDeadlineSong from '../features/home/AlertDeadlineSong';

const Home = ({ theme }) => {
	const { dataLoaded, isFormOpen } = useStateContext();
	const { width } = useViewport();
	const breakpoint = 620;

	const [filterValue, setFilterValue] = useState('songs');
	const [currentId, setCurrentId] = useState(null);

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
			case 'deadlines':
				setFilterValue('deadlines');
				break;
			case 'practicing':
				setFilterValue('practicing');
				break;
			// case 'default-filter':
			// 	setFilterValue('songs');
			// 	break;
			case 'songs':
				setFilterValue('songs');
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
				setFilterValue('songs');
				break;
		}
	};

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
			className={`page ${width < breakpoint ? 'mobile' : ''}`}
		>
			<AnimatePresence mode='wait'>
				{isFormOpen === true && (
					<SongModal currentId={currentId} setCurrentId={setCurrentId} />
				)}
			</AnimatePresence>
			<AlertDeadlineSong theme={theme} />
			<SongsListContainer
				filterValue={filterValue}
				homeSongFilterHandler={homeSongFilterHandler}
				setFilterValue={setFilterValue}
				theme={theme}
			/>
		</StyledHome>
	);
};
const StyledHome = styled(motion.div)`
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
	.add-btns-container {
		display: flex;
		justify-content: space-between;
		align-items: center;
		gap: 1rem;
		border: 1px solid black;
		display: none;
	}
`;

export default Home;
