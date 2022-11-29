import styled from 'styled-components';
import { intlFormatDistance } from 'date-fns';
// import { log } from '../helper';
import { useSongsContext } from '../hooks/useSongContext';
import { ImYoutube2 } from 'react-icons/im';
import { GiMetronome } from 'react-icons/gi';
import { CgCamera } from 'react-icons/cg';
import { BiArchiveOut, BiArchive } from 'react-icons/bi';
import { useViewport } from '../hooks/useViewport';

const NextDeadlineSong = () => {
	const { nextDeadlineSong } = useSongsContext();
	const { width } = useViewport();
	const breakpoint = 620;

	return (
		<>
			{width < breakpoint ? (
				<>
					{nextDeadlineSong && (
						<StyledNextDeadlineSongMobile className='countdown-widget'>
							<div className='details-wrapper'>
								{nextDeadlineSong.title && (
									<p className='song-title'>
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
								<div className='deadline-wrapper'>
									<div className='deadline-header'>
										<div className='deadline-header-dates'>
											<p className='header-date'>
												{new Date(
													nextDeadlineSong.deadlineDate
												).toLocaleDateString('en-us', {
													weekday: 'long',
													year: 'numeric',
													month: 'short',
													day: 'numeric',
												})}
											</p>
											<p className='header-time'>
												{/* <strong> */}
												{intlFormatDistance(
													new Date(
														new Date(
															nextDeadlineSong.deadlineDate
														).toDateString()
													),
													new Date(new Date(new Date().toDateString())),
													{
														numeric: 'auto',
													}
												)}
											</p>
										</div>
										<div className='status-icon-wrapper'>
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
									<p className='reason'>{nextDeadlineSong.reason}</p>
								</div>
							</div>
						</StyledNextDeadlineSongMobile>
					)}
				</>
			) : (
				<>
					{nextDeadlineSong && (
						<StyledNextDeadlineSong className='countdown-widget'>
							<div className='details-wrapper'>
								{nextDeadlineSong.title && (
									<p className='song-title'>
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
								<div className='deadline-wrapper'>
									<div className='deadline-header'>
										<div className='deadline-header-dates'>
											<p className='header-date'>
												{new Date(
													nextDeadlineSong.deadlineDate
												).toLocaleDateString('en-us', {
													weekday: 'long',
													year: 'numeric',
													month: 'short',
													day: 'numeric',
												})}
											</p>
											<p className='header-time'>
												{intlFormatDistance(
													new Date(
														new Date(
															nextDeadlineSong.deadlineDate
														).toDateString()
													),
													new Date(new Date(new Date().toDateString())),
													{
														numeric: 'auto',
													}
												)}
											</p>
										</div>
										<div className='status-icon-wrapper'>
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
									<p className='reason'>{nextDeadlineSong.reason}</p>
								</div>
							</div>
						</StyledNextDeadlineSong>
					)}
				</>
			)}
		</>
	);
};
const StyledNextDeadlineSongMobile = styled.div`
	color: ${({ theme }) => theme.engravedBrown};
	flex-direction: row;
	justify-content: center;
	padding: 0.5rem 1rem 1rem;
	border-radius: 0.4rem;
	background-image: url('/images/dark wood texture.webp');
	background-repeat: no-repeat;
	background-size: cover;
	box-shadow: 3px 3px 4px rgb(0 0 0);
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
			text-align: left;
			font-weight: lighter;
			font-size: 1.4rem;
		}
		.song-title {
			text-transform: capitalize;
			color: ${({ theme }) => theme.lightBrown};
			font-size: 1.8rem;
			color: ${({ theme }) => theme.engravedBrown};
			font-weight: bolder;
			text-shadow: 0px 1px 0px rgb(255 255 255 / 30%),
				0px -1px 0px rgb(0 0 0 / 70%);
			padding-left: 0.5rem;
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
				color: ${({ theme }) => theme.engravedBrown};
				color: ${({ theme }) => theme.lightBrown};
				strong {
					font-size: 1.5rem;
				}
				&.arranger-name {
					color: ${({ theme }) => theme.lightBrown};
					text-transform: capitalize;
				}
			}
		}
		.deadline-wrapper {
			border-radius: 0.4rem;
			padding: 1rem;
			display: flex;
			flex-direction: column;
			justify-content: flex-start;
			row-gap: 0.3rem;
			flex: 1;
			width: 100%;
			background-color: #120700e9;
			/* padding: 1rem 2rem; */
			box-shadow: 3px 3px 4px rgb(0 0 0);
			.deadline-header {
				display: flex;
				justify-content: space-between;
				align-items: flex-start;
				.deadline-header-dates {
					.header-date {
						font-size: 1.4rem;
						text-transform: capitalize;
						font-weight: bolder;
						color: ${({ theme }) => theme.lightBrown};
						text-align: left;
					}
					.header-time {
						font-size: 1.2rem;
						text-transform: capitalize;
						/* font-weight: bolder; */
						color: ${({ theme }) => theme.lightBrown};
						text-align: left;
					}
				}
				.status-icon-wrapper {
					/* border: 1px solid red; */
					height: 100%;
					.status-icon {
						font-size: 2.5rem;
						color: ${({ theme }) => theme.darkBrown};
						/* color: ${({ theme }) => theme.lightBrown}; */
					}
				}
			}

			.reason {
				font-size: 1.4rem;
				color: ${({ theme }) => theme.white};
				text-transform: uppercase;
				text-align: left;
			}
		}
	}
`;
const StyledNextDeadlineSong = styled.div`
	color: ${({ theme }) => theme.engravedBrown};
	border-radius: 4px;
	flex-direction: row;
	justify-content: center;
	padding: 1rem 2rem 2rem;
	border-radius: 1rem;
	background-image: url('/images/dark wood texture.webp');
	background-repeat: no-repeat;
	background-size: cover;
	box-shadow: 3px 3px 4px rgb(0 0 0);
	.details-wrapper {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: flex-start;
		row-gap: 1rem;
		p {
			margin: 0;
			color: ${({ theme }) => theme.txtGrey};
			text-transform: capitalize;
			text-align: center;
			font-weight: lighter;
			font-size: 1.4rem;
		}
		.song-title {
			text-transform: capitalize;
			color: ${({ theme }) => theme.lightBrown};
			font-size: 2.5rem;
			color: ${({ theme }) => theme.engravedBrown};
			font-weight: bolder;
			text-shadow: 0px 1px 0px rgb(255 255 255 / 30%),
				0px -1px 0px rgb(0 0 0 / 70%);
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
				color: ${({ theme }) => theme.engravedBrown};
				color: ${({ theme }) => theme.lightBrown};
				strong {
					font-size: 1.5rem;
				}
				&.arranger-name {
					color: ${({ theme }) => theme.lightBrown};
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
			background-color: #120700e9;
			padding: 1rem 2rem;
			box-shadow: 3px 3px 4px rgb(0 0 0);
			.deadline-header {
				display: flex;
				justify-content: space-between;
				align-items: flex-start;
				.deadline-header-dates {
					.header-date {
						font-size: 1.4rem;
						text-transform: capitalize;
						font-weight: bolder;
						color: ${({ theme }) => theme.lightBrown};
						text-align: left;
					}
					.header-time {
						font-size: 1.4rem;
						text-transform: capitalize;
						/* font-weight: bolder; */
						color: ${({ theme }) => theme.lightBrown};
						text-align: left;
					}
				}
				.status-icon-wrapper {
					/* border: 1px solid red; */
					height: 100%;
					.status-icon {
						font-size: 3rem;
						color: ${({ theme }) => theme.darkBrown};
						/* color: ${({ theme }) => theme.lightBrown}; */
					}
				}
			}

			.reason {
				font-size: 1.6rem;
				color: ${({ theme }) => theme.white};
				text-transform: uppercase;
				text-align: left;
			}
		}
	}
`;

export default NextDeadlineSong;
