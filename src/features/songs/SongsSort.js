import React from 'react';
import styled from 'styled-components';

const SongsSort = ({ songStatusHandler }) => {
	return (
		<>
			<StyledSongsSort>
				<select
					name='songs'
					className='filter-song'
					id='select-sort'
					onChange={songStatusHandler}
				>
					<option className='default-filter'>-- Sort Songs --</option>
					<option value='difficulty-lth'>Difficulty (low to high)</option>
					<option value='difficulty-htl'>Difficulty (high to low)</option>
					<option value='remove-sort'>Reset Sort</option>
					{/* <option value='favourite'>Favourites</option>
					<option value='tabs'>Tabs</option>
					<option value='scores'>Scores</option>
					<option value='deadline'>Deadlines</option>
					<option value='practicing'>Practicing</option>
					<option value='ready'>Ready</option>
					<option value='recorded'>Recorded</option>
					<option value='backlog'>Backlog</option>
					<option value='archived'>Archived</option>
					<option value='pdf'>File Type .pdf</option>
					<option value='gp'>File Type .gp</option> */}
					{/* <option value='gp'>File Type .gp</option> */}
				</select>
			</StyledSongsSort>
			{/* <StyledSongsSort className='filter-select'>
			<select name='songs' className='filter-song' onChange={songStatusHandler}>
				<option value='all'>All Songs</option>
				<option value='tabs'>Tabs</option>
				<option value='scores'>Scores</option>
				<option value='favourite'>Favourites</option>
			</select>
		</StyledSongsSort> */}
		</>
	);
};
const StyledSongsSort = styled.div`
	/* text-align: right; */
	/* border: 2px solid blue; */
	height: 100%;
	/* flex: 1; */
	width: 200px;
	select {
		/* font-size: 1.6rem; */
		/* padding: 0.2rem; */
		/* appearance: none; */
		// Additional resets for further consistency
		/* background-color: transparent; */
		background-color: ${({ theme }) => theme.lightBrown};
		border: none;
		/* padding: 0 1em 0 0; */
		margin: 0;
		width: 100%;
		/* font-family: inherit; */
		/* font-size: inherit; */
		cursor: inherit;
		line-height: inherit;
		padding: 0 10px;
		box-shadow: rgb(0 0 0 / 30%) 2px 2px 2px, rgb(0 0 0 / 10%) -2px -2px 2px;
		outline: none;
		border-radius: 0.4rem;
		color: ${({ theme }) => theme.white};
		height: 3.8rem;
		/* &:focus{

				} */
		&.filter-song {
			/* font-family: 'New Tegomin', serif; */
			text-transform: uppercase;
			font-size: 1.6rem;
		}
		option {
			font-size: 1.6rem;
			/* font-style: italic; */
			color: ${({ theme }) => theme.white};
			/* background-color: rgba(36, 14, 0, 0.08); */
			/* padding: 0.2rem; */
			padding: 1rem;

			border: 1px solid ${({ theme }) => theme.darkBrown};
			border-radius: 0 0 1rem 1rem;
			/* width: 25rem; */
			/* margin-left: 2rem; */
			&:focus {
				border: 1px solid ${({ theme }) => theme.darkBrown};
				outline: none;
			}
		}
		&.default-filter {
			/* font-family: 'New Tegomin', serif; */
			text-transform: uppercase;
		}
	}
`;

export default SongsSort;
