import { motion } from 'framer-motion';
import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useStateContext } from '../lib/context';
import { useNavigate } from 'react-router-dom';
import { MdOutlineOndemandVideo } from 'react-icons/md';
import { HiVideoCamera } from 'react-icons/hi';
import { ImUsers } from 'react-icons/im';
import { useViewport } from '../hooks/useViewport';

const YouTube = ({ youtubeData, theme }) => {
	const { dataLoaded } = useStateContext();

	let navigate = useNavigate();
	useEffect(() => {
		if (dataLoaded === false) {
			navigate('/');
		}
	}, [navigate, dataLoaded]);

	const { width } = useViewport();
	const breakpoint = 620;

	return (
		<StyledYouTube
			initial={{ width: 0 }}
			animate={{ width: '100%' }}
			exit={{ x: window.innerWidth }}
			className={`settings-page page ${width < breakpoint ? 'mobile' : ''}`}
		>
			<div
				className='channel-container'
				id={`${theme === 'dark' ? 'dark' : 'light'}`}
			>
				<StyledYouTubeWidget
					id={`${theme === 'dark' ? 'dark' : 'light'}`}
					className={`${width < breakpoint ? 'mobile' : ''}`}
				>
					<div className='channel-header'>
						<div className='avatar-wrapper'>
							<div className='avatar'>
								<img
									src='https://yt3.ggpht.com/80iDb0gtP6eJf7NPmxeQuR68oJwngPERZSQwSV6MQimx7eQUFkGPY6490sYA2OAHII6tNf_Gmw=s88-c-k-c0x00ffffff-no-rj-mo'
									alt='youtube channel logo'
									className='circle'
									layout='fill'
								/>
							</div>
						</div>
						<p className='channel-name'>dave perry guitarist</p>
					</div>

					<div className='stats-container'>
						<div className='stat-row'>
							<div className='stat-icon-wrapper'>
								<MdOutlineOndemandVideo className='stat-icon' />
							</div>
							<div className='stat-wrapper'>
								<p className='stat-figure'>
									{youtubeData && youtubeData[0].statistics.viewCount}
								</p>
								<p className='stat-name'>VIEWS</p>
							</div>
						</div>
						<div className='stat-row'>
							<div className='stat-icon-wrapper'>
								<ImUsers className='stat-icon' />
							</div>
							<div className='stat-wrapper'>
								<p className='stat-figure'>
									{youtubeData && youtubeData[0].statistics.subscriberCount}
								</p>
								<p className='stat-name'>SUBSCRIBERS</p>
							</div>
						</div>
						<div className='stat-row'>
							<div className='stat-icon-wrapper'>
								<HiVideoCamera className='stat-icon' />
							</div>
							<div className='stat-wrapper'>
								<p className='stat-figure'>
									{youtubeData && youtubeData[0].statistics.videoCount}
								</p>
								<p className='stat-name'>VIDEOS</p>
							</div>
						</div>
					</div>
				</StyledYouTubeWidget>
			</div>
		</StyledYouTube>
	);
};
const StyledYouTube = styled(motion.div)`
	display: flex;
	flex-direction: column;
	justify-content: center;
	row-gap: 1rem;
	max-width: 100rem;
	padding: 0.5rem 1rem;
	overflow-y: hidden;
	z-index: 1;
	transition: all 200ms linear;
	margin: 0 auto;
	flex: 1;
	&.mobile {
		padding: 0.5rem 1rem 1rem 1rem;
	}
	.channel-container {
		padding: 1rem 2rem 2rem;
		border-radius: 1rem;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		background-repeat: no-repeat;
		background-size: cover;
		row-gap: 0.5rem;
		box-shadow: 3px 3px 4px rgb(0 0 0);
		flex: 1;
		overflow-y: hidden;
		&#dark {
			background-image: url('/images/dark wood texture.webp');
		}
		&#light {
			background-image: url('/images/white wood.webp');
		}
	}
`;

const StyledYouTubeWidget = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: center;
	row-gap: 4rem;
	margin: 0 1rem;
	.channel-header {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		.avatar-wrapper {
			.avatar {
				border-radius: 50%;
				width: 50%;
				aspect-ratio: 1/1;
				.circle {
					border-radius: 50%;
				}
			}
		}
		.channel-name {
			text-align: center;
			font-size: 2.5rem;
			line-height: 2.5rem;
			word-wrap: wrap;
			text-transform: capitalize;
			font-weight: bolder;
			color: ${({ theme }) => theme.primaryColor};
			text-shadow: 0px 1px 0px rgba(255, 255, 255, 0.3),
				0px -1px 0px rgba(0, 0, 0, 0.7);
		}
	}

	.stats-container {
		display: flex;
		flex-direction: column;
		row-gap: 3rem;
		.stat-row {
			display: flex;
			align-items: center;
			justify-content: flex-start;
			column-gap: 2rem;
			.stat-icon-wrapper {
				display: grid;
				place-content: center;
				.stat-icon {
					font-size: 6rem;
					color: ${({ theme }) => theme.secondaryColor};
				}
			}
			.stat-wrapper {
				display: flex;
				flex-direction: column;
				align-items: flex-start;
				margin: 1rem 0;
				.stat-figure {
					font-size: 3rem;
					line-height: 2.5rem;
					font-weight: bolder;
					color: ${({ theme }) => theme.primaryColor};
					text-shadow: 0px 1px 0px rgba(255, 255, 255, 0.3),
						0px -1px 0px rgba(0, 0, 0, 0.7);
				}
				.stat-name {
					font-size: 1.6rem;
					font-weight: bolder;
					text-shadow: 0px 1px 0px rgba(255, 255, 255, 0.3),
						0px -1px 0px rgba(0, 0, 0, 0.7);
				}
			}
		}
	}
`;
export default YouTube;
