import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { useViewport } from '../../hooks/useViewport';
import { useStateContext } from '../../lib/context';
import CancelDeleteButton from './CancelDeleteButton';
import ConfirmDeleteButton from './ConfirmDeleteButton';

const DeleteSongModal = ({ handleDelete, handleCancel, theme }) => {
	const { dataLoaded } = useStateContext();

	let navigate = useNavigate();
	useEffect(() => {
		if (dataLoaded === false) {
			navigate('/');
		}
	}, [navigate, dataLoaded]);

	const { width } = useViewport();
	const breakpoint = 620;

	return (
		<StyledDeleteSongModal open>
			<div
				className={`posts-box ${width < breakpoint ? 'mobile' : ''}`}
				id={`${theme === 'dark' ? 'dark' : 'light'}`}
			>
				<h2>confirm delete</h2>
				<p>this action can not be undone</p>

				<div className='delete-btn-container'>
					<CancelDeleteButton handleCancel={handleCancel} theme={theme} />
					<ConfirmDeleteButton handleCancel={handleDelete} theme={theme} />
				</div>
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
		padding: 1rem 2rem 2rem;
		border-radius: 1rem;
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		background-repeat: no-repeat;
		background-size: cover;
		row-gap: 0.5rem;
		box-shadow: 3px 3px 4px rgb(0 0 0);
		flex: 1;
		overflow-y: hidden;
		&#dark {
			background-image: url('/images/dark wood texture.webp');
		}
		&#light {
			background-image: url('/images/white wood.webp');
		}
		&.mobile {
			border-radius: 0.4rem;
			padding: 2rem;
			row-gap: 2rem;
			.delete-btn-container {
				color: ${({ theme }) => theme.primaryColor};
			}
		}
		h2 {
			font-size: 2.5rem;
			text-transform: capitalize;
			text-align: center;
			font-weight: bolder;
			text-shadow: 0px 1px 0px rgb(255 255 255 / 30%),
				0px -1px 0px rgb(0 0 0 / 70%);
			color: ${({ theme }) => theme.primaryColor};
		}
		p {
			font-family: 'NewTegomin';
			color: ${({ theme }) => theme.secondaryColor};
			text-transform: uppercase;
			font-size: 1.6rem;
			text-align: center;
			font-weight: bolder;
			text-shadow: 0px 1px 0px rgb(255 255 255 / 30%),
				0px -1px 0px rgb(0 0 0 / 70%);
		}
		.delete-btn-container {
			display: flex;
			flex-direction: row;
			justify-content: space-between;
			align-items: center;
			column-gap: 2rem;
			color: ${({ theme }) => theme.primaryColor};
		}
	}
`;

export default DeleteSongModal;
