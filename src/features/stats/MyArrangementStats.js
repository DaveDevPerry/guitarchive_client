import React from 'react';
import styled from 'styled-components';
import { useSongsContext } from '../../hooks/useSongContext';
import { useViewport } from '../../hooks/useViewport';
import MyArrangementStat from './MyArrangementStat';

const MyArrangementStats = ({ theme }) => {
	const { myArrangementStats } = useSongsContext();
	const { width } = useViewport();
	const breakpoint = 620;
	return (
		<StyledMyArrangementStats
			id={`${theme === 'dark' ? 'dark' : 'light'}`}
			className={`${width < breakpoint ? 'mobile' : ''}`}
		>
			<div className='status-stats-header'>
				<p className='stats-header'>my arrangements</p>
			</div>
			<div className='stats-container'>
				{myArrangementStats &&
					myArrangementStats.map((stat, index) => (
						<MyArrangementStat key={index} stat={stat} />
					))}
			</div>
		</StyledMyArrangementStats>
	);
};

const StyledMyArrangementStats = styled.div`
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
	flex: 1 1 48%;
	&#dark {
		background-image: url('/images/black wood.webp');
	}
	&#light {
		background-image: url('/images/white wood.webp');
	}
	&.mobile {
		border-radius: 0.4rem;
		row-gap: 0.5rem;
		flex: 1 1 50%;
		padding: 0.5rem 0rem 1rem;
		box-shadow: none;
		&#dark {
			background-image: none;
		}
		&#light {
			background-image: none;
		}
		.stats-header {
			font-size: 1.8rem;
			/* padding-left: 0.5rem; */
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
		/* flex: 1 1 48%; */
	}
`;
export default MyArrangementStats;
