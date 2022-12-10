import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { useViewport } from '../../hooks/useViewport';
import { useStateContext } from '../../lib/context';
import SongForm from './SongForm';

const SongModal = ({ currentId, setCurrentId, theme }) => {
	const { dataLoaded } = useStateContext();
	const { width } = useViewport();
	const breakpoint = 620;

	let navigate = useNavigate();
	useEffect(() => {
		if (dataLoaded === false) {
			navigate('/');
		}
	}, [navigate, dataLoaded]);

	// const formVariants = {
	// 	hidden: {
	// 		scale: 0,
	// 		opacity: 0,
	// 		y: 100,
	// 	},
	// 	visible: {
	// 		scale: 1,
	// 		opacity: 1,
	// 		y: 0,
	// 		transition: {
	// 			duration: 1,
	// 			mass: 1.5,
	// 			stiffness: 200,
	// 		},
	// 	},
	// };

	return (
		<StyledSongModal
			open
			// variants={formVariants}
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			// transition={{ delay: 3.5 }}
			exit={{ opacity: 0 }}
		>
			<div
				className={`posts-box ${width < breakpoint ? 'mobile' : ''}`}
				id={`${theme === 'dark' ? 'dark' : 'light'}`}
				// variants={formVariants}
			>
				<h2>add song</h2>

				<SongForm />
			</div>
		</StyledSongModal>
	);
};
const StyledSongModal = styled(motion.dialog)`
	position: absolute;
	top: 0;
	left: 0;
	z-index: 100000;
	height: 100vh;
	width: 100vw;
	display: grid;
	place-content: center;
	background-color: rgba(0, 0, 0, 0.8);
	border: none;
	.posts-box {
		width: calc(100vw - 2rem);
		display: flex;
		flex-direction: column;
		row-gap: 2rem;
		justify-content: flex-start;
		max-width: 80rem;
		padding: 1rem 2rem 2rem 2rem;
		overflow-y: hidden;
		z-index: 1;
		transition: all 200ms linear;
		margin: 0 auto;
		flex: 1;
		overflow-y: auto;
		border-radius: 1rem;
		box-shadow: 3px 3px 4px rgb(0 0 0);
		&#dark {
			background-image: url('/images/black wood.webp');
		}
		&#light {
			background-image: url('/images/white wood.webp');
		}
		h2 {
			font-size: 2.5rem;
			text-transform: capitalize;
			text-align: center;
			font-weight: bolder;
			text-shadow: 0px 1px 0px rgb(255 255 255 / 30%),
				0px -1px 0px rgb(0 0 0 / 70%);
		}
		&.mobile {
			padding: 1rem;
			/* padding: 1rem 1rem 2rem 1rem; */
			border-radius: 0.4rem;
		}
	}
`;

export default SongModal;
