import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useStateContext } from '../lib/context';
import { useNavigate } from 'react-router-dom';
// import NextDeadlineSong from '../components/NextDeadlineSong';
import { useViewport } from '../hooks/useViewport';
import { CgPlayListAdd } from 'react-icons/cg';
import SongsListContainer from '../features/home/SongsListContainer';
import SongModal from '../features/home/SongModal';
import AlertDeadlineSong from '../features/home/AlertDeadlineSong';
// import { GoAlert } from 'react-icons/go';

const Home = ({ youtubeData, theme }) => {
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
			{isFormOpen === true && (
				<SongModal currentId={currentId} setCurrentId={setCurrentId} />
			)}
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
			{/* <div className='deadline-alert-wrapper'>
							<GoAlert className='alert-icon' />
							<p className={`song-title ${width < breakpoint ? 'mobile' : ''}`}>
								<strong>{nextDeadlineSong.title}</strong>
							</p>
							<MdOutlineUnfoldMore
								className='toggle-view-icon'
								onClick={handleToggleView}
							/>
						</div> */}
			<AlertDeadlineSong theme={theme} />
			{/* <NextDeadlineSong theme={theme} /> */}
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
		row-gap: 0.5rem;
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

const QuickAddButton = styled.div`
	background-image: url('/images/dark wood texture.webp');
	padding: 0 1rem;
	display: flex;
	align-items: center;
	justify-content: flex-start;
	column-gap: 0.5rem;
	border-radius: 0.5rem;
	box-shadow: rgb(0 0 0 / 30%) 2px 2px 2px, rgb(0 0 0 / 10%) -2px -2px 2px;
	height: 100%;
	cursor: pointer;

	.quick-add-icon {
		font-size: 2.5rem;
		color: white;
	}
	p {
		font-family: 'NewTegomin';
		color: white;
		text-transform: uppercase;
		font-size: 1.6rem;
	}
`;

export default Home;
