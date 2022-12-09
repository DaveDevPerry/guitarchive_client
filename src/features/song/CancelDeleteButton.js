import React from 'react';
import styled from 'styled-components';
import { useViewport } from '../../hooks/useViewport';

const CancelDeleteButton = ({ handleCancel, theme }) => {
	const { width } = useViewport();
	const breakpoint = 620;
	return (
		<StyledCancelDeleteButton
			className={`btn-6 custom-btn ${width < breakpoint ? 'mobile' : ''}`}
			onClick={(e) => {
				e.preventDefault();
				handleCancel();
			}}
		>
			{width < breakpoint ? (
				<p className='btn-text mobile'>
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

export default CancelDeleteButton;
