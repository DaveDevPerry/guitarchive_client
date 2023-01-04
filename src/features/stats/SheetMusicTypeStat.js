import React from 'react';
import styled from 'styled-components';
import Tooltip from '../../components/Tooltip';
import { useViewport } from '../../hooks/useViewport';
import { IoMusicalNotes } from 'react-icons/io5';
import { TbNumbers } from 'react-icons/tb';
import Counter from '../../components/Counter';

const SheetMusicTypeStat = ({ stat }) => {
	const { width } = useViewport();
	const breakpoint = 620;
	return (
		<StyledSheetMusicTypeStat
			className={`${width < breakpoint ? 'mobile' : ''}`}
		>
			<div className='stat-header'>
				<p className='stat-figure'>
					{stat.statCount < 10 && 0}
					<Counter from={0} to={stat && stat.statCount} time={3} />
					{/* {stat.statCount < 10 ? `0${stat.statCount}` : stat.statCount} */}
				</p>
				<div className='stat-icon-wrapper'>
					{stat.statName === 'tablature' && (
						<Tooltip content='tablature' direction='left'>
							<TbNumbers className='status-icon' />
						</Tooltip>
					)}
					{stat.statName === 'music' && (
						<Tooltip content='music' direction='left'>
							<IoMusicalNotes className='status-icon' />
						</Tooltip>
					)}
				</div>
			</div>
			<p className='stat-name'>{stat.statName}</p>
		</StyledSheetMusicTypeStat>
	);
};
const StyledSheetMusicTypeStat = styled.div`
	border-radius: 1rem;
	padding: 1rem 2rem;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	row-gap: 1rem;
	flex: 1;
	border: 1px solid ${({ theme }) => theme.primaryColor};
	border-radius: 0.4rem 0.4rem 1rem 1rem;
	box-shadow: inset 3px 3px 4px rgba(0, 0, 0, 0005),
		inset -2px -2px 2px rgba(0, 0, 0, 08);
	background-color: rgba(0, 0, 0, 0.1);
	flex: 1 1 44%;
	&.mobile {
		border-radius: 0.4rem;
		padding: 1rem;
		row-gap: 0.5rem;
		flex: 1 1 48%;
	}
	.stat-header {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: flex-start;
		column-gap: 2rem;
		&.mobile {
			column-gap: 1rem;
		}
		.stat-figure {
			font-size: 4rem;
			font-weight: bolder;
			line-height: 0.8;
			color: ${({ theme }) => theme.secondaryColor};
			&.mobile {
				font-size: 2.2rem;
			}
		}
		.stat-icon-wrapper {
			height: 100%;
			.status-icon {
				font-size: 2.5rem;
				&.yt-icon {
					font-size: 3rem;
				}
			}
			&.mobile {
				.status-icon {
					font-size: 1.6rem;
					&.yt-icon {
						font-size: 2rem;
					}
				}
			}
		}
	}
	.stat-name {
		text-transform: uppercase;
		font-size: 1.4rem;
		color: ${({ theme }) => theme.white};
		font-weight: bolder;
		text-shadow: 0px 1px 0px rgb(255 255 255 / 30%),
			0px -1px 0px rgb(0 0 0 / 70%);
		&.mobile {
			font-size: 1.2rem;
		}
	}
`;

export default SheetMusicTypeStat;
