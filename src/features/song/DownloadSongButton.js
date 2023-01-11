import React from 'react';
import styled from 'styled-components';
// import { CgPlayListAdd } from 'react-icons/cg';
import { useViewport } from '../../hooks/useViewport';
import { IoMdDownload } from 'react-icons/io';

const DownloadSongButton = ({ song }) => {
	const { width } = useViewport();
	const breakpoint = 620;
	return (
		<StyledDownloadSongButton
			className={`btn-6 custom-btn ${width < breakpoint ? 'mobile' : ''}`}
			onClick={() => {}}
		>
			<a href={song.selectedFile} download>
				<IoMdDownload className='download-song-btn' />
				{width < breakpoint ? <p>music</p> : <p>sheet music</p>}
			</a>
		</StyledDownloadSongButton>
	);
};
const StyledDownloadSongButton = styled.button`
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
		a {
			/* text-decoration: none; */
			/* border: 2px solid green; */
			display: flex;
			align-items: center;
			justify-content: flex-start;
			column-gap: 0.5rem;
			flex: 1;
			.download-song-btn {
				/* font-size: 2.5rem; */
				/* margin-top: 0.5rem; */
				font-size: 2.2rem;
				color: ${({ theme }) => theme.btnIcon};
			}
			p {
				font-family: 'New Tegomin';
				color: ${({ theme }) => theme.btnColor};
				text-transform: uppercase;
				font-size: 1.6rem;
				font-weight: bolder;
				line-height: 1;
			}
		}
		&.mobile {
			flex: 1;
			a {
				/* text-decoration: none; */
				/* border: 2px solid green; */
				/* display: flex;
			align-items: center; */
				justify-content: center;
				/* column-gap: 0.5rem; */
			}
		}
	}

	/* p {
		font-family: 'Roboto';
		color: white;
		text-transform: capitalize;
		font-size: 1.2rem;
	} */
`;

export default DownloadSongButton;
