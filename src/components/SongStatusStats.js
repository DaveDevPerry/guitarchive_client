import React from 'react';
import styled from 'styled-components';
import { useSongsContext } from '../hooks/useSongContext';
import StatusStat from './StatusStat';

const SongStatusStats = () => {
	const { songStats } = useSongsContext();
	return (
		<StyledSongStatusStats>
			<div className='status-stats-header'>
				<p className='stats-header'>song status</p>
			</div>
			<div className='stats-container'>
				{songStats &&
					songStats.map((stat, index) => (
						<StatusStat key={index} stat={stat} />
					))}
				{/* <div className="stat-wrapper">
          <div className="stat-header">
            <p className="stat-figure">06</p>
            <div className="stat-icon-wrapper">
              <ImYoutube2 className='status-icon yt-icon' />
            </div>
          </div>
          <p className="stat-name">Recorded</p>
        </div> */}
			</div>
		</StyledSongStatusStats>
	);
};
const StyledSongStatusStats = styled.div`
	/* border: 1px solid black; */
	padding: 1rem 2rem 2rem;
	border-radius: 1rem;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	background-image: url('/images/dark wood texture.webp');
	background-repeat: no-repeat;
	background-size: cover;
	row-gap: 1rem;

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
		/* justify-content: space-between;
  align-items: flex-start; */
		flex-wrap: wrap;
		gap: 1rem;
		border-radius: 4px;
		/* border: 1px solid black; */
		/* background-color: rgba(168, 105, 69, 0.57); */
	}
`;
export default SongStatusStats;
