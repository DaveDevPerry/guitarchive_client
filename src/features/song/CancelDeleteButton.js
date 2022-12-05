import React from 'react';
import styled from 'styled-components';
// import { useStateContext } from '../../lib/context';
// import { CgPlayListAdd } from 'react-icons/cg';
// import { MdDeleteForever } from 'react-icons/md';
import { useViewport } from '../../hooks/useViewport';

const CancelDeleteButton = ({ handleCancel, theme }) => {
	// const { isDeleteFormOpen, setIsDeleteFormOpen } = useStateContext();
	const { width } = useViewport();
	const breakpoint = 620;
	return (
		<StyledCancelDeleteButton
			className={`btn-6 custom-btn`}
			onClick={(e) => {
				e.preventDefault();
				handleCancel();
			}}
		>
			{/* <MdDeleteForever className='delete-song-btn' /> */}
			{width < breakpoint ? (
				<p className='btn-text'>
					cancel
					<br />
					delete
				</p>
			) : (
				<p className='btn-text'>cancel delete</p>
			)}
		</StyledCancelDeleteButton>
	);
};
const StyledCancelDeleteButton = styled.button`
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

export default CancelDeleteButton;
