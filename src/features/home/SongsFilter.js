import React from 'react';
import styled from 'styled-components';

const SongsFilter = ({ homeSongFilterHandler }) => {
	return (
		<StyledSongsFilter className='filter-song-dropdown'>
			<select
				name='songs'
				className='filter-song-select'
				onChange={homeSongFilterHandler}
			>
				<option value='songs'>All Songs</option>
				<option value='favourites'>Favourites</option>
				<option value='tabs'>Tabs</option>
				<option value='scores'>Scores</option>
				<option value='deadlines'>Deadlines</option>
				{/* <option value='practicing'>Practicing</option>
				<option value='ready'>Ready</option>
				<option value='recorded'>Recorded</option>
				<option value='backlog'>Backlog</option>
				<option value='archived'>Archived</option>
				<option value='pdf'>File Type .pdf</option>
				<option value='gp'>File Type .gp</option> */}
				{/* <option value='gp'>File Type .gp</option> */}
			</select>
		</StyledSongsFilter>
	);
};
const StyledSongsFilter = styled.div`
	select.filter-song-select {
		cursor: inherit;
		line-height: inherit;
		-webkit-appearance: none;
		-moz-appearance: none;
		appearance: none;
		-moz-border-radius: 0.4rem;
		border-radius: 0.4rem;
		outline: none;
		padding: 5px 45px 5px 10px;
		position: relative;
		width: 100%;
		box-sizing: border-box;
		border: none;
		-webkit-transition: 0.5s;
		transition: 0.5s;
		font-family: 'NewTegomin';
		text-transform: uppercase;
		font-size: 1.6rem;
		font-weight: bolder;
		cursor: pointer;
		background-color: ${({ theme }) => theme.filterBg};
		border: 1px solid ${({ theme }) => theme.filterBorder};
		color: ${({ theme }) => theme.filterColor};
		option {
			font-size: 1.6rem;
			color: ${({ theme }) => theme.white};
			padding: 1rem;
			border: 1px solid ${({ theme }) => theme.darkBrown};
			border-radius: 0 0 1rem 1rem;
			&:focus {
				border: 1px solid ${({ theme }) => theme.darkBrown};
				outline: none;
			}
			&:hover {
				border: 1px solid ${({ theme }) => theme.darkBrown};
				outline: none;
				cursor: pointer;
			}
			&.default-filter {
				font-family: 'NewTegomin';
				text-transform: uppercase;
				cursor: pointer;
				&:hover {
					border: 1px solid ${({ theme }) => theme.darkBrown};
					outline: none;
					cursor: pointer;
				}
			}
		}
	}
	&.filter-song-dropdown {
		position: relative;
	}
	&.filter-song-dropdown:after {
		-moz-border-radius: 0 3px 3px 0;
		border-radius: 0 3px 3px 0;
		color: ${({ theme }) => theme.filterIcon};
		content: '▼';
		display: block;
		font-size: 1.6rem;
		width: 3.5rem;
		height: 3.5rem;
		padding: 7px 0;
		position: absolute;
		pointer-events: none;
		top: -3px;
		bottom: 0;
		text-align: center;
		right: 2px;
	}
`;

export default SongsFilter;
