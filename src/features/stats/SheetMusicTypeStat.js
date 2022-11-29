import React from 'react';
import styled from 'styled-components';
import Tooltip from '../../components/Tooltip';
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
// import { ImUsers } from 'react-icons/im';
import { IoMusicalNotes } from 'react-icons/io5';
import { TbNumbers } from 'react-icons/tb';

const SheetMusicTypeStat = ({ stat }) => {
	const { width } = useViewport();
	const breakpoint = 620;
	return (
		<>
			{width < breakpoint ? (
				<StyledSheetMusicTypeStatMobile>
					<div className='stat-header'>
						<p className='stat-figure'>
							{stat.statCount < 10 ? `0${stat.statCount}` : stat.statCount}
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
				</StyledSheetMusicTypeStatMobile>
			) : (
				<StyledSheetMusicTypeStat>
					<div className='stat-header'>
						<p className='stat-figure'>
							{stat.statCount < 10 ? `0${stat.statCount}` : stat.statCount}
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
			)}
		</>
	);
};
const StyledSheetMusicTypeStatMobile = styled.div`
	/* border: 1px solid green; */
	border-radius: 0.4rem;
	padding: 1rem;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	row-gap: 0.5rem;
	/* flex: 1; */
	flex: 1 1 48%;
	background-color: #120700e9;
	/* background-color: #170901c8; */
	/* background-color: ${({ theme }) => theme.engravedBrown}; */
	/* background-color: rgba(168, 105, 69, 0.57); */
	box-shadow: 3px 3px 4px rgb(0 0 0);
	.stat-header {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: flex-start;
		column-gap: 1rem;
		.stat-figure {
			font-size: 2.2rem;
			font-weight: bolder;
			line-height: 0.8;
			color: ${({ theme }) => theme.lightBrown};
		}
		.stat-icon-wrapper {
			/* border: 1px solid red; */
			height: 100%;
			.status-icon {
				font-size: 1.6rem;
				/* color: ${({ theme }) => theme.lightBrown}; */
				&.yt-icon {
					font-size: 2rem;
				}
			}
		}
	}
	.stat-name {
		text-transform: uppercase;
		font-size: 1.2rem;
		color: ${({ theme }) => theme.white};
		/* color: ${({ theme }) => theme.txtGrey}; */
	}
`;
const StyledSheetMusicTypeStat = styled.div`
	/* border: 1px solid green; */
	border-radius: 1rem;
	padding: 1rem 2rem;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	row-gap: 1rem;
	flex: 1;
	/* flex: 1 1 48%; */
	background-color: #120700e9;
	/* background-color: #170901c8; */
	/* background-color: ${({ theme }) => theme.engravedBrown}; */
	/* background-color: rgba(168, 105, 69, 0.57); */
	box-shadow: 3px 3px 4px rgb(0 0 0);
	.stat-header {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: flex-start;
		column-gap: 2rem;
		.stat-figure {
			font-size: 4rem;
			font-weight: bolder;
			line-height: 0.8;
			color: ${({ theme }) => theme.lightBrown};
		}
		.stat-icon-wrapper {
			/* border: 1px solid red; */
			height: 100%;
			.status-icon {
				font-size: 2.5rem;
				/* color: ${({ theme }) => theme.lightBrown}; */
				&.yt-icon {
					font-size: 3rem;
				}
			}
		}
	}
	.stat-name {
		text-transform: uppercase;
		font-size: 1.4rem;
		color: ${({ theme }) => theme.white};
		/* color: ${({ theme }) => theme.txtGrey}; */
	}
`;

export default SheetMusicTypeStat;
