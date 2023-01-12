import React from 'react';
import styled from 'styled-components';
// import { useStateContext } from '../../lib/context';
// import { CgPlayListAdd } from 'react-icons/cg';
// import { FaEdit } from 'react-icons/fa';
import { useViewport } from '../../hooks/useViewport';
import { TiArrowBack } from 'react-icons/ti';
import { useNavigate } from 'react-router-dom';

const BackButton = () => {
	// const { isEditFormOpen, setIsEditFormOpen } = useStateContext();
	const { width } = useViewport();
	const breakpoint = 620;
	let navigate = useNavigate();

	return (
		<StyledBackButton
			className={`btn-6 custom-btn ${width < breakpoint ? 'mobile' : ''}`}
			onClick={() => {
				navigate('/home');
			}}
		>
			<TiArrowBack className='back-song-btn' />
			{width < breakpoint ? <p>back</p> : <p>go back</p>}
		</StyledBackButton>
	);
};
const StyledBackButton = styled.button`
	/* border: 1px solid #1aac83; */
	/* padding: 0 1em; */
	/* padding: 0 1rem; */
	/* flex: 1; */
	/* display: flex;
	align-items: center;
	justify-content: center; */
	/* column-gap: 0.5rem; */
	/* border-radius: 0.5rem; */
	/* background-color: ${({ theme }) => theme.lightBrown}; */
	/* box-shadow: rgb(0 0 0 / 30%) 2px 2px 2px, rgb(0 0 0 / 10%) -2px -2px 2px; */
	/* background-color: #9a9a9a; */
	/* height: 100%; */
	/* width: 9em; */
	/* height: 2em; */
	/* cursor: pointer; */
	&.custom-btn {
		display: flex;
		align-items: center;
		justify-content: flex-start;
		column-gap: 0.5rem;
		/* width: unset; */
	}
	&.mobile {
		flex: 1;
		justify-content: center;
	}
	.back-song-btn {
		/* font-size: 2.5rem; */
		/* margin-top: 0.5rem; */
		/* font-size: 2.4rem; */
		color: ${({ theme }) => theme.btnIcon};
		font-size: 2.2rem;
	}
	p {
		/* font-family: 'New Tegomin', serif; */
		color: ${({ theme }) => theme.btnColor};
		text-transform: uppercase;
		font-size: 1.6rem;
		font-weight: bolder;
		line-height: 1;
	}
	/* p {
		font-family: 'Roboto';
		color: white;
		text-transform: capitalize;
		font-size: 1.2rem;
	} */
`;

export default BackButton;
