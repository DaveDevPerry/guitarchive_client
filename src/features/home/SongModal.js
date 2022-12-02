import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { useViewport } from '../../hooks/useViewport';
// import { useAuthContext } from '../hooks/useAuthContext';
// import { useResultsContext } from '../hooks/useResultsContext';
import { useStateContext } from '../../lib/context';
// import { log } from '../../utils/helper';
// import { ImArrowRight } from 'react-icons/im';
import SongForm from './SongForm';
// import { useSongsContext } from '../../hooks/useSongsContext';
// import ResultsList from './ResultsList';
// import ResultsScore from './ResultsScore';
// import ResultsRanking from './ResultsRanking';
// import { motion } from 'framer-motion';
// import { ImCross, ImCheckmark, ImArrowRight } from 'react-icons/im';
// import '../../assets/images/dark wood texture.webp';

const SongModal = ({
	inputText,
	setInputText,
	posts,
	setSongs,
	setStatus,
	inputDate,
	setInputDate,
	postInputTime,
	setSongInputTime,
	inputDescription,
	setInputDescription,

	setSongInputLocation,
	postInputLocation,
	// setSongs,
	// setStatus,

	postInputPhone,
	setSongInputPhone,
	currentId,
	setCurrentId,
	theme,
}) => {
	const { dataLoaded } = useStateContext();
	const { width } = useViewport();
	const breakpoint = 620;

	let navigate = useNavigate();
	useEffect(() => {
		if (dataLoaded === false) {
			navigate('/');
		}
	}, [navigate, dataLoaded]);

	return (
		<StyledSongModal open>
			<div
				className={`posts-box ${width < breakpoint ? 'mobile' : ''}`}
				id={`${theme === 'dark' ? 'dark' : 'light'}`}
			>
				<h2>add song</h2>

				<SongForm currentId={currentId} setCurrentId={setCurrentId} />
			</div>
		</StyledSongModal>
	);
};
const StyledSongModal = styled.dialog`
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
		justify-content: flex-start;
		max-width: 100rem;
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
			background-image: url('/images/dark wood texture.webp');
		}
		&#light {
			background-image: url('/images/white wood.jpg');
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
			padding: 1rem 1rem 2rem 1rem;
		}
	}
`;

export default SongModal;
