import React from 'react';
import styled from 'styled-components';
import { useSongsContext } from '../../hooks/useSongContext';
import { useViewport } from '../../hooks/useViewport';
import SheetMusicTypeStat from './SheetMusicTypeStat';

const SheetMusicTypeStats = () => {
	const { sheetMusicTypeStats } = useSongsContext();
	const { width } = useViewport();
	const breakpoint = 620;
	return (
		<>
			{width < breakpoint ? (
				<StyledSheetMusicTypeStatsMobile>
					<div className='status-stats-header'>
						<p className='stats-header'>score type</p>
					</div>
					<div className='stats-container'>
						{sheetMusicTypeStats &&
							sheetMusicTypeStats.map((stat, index) => (
								<SheetMusicTypeStat key={index} stat={stat} />
							))}
					</div>
				</StyledSheetMusicTypeStatsMobile>
			) : (
				<StyledSheetMusicTypeStats>
					<div className='status-stats-header'>
						<p className='stats-header'>score type</p>
					</div>
					<div className='stats-container'>
						{sheetMusicTypeStats &&
							sheetMusicTypeStats.map((stat, index) => (
								<SheetMusicTypeStat key={index} stat={stat} />
							))}
					</div>
				</StyledSheetMusicTypeStats>
			)}
		</>
	);
};
const StyledSheetMusicTypeStatsMobile = styled.div`
	padding: 0.5rem 1rem 1rem;
	border-radius: 0.4rem;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	background-image: url('/images/dark wood texture.webp');
	background-repeat: no-repeat;
	background-size: cover;
	row-gap: 0.5rem;
	box-shadow: 3px 3px 4px rgb(0 0 0);
	flex: 1 1 48%;
	.stats-header {
		font-size: 1.8rem;
		text-transform: capitalize;
		color: ${({ theme }) => theme.engravedBrown};
		font-weight: bolder;
		text-shadow: 0px 1px 0px rgb(255 255 255 / 30%),
			0px -1px 0px rgb(0 0 0 / 70%);
		padding-left: 0.5rem;
	}
	.stats-container {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		gap: 1rem;
		border-radius: 4px;
	}
`;
const StyledSheetMusicTypeStats = styled.div`
	padding: 1rem 2rem 2rem;
	border-radius: 1rem;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	background-image: url('/images/dark wood texture.webp');
	background-repeat: no-repeat;
	background-size: cover;
	row-gap: 1rem;
	box-shadow: 3px 3px 4px rgb(0 0 0);
	flex: 1 1 48%;
	.stats-header {
		font-size: 2.5rem;
		text-transform: capitalize;
		color: ${({ theme }) => theme.engravedBrown};
		font-weight: bolder;
		text-shadow: 0px 1px 0px rgb(255 255 255 / 30%),
			0px -1px 0px rgb(0 0 0 / 70%);
	}
	.stats-container {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		gap: 1rem;
		border-radius: 4px;
	}
`;
export default SheetMusicTypeStats;
