import React from 'react';
import styled from 'styled-components';
import { useViewport } from '../../hooks/useViewport';
import SongsFilter from './SongsFilter';
// import SongsList from './SongsList';
// import Light from '../../assets/images/white wood.webp';
// import Dark from '../../assets/images/dark wood texture.webp';
import SongsWidget from './SongsWidget';
import SearchBar from './SearchBar';
import SongsSort from './SongsSort';
import AddSongButton from '../song/AddSongButton';

const SongsListContainer = ({
	filterValue,
	homeSongFilterHandler,
	setFilterValue,
	songStatusHandler,
	filteredSongs,
	songs,
	theme,
}) => {
	const { width } = useViewport();
	const breakpoint = 620;
	return (
		<StyledSongsListContainer
			id={`${theme === 'dark' ? 'dark' : 'light'}`}
			className={`${width < breakpoint ? 'mobile' : ''}`}
		>
			<div className='songs-list-header'>
				<AddSongButton />
				<SongsFilter songStatusHandler={songStatusHandler} />
				<SongsSort songStatusHandler={songStatusHandler} />
				<SearchBar songStatusHandler={songStatusHandler} />
			</div>
			<SongsWidget songs={songs} filteredSongs={filteredSongs} />
		</StyledSongsListContainer>
	);
};
const StyledSongsListContainer = styled.div`
	padding: 2rem;
	border-radius: 1rem;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	background-repeat: no-repeat;
	background-size: cover;
	row-gap: 1rem;
	box-shadow: 3px 3px 4px rgb(0 0 0);
	flex: 1;
	overflow-y: hidden;
	&#dark {
		background-image: url('/images/dark wood texture.webp');
	}
	&#light {
		background-image: url('/images/white wood.webp');
	}
	&.mobile {
		border-radius: 0.4rem;
		padding: 1rem;
		row-gap: 0.5rem;
	}
	.songs-list-header {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
`;

export default SongsListContainer;
