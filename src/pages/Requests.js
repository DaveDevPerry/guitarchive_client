import { AnimatePresence, motion } from 'framer-motion';
import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useStateContext } from '../lib/context';
import { useNavigate } from 'react-router-dom';
import { useViewport } from '../hooks/useViewport';
import SongsListContainer from '../features/requests/SongsListContainer';
import SongModal from '../features/requests/SongModal';
// import { useRequestsContext } from '../hooks/useRequestContext';
// import SongModal from '../features/home/SongModal';
// import AlertDeadlineSong from '../features/requests/AlertDeadlineSong';

const Requests = ({
	theme,
	filteredRequests,
	setFilteredRequests,
	requestStatusHandler,
}) => {
	const { dataLoaded, isRequestFormOpen } = useStateContext();
	const { width } = useViewport();
	const breakpoint = 620;

	// const {songs} = useRequestsContext();

	// const [requestsFilterValue, setRequestsFilterValue] = useState('requests');
	let navigate = useNavigate();
	useEffect(() => {
		if (dataLoaded === false) {
			navigate('/');
		}
	}, [navigate, dataLoaded]);

	// // function sand events
	// const requestsSongFilterHandler = (e) => {
	// 	console.log(e, 'e');
	// 	switch (e.target.value) {
	// 		// case 'tabs':
	// 		// 	setRequestsFilterValue('tabs');
	// 		// 	break;
	// 		// case 'scores':
	// 		// 	setRequestsFilterValue('scores');
	// 		// 	break;
	// 		// case 'favourites':
	// 		// 	setRequestsFilterValue('favourites');
	// 		// 	break;
	// 		// case 'deadlines':
	// 		// 	setRequestsFilterValue('deadlines');
	// 		// 	break;
	// 		// case 'practicing':
	// 		// 	setRequestsFilterValue('practicing');
	// 		// 	break;
	// 		case 'complete':
	// 			setRequestsFilterValue('arranged');
	// 			break;
	// 		default:
	// 			setRequestsFilterValue('requests');
	// 			break;
	// 	}
	// };

	return (
		<StyledRequests
			initial={{ width: 0 }}
			animate={{ width: '100%' }}
			exit={{ x: window.innerWidth }}
			className={`page ${width < breakpoint ? 'mobile' : ''}`}
		>
			<AnimatePresence mode='wait'>
				{isRequestFormOpen === true && <SongModal />}
			</AnimatePresence>
			<SongsListContainer
				// requestsFilterValue={requestsFilterValue}
				// requestsSongFilterHandler={requestsSongFilterHandler}
				// setRequestsFilterValue={setRequestsFilterValue}
				filteredRequests={filteredRequests}
				setFilteredRequests={setFilteredRequests}
				requestStatusHandler={requestStatusHandler}
				theme={theme}
			/>
		</StyledRequests>
	);
};
const StyledRequests = styled(motion.div)`
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

export default Requests;
