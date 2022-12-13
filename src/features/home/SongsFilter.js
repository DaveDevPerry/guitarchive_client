import React from 'react';
import styled from 'styled-components';

const SongsFilter = ({ homeSongFilterHandler, theme }) => {
	return (
		<StyledSongsFilter className='filter-song-dropdown'>
			<select
				name='songs'
				className='filter-song-select'
				onChange={homeSongFilterHandler}
				id={`${theme === 'dark' ? 'dark' : 'light'}`}
			>
				<option value='songs' className='form-option'>
					All Songs
				</option>
				<option value='favourites' className='form-option'>
					Favourites
				</option>
				<option value='tabs' className='form-option'>
					Tabs
				</option>
				<option value='scores' className='form-option'>
					Scores
				</option>
				<option value='deadlines' className='form-option'>
					Deadlines
				</option>
				<option value='practicing' className='form-option'>
					Practicing
				</option>
				{/* <option value='ready'>Ready</option>
				<option value='recorded'>Recorded</option>
				<option value='backlog'>Backlog</option>
				<option value='archived'>Archived</option> */}
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
		padding: 8px 45px 8px 10px;
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

		color: ${({ theme }) => theme.btnColor};
		border-radius: 5px;
		padding: 8px 45px 8px 10px;
		font-size: 1.6rem;
		font-weight: 900;
		font-style: normal;
		text-shadow: 0px -1px 0px rgba(0, 0, 0, 0.4);
		text-decoration: none;
		background: transparent;
		cursor: pointer;
		position: relative;
		display: inline-block;
		box-shadow: inset 0px 1px 0px rgba(255, 255, 255, 1),
			0px 1px 3px rgba(0, 0, 0, 0.3);
		outline: none;
		/* border: 1px solid #ba6; */
		height: 4.1rem;
		/* line-height: 1; */
		/* border-color: ${({ theme }) => theme.filterBorderColor}; */
		border: 2px solid rgba(16, 16, 16, 0.5);
		background: linear-gradient(
			top,
			rgba(38, 38, 38, 0.8),
			#e6e6e6 25%,
			#ffffff 38%,
			#c5c5c5 63%,
			#f7f7f7 87%,
			rgba(38, 38, 38, 0.8)
		);
		/* background: linear-gradient(
			top,
			rgba(38, 38, 38, 0.8),
			#e6e6e6 25%,
			#ffffff 38%,
			#c5c5c5 63%,
			#f7f7f7 87%,
			rgba(38, 38, 38, 0.8)
		); */
		background: -webkit-linear-gradient(
			top,
			rgba(38, 38, 38, 0.5),
			#e6e6e6 25%,
			#ffffff 38%,
			rgba(0, 0, 0, 0.25) 63%,
			#e6e6e6 87%,
			rgba(38, 38, 38, 0.4)
		);
		/* &:hover {
			border: 1px solid ${({ theme }) => theme.darkBrown};
			background: red;
			outline: none;
			cursor: pointer;
		} */
		&#dark {
			border-color: ${({ theme }) => theme.filterBorderColor};
			background: linear-gradient(
				top,
				rgba(38, 38, 38, 0.8),
				#323232 25%,
				#535353 38%,
				#454545 63%,
				#393939 87%,
				rgba(38, 38, 38, 0.8)
			);
			background: -webkit-linear-gradient(
				top,
				rgba(38, 38, 38, 0.5),
				#393939 25%,
				#666464 38%,
				rgba(0, 0, 0, 0.25) 63%,
				#707070 87%,
				rgba(38, 38, 38, 0.4)
			);
		}
		option {
			font-size: 1.6rem;
			color: ${({ theme }) => theme.primaryColor};
			padding: 1rem;
			border: 1px solid ${({ theme }) => theme.darkBrown};
			/* border: 2px solid rgba(16, 16, 16, 0.5); */
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
		top: 1px;
		bottom: 0;
		text-align: center;
		right: 2px;
		font-weight: bolder;
	}
`;

export default SongsFilter;
