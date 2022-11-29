import React from 'react';
import styled from 'styled-components';
import { useSongsContext } from '../hooks/useSongContext';
import { useViewport } from '../hooks/useViewport';
import StatusStat from './StatusStat';

const SongStatusStats = () => {
	const { songStats } = useSongsContext();
	const { width } = useViewport();
	const breakpoint = 620;
	return (
		<>
			{width < breakpoint ? (
				<StyledSongStatusStatsMobile>
					<div className='status-stats-header'>
						<p className='stats-header'>song status</p>
					</div>
					<div className='stats-container'>
						{songStats &&
							songStats.map((stat, index) => (
								<StatusStat key={index} stat={stat} />
							))}
					</div>
				</StyledSongStatusStatsMobile>
			) : (
				<StyledSongStatusStats>
					<div className='status-stats-header'>
						<p className='stats-header'>song status</p>
					</div>
					<div className='stats-container'>
						{songStats &&
							songStats.map((stat, index) => (
								<StatusStat key={index} stat={stat} />
							))}
					</div>
				</StyledSongStatusStats>
			)}
		</>
	);
};
const StyledSongStatusStatsMobile = styled.div`
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
const StyledSongStatusStats = styled.div`
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
export default SongStatusStats;
