import { AnimatePresence, motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useStateContext } from '../lib/context';
import { useNavigate } from 'react-router-dom';
import { useViewport } from '../hooks/useViewport';
import SongsListContainer from '../features/home/SongsListContainer';
import SongModal from '../features/home/SongModal';
import AlertDeadlineSong from '../features/home/AlertDeadlineSong';
// import Modal from '../components/Modal';
// import { useAuthContext } from '../hooks/useAuthContext';
import { useYoutubeTargetsContext } from '../hooks/useYoutubeTargetContext';
import { log } from '../utils/helper';
import ViewModal from '../components/ViewModal';
import SubModal from '../components/SubModal';
import VideoModal from '../components/VideoModal';
import { useSongsContext } from '../hooks/useSongContext';
// import { toast } from 'react-hot-toast';
// import { log } from '../utils/helper';
// import { useSongsContext } from '../hooks/useSongContext';
// import { useAuthContext } from '../hooks/useAuthContext';

const Home = ({ theme, youtubeData }) => {
	// const { user } = useAuthContext();

	// const { dispatch } = useSongsContext();

	const {
		targetViewCount,
		targetSubCount,
		targetVideoCount,
		hasYoutubeAccount,
	} = useYoutubeTargetsContext();
	const { dataLoaded, isFormOpen } = useStateContext();
	const { width } = useViewport();
	const breakpoint = 620;

	const [filterValue, setFilterValue] = useState('songs');
	const [currentId, setCurrentId] = useState(null);

	// const [modalOpen, setModalOpen] = useState(false);
	const [viewModalOpen, setViewModalOpen] = useState(false);
	const [subModalOpen, setSubModalOpen] = useState(false);
	const [videoModalOpen, setVideoModalOpen] = useState(false);

	// const close = () => setModalOpen(false);
	// const open = () => setModalOpen(true);
	const viewClose = () => setViewModalOpen(false);
	const viewOpen = () => setViewModalOpen(true);
	const subClose = () => setSubModalOpen(false);
	const subOpen = () => setSubModalOpen(true);
	const videoClose = () => setVideoModalOpen(false);
	const videoOpen = () => setVideoModalOpen(true);

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

	const handleAchievement = async () => {
		log('achievement gained');
		const isViewTrophy =
			youtubeData && youtubeData[0].statistics.viewCount >= targetViewCount;
		log(isViewTrophy, ' is view trophy ?');
		const isSubTrophy =
			youtubeData &&
			youtubeData[0].statistics.subscriberCount >= targetSubCount;
		log(isSubTrophy, ' is sub trophy ?');
		const isVideoTrophy =
			youtubeData && youtubeData[0].statistics.videoCount >= targetVideoCount;
		log(isVideoTrophy, ' is video trophy ?');
	};

	// youtubeData -
	useEffect(() => {
		// check each target type
		if (youtubeData && youtubeData[0].statistics.viewCount >= targetViewCount) {
			handleAchievement();
			setTimeout(() => {
				viewModalOpen ? viewClose() : viewOpen();
			}, 1000);
			// setYoutubeGoal(true);
			return;
		}
		if (
			youtubeData &&
			youtubeData[0].statistics.subscriberCount >= targetSubCount
		) {
			handleAchievement();
			setTimeout(() => {
				subModalOpen ? subClose() : subOpen();
			}, 1000);
			// setYoutubeGoal(true);
			return;
		}
		if (
			youtubeData &&
			youtubeData[0].statistics.videoCount >= targetVideoCount
		) {
			handleAchievement();
			setTimeout(() => {
				videoModalOpen ? videoClose() : videoOpen();
			}, 1000);
			// setYoutubeGoal(true);
			return;
		}
		// if (youtubeGoal === true) return;
	}, []);
	// // youtubeData -
	// useEffect(() => {
	// 	// check each target type
	// 	if (
	// 		(youtubeData && youtubeData[0].statistics.viewCount >= targetViewCount) ||
	// 		(youtubeData &&
	// 			youtubeData[0].statistics.subscriberCount >= targetSubCount) ||
	// 		(youtubeData && youtubeData[0].statistics.videoCount >= targetVideoCount)
	// 	) {
	// 		handleAchievement();
	// 		setTimeout(() => {
	// 			modalOpen ? close() : open();
	// 		}, 1000);
	// 		// setYoutubeGoal(true);
	// 	}
	// 	// if (youtubeGoal === true) return;
	// }, []);
	// // youtubeData - working without rendering
	// useEffect(() => {
	// 	// check each target type
	// 	if (
	// 		(youtubeData && youtubeData[0].statistics.viewCount >= targetViewCount) ||
	// 		(youtubeData &&
	// 			youtubeData[0].statistics.subscriberCount >= targetSubCount) ||
	// 		(youtubeData && youtubeData[0].statistics.videoCount >= targetVideoCount)
	// 	) {

	// 		setTimeout(() => {
	// 			modalOpen ? close() : open();
	// 		}, 1000);
	// 		// setYoutubeGoal(true);
	// 	}
	// 	// if (youtubeGoal === true) return;
	// }, []);

	// // youtubeData -
	// useEffect(() => {
	// 	// check each target type
	// 	if (youtubeData && youtubeData[0].statistics.viewCount >= targetViewCount) {
	// 	setTimeout(() => {
	// 		modalOpen ? close() : open();
	// 	}, 1000);
	// 	// setYoutubeGoal(true);
	// 	}
	// 	// if (youtubeGoal === true) return;

	// 	if (youtubeData && youtubeData[0].statistics.subscriberCount >= targetSubCount) {
	// 		setTimeout(() => {
	// 			modalOpen ? close() : open();
	// 		}, 1000);
	// 		// setYoutubeGoal(true);
	// 		}

	// 		if (youtubeData && youtubeData[0].statistics.videoCount >= targetVideoCount) {
	// 			setTimeout(() => {
	// 				modalOpen ? close() : open();
	// 			}, 1000);
	// 			// setYoutubeGoal(true);
	// 			}
	// }, []);

	// original ytData - working
	// useEffect(() => {
	// 	if (youtubeGoal === true) return;
	// 	if (youtubeData && youtubeData[0].statistics.viewCount >= youtubeTarget) {
	// 		setTimeout(() => {
	// 			modalOpen ? close() : open();
	// 		}, 1000);
	// 		setYoutubeGoal(true);
	// 	}
	// }, []);

	// const handleToast = (str) => {
	// 	log(str, 'toast str');

	// 	toast.promise(
	// 		saveSettings(settings),
	// 		 {
	// 			 loading: 'Saving...',
	// 			 success: <b>Settings saved!</b>,
	// 			 error: <b>Could not save.</b>,
	// 		 }
	// 	 );

	// }

	// create a toast
	// const notifyTest = () => {
	// 	toast.success(`this is some test text for toast.`, {
	// 		duration: 3000,
	// 		style: {
	// 			border: '2px solid #7f0101',
	// 			background: '#1d0b01',
	// 			color: '#ffffff',
	// 		},
	// 	});
	// };
	const { nextDeadlineSong } = useSongsContext();

	return (
		<>
			{nextDeadlineSong && (
				<StyledHome
					initial={{ width: 0 }}
					animate={{ width: '100%' }}
					exit={{ x: window.innerWidth }}
					className={`page ${width < breakpoint ? 'mobile' : ''}`}
				>
					<AnimatePresence mode='wait'>
						{/* {modalOpen && (
					<Modal
						modalOpen={modalOpen}
						handleClose={close}
						youtubeData={youtubeData}
						handleSnooze={close}
					/>
				)} */}
						{hasYoutubeAccount && viewModalOpen && (
							<ViewModal
								modalOpen={viewModalOpen}
								handleClose={viewClose}
								youtubeData={youtubeData}
								handleSnooze={viewClose}
							/>
						)}
						{hasYoutubeAccount && subModalOpen && (
							<SubModal
								modalOpen={subModalOpen}
								handleClose={subClose}
								youtubeData={youtubeData}
								handleSnooze={subClose}
							/>
						)}
						{hasYoutubeAccount && videoModalOpen && (
							<VideoModal
								modalOpen={videoModalOpen}
								handleClose={videoClose}
								youtubeData={youtubeData}
								handleSnooze={videoClose}
							/>
						)}
						{isFormOpen === true && (
							<SongModal currentId={currentId} setCurrentId={setCurrentId} />
						)}
					</AnimatePresence>
					{nextDeadlineSong && nextDeadlineSong.deadlineDate !== null && (
						<AlertDeadlineSong theme={theme} />
					)}
					{nextDeadlineSong && (
						<SongsListContainer
							filterValue={filterValue}
							homeSongFilterHandler={homeSongFilterHandler}
							setFilterValue={setFilterValue}
							theme={theme}
						/>
					)}
				</StyledHome>
			)}
		</>
	);
};
const StyledHome = styled(motion.div)`
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	row-gap: 1.5rem;
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
