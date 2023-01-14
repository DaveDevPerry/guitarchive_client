import React from 'react';
import styled from 'styled-components';
import { MdOutlineOndemandVideo } from 'react-icons/md';
import { HiVideoCamera, HiExternalLink } from 'react-icons/hi';
import { BsStarFill } from 'react-icons/bs';
import { ImUsers } from 'react-icons/im';
import { useViewport } from '../hooks/useViewport';
// import { TfiYoutube } from 'react-icons/tfi';
import Counter from './Counter';
import { useYoutubeTargetsContext } from '../hooks/useYoutubeTargetContext';
// import Tooltip from './Tooltip';
// import { useSongsContext } from '../hooks/useSongContext';
// import StatusStat from './StatusStat';

const YoutubeStats = ({ youtubeData, theme }) => {
	const { targetData, youtubeTargetData } = useYoutubeTargetsContext();
	const { width } = useViewport();
	const breakpoint = 620;
	return (
		<StyledYoutubeStats
			className={`${width < breakpoint ? 'mobile' : ''}`}
			id={`${theme === 'dark' ? 'dark' : 'light'}`}
		>
			<div className='youtube-stats-header'>
				<div
					className={`youtube-channel-name ${
						width < breakpoint ? 'mobile' : ''
					}`}
				>
					{/* <TfiYoutube className='youtube-channel-icon' /> */}
					<p>dave perry guitarist</p>
				</div>
				<a
					href='https://www.youtube.com/channel/UC3q51Pr9_zxUGIka8bj6Hvw'
					target='_blank'
					rel='noreferrer'
				>
					{/* <span className='yt-channel-link'>visit channel</span> */}
					<HiExternalLink className='external-link-icon' />
				</a>
			</div>
			<div className='targets-container'>
				{targetData &&
					targetData.map((target, index) => {
						return (
							<div key={index} className='target-wrapper'>
								<BsStarFill
									className={
										target.isComplete === true
											? 'target-icon achieved'
											: 'target-icon'
									}
								/>
							</div>
						);
					})}
			</div>
			<div className='stats-container'>
				<StyledYoutubeStat className={`${width < breakpoint ? 'mobile' : ''}`}>
					<div className={`stat-header ${width < breakpoint ? 'mobile' : ''}`}>
						<p className={`stat-figure ${width < breakpoint ? 'mobile' : ''}`}>
							<Counter
								from={0}
								to={Number(youtubeData && youtubeData[0].statistics.viewCount)}
								time={3}
							/>
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
							<Counter
								from={0}
								to={Number(
									youtubeData && youtubeData[0].statistics.subscriberCount
								)}
								time={3}
							/>
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
							<Counter
								from={0}
								to={Number(youtubeData && youtubeData[0].statistics.videoCount)}
								time={3}
							/>
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
			<div className='stats-container'>
				<StyledYoutubeStat className={`${width < breakpoint ? 'mobile' : ''}`}>
					<div className={`stat-header ${width < breakpoint ? 'mobile' : ''}`}>
						<p className={`stat-figure ${width < breakpoint ? 'mobile' : ''}`}>
							<Counter
								from={0}
								to={Number(youtubeData && youtubeData[0].statistics.viewCount)}
								time={3}
							/>
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
					<div className='stat-trophy-container'>
						{youtubeTargetData &&
							youtubeTargetData[0].data.map((target, index) => {
								return (
									<div key={index} className='target-wrapper'>
										<BsStarFill
											className={
												target.isComplete === true
													? 'target-icon achieved'
													: 'target-icon'
											}
										/>
									</div>
								);
							})}
					</div>
				</StyledYoutubeStat>
				<StyledYoutubeStat className={`${width < breakpoint ? 'mobile' : ''}`}>
					<div className={`stat-header ${width < breakpoint ? 'mobile' : ''}`}>
						<p className={`stat-figure ${width < breakpoint ? 'mobile' : ''}`}>
							<Counter
								from={0}
								to={Number(
									youtubeData && youtubeData[0].statistics.subscriberCount
								)}
								time={3}
							/>
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
					<div className='stat-trophy-container'>
						{youtubeTargetData &&
							youtubeTargetData[1].data.map((target, index) => {
								return (
									<div key={index} className='target-wrapper'>
										<BsStarFill
											className={
												target.isComplete === true
													? 'target-icon achieved'
													: 'target-icon'
											}
										/>
									</div>
								);
							})}
					</div>
				</StyledYoutubeStat>
				<StyledYoutubeStat className={`${width < breakpoint ? 'mobile' : ''}`}>
					<div className={`stat-header ${width < breakpoint ? 'mobile' : ''}`}>
						<p className={`stat-figure ${width < breakpoint ? 'mobile' : ''}`}>
							<Counter
								from={0}
								to={Number(youtubeData && youtubeData[0].statistics.videoCount)}
								time={3}
							/>
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
					<div className='stat-trophy-container'>
						{youtubeTargetData &&
							youtubeTargetData[2].data.map((target, index) => {
								return (
									<div key={index} className='target-wrapper'>
										<BsStarFill
											className={
												target.isComplete === true
													? 'target-icon achieved'
													: 'target-icon'
											}
										/>
									</div>
								);
							})}
					</div>
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
		background-image: url('/images/black wood.webp');
	}
	&#light {
		background-image: url('/images/white wood.webp');
	}
	&.mobile {
		border-radius: 0.4rem;
		row-gap: 0.5rem;
		padding: 0.5rem 0rem 1rem;
		box-shadow: none;
		/* height: 11.4rem; */
		/* display: hidden; */
		&#dark {
			background-image: none;
		}
		&#light {
			background-image: none;
		}
	}
	.youtube-stats-header {
		display: flex;
		justify-content: space-between;
		align-items: flex-end;
		.youtube-channel-name {
			display: flex;
			justify-content: flex-start;
			align-items: flex-end;
			column-gap: 1rem;
			flex: 1;
			.youtube-channel-icon {
				color: ${({ theme }) => theme.primaryColor};
				font-size: 2.2rem;
				margin-bottom: 0.5rem;
			}
			p {
				font-size: 2.5rem;
				text-transform: capitalize;
				color: ${({ theme }) => theme.primaryColor};
				font-weight: bolder;
				text-shadow: 0px 1px 0px rgb(255 255 255 / 30%),
					0px -1px 0px rgb(0 0 0 / 70%);
			}
			&.mobile {
				font-size: 1.8rem;
			}
		}
		a {
			display: grid;
			place-content: center;
			/* span.yt-channel-link {
				text-transform: uppercase;
			} */
			.external-link-icon {
				color: ${({ theme }) => theme.secondaryColor};
				font-size: 3rem;
			}
		}
	}
	.targets-container {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: space-evenly;
		gap: 1rem;
		border-radius: 4px;
		/* border: 2px solid red; */
		.target-wrapper {
			display: grid;
			place-content: center;
			.target-icon {
				font-size: 3rem;
				color: ${({ theme }) => theme.grey};
				&.achieved {
					color: ${({ theme }) => theme.green};
				}
			}
		}
	}
	.stat-trophy-container {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: space-evenly;
		gap: 1rem;
		border-radius: 4px;
		/* border: 2px solid red; */
		.target-wrapper {
			display: grid;
			place-content: center;
			.target-icon {
				font-size: 3rem;
				color: ${({ theme }) => theme.grey};
				&.achieved {
					color: ${({ theme }) => theme.green};
					&:nth-of-type(1) {
						color: ${({ theme }) => theme.bronze};
					}
					&:nth-of-type(2) {
						color: ${({ theme }) => theme.silver};
					}
					&:nth-of-type(3) {
						color: ${({ theme }) => theme.gold};
					}
					&:nth-of-type(4) {
						color: ${({ theme }) => theme.platinum};
					}
				}
			}
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
		color: ${({ theme }) => theme.primaryColor};
		font-weight: bolder;
		text-shadow: 0px 1px 0px rgb(255 255 255 / 30%),
			0px -1px 0px rgb(0 0 0 / 70%);
		&.mobile {
			font-size: 1.2rem;
		}
	}
`;
export default YoutubeStats;
