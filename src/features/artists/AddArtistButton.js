import React from 'react';
import styled from 'styled-components';
import { useStateContext } from '../../lib/context';
import { CgPlayListAdd } from 'react-icons/cg';

const AddArtistButton = () => {
	const { isArtistFormOpen, setIsArtistFormOpen } = useStateContext();
	return (
		<StyledAddArtistButton
			onClick={() => {
				isArtistFormOpen === true
					? setIsArtistFormOpen(false)
					: setIsArtistFormOpen(true);
			}}
		>
			<CgPlayListAdd className='add-artist-btn' />
			<p>add artist</p>
		</StyledAddArtistButton>
	);
};
const StyledAddArtistButton = styled.div`
	/* border: 1px solid #1aac83; */
	/* padding: 0 1em; */
	padding: 0 1rem;
	/* flex: 1; */
	display: flex;
	align-items: center;
	justify-content: flex-start;
	column-gap: 0.5rem;
	border-radius: 0.5rem;
	background-color: ${({ theme }) => theme.lightBrown};
	/* background-color: #9a9a9a; */
	height: 100%;
	width: 9em;
	/* height: 2em; */
	cursor: pointer;
	.add-artist-btn {
		font-size: 2.5rem;
	}
	p {
		font-family: 'Roboto';
		color: white;
		text-transform: capitalize;
		font-size: 1.2rem;
	}
`;

export default AddArtistButton;
