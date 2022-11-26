import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
// import { useAuthContext } from '../hooks/useAuthContext';
// import { useResultsContext } from '../hooks/useResultsContext';
import { useStateContext } from '../../lib/context';
import EditSongForm from './EditSongForm';
// import { log } from '../../utils/helper';
// import { ImArrowRight } from 'react-icons/im';
// import SongForm from './SongForm';
// import { useSongsContext } from '../../hooks/useSongsContext';
// import ResultsList from './ResultsList';
// import ResultsScore from './ResultsScore';
// import ResultsRanking from './ResultsRanking';
// import { motion } from 'framer-motion';
// import { ImCross, ImCheckmark, ImArrowRight } from 'react-icons/im';

const EditSongModal = ({
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
}) => {
	const { dataLoaded } = useStateContext();

	let navigate = useNavigate();
	useEffect(() => {
		if (dataLoaded === false) {
			navigate('/');
		}
	}, [navigate, dataLoaded]);

	return (
		<StyledEditSongModal open>
			<div className='posts-box br'>
				<h2>edit song</h2>

				<EditSongForm
					// setInputText={setInputText}
					// inputText={inputText}
					// posts={posts}
					// setSongs={setSongs}
					// setStatus={setStatus}
					// inputDate={inputDate}
					// setInputDate={setInputDate}
					// inputDescription={inputDescription}
					// setInputDescription={setInputDescription}
					// setSongInputLocation={setSongInputLocation}
					// postInputLocation={postInputLocation}
					// postInputTime={postInputTime}
					// setSongInputTime={setSongInputTime}
					// postInputPhone={postInputPhone}
					// setSongInputPhone={setSongInputPhone}
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
		</StyledEditSongModal>
	);
};
const StyledEditSongModal = styled.dialog`
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
		/* padding: 2rem; */
		/* height: 300px; */
		width: calc(100vw - 2rem);
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		/* row-gap: 1rem; */
		/* padding: 0.5rem; */
		max-width: 100rem;
		/* max-width: 42rem; */
		/* border: 2px solid blue; */
		padding: 1rem 1rem 2rem 1rem;
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
		border-radius: 1rem;
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

export default EditSongModal;
