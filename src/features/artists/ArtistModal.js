import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
// import { useAuthContext } from '../hooks/useAuthContext';
// import { useResultsContext } from '../hooks/useResultsContext';
import { useStateContext } from '../../lib/context';
// import { log } from '../../utils/helper';
// import { ImArrowRight } from 'react-icons/im';
import ArtistForm from './ArtistForm';
// import { useArtistsContext } from '../../hooks/useArtistsContext';
// import ResultsList from './ResultsList';
// import ResultsScore from './ResultsScore';
// import ResultsRanking from './ResultsRanking';
// import { motion } from 'framer-motion';
// import { ImCross, ImCheckmark, ImArrowRight } from 'react-icons/im';

const ArtistModal = ({
	inputText,
	setInputText,
	posts,
	setArtists,
	setStatus,
	inputDate,
	setInputDate,
	postInputTime,
	setArtistInputTime,
	inputDescription,
	setInputDescription,

	setArtistInputLocation,
	postInputLocation,
	// setArtists,
	// setStatus,

	postInputPhone,
	setArtistInputPhone,
	currentId,
	setCurrentId,
}) => {
	const { dataLoaded } = useStateContext();

	let navigate = useNavigate();
	useEffect(() => {
		if (dataLoaded === false) {
			navigate('/');
		}
	}, [navigate, dataLoaded]);

	return (
		<StyledArtistModal open>
			<div className='posts-box br'>
				<h2>add artist</h2>

				<ArtistForm
					// setInputText={setInputText}
					// inputText={inputText}
					// posts={posts}
					// setArtists={setArtists}
					// setStatus={setStatus}
					// inputDate={inputDate}
					// setInputDate={setInputDate}
					// inputDescription={inputDescription}
					// setInputDescription={setInputDescription}
					// setArtistInputLocation={setArtistInputLocation}
					// postInputLocation={postInputLocation}
					// postInputTime={postInputTime}
					// setArtistInputTime={setArtistInputTime}
					// postInputPhone={postInputPhone}
					// setArtistInputPhone={setArtistInputPhone}
					currentId={currentId}
					setCurrentId={setCurrentId}
				/>

				{/* <div
					className='add-post-btn'
					onClick={() => {
						handleClose();
					}}
				>
					<p>CONTINUE</p>
					<ImArrowRight className='arrow-r-icon' />
				</div> */}
			</div>
		</StyledArtistModal>
	);
};
const StyledArtistModal = styled.dialog`
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
	/* border: 1px solid green; */
	/* ::backdrop {
	} */
	/* overflow-y: hidden; */
	.posts-box {
		padding: 2rem;
		/* height: 300px; */
		width: calc(100vw - 2rem);
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		/* row-gap: 1rem; */
		/* padding: 0.5rem; */
		max-width: 80rem;
		/* max-width: 42rem; */
		/* border: 2px solid blue; */
		padding: 2rem 1rem;
		/* padding: 0.5rem 1rem; */
		overflow-y: hidden;
		/* overflow-y: scroll; */
		/* overflow: hidden; */
		z-index: 1;
		/* overflow-y: auto; */
		transition: all 200ms linear;
		margin: 0 auto;
		flex: 1;
		overflow-y: auto;
		background-image: url('/images/dark wood texture.webp');
		h2 {
			/* color: ${({ theme }) => theme.primaryColor}; */
			text-transform: capitalize;
			text-align: center;
		}

		/* .add-post-btn {
			background-color: ${({ theme }) => theme.green};
			padding: 1rem 2rem;
			cursor: pointer;
			border-radius: 4px;
			box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5);
			position: relative;
			p {
				text-transform: uppercase;
				color: ${({ theme }) => theme.white};
				font-weight: bold;
				text-align: center;
				pointer-events: none;
			}
			.arrow-r-icon {
				position: absolute;
				font-size: 2rem;
				color: ${({ theme }) => theme.white};
				top: 50%;
				right: 0;
				transform: translate(-100%, -50%);
				pointer-events: none;
			}
		} */
	}
`;

export default ArtistModal;
