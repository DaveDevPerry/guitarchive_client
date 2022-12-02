import styled from 'styled-components';
import { intlFormatDistance } from 'date-fns';
// import { log } from '../helper';
import { useSongsContext } from '../hooks/useSongContext';
import { ImYoutube2 } from 'react-icons/im';
import { GiMetronome } from 'react-icons/gi';
import { CgCamera } from 'react-icons/cg';
import { BiArchiveOut, BiArchive } from 'react-icons/bi';
import { useViewport } from '../hooks/useViewport';

const NextDeadlineSong = ({ theme }) => {
	const { nextDeadlineSong } = useSongsContext();
	const { width } = useViewport();
	const breakpoint = 620;

	return (
		<StyledNextDeadlineSong
			className={`widget-container ${width < breakpoint ? 'mobile' : ''}`}
			id={`${theme === 'dark' ? 'dark' : 'light'}`}
		>
			{nextDeadlineSong && (
				<div className='details-wrapper'>
					{nextDeadlineSong.title && (
						<p className={`song-title ${width < breakpoint ? 'mobile' : ''}`}>
							<strong>{nextDeadlineSong.title}</strong>
						</p>
					)}
					<p className='header-location'>
						<span>
							<strong>{nextDeadlineSong.artist.name}</strong>
						</span>
						<span className='arranger-name'>
							{nextDeadlineSong.arranger.name}
						</span>
					</p>
					<div
						className={`deadline-wrapper ${width < breakpoint ? 'mobile' : ''}`}
					>
						<div className='deadline-header'>
							<div className='deadline-header-dates'>
								<p className='header-date'>
									{new Date(nextDeadlineSong.deadlineDate).toLocaleDateString(
										'en-us',
										{
											weekday: 'long',
											year: 'numeric',
											month: 'short',
											day: 'numeric',
										}
									)}
								</p>
								<p
									className={`header-time ${
										width < breakpoint ? 'mobile' : ''
									}`}
								>
									{intlFormatDistance(
										new Date(
											new Date(nextDeadlineSong.deadlineDate).toDateString()
										),
										new Date(new Date(new Date().toDateString())),
										{
											numeric: 'auto',
										}
									)}
								</p>
							</div>
							<div
								className={`status-icon-wrapper ${
									width < breakpoint ? 'mobile' : ''
								}`}
							>
								{nextDeadlineSong.status.name === 'Recorded' && (
									<ImYoutube2 className='card-icon status-icon yt-icon' />
								)}
								{nextDeadlineSong.status.name === 'Practicing' && (
									<GiMetronome className='card-icon status-icon' />
								)}
								{nextDeadlineSong.status.name === 'Ready' && (
									<CgCamera className='card-icon status-icon' />
								)}
								{nextDeadlineSong.status.name === 'Backlog' && (
									<BiArchiveOut className='card-icon status-icon' />
								)}
								{nextDeadlineSong.status.name === 'Archived' && (
									<BiArchive className='card-icon status-icon' />
								)}
							</div>
						</div>
						<p className={`reason ${width < breakpoint ? 'mobile' : ''}`}>
							{nextDeadlineSong.reason}
						</p>
					</div>
				</div>
			)}
		</StyledNextDeadlineSong>
	);
};

const StyledNextDeadlineSong = styled.div`
	padding: 1rem 2rem 2rem;
	border-radius: 1rem;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	background-repeat: no-repeat;
	background-size: cover;
	row-gap: 0.5rem;
	box-shadow: 3px 3px 4px rgb(0 0 0);
	overflow-y: hidden;
	&#dark {
		background-image: url('/images/dark wood texture.webp');
	}
	&#light {
		background-image: url('/images/white wood.webp');
	}
	&.mobile {
		border-radius: 0.4rem;
		padding: 1rem;
	}
	.details-wrapper {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: flex-start;
		row-gap: 0.5rem;
		p {
			margin: 0;
			color: ${({ theme }) => theme.txtGrey};
			text-transform: capitalize;
			text-align: center;
			font-weight: bolder;
			font-size: 1.4rem;
		}
		.song-title {
			text-transform: capitalize;
			font-size: 2.5rem;
			color: ${({ theme }) => theme.primaryColor};
			font-weight: bolder;
			text-shadow: 0px 1px 0px rgb(255 255 255 / 30%),
				0px -1px 0px rgb(0 0 0 / 70%);
			&.mobile {
				padding-left: 0.5rem;
				font-size: 1.8rem;
			}
		}
		.header-location {
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			font-size: 1.4rem;
			display: none;
			span {
				text-transform: uppercase;
				color: ${({ theme }) => theme.secondaryColor};
				strong {
					font-size: 1.5rem;
				}
				&.arranger-name {
					color: ${({ theme }) => theme.secondaryColor};
					text-transform: capitalize;
				}
			}
		}
		.deadline-wrapper {
			border-radius: 1rem;
			padding: 0.5rem 1rem;
			display: flex;
			flex-direction: column;
			justify-content: flex-start;
			row-gap: 0.4rem;
			flex: 1;
			width: 100%;
			padding: 1rem 2rem;
			border-radius: 0.4rem 0.4rem 1rem 1rem;
			box-shadow: inset 3px 3px 4px rgba(0, 0, 0, 0005),
				inset -2px -2px 2px rgba(0, 0, 0, 08);
			background-color: rgba(0, 0, 0, 0.1);
			&.mobile {
				border-radius: 0.4rem;
				padding: 1rem;
				row-gap: 0.3rem;
			}

			.deadline-header {
				display: flex;
				justify-content: space-between;
				align-items: flex-start;
				.deadline-header-dates {
					.header-date {
						font-size: 1.4rem;
						text-transform: capitalize;
						font-weight: bolder;
						color: ${({ theme }) => theme.secondaryColor};
						text-align: left;
					}
					.header-time {
						font-size: 1.4rem;
						text-transform: capitalize;
						color: ${({ theme }) => theme.secondaryColor};
						text-align: left;
						&.mobile {
							font-size: 1.2rem;
						}
					}
				}
				.status-icon-wrapper {
					height: 100%;
					font-size: 3rem;
					.status-icon {
						color: ${({ theme }) => theme.primaryColor};
					}
					&.mobile {
						font-size: 2.5rem;
					}
				}
			}

			.reason {
				font-size: 1.6rem;
				color: ${({ theme }) => theme.white};
				text-transform: uppercase;
				text-align: left;
				&.mobile {
					font-size: 1.4rem;
				}
			}
		}
	}
`;

export default NextDeadlineSong;
