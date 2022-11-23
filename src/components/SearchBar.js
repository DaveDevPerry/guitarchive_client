import React from 'react';
import styled from 'styled-components';

const SearchBar = () => {
	return (
		<StyledSearchBar className='search-wrapper'>
			<input type='text' id='search' placeholder='Song title, artist' />
			<input type='button' name='search' value='search' />

			{/* <!-- <a href="#"><img src="./svg/search.svg" alt="search" className="icon"  id="search-btn"></a> --> */}
		</StyledSearchBar>
	);
};
const StyledSearchBar = styled.div`
	/* @include flex(flex-start, center, row); */
	display: flex;
	justify-content: flex-end;
	align-items: center;
	flex: 1;
	// pointer-events: none;
	#search-btn {
		margin: 0 1rem;
	}
	input[type='text'] {
		font-size: 1.4rem;
		font-style: italic;
		color: ${({ theme }) => theme.darkBrown};
		background-color: rgba(36, 14, 0, 0.08);
		padding: 1rem;
		border: 1px solid ${({ theme }) => theme.darkBrown};
		border-radius: 0.4rem 0 0 0.4rem;
		width: 25rem;
		margin-left: 2rem;
		font-weight: lighter;
		&:focus {
			border: 1px solid ${({ theme }) => theme.darkBrown};
			outline: none;
		}
	}
	input[type='button'] {
		background-color: ${({ theme }) => theme.darkBrown};
		font-size: 1.4rem;
		color: ${({ theme }) => theme.brown};
		// border: none;
		border: 1px solid ${({ theme }) => theme.darkBrown};
		border-radius: 0 0.4rem 0.4rem 0;
		// border-radius: 0 0.7rem 0.7rem 0;
		padding: 1rem;
		cursor: pointer;
		font-weight: lighter;
		color: ${({ theme }) => theme.white};
		&#fetch-data-btn {
			color: ${({ theme }) => theme.white};
		}
	}
`;

export default SearchBar;
