import React from 'react';
import styled from 'styled-components';
import { useViewport } from '../hooks/useViewport';
import { TiArrowBack } from 'react-icons/ti';
import { useNavigate } from 'react-router-dom';

const BackButton = ({ url }) => {
	const { width } = useViewport();
	const breakpoint = 620;
	let navigate = useNavigate();

	return (
		<StyledBackButton
			className={`btn-6 custom-btn ${width < breakpoint ? 'mobile' : ''}`}
			onClick={() => {
				navigate(`/${url && url}`);
			}}
		>
			<TiArrowBack className='back-song-btn' />
			{width < breakpoint ? <p>back</p> : <p>go back</p>}
		</StyledBackButton>
	);
};
const StyledBackButton = styled.button`
	&.custom-btn {
		display: flex;
		align-items: center;
		justify-content: flex-start;
		column-gap: 0.5rem;
	}
	&.mobile {
		justify-content: center;
	}
	.back-song-btn {
		color: ${({ theme }) => theme.btnIcon};
		font-size: 2.2rem;
	}
	p {
		/* font-family: 'New Tegomin'; */
		color: ${({ theme }) => theme.btnColor};
		text-transform: uppercase;
		font-size: 1.6rem;
		font-weight: bolder;
		line-height: 1;
	}
`;

export default BackButton;
