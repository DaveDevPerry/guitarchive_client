import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { useViewport } from '../../hooks/useViewport';
import { useStateContext } from '../../lib/context';
import ArtistForm from './ArtistForm';

const ArtistModal = ({ currentId, setCurrentId, theme }) => {
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
		<StyledArtistModal open>
			<div
				className={`posts-box ${width < breakpoint ? 'mobile' : ''}`}
				id={`${theme === 'dark' ? 'dark' : 'light'}`}
			>
				<h2>add artist</h2>
				<ArtistForm currentId={currentId} setCurrentId={setCurrentId} />
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
	.posts-box {
		width: calc(100vw - 4rem);
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
			padding: 1rem 1rem 2rem 1rem;
			border-radius: 0.4rem;
		}
	}
`;

export default ArtistModal;
