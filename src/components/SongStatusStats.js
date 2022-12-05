import React from 'react';
import styled from 'styled-components';
import { useSongsContext } from '../hooks/useSongContext';
import { useViewport } from '../hooks/useViewport';
import StatusPieChart from './StatusPieChart';
import StatusStat from './StatusStat';

const SongStatusStats = ({ theme }) => {
	const { songStats } = useSongsContext();
	const { width } = useViewport();
	const breakpoint = 620;
	return (
		<StyledSongStatusStats
			id={`${theme === 'dark' ? 'dark' : 'light'}`}
			className={`${width < breakpoint ? 'mobile' : ''}`}
		>
			<div className='status-stats-header'>
				<p className='stats-header'>song status</p>
			</div>
			<div className='stats-container'>
				<div className='stats-wrapper chart'>
					<StatusPieChart theme={theme} songStats={songStats} />
				</div>
				<div className='stats-wrapper'>
					{songStats &&
						songStats.map((stat, index) => (
							<StatusStat key={index} stat={stat} />
						))}
				</div>
			</div>
		</StyledSongStatusStats>
	);
};
const StyledSongStatusStats = styled.div`
	padding: 1rem 2rem 2rem;
	border-radius: 1rem;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	background-repeat: no-repeat;
	background-size: cover;
	transition: all 200ms linear;
	row-gap: 1rem;
	box-shadow: 3px 3px 4px rgb(0 0 0);
	&#dark {
		background-image: url('/images/dark wood texture.webp');
	}
	&#light {
		background-image: url('/images/white wood.webp');
	}
	&.mobile {
		border-radius: 0.4rem;
		row-gap: 0.5rem;
		padding: 0.5rem 1rem 1rem;
		.stats-header {
			font-size: 1.8rem;
			padding-left: 0.5rem;
		}
	}
	.stats-header {
		font-size: 2.5rem;
		text-transform: capitalize;
		color: ${({ theme }) => theme.primaryColor};
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
		.stats-wrapper {
			display: flex;
			flex-direction: row;
			flex-wrap: wrap;
			gap: 1rem;
			border-radius: 4px;
			flex: 1 1 48%;
			&.chart {
				justify-content: center;
				/* justify-content: space-between; */
				align-items: center;
				/* height: 12rem; */
				position: relative;
				color: ${({ theme }) => theme.primaryColor};
				/* flex: 1; */
			}
		}
	}
`;
export default SongStatusStats;
