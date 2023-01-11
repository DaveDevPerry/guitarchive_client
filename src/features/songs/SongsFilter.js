import React from 'react';
import styled from 'styled-components';

const SongsFilter = ({ songStatusHandler }) => {
	return (
		<StyledSongsFilter>
			<select
				name='songs'
				className='filter-song'
				id='select'
				onChange={songStatusHandler}
			>
				<option className='default-filter'>-- Filter Songs --</option>
				<option value='all'>All Songs</option>
				<option value='favourite'>Favourites</option>
				<option value='tabs'>Tabs</option>
				<option value='scores'>Scores</option>
				<option value='deadline'>Deadlines</option>
				<option value='practicing'>Practicing</option>
				<option value='ready'>Ready</option>
				<option value='recorded'>Recorded</option>
				<option value='backlog'>Backlog</option>
				<option value='archived'>Archived</option>
				<option value='pdf'>File Type .pdf</option>
				<option value='gp'>File Type .gp</option>
				{/* <option value='gp'>File Type .gp</option> */}
			</select>
		</StyledSongsFilter>
	);
};
const StyledSongsFilter = styled.div`
	height: 100%;
	width: 200px;
	select {
		background-color: ${({ theme }) => theme.lightBrown};
		border: none;
		margin: 0;
		width: 100%;
		cursor: inherit;
		line-height: inherit;
		padding: 0 10px;
		box-shadow: rgb(0 0 0 / 30%) 2px 2px 2px, rgb(0 0 0 / 10%) -2px -2px 2px;
		outline: none;
		border-radius: 0.4rem;
		color: ${({ theme }) => theme.white};
		height: 3.8rem;
		cursor: pointer;
		/* &:focus{

				} */
		&.filter-song {
			font-family: 'New Tegomin';
			text-transform: uppercase;
			font-size: 1.6rem;

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
					font-family: 'New Tegomin';
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
	}
`;

export default SongsFilter;
