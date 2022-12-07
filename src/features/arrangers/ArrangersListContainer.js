import React from 'react';
import styled from 'styled-components';
import { useViewport } from '../../hooks/useViewport';
import ArrangersList from './ArrangersList';

// import SongsList from './SongsList';

const ArrangersListContainer = ({
	// filterValue,
	// homeSongFilterHandler,
	// setFilterValue,
	arrangers,
	filteredSongs,
	theme,
}) => {
	const { width } = useViewport();
	const breakpoint = 620;
	return (
		<StyledArrangersListContainer
			id={`${theme === 'dark' ? 'dark' : 'light'}`}
			className={`${width < breakpoint ? 'mobile' : ''}`}
		>
			<div className='arrangers-list-header'>
				<p
					className={`list-filter-value ${width < breakpoint ? 'mobile' : ''}`}
				>
					{/* {filterValue === 'arrangers' ? `all ${filterValue}` : filterValue} */}
					{/* {arrangers[0].name} */}
					all arrangers
				</p>
				{/* <AddSongButton /> */}
				{/* <SongsFilter
					filterValue={filterValue}
					homeSongFilterHandler={homeSongFilterHandler}
					setFilterValue={setFilterValue}
				/> */}
			</div>
			<ArrangersList arrangers={arrangers} />
			{/* <SongsList
				// filterValue={filterValue}
				// homeSongFilterHandler={homeSongFilterHandler}
				arrangers={arrangers}
			/> */}
		</StyledArrangersListContainer>
	);
};
const StyledArrangersListContainer = styled.div`
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
		background-image: url('/images/dark wood texture.webp');
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
	.arrangers-list-header {
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

export default ArrangersListContainer;
