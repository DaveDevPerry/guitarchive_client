import { motion } from 'framer-motion';
import styled from 'styled-components';
import Backdrop from '../Backdrop';
import Counter from '../Counter';
import { MdOutlineOndemandVideo } from 'react-icons/md';
import { HiVideoCamera, HiExternalLink } from 'react-icons/hi';
import { ImUsers } from 'react-icons/im';
import { TfiYoutube } from 'react-icons/tfi';
import { useViewport } from '../../hooks/useViewport';

const dropIn = {
	hidden: {
		y: '-100vh',
		opacity: 0,
	},
	visible: {
		y: '0',
		opacity: 1,
		transition: {
			duration: 0.1,
			type: 'spring',
			damping: 15,
			// damping: 25,
			stiffness: 500,
		},
	},
	exit: {
		y: '100vh',
		opacity: 0,
	},
};

const Modal = ({ handleClose, youtubeData, theme }) => {
	const { width } = useViewport();
	const breakpoint = 620;
	return (
		<Backdrop onClick={handleClose}>
			<StyledModal
				className={`${width < breakpoint ? 'mobile' : ''}`}
				onClick={(e) => e.stopPropagation()}
				variants={dropIn}
				initial='hidden'
				animate='visible'
				exit='exit'
				id={`${theme === 'dark' ? 'dark' : 'light'}`}
			>
				<div className='youtube-stats-header'>
					<TfiYoutube className='youtube-channel-icon' />
					<div
						className={`youtube-channel-name ${
							width < breakpoint ? 'mobile' : ''
						}`}
					>
						<p>dave perry guitarist</p>
					</div>
					<a
						href='https://www.youtube.com/channel/UC3q51Pr9_zxUGIka8bj6Hvw'
						target='_blank'
						rel='noreferrer'
						className='link-to-channel'
					>
						<HiExternalLink className='external-link-icon' />
					</a>
				</div>
				<div className='congrats-container'>
					<p className='congrats-text'>new milestone</p>
					<div className='congrats-wrapper'>
						<p>you have reached</p>
						<p className='congrats-figure'>
							<Counter from={0} to={100000} time={6} />
						</p>
						<p>views on youtube</p>
					</div>
					<p className='congrats-text'>congratulations</p>
				</div>
				<div className='stats-container'>
					<StyledYoutubeStat
						className={`${width < breakpoint ? 'mobile' : ''}`}
					>
						<div
							className={`stat-header ${width < breakpoint ? 'mobile' : ''}`}
						>
							<p
								className={`stat-figure ${width < breakpoint ? 'mobile' : ''}`}
							>
								<Counter
									from={0}
									to={Number(
										youtubeData && youtubeData[0].statistics.viewCount
									)}
									time={10}
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
					<StyledYoutubeStat
						className={`${width < breakpoint ? 'mobile' : ''}`}
					>
						<div
							className={`stat-header ${width < breakpoint ? 'mobile' : ''}`}
						>
							<p
								className={`stat-figure ${width < breakpoint ? 'mobile' : ''}`}
							>
								<Counter
									from={0}
									to={Number(
										youtubeData && youtubeData[0].statistics.subscriberCount
									)}
									time={10}
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
					<StyledYoutubeStat
						className={`${width < breakpoint ? 'mobile' : ''}`}
					>
						<div
							className={`stat-header ${width < breakpoint ? 'mobile' : ''}`}
						>
							<p
								className={`stat-figure ${width < breakpoint ? 'mobile' : ''}`}
							>
								<Counter
									from={0}
									to={Number(
										youtubeData && youtubeData[0].statistics.videoCount
									)}
									time={10}
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
			</StyledModal>
		</Backdrop>
	);
};
const StyledModal = styled(motion.div)`
	padding: 1rem 2rem 2rem;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	row-gap: 3rem;
	background-repeat: no-repeat;
	background-size: cover;
	border-radius: 1rem;
	box-shadow: 3px 3px 4px rgb(0 0 0);
	z-index: 20000;
	width: clamp(50%, 700px, 92%);
	&#dark {
		background-image: url('/images/black wood.webp');
	}
	&#light {
		background-image: url('/images/white wood.webp');
	}
	&.mobile {
		border-radius: 0.4rem;
		row-gap: 3rem;
		padding: 0.5rem 1rem 1.5rem;
		box-shadow: none;
		width: clamp(50%, 700px, 95%);
		.congrats-container {
			display: flex;
			flex-direction: column;
			.congrats-text {
				text-transform: uppercase;
				font-size: 3rem;
				font-weight: bolder;
				color: ${({ theme }) => theme.congratulations};
				text-align: center;
				text-shadow: 0px 1px 0px rgb(255 255 255 / 30%),
					0px -1px 0px rgb(0 0 0 / 70%);
			}
			.congrats-wrapper {
				display: flex;
				flex-direction: column;
				align-items: center;
				p {
					font-size: 2rem;
					font-weight: bolder;
				}
				.congrats-figure {
					font-size: 6rem;
					font-weight: bolder;
					color: ${({ theme }) => theme.secondaryColor};
					line-height: 5rem;
					text-shadow: 0px 1px 0px rgb(255 255 255 / 30%),
						0px -1px 0px rgb(0 0 0 / 70%);
				}
			}
		}
	}
	.youtube-stats-header {
		display: flex;
		justify-content: space-between;
		align-items: flex-end;
		.youtube-channel-icon {
			color: ${({ theme }) => theme.primaryColor};
			font-size: 2.2rem;
			margin-bottom: 0.5rem;
			display: none;
		}
		.youtube-channel-name {
			display: flex;
			justify-content: center;
			align-items: flex-end;
			column-gap: 1rem;
			flex: 1;

			p {
				font-size: 2.5rem;
				text-transform: capitalize;
				color: ${({ theme }) => theme.primaryColor};
				font-weight: bolder;
				text-shadow: 0px 1px 0px rgb(255 255 255 / 30%),
					0px -1px 0px rgb(0 0 0 / 70%);
			}
		}
		a.link-to-channel {
			display: grid;
			place-content: center;
			display: none;
			.external-link-icon {
				color: ${({ theme }) => theme.secondaryColor};
				font-size: 3rem;
			}
		}
	}
	.congrats-container {
		display: flex;
		flex-direction: column;

		.congrats-text {
			text-transform: uppercase;
			font-size: 4rem;
			font-weight: bolder;
			color: ${({ theme }) => theme.congratulations};
			text-align: center;
			text-shadow: 0px 1px 0px rgb(255 255 255 / 30%),
				0px -1px 0px rgb(0 0 0 / 70%);
		}
		.congrats-wrapper {
			display: flex;
			flex-direction: column;
			align-items: center;
			p {
				font-size: 2rem;
				font-weight: bolder;
			}
			.congrats-figure {
				font-size: 6rem;
				font-weight: bolder;
				color: ${({ theme }) => theme.secondaryColor};
				line-height: 5rem;
				text-shadow: 0px 1px 0px rgb(255 255 255 / 30%),
					0px -1px 0px rgb(0 0 0 / 70%);
			}
		}
	}
	.stats-container {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		gap: 1rem;
		border-radius: 4px;
		margin-top: 1rem;
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
			font-size: 2.4rem;
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

export default Modal;
