import { AnimatePresence, motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useStateContext } from '../lib/context';
import { useNavigate } from 'react-router-dom';
import { useViewport } from '../hooks/useViewport';
import SongsListContainer from '../features/home/SongsListContainer';
import SongModal from '../features/home/SongModal';
import AlertDeadlineSong from '../features/home/AlertDeadlineSong';
import Modal from '../components/Modal';
// import { useAuthContext } from '../hooks/useAuthContext';
import { useYoutubeTargetsContext } from '../hooks/useYoutubeTargetContext';
// import { log } from '../utils/helper';
// import { useSongsContext } from '../hooks/useSongContext';
// import { useAuthContext } from '../hooks/useAuthContext';

const Home = ({ theme, youtubeData }) => {
	// const { user } = useAuthContext();

	// const { dispatch } = useSongsContext();

	const { youtubeTarget } = useYoutubeTargetsContext();
	const { dataLoaded, isFormOpen, youtubeGoal, setYoutubeGoal } =
		useStateContext();
	const { width } = useViewport();
	const breakpoint = 620;

	const [filterValue, setFilterValue] = useState('songs');
	const [currentId, setCurrentId] = useState(null);

	const [modalOpen, setModalOpen] = useState(false);

	const close = () => setModalOpen(false);
	const open = () => setModalOpen(true);

	// useEffect(() => {
	// 	const fetchSongs = async () => {
	// 		const response = await fetch(
	// 			`${process.env.REACT_APP_BACKEND_URL}/api/songs`,
	// 			{
	// 				headers: {
	// 					Authorization: `Bearer ${user.token}`,
	// 				},
	// 			}
	// 		);
	// 		const json = await response.json();
	// 		log(json, 'json songs');
	// 		log(response, 'response');
	// 		if (!response.ok) {
	// 			// setMode('offline');
	// 			let collection = JSON.parse(localStorage.getItem('songs'));
	// 			dispatch({
	// 				type: 'SET_SONGS',
	// 				payload: collection,
	// 			});
	// 		}
	// 		if (response.ok) {
	// 			dispatch({
	// 				type: 'SET_SONGS',
	// 				payload: json,
	// 			});
	// 			dispatch({
	// 				type: 'SET_SONG',
	// 				payload: json[0],
	// 			});
	// 			localStorage.setItem('songs', JSON.stringify(json));
	// 		}
	// 	};
	// 	if (user) {
	// 		fetchSongs();
	// 	}
	// }, []);

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
			case 'no-capo':
				setFilterValue('no-capo');
				break;
			case 'capo':
				setFilterValue('capo');
				break;
			// case 'practicing':
			// 	setFilterValue('practicing');
			// 	break;

			case 'songs':
				setFilterValue('songs');
				break;
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

	useEffect(() => {
		if (youtubeGoal === true) return;
		if (youtubeData && youtubeData[0].statistics.viewCount >= youtubeTarget) {
			setTimeout(() => {
				modalOpen ? close() : open();
			}, 1000);
			setYoutubeGoal(true);
		}
	}, []);
	// useEffect(() => {
	// 	if (youtubeGoal === true) return;
	// 	if (youtubeData && youtubeData[0].statistics.viewCount >= 100000) {
	// 		setTimeout(() => {
	// 			modalOpen ? close() : open();
	// 		}, 1000);
	// 		setYoutubeGoal(true);
	// 	}
	// }, []);

	return (
		<StyledHome
			initial={{ width: 0 }}
			animate={{ width: '100%' }}
			exit={{ x: window.innerWidth }}
			className={`page ${width < breakpoint ? 'mobile' : ''}`}
		>
			<AnimatePresence mode='wait'>
				{modalOpen && (
					<Modal
						modalOpen={modalOpen}
						handleClose={close}
						youtubeData={youtubeData}
						handleSnooze={close}
					/>
				)}
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
	/* .add-btns-container {
		display: flex;
		justify-content: space-between;
		align-items: center;
		gap: 1rem;
		border: 1px solid black;
		display: none;
	} */
`;

export default Home;
