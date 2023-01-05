import React from 'react';
import styled from 'styled-components';
// import Tooltip from '../../components/Tooltip';
// import {
// 	// FaCloudDownloadAlt,
// 	FaRegStar,
// 	FaStar,
// 	FaRegHeart,
// 	FaHeart,
// } from 'react-icons/fa';
// import { ImYoutube2 } from 'react-icons/im';
// import { GiMetronome } from 'react-icons/gi';
// import { CgCamera } from 'react-icons/cg';
// import { BiArchiveOut, BiArchive } from 'react-icons/bi';
import { useViewport } from '../../hooks/useViewport';
import Counter from '../../components/Counter';

const ArrangersStat = ({ stat, theme }) => {
	const { width } = useViewport();
	const breakpoint = 620;
	return (
		<StyledStatusStat
			id={`${theme === 'dark' ? 'dark' : 'light'}`}
			className={`${width < breakpoint ? 'mobile' : ''}`}
		>
			<div
				className={`stat-header ${width < breakpoint ? 'mobile' : ''}`}
				// className='stat-header'
			>
				<p
					className={`stat-figure ${width < breakpoint ? 'mobile' : ''}`}
					// className='stat-figure'
				>
					{stat.statCount < 10 && 0}
					<Counter from={0} to={stat && stat.statCount} time={3} />
					{/* {stat.statCount < 10 ? `0${stat.statCount}` : stat.statCount} */}
				</p>
				<div className='stat-title-wrapper'>
					{/* {stat.statName === 'Recorded' && (
						<Tooltip content='Recorded' direction='left'>
							<ImYoutube2 className='card-icon status-icon yt-icon' />
						</Tooltip>
					)}
					{stat.statName === 'Practicing' && (
						<Tooltip content='Practicing' direction='left'>
							<GiMetronome className='card-icon status-icon' />
						</Tooltip>
					)}
					{stat.statName === 'Ready' && (
						<Tooltip content='Ready' direction='left'>
							<CgCamera className='card-icon status-icon' />
						</Tooltip>
					)}
					{stat.statName === 'Backlog' && (
						<Tooltip content='Backlog' direction='left'>
							<BiArchiveOut className='card-icon status-icon' />
						</Tooltip>
					)}
					{stat.statName === 'Archived' && (
						<Tooltip content='Archived' direction='left'>
							<BiArchive className='card-icon status-icon' />
						</Tooltip>
					)} */}
					<p
						className={`stat-title ${width < breakpoint ? 'mobile' : ''}`}
						// className='stat-title'
					>
						{stat.statTitle}
					</p>
				</div>
			</div>
			<div className='stat-names-wrapper'>
				<ol className='stat-names-list'>
					{stat &&
						stat.statName.map((artist, index) => (
							<li key={index} className='stat-name-item'>
								{artist.name}
							</li>
						))}
				</ol>
			</div>
			{/* <p className='stat-name'>{stat.statTitle}</p> */}
		</StyledStatusStat>
	);
};
const StyledStatusStat = styled.div`
	border-radius: 1rem;
	padding: 1rem 2rem;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	row-gap: 1rem;
	flex: 1;
	border: 1px solid ${({ theme }) => theme.primaryColor};
	border-radius: 0.4rem 0.4rem 1rem 1rem;
	/* border-radius: 0.4rem 0.4rem 1rem 1rem; */
	box-shadow: inset 3px 3px 4px rgba(0, 0, 0, 0005),
		inset -2px -2px 2px rgba(0, 0, 0, 08);
	background-color: rgba(0, 0, 0, 0.1);

	&.mobile {
		border-radius: 0.4rem;
		padding: 1rem 2rem;
		row-gap: 0.5rem;
		flex: 1 1 48%;
	}
	.stat-header {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: flex-start;
		column-gap: 3rem;
		&.mobile {
			column-gap: 10rem;
		}
		.stat-figure {
			font-size: 4rem;
			font-weight: bolder;
			line-height: 0.8;
			color: ${({ theme }) => theme.secondaryColor};
			text-shadow: 0px 1px 0px rgb(255 255 255 / 30%),
				0px -1px 0px rgb(0 0 0 / 70%);
			&.mobile {
				font-size: 3.2rem;
			}
		}
		.stat-title-wrapper {
			height: 100%;
			.stat-title {
				text-transform: uppercase;
				font-size: 1.8rem;
				text-align: right;
				color: ${({ theme }) => theme.white};
				font-weight: bolder;
				text-shadow: 0px 1px 0px rgb(255 255 255 / 30%),
					0px -1px 0px rgb(0 0 0 / 70%);
				line-height: 1;
				&.mobile {
					font-size: 1.5rem;
				}
			}
			/* &.mobile {
				padding: 1rem 2rem;
			} */
			/* .status-icon {
				font-size: 2.5rem;
				&.yt-icon {
					font-size: 3rem;
				}
			} */
			/* &.mobile {
				.status-icon {
					font-size: 1.6rem;
					&.yt-icon {
						font-size: 2rem;
					}
				}
			} */
		}
	}
	.stat-names-wrapper {
		ol.stat-names-list {
			/* list-style: initial; */
			.stat-name-item {
				font-weight: bolder;
				text-shadow: 0px 1px 0px rgb(255 255 255 / 30%),
					0px -1px 0px rgb(0 0 0 / 70%);
				text-transform: capitalize;
				margin-left: 2rem;
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

export default ArrangersStat;
