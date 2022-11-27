import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
// import { useAuthContext } from '../hooks/useAuthContext';
import { useStateContext } from '../lib/context';
import { useNavigate } from 'react-router-dom';
// import ArrangersList from '../features/arrangers/ArrangersList';
import ArrangerModal from '../features/arrangers/ArrangerModal';
import AddArrangerButton from '../features/arrangers/AddArrangerButton';
// import SearchBar from '../components/SearchBar';
// import ArrangersFilter from '../features/arrangers/ArrangersFilter';
import ArrangersWidget from '../features/arrangers/ArrangersWidget';
import { useArrangersContext } from '../hooks/useArrangerContext';
import { useViewport } from '../hooks/useViewport';
// import moment from 'moment';
// import { differenceInCalendarDays, parseISO } from 'date-fns';

const Arrangers = () => {
	const { dataLoaded, isArrangerFormOpen } = useStateContext();
	const [currentId, setCurrentId] = useState(null);
	const { arrangers } = useArrangersContext();
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
		<StyledArrangers
			initial={{ width: 0 }}
			animate={{ width: '100%' }}
			exit={{ x: window.innerWidth }}
			className='arrangers-page page'
		>
			{isArrangerFormOpen === true && (
				<ArrangerModal currentId={currentId} setCurrentId={setCurrentId} />
			)}
			{width < breakpoint ? (
				<div className='mobile-user-actions-container'>
					<AddArrangerButton />
				</div>
			) : (
				<div className='user-actions-container'>
					<AddArrangerButton />
					{/* <SearchBar /> */}
				</div>
			)}
			<ArrangersWidget arrangers={arrangers} />
		</StyledArrangers>
	);
};
const StyledArrangers = styled(motion.div)`
	/* display: flex;
	flex-direction: column;
	justify-content: flex-start;
	max-width: 100rem;
	padding: 0.5rem 1rem;
	overflow-y: auto;
	z-index: 1;
	transition: all 200ms linear;
	margin: 0 auto;
	flex: 1;
	overflow-y: hidden; */
	.mobile-user-actions-container {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 0 1rem 1rem 1rem;
		column-gap: 2rem;
		transition: all 200ms linear;
	}
	.user-actions-container {
		display: flex;
		justify-content: flex-start;
		align-items: center;
		padding: 0 0 1rem 0;
	}
`;
// const StyledMobileArrangers = styled(motion.div)`
// 	display: flex;
// 	flex-direction: column;
// 	justify-content: flex-start;
// 	/* row-gap: 1rem; */
// 	max-width: 100rem;
// 	/* max-width: 100rem; */
// 	/* padding: 0.5rem 0; */
// 	/* padding: 0.5rem 1rem; */
// 	overflow-y: auto;
// 	z-index: 1;
// 	transition: all 200ms linear;
// 	margin: 0 auto;
// 	flex: 1;
// 	overflow-y: hidden;

// 	.mobile-user-actions-container {
// 		display: flex;
// 		justify-content: space-between;
// 		align-items: center;
// 		padding: 0 1rem 1rem 1rem;
// 		column-gap: 2rem;
// 		transition: all 200ms linear;
// 	}
// `;

export default Arrangers;
