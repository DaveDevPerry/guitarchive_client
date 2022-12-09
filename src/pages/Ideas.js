import { AnimatePresence, motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useStateContext } from '../lib/context';
import { useNavigate } from 'react-router-dom';
import { useViewport } from '../hooks/useViewport';
import SongsListContainer from '../features/ideas/SongsListContainer';
import SongModal from '../features/ideas/SongModal';
// import { useIdeasContext } from '../hooks/useIdeaContext';
// import SongModal from '../features/home/SongModal';
// import AlertDeadlineSong from '../features/ideas/AlertDeadlineSong';

const Ideas = ({ theme }) => {
	const { dataLoaded, isIdeaFormOpen } = useStateContext();
	const { width } = useViewport();
	const breakpoint = 620;

	// const {songs} = useIdeasContext();

	const [ideasFilterValue, setIdeasFilterValue] = useState('ideas');
	let navigate = useNavigate();
	useEffect(() => {
		if (dataLoaded === false) {
			navigate('/');
		}
	}, [navigate, dataLoaded]);

	// function sand events
	const ideasSongFilterHandler = (e) => {
		console.log(e, 'e');
		switch (e.target.value) {
			// case 'tabs':
			// 	setIdeasFilterValue('tabs');
			// 	break;
			// case 'scores':
			// 	setIdeasFilterValue('scores');
			// 	break;
			// case 'favourites':
			// 	setIdeasFilterValue('favourites');
			// 	break;
			// case 'deadlines':
			// 	setIdeasFilterValue('deadlines');
			// 	break;
			// case 'practicing':
			// 	setIdeasFilterValue('practicing');
			// 	break;
			case 'complete':
				setIdeasFilterValue('arranged');
				break;
			default:
				setIdeasFilterValue('ideas');
				break;
		}
	};

	return (
		<StyledIdeas
			initial={{ width: 0 }}
			animate={{ width: '100%' }}
			exit={{ x: window.innerWidth }}
			className={`page ${width < breakpoint ? 'mobile' : ''}`}
		>
			<AnimatePresence mode='wait'>
				{isIdeaFormOpen === true && <SongModal />}
			</AnimatePresence>
			<SongsListContainer
				ideasFilterValue={ideasFilterValue}
				ideasSongFilterHandler={ideasSongFilterHandler}
				setIdeasFilterValue={setIdeasFilterValue}
				theme={theme}
			/>
		</StyledIdeas>
	);
};
const StyledIdeas = styled(motion.div)`
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

export default Ideas;
