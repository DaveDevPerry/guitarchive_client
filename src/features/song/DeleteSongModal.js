import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
// import { useAuthContext } from '../hooks/useAuthContext';
// import { useResultsContext } from '../hooks/useResultsContext';
import { useStateContext } from '../../lib/context';
// import EditSongForm from './EditSongForm';
// import { log } from '../../utils/helper';
// import { ImArrowRight } from 'react-icons/im';
// import SongForm from './SongForm';
// import { useSongsContext } from '../../hooks/useSongsContext';
// import ResultsList from './ResultsList';
// import ResultsScore from './ResultsScore';
// import ResultsRanking from './ResultsRanking';
// import { motion } from 'framer-motion';
// import { ImCross, ImCheckmark, ImArrowRight } from 'react-icons/im';

const DeleteSongModal = ({ handleDelete, handleCancel }) => {
	const { dataLoaded } = useStateContext();

	let navigate = useNavigate();
	useEffect(() => {
		if (dataLoaded === false) {
			navigate('/');
		}
	}, [navigate, dataLoaded]);

	return (
		<StyledDeleteSongModal open>
			<div className='posts-box'>
				<h2>confirm delete</h2>
				<p>this action can not be undone</p>

				<div className='delete-btn-container'>
					<div className='cancel-delete-btn' onClick={handleCancel}>
						cancel delete
					</div>
					<div className='confirm-delete-btn' onClick={handleDelete}>
						confirm delete
					</div>
				</div>
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
		</StyledDeleteSongModal>
	);
};
const StyledDeleteSongModal = styled.dialog`
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
	font-family: 'NewTegomin';
	.posts-box {
		width: calc(100vw - 2rem);
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		/* align-items: center; */
		max-width: 100rem;
		padding: 1rem 2rem 2rem 2rem;
		overflow-y: hidden;
		z-index: 1;
		transition: all 200ms linear;
		margin: 0 auto;
		flex: 1;
		background-image: url('/images/dark wood texture.webp');
		border-radius: 1rem;
		row-gap: 2rem;
		box-shadow: 3px 3px 4px rgb(0 0 0);
		h2 {
			font-size: 2.5rem;
			text-transform: capitalize;
			text-align: center;
			font-weight: bolder;
			text-shadow: 0px 1px 0px rgb(255 255 255 / 30%),
				0px -1px 0px rgb(0 0 0 / 70%);
			color: ${({ theme }) => theme.engravedBrown};
		}
		p {
			/* font-family: 'Roboto'; */
			font-family: 'NewTegomin';
			color: white;
			text-transform: uppercase;
			font-size: 1.6rem;
			text-align: center;
			/* font-size: 1.2rem; */
		}
		.delete-btn-container {
			display: flex;
			flex-direction: row;
			justify-content: space-between;
			align-items: center;
			column-gap: 2rem;
			.cancel-delete-btn {
				padding: 1rem;
				/* flex: 1; */
				display: flex;
				align-items: center;
				justify-content: center;
				column-gap: 0.5rem;
				border-radius: 0.5rem;
				background-color: ${({ theme }) => theme.lightBrown};
				box-shadow: rgb(0 0 0 / 30%) 2px 2px 2px, rgb(0 0 0 / 10%) -2px -2px 2px;
				/* background-color: #9a9a9a; */
				height: 100%;
				/* width: 9em; */
				/* height: 2em; */

				cursor: pointer;
				flex: 1;
				text-align: center;
				text-transform: uppercase;
				color: ${({ theme }) => theme.white};
				font-size: 2rem;
				font-weight: bolder;
			}
			.confirm-delete-btn {
				padding: 1rem;
				/* flex: 1; */
				display: flex;
				align-items: center;
				justify-content: center;
				column-gap: 0.5rem;
				border-radius: 0.5rem;
				background-color: ${({ theme }) => theme.red};
				box-shadow: rgb(0 0 0 / 30%) 2px 2px 2px, rgb(0 0 0 / 10%) -2px -2px 2px;
				/* background-color: #9a9a9a; */
				height: 100%;
				/* width: 9em; */
				/* height: 2em; */
				cursor: pointer;
				flex: 1;
				text-align: center;
				text-transform: uppercase;
				color: ${({ theme }) => theme.white};
				font-size: 2rem;
				font-weight: bolder;
			}
		}
	}
`;

export default DeleteSongModal;
