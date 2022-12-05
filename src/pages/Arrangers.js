import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useStateContext } from '../lib/context';
import { useNavigate } from 'react-router-dom';
import ArrangerModal from '../features/arrangers/ArrangerModal';
import AddArrangerButton from '../features/arrangers/AddArrangerButton';
import ArrangersWidget from '../features/arrangers/ArrangersWidget';
import { useArrangersContext } from '../hooks/useArrangerContext';
import { useViewport } from '../hooks/useViewport';

const Arrangers = () => {
	const { dataLoaded, isArrangerFormOpen } = useStateContext();
	const [currentId, setCurrentId] = useState(null);
	const { arrangers } = useArrangersContext();

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
export default Arrangers;
