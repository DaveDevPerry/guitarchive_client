import React from 'react';
import styled from 'styled-components';
import { useStateContext } from '../../lib/context';
import { CgPlayListAdd } from 'react-icons/cg';
// import { GrAdd } from 'react-icons/gr';
import { useViewport } from '../../hooks/useViewport';

const AddSongButton = () => {
	const { isFormOpen, setIsFormOpen } = useStateContext();
	const { width } = useViewport();
	const breakpoint = 620;
	return (
		<StyledAddSongButton
			className='btn-6 custom-btn'
			onClick={() => {
				isFormOpen === true ? setIsFormOpen(false) : setIsFormOpen(true);
			}}
		>
			<CgPlayListAdd className='add-song-btn' />
			{/* <GrAdd className='add-song-btn' /> */}
			{/* <p>upload</p> */}
			{width > breakpoint && <p>add song</p>}
		</StyledAddSongButton>
	);
};
const StyledAddSongButton = styled.button`
	/* padding: 0 1rem; */
	/* border-radius: 0.4rem; */
	/* background-color: ${({ theme }) => theme.btnBg}; */
	/* height: 100%; */
	/* cursor: pointer; */
	/* border: 1px solid ${({ theme }) => theme.btnBorder}; */
	&.custom-btn {
		display: flex;
		align-items: center;
		justify-content: flex-start;
		column-gap: 0.5rem;
		/* width: unset; */
		.add-song-btn {
			margin-top: 0.5rem;
			/* font-size: 2.4rem; */
			color: ${({ theme }) => theme.btnIcon};
			font-weight: bolder;
		}
		p {
			font-family: 'NewTegomin';
			color: ${({ theme }) => theme.btnColor};
			text-transform: uppercase;
			font-size: 1.6rem;
			font-weight: bolder;
			line-height: 1;
		}
	}
`;
// const StyledAddSongButton = styled.div`
// 	padding: 0 1rem;
// 	display: flex;
// 	align-items: center;
// 	justify-content: flex-start;
// 	column-gap: 0.5rem;
// 	border-radius: 0.4rem;
// 	background-color: ${({ theme }) => theme.btnBg};
// 	height: 100%;
// 	cursor: pointer;
// 	border: 1px solid ${({ theme }) => theme.btnBorder};
// 	.add-song-btn {
// 		font-size: 2rem;
// 		color: ${({ theme }) => theme.btnIcon};
// 	}
// 	p {
// 		font-family: 'NewTegomin';
// 		color: ${({ theme }) => theme.btnColor};
// 		text-transform: uppercase;
// 		font-size: 1.6rem;
// 		font-weight: bolder;
// 	}
// `;

export default AddSongButton;
