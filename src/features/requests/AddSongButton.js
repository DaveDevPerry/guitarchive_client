import React from 'react';
import styled from 'styled-components';
import { useStateContext } from '../../lib/context';
import { CgPlayListAdd } from 'react-icons/cg';
import { useViewport } from '../../hooks/useViewport';

const AddSongButton = () => {
	const { isRequestFormOpen, setIsRequestFormOpen } = useStateContext();
	const { width } = useViewport();
	const breakpoint = 620;
	return (
		<StyledAddSongButton
			className='btn-6 custom-btn'
			onClick={() => {
				isRequestFormOpen === true
					? setIsRequestFormOpen(false)
					: setIsRequestFormOpen(true);
			}}
		>
			<CgPlayListAdd className='add-song-btn' />
			{width > breakpoint && <p>add song</p>}
		</StyledAddSongButton>
	);
};
const StyledAddSongButton = styled.button`
	&.custom-btn {
		display: flex;
		align-items: center;
		justify-content: flex-start;
		column-gap: 0.5rem;
	}
	.add-song-btn {
		margin-top: 0.5rem;
		color: ${({ theme }) => theme.btnIcon};
		font-weight: bolder;
	}
	p {
		/* font-family: 'New Tegomin', serif; */
		color: ${({ theme }) => theme.btnColor};
		text-transform: uppercase;
		font-size: 1.6rem;
		font-weight: bolder;
		line-height: 1;
	}
`;

export default AddSongButton;
