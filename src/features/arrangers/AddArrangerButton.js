import React from 'react';
import styled from 'styled-components';
import { useStateContext } from '../../lib/context';
import { CgPlayListAdd } from 'react-icons/cg';

const AddArrangerButton = () => {
	const { isArrangerFormOpen, setIsArrangerFormOpen } = useStateContext();
	return (
		<StyledAddArrangerButton
			onClick={() => {
				isArrangerFormOpen === true
					? setIsArrangerFormOpen(false)
					: setIsArrangerFormOpen(true);
			}}
		>
			<CgPlayListAdd className='add-arranger-btn' />
			<p>add arranger</p>
		</StyledAddArrangerButton>
	);
};
const StyledAddArrangerButton = styled.div`
	padding: 0 1rem;
	/* flex: 1; */
	display: flex;
	align-items: center;
	justify-content: flex-start;
	column-gap: 0.5rem;
	border-radius: 0.5rem;
	background-color: ${({ theme }) => theme.lightBrown};
	box-shadow: rgb(0 0 0 / 30%) 2px 2px 2px, rgb(0 0 0 / 10%) -2px -2px 2px;
	/* background-color: #9a9a9a; */
	height: 100%;
	height: 3.8rem;
	/* width: 9em; */
	/* height: 2em; */
	cursor: pointer;
	.add-arranger-btn {
		font-size: 2.5rem;
	}
	p {
		font-family: 'New Tegomin';
		color: white;
		text-transform: uppercase;
		font-size: 1.6rem;
	}
`;

export default AddArrangerButton;
