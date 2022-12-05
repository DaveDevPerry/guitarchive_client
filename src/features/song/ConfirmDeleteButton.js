import React from 'react';
import styled from 'styled-components';
// import { useStateContext } from '../../lib/context';
// import { CgPlayListAdd } from 'react-icons/cg';
// import { MdDeleteForever } from 'react-icons/md';
import { useViewport } from '../../hooks/useViewport';

const ConfirmDeleteButton = ({ handleDelete, theme }) => {
	// const { isDeleteFormOpen, setIsDeleteFormOpen } = useStateContext();
	const { width } = useViewport();
	const breakpoint = 620;
	return (
		<StyledConfirmDeleteButton
			className={`btn-6 custom-btn`}
			onClick={(e) => {
				e.preventDefault();
				handleDelete();
			}}
		>
			{/* <MdDeleteForever className='delete-song-btn' /> */}
			{width < breakpoint ? (
				<p className='btn-text'>
					confirm
					<br />
					delete
				</p>
			) : (
				<p className='btn-text'>confirm delete</p>
			)}
		</StyledConfirmDeleteButton>
	);
};
const StyledConfirmDeleteButton = styled.button`
	flex: 1 1 48%;
	p.btn-text {
		font-family: 'NewTegomin';
		color: ${({ theme }) => theme.primaryColor};
		text-transform: uppercase;
		font-size: 1.6rem;
		font-weight: bolder;
		line-height: 1;
	}
`;

export default ConfirmDeleteButton;
