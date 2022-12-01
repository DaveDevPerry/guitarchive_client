import React from 'react';
import styled from 'styled-components';
import { useViewport } from '../../hooks/useViewport';
import SongsFilter from './SongsFilter';
import SongsList from './SongsList';
import Light from '../../assets/images/white wood.jpg';
import Dark from '../../assets/images/dark wood texture.webp';

const SongsListContainer = ({
	filterValue,
	homeSongFilterHandler,
	setFilterValue,
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
					{filterValue}
				</p>
				<SongsFilter
					filterValue={filterValue}
					homeSongFilterHandler={homeSongFilterHandler}
					setFilterValue={setFilterValue}
				/>
			</div>
			<SongsList
				filterValue={filterValue}
				homeSongFilterHandler={homeSongFilterHandler}
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
	/* background-image: url('/images/light wood texture.webp'); */
	/* background-image: url('/images/medium wood texture.png'); */

	/* background-image: url('/images/white wood.jpg'); */
	background-repeat: no-repeat;
	background-size: cover;
	row-gap: 0.5rem;
	box-shadow: 3px 3px 4px rgb(0 0 0);
	flex: 1;
	overflow-y: hidden;
	/* background-image: ${(theme) =>
		theme === 'light' ? `url(${Light})` : `url(${Dark})`}; */
	&#dark {
		background-image: url('/images/dark wood texture.webp');
	}
	&#light {
		background-image: url('/images/white wood.jpg');
	}
	&.mobile {
		border-radius: 0.4rem;
		padding: 1rem;
	}
	.songs-list-header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		/* padding: 0 0.5rem; */
		.list-filter-value {
			/* font-size: 1.8rem; */
			font-size: 2.5rem;
			text-transform: capitalize;
			color: ${({ theme }) => theme.engravedBrown};
			color: black;
			font-weight: bolder;
			line-height: 1;
			padding-left: 0.5rem;
			text-shadow: 0px 1px 0px rgb(255 255 255 / 30%),
				0px -1px 0px rgb(0 0 0 / 70%);
			/* padding-left: 0.5rem; */
			&.mobile {
				font-size: 2.2rem;
			}
		}
	}
`;

export default SongsListContainer;
