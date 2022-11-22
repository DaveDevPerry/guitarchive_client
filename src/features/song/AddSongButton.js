import React from 'react';
import styled from 'styled-components';
import { useStateContext } from '../../lib/context';
import { CgPlayListAdd } from 'react-icons/cg';

const AddSongButton = () => {
	const { isFormOpen, setIsFormOpen } = useStateContext();
	return (
		<StyledAddSongButton
			onClick={() => {
				isFormOpen === true ? setIsFormOpen(false) : setIsFormOpen(true);
			}}
		>
			<CgPlayListAdd
				className='add-song-btn'
				// onClick={() => {
				// 	isFormOpen === true ? setIsFormOpen(false) : setIsFormOpen(true);
				// }}
			/>
			<p>add song</p>
		</StyledAddSongButton>
	);
};
const StyledAddSongButton = styled.div`
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
	.add-song-btn {
		font-size: 2.5rem;
	}
	p {
		font-family: 'Roboto';
		color: white;
		text-transform: capitalize;
		font-size: 1.2rem;
	}
`;

export default AddSongButton;
