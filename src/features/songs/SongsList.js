import React from 'react';
import styled from 'styled-components';
import { useSongsContext } from '../../hooks/useSongContext';
// import { FaListAlt } from 'react-icons/fa';
// import SongDetails from './SongDetails';
import SongCard from './SongCard';

const SongsList = () => {
	const { songs } = useSongsContext();
	return (
		<StyledSongsList>
			{/* <div className='song-history-list-header'>
				<p>Song history</p>
				<div>
					<FaListAlt className='nav-icon' />
					{songs && songs.length}
				</div>
			</div> */}
			<div className='songs-list-container'>
				<div className='songs-list'>
					{songs &&
						songs
							.sort((a, b) => {
								return new Date(b.createdAt) - new Date(a.createdAt);
							})
							.map((song, index) => <SongCard key={song._id} song={song} />)}
				</div>
				{/* <div className='songs-list'>
					{songs &&
						songs
							.sort((a, b) => {
								return new Date(b.createdAt) - new Date(a.createdAt);
							})
							.map((song, index) => <SongDetails key={song._id} song={song} />)}
				</div> */}
			</div>
		</StyledSongsList>
	);
};
const StyledSongsList = styled.div`
	overflow-y: auto;
	display: flex;
	flex-direction: column;
	.song-history-list-header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 0 0.5rem;
		border-bottom: 1px solid ${({ theme }) => theme.secondaryColor};
		margin-bottom: 0.5rem;
		p {
			color: ${({ theme }) => theme.secondaryColor};
			font-weight: bold;
			span {
				text-transform: capitalize;
			}
		}
		div {
			display: flex;
			justify-content: space-between;
			align-items: center;
			column-gap: 0.5rem;
			color: ${({ theme }) => theme.txtGrey};
			font-weight: bold;
			.nav-icon {
				color: ${({ theme }) => theme.secondaryColor};
			}
		}
	}
	.songs-list-container {
		/* overflow-y: auto; */
		/* flex: 1; */
		overflow-y: auto;
		/* border: 1px solid; */
		scroll-behavior: smooth;
		.songs-list {
			display: flex;
			flex-direction: column;
			/* flex: 1; */
			row-gap: 0.3rem;
			/* overflow-y: scroll; */
		}
	}
`;

export default SongsList;
