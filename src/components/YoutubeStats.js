import React from 'react';
import styled from 'styled-components';
import { MdOutlineOndemandVideo } from 'react-icons/md';
import { HiVideoCamera } from 'react-icons/hi';
import { ImUsers } from 'react-icons/im';
import { useViewport } from '../hooks/useViewport';
// import Tooltip from './Tooltip';
// import { useSongsContext } from '../hooks/useSongContext';
// import StatusStat from './StatusStat';

const YoutubeStats = ({ youtubeData, theme }) => {
	const { width } = useViewport();
	const breakpoint = 620;
	return (
		<StyledYoutubeStats
			className={`${width < breakpoint ? 'mobile' : ''}`}
			id={`${theme === 'dark' ? 'dark' : 'light'}`}
		>
			<div className='status-stats-header'>
				<p className={`stats-header ${width < breakpoint ? 'mobile' : ''}`}>
					dave perry guitarist
				</p>
			</div>
			<div className='stats-container'>
				<StyledYoutubeStat className={`${width < breakpoint ? 'mobile' : ''}`}>
					<div className={`stat-header ${width < breakpoint ? 'mobile' : ''}`}>
						<p className={`stat-figure ${width < breakpoint ? 'mobile' : ''}`}>
							{youtubeData && youtubeData[0].statistics.viewCount}
						</p>
						<div
							className={`stat-icon-wrapper ${
								width < breakpoint ? 'mobile' : ''
							}`}
						>
							<MdOutlineOndemandVideo className='status-icon' />
						</div>
					</div>
					<p className={`stat-name ${width < breakpoint ? 'mobile' : ''}`}>
						VIEWS
					</p>
				</StyledYoutubeStat>
				<StyledYoutubeStat className={`${width < breakpoint ? 'mobile' : ''}`}>
					<div className={`stat-header ${width < breakpoint ? 'mobile' : ''}`}>
						<p className={`stat-figure ${width < breakpoint ? 'mobile' : ''}`}>
							{youtubeData && youtubeData[0].statistics.subscriberCount}{' '}
						</p>
						<div
							className={`stat-icon-wrapper ${
								width < breakpoint ? 'mobile' : ''
							}`}
						>
							<ImUsers className='status-icon' />
						</div>
					</div>
					<p className={`stat-name ${width < breakpoint ? 'mobile' : ''}`}>
						subscribers
					</p>
				</StyledYoutubeStat>
				<StyledYoutubeStat className={`${width < breakpoint ? 'mobile' : ''}`}>
					<div className={`stat-header ${width < breakpoint ? 'mobile' : ''}`}>
						<p className={`stat-figure ${width < breakpoint ? 'mobile' : ''}`}>
							{youtubeData && youtubeData[0].statistics.videoCount}
						</p>
						<div
							className={`stat-icon-wrapper ${
								width < breakpoint ? 'mobile' : ''
							}`}
						>
							<HiVideoCamera className='status-icon' />
						</div>
					</div>
					<p className={`stat-name ${width < breakpoint ? 'mobile' : ''}`}>
						videos
					</p>
				</StyledYoutubeStat>
			</div>
		</StyledYoutubeStats>
	);
};

const StyledYoutubeStats = styled.div`
	padding: 1rem 2rem 2rem;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	row-gap: 1rem;
	background-repeat: no-repeat;
	background-size: cover;
	transition: all 200ms linear;
	border-radius: 1rem;
	box-shadow: 3px 3px 4px rgb(0 0 0);
	&#dark {
		background-image: url('/images/dark wood texture.webp');
	}
	&#light {
		background-image: url('/images/white wood.jpg');
	}
	&.mobile {
		border-radius: 0.4rem;
		row-gap: 0.5rem;
		padding: 0.5rem 1rem 1rem;
	}
	.stats-header {
		font-size: 2.5rem;
		text-transform: capitalize;
		color: ${({ theme }) => theme.engravedBrown};
		font-weight: bolder;
		text-shadow: 0px 1px 0px rgb(255 255 255 / 30%),
			0px -1px 0px rgb(0 0 0 / 70%);
		&.mobile {
			font-size: 1.8rem;
		}
	}
	.stats-container {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		gap: 1rem;
		border-radius: 4px;
	}
`;

const StyledYoutubeStat = styled.div`
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
	&.mobile {
		border-radius: 0.4rem;
		padding: 1rem;
		row-gap: 0.5rem;
		flex: 1 1 30%;
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
			text-shadow: 0px 1px 0px rgb(255 255 255 / 30%),
				0px -1px 0px rgb(0 0 0 / 70%);
			&.mobile {
				column-gap: 1rem;
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
					/* color: ${({ theme }) => theme.lightBrown}; */
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
export default YoutubeStats;