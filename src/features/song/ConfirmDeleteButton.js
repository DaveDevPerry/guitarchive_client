import React from 'react';
import styled from 'styled-components';
import { useViewport } from '../../hooks/useViewport';

const ConfirmDeleteButton = ({ handleDelete, theme }) => {
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
			{width < breakpoint ? (
				<p className='btn-text mobile'>
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
	color: ${({ theme }) => theme.primaryColor};
	p.btn-text {
		font-family: 'NewTegomin';
		color: ${({ theme }) => theme.primaryColor} !important;
		text-transform: uppercase;
		font-size: 1.6rem;
		font-weight: bolder;
		line-height: 1;
		&.mobile {
			color: ${({ theme }) => theme.primaryColor} !important;
		}
	}
`;

export default ConfirmDeleteButton;
