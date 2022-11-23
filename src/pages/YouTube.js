import { motion } from 'framer-motion';
import React, { useEffect } from 'react';
import styled from 'styled-components';
// import { useAuthContext } from '../hooks/useAuthContext';
import { useStateContext } from '../lib/context';
import { useNavigate } from 'react-router-dom';
import { MdOutlineOndemandVideo } from 'react-icons/md';
import { HiVideoCamera } from 'react-icons/hi';
import { ImUsers } from 'react-icons/im';
// import { songsReducer } from '../context/SongContext';
// import Song from '../features/songs/Song';
// import { useSongsContext } from '../hooks/useSongContext';
// import moment from 'moment';
// import { differenceInCalendarDays, parseISO } from 'date-fns';

const YouTube = ({ youtubeData }) => {
	const { dataLoaded } = useStateContext();
	// const { users, user } = useAuthContext();
	// const [currentId, setCurrentId] = useState(null);
	// const { songs } = useSongsContext();

	// const currentDay = new Date(new Date().setHours(0, 0, 0, 0));
	// console.log(currentId);

	let navigate = useNavigate();
	useEffect(() => {
		if (dataLoaded === false) {
			navigate('/');
		}
	}, [navigate, dataLoaded]);

	return (
		<StyledYouTube
			initial={{ width: 0 }}
			animate={{ width: '100%' }}
			exit={{ x: window.innerWidth }}
		>
			{/* <StyledDayHeaderWidget>
				<p className='header-time'>
					<strong>
						{new Date(currentDay).toLocaleDateString('en-us', {
							weekday: 'long',
							year: 'numeric',
							month: 'long',
							day: 'numeric',
						})}
					</strong>
				</p>
			</StyledDayHeaderWidget> */}
			<StyledYouTubeWidget>
				{/* {youtubeData &&  */}
				<div className='channel-header'>
					<div className='avatar-wrapper'>
						{/* <a href='https://www.youtube.com/user/Hippydipster' target='_blank'> */}
						<div className='avatar'>
							<img
								src='https://yt3.ggpht.com/80iDb0gtP6eJf7NPmxeQuR68oJwngPERZSQwSV6MQimx7eQUFkGPY6490sYA2OAHII6tNf_Gmw=s88-c-k-c0x00ffffff-no-rj-mo'
								alt='youtube channel logo'
								className='circle'
								layout='fill'
							/>
							{/* <Image
						src='https://yt3.ggpht.com/80iDb0gtP6eJf7NPmxeQuR68oJwngPERZSQwSV6MQimx7eQUFkGPY6490sYA2OAHII6tNf_Gmw=s88-c-k-c0x00ffffff-no-rj'
						alt='youtube channel logo'
						className='circle'
						layout='fill'
					/> */}
							{/* // eslint-disable-next-line @next/next/no-img-element */}
							{/* <img
						src='https://yt3.ggpht.com/80iDb0gtP6eJf7NPmxeQuR68oJwngPERZSQwSV6MQimx7eQUFkGPY6490sYA2OAHII6tNf_Gmw=s88-c-k-c0x00ffffff-no-rj'
						alt='youtube channel logo'
						className='circle'
					/> */}
							{/* removed avatar - change to image  */}
						</div>
						{/* </a> */}
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
								{/* {youtubeData && youtubeData.items[0].statistics.viewCount} */}
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
								{/* {youtubeData && youtubeData.items[0].statistics.subscriberCount} */}
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
								{/* {youtubeData && youtubeData.items[0].statistics.videoCount} */}
								{youtubeData && youtubeData[0].statistics.videoCount}
							</p>
							<p className='stat-name'>VIDEOS</p>
						</div>
					</div>
				</div>

				{/* } */}
			</StyledYouTubeWidget>
		</StyledYouTube>
	);
};
const StyledYouTube = styled(motion.div)`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	row-gap: 1rem;
	max-width: 80rem;
	padding: 0.5rem 1rem;
	overflow-y: auto;
	z-index: 1;
	transition: all 200ms linear;
	margin: 0 auto;
	flex: 1;
	overflow: auto;
`;

// const StyledDayHeaderWidget = styled.div`
// 	display: flex;
// 	flex-direction: column;
// 	align-items: center;
// 	justify-content: center;
// 	.header-time {
// 		display: flex;
// 		flex-direction: column;
// 		align-items: center;
// 		justify-content: center;
// 		font-size: 1.6rem;
// 		font-size: 2rem;
// 		color: ${({ theme }) => theme.txtGrey};
// 	}
// `;
const StyledYouTubeWidget = styled.div`
	/* background-image: url('/images/dark wood texture.webp'); */
	/* padding: 2rem 2rem; */
	/* border-radius: 1rem; */
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: center;
	row-gap: 4rem;
	/* box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.7); */
	margin: 0 1rem;
	transform: translateY(-30px);
	.channel-header {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		.avatar-wrapper {
			/* display: none; */
			.avatar {
				border-radius: 50%;
				width: 50%;
				aspect-ratio: 1/1;
				/* margin: 0 auto; */
				/* display: grid; */
				/* place-content: center; */
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
			color: ${({ theme }) => theme.engravedBrown};
			text-shadow: 0px 1px 0px rgba(255, 255, 255, 0.3),
				0px -1px 0px rgba(0, 0, 0, 0.7);
		}
	}

	.stats-container {
		display: flex;
		flex-direction: column;
		row-gap: 3rem;
		/* justify-content: flex-start; */

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
					color: ${({ theme }) => theme.lightBrown};
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
					color: ${({ theme }) => theme.engravedBrown};
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
// const StyledYouTubeWidget = styled.div`
// 	background-image: url('/images/dark wood texture.webp');
// 	padding: 2rem 2rem;
// 	border-radius: 1rem;
// 	display: flex;
// 	flex-direction: column;
// 	justify-content: flex-start;
// 	row-gap: 1rem;
// 	box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.7);
// 	margin: 0 1rem;
// 	.avatar-wrapper {
// 		display: none;
// 		.avatar {
// 			border-radius: 50%;
// 			width: 50%;
// 			aspect-ratio: 1/1;
// 			margin: 0 auto;
// 			display: grid;
// 			place-content: center;
// 			.circle {
// 				border-radius: 50%;
// 			}
// 		}
// 	}
// 	.channel-name {
// 		text-align: center;
// 		font-size: 2.5rem;
// 		line-height: 2.5rem;
// 		word-wrap: wrap;
// 		text-transform: capitalize;
// 		font-weight: bolder;
// 		color: ${({ theme }) => theme.engravedBrown};
// 		text-shadow: 0px 1px 0px rgba(255, 255, 255, 0.3),
// 			0px -1px 0px rgba(0, 0, 0, 0.7);
// 	}
// 	.stat-row {
// 		.stat-icon-wrapper {
// 			.stat-icon {
// 			}
// 		}
// 		.stat-wrapper {
// 			display: flex;
// 			flex-direction: column;
// 			align-items: center;
// 			margin: 1rem 0;
// 			.stat-figure {
// 				font-size: 3rem;
// 				line-height: 2.5rem;
// 				font-weight: bolder;
// 				color: ${({ theme }) => theme.engravedBrown};
// 				text-shadow: 0px 1px 0px rgba(255, 255, 255, 0.3),
// 					0px -1px 0px rgba(0, 0, 0, 0.7);
// 			}
// 			.stat-name {
// 				font-size: 1.6rem;
// 				font-weight: bolder;
// 				text-shadow: 0px 1px 0px rgba(255, 255, 255, 0.3),
// 					0px -1px 0px rgba(0, 0, 0, 0.7);
// 			}
// 		}
// 	}
// `;
export default YouTube;
