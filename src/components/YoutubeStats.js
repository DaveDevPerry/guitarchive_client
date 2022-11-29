import React from 'react';
import styled from 'styled-components';
import { MdOutlineOndemandVideo } from 'react-icons/md';
import { HiVideoCamera } from 'react-icons/hi';
import { ImUsers } from 'react-icons/im';
import { useViewport } from '../hooks/useViewport';
// import Tooltip from './Tooltip';
// import { useSongsContext } from '../hooks/useSongContext';
// import StatusStat from './StatusStat';

const YoutubeStats = ({ youtubeData }) => {
	const { width } = useViewport();
	const breakpoint = 620;
	return (
		<>
			{width < breakpoint ? (
				<StyledYoutubeStatsMobile>
					<div className='status-stats-header'>
						<p className='stats-header'>dave perry guitarist</p>
					</div>
					<div className='stats-container'>
						<StyledYoutubeStatMobile>
							<div className='stat-header'>
								<p className='stat-figure'>
									{youtubeData && youtubeData[0].statistics.viewCount}
								</p>
								<div className='stat-icon-wrapper'>
									<MdOutlineOndemandVideo className='status-icon' />
								</div>
							</div>
							<p className='stat-name'>VIEWS</p>
						</StyledYoutubeStatMobile>
						<StyledYoutubeStatMobile>
							<div className='stat-header'>
								<p className='stat-figure'>
									{youtubeData && youtubeData[0].statistics.subscriberCount}{' '}
								</p>
								<div className='stat-icon-wrapper'>
									<ImUsers className='status-icon' />
								</div>
							</div>
							<p className='stat-name'>subscribers</p>
						</StyledYoutubeStatMobile>
						<StyledYoutubeStatMobile>
							<div className='stat-header'>
								<p className='stat-figure'>
									{youtubeData && youtubeData[0].statistics.videoCount}
								</p>
								<div className='stat-icon-wrapper'>
									<HiVideoCamera className='status-icon' />
								</div>
							</div>
							<p className='stat-name'>videos</p>
						</StyledYoutubeStatMobile>
					</div>
				</StyledYoutubeStatsMobile>
			) : (
				<StyledYoutubeStats>
					<div className='status-stats-header'>
						<p className='stats-header'>dave perry guitarist</p>
					</div>
					<div className='stats-container'>
						<StyledYoutubeStat>
							<div className='stat-header'>
								<p className='stat-figure'>
									{youtubeData && youtubeData[0].statistics.viewCount}
								</p>
								<div className='stat-icon-wrapper'>
									<MdOutlineOndemandVideo className='status-icon' />
								</div>
							</div>
							<p className='stat-name'>VIEWS</p>
						</StyledYoutubeStat>
						<StyledYoutubeStat>
							<div className='stat-header'>
								<p className='stat-figure'>
									{youtubeData && youtubeData[0].statistics.subscriberCount}{' '}
								</p>
								<div className='stat-icon-wrapper'>
									<ImUsers className='status-icon' />
								</div>
							</div>
							<p className='stat-name'>subscribers</p>
						</StyledYoutubeStat>
						<StyledYoutubeStat>
							<div className='stat-header'>
								<p className='stat-figure'>
									{youtubeData && youtubeData[0].statistics.videoCount}
								</p>
								<div className='stat-icon-wrapper'>
									<HiVideoCamera className='status-icon' />
								</div>
							</div>
							<p className='stat-name'>videos</p>
						</StyledYoutubeStat>
					</div>
				</StyledYoutubeStats>
			)}
		</>
	);
};
const StyledYoutubeStatsMobile = styled.div`
	/* border: 1px solid black; */
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
		/* justify-content: space-between;
  align-items: flex-start; */
		flex-wrap: wrap;
		gap: 1rem;
		border-radius: 4px;
		/* border: 1px solid black; */
		/* background-color: rgba(168, 105, 69, 0.57); */
	}
`;

const StyledYoutubeStatMobile = styled.div`
	border-radius: 0.4rem;
	padding: 1rem;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	row-gap: 0.5rem;
	/* flex: 1; */
	flex: 1 1 30%;
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
const StyledYoutubeStats = styled.div`
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
		/* justify-content: space-between;
  align-items: flex-start; */
		flex-wrap: wrap;
		gap: 1rem;
		border-radius: 4px;
		/* border: 1px solid black; */
		/* background-color: rgba(168, 105, 69, 0.57); */
	}
`;

const StyledYoutubeStat = styled.div`
	/* border: 1px solid green; */
	border-radius: 1rem;
	padding: 1rem 2rem;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	row-gap: 1rem;
	flex: 1;
	/* flex: 1 1 30%; */
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
export default YoutubeStats;
