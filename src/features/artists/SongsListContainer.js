import React from 'react';
import styled from 'styled-components';
import BackButton from '../../components/BackButton';
import { useViewport } from '../../hooks/useViewport';

import SongsList from './SongsList';

const SongsListContainer = ({
	// filterValue,
	// homeSongFilterHandler,
	// setFilterValue,
	songs,
	filteredSongs,
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
				<p
					className={`list-filter-value ${width < breakpoint ? 'mobile' : ''}`}
				>
					{/* {filterValue === 'songs' ? `all ${filterValue}` : filterValue} */}
					{songs[0].artist.name}
				</p>
				<BackButton url='artists' />
				{/* <AddSongButton /> */}
				{/* <SongsFilter
					filterValue={filterValue}
					homeSongFilterHandler={homeSongFilterHandler}
					setFilterValue={setFilterValue}
				/> */}
			</div>
			<SongsList
				// filterValue={filterValue}
				// homeSongFilterHandler={homeSongFilterHandler}
				songs={songs}
			/>
		</StyledSongsListContainer>
	);
};
const StyledSongsListContainer = styled.div`
	padding: 1rem 2rem 2rem;
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
		background-image: url('/images/black wood.webp');
	}
	&#light {
		background-image: url('/images/white wood.webp');
	}
	&.mobile {
		border-radius: 0;
		box-shadow: none;
		/* border-radius: 0.4rem; */
		padding: 1rem 1rem 0rem;
		&#dark {
			background-image: none;
		}
		&#light {
			background-image: none;
		}
	}
	.songs-list-header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		column-gap: 1rem;
		.list-filter-value {
			font-size: 2.5rem;
			text-transform: capitalize;
			color: ${({ theme }) => theme.primaryColor};
			color: black;
			font-weight: bolder;
			line-height: 1;
			padding-left: 0.5rem;
			text-shadow: 0px 1px 0px rgb(255 255 255 / 30%),
				0px -1px 0px rgb(0 0 0 / 70%);
			flex: 1;
			&.mobile {
				font-size: 2.2rem;
			}
		}
	}
`;

export default SongsListContainer;
