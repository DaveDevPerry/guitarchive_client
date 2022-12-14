import React from 'react';
import styled from 'styled-components';
import { FaHeart, FaGuitar } from 'react-icons/fa';
import { SiStylelint } from 'react-icons/si';
import { IoHandLeftSharp } from 'react-icons/io5';
import { ImYoutube2 } from 'react-icons/im';
import { GiMetronome } from 'react-icons/gi';
import { CgCamera } from 'react-icons/cg';
import { BiArchiveOut, BiArchive } from 'react-icons/bi';
import { GoAlert } from 'react-icons/go';
import { IoMusicalNotes } from 'react-icons/io5';
import { TbNumbers } from 'react-icons/tb';
import { useNavigate } from 'react-router-dom';
import { useStateContext } from '../../lib/context';
import { useViewport } from '../../hooks/useViewport';
import { motion } from 'framer-motion';

const ArrangerCard = ({ arranger, item }) => {
	const { setArrangerToView } = useStateContext();
	const { width } = useViewport();
	const breakpoint = 620;
	let navigate = useNavigate();
	return (
		<StyledArrangerCard
			className='arranger-card-wrapper'
			onClick={(e) => {
				e.preventDefault();
				setArrangerToView(arranger.name);
				navigate('/arranger');
			}}
			variants={item}
		>
			<div className={`arranger-wrapper ${width < breakpoint ? 'mobile' : ''}`}>
				<h3 className='primary-text'>{arranger.name}</h3>
			</div>
			<div
				className={`song-counters-container ${
					width < breakpoint ? 'mobile' : ''
				}`}
			>
				{arranger.deadline > 0 && (
					<div className='song-counter-wrapper'>
						<GoAlert className='card-icon song-status-icon deadline-icon' />
						<p className='counter-figure'>
							{arranger.deadline < 10
								? `0${arranger.deadline}`
								: arranger.deadline}
						</p>
					</div>
				)}
				{arranger.fav > 0 && (
					<div className='song-counter-wrapper'>
						<FaHeart className='card-icon song-status-icon heart-icon' />
						<p className='counter-figure'>
							{arranger.fav < 10 ? `0${arranger.fav}` : arranger.fav}
						</p>
					</div>
				)}
				{arranger.tab > 0 && (
					<div className='song-counter-wrapper'>
						<TbNumbers className='card-icon song-status-icon' />
						<p className='counter-figure'>
							{arranger.tab < 10 ? `0${arranger.tab}` : arranger.tab}
						</p>
					</div>
				)}
				{arranger.score > 0 && (
					<div className='song-counter-wrapper'>
						<IoMusicalNotes className='card-icon song-status-icon' />
						<p className='counter-figure'>
							{arranger.score < 10 ? `0${arranger.score}` : arranger.score}
						</p>
					</div>
				)}
				{arranger.fingerstyle > 0 && (
					<div className='song-counter-wrapper'>
						<IoHandLeftSharp className='card-icon song-status-icon fingerstyle-icon' />
						<p className='counter-figure'>
							{arranger.fingerstyle < 10
								? `0${arranger.fingerstyle}`
								: arranger.fingerstyle}
						</p>
					</div>
				)}
				{arranger.electric > 0 && (
					<div className='song-counter-wrapper'>
						<FaGuitar className='card-icon song-status-icon electric-icon' />
						<p className='counter-figure'>
							{arranger.electric < 10
								? `0${arranger.electric}`
								: arranger.electric}
						</p>
					</div>
				)}
				{arranger.classical > 0 && (
					<div className='song-counter-wrapper'>
						<SiStylelint className='card-icon song-status-icon classical-icon' />
						<p className='counter-figure'>
							{arranger.classical < 10
								? `0${arranger.classical}`
								: arranger.classical}
						</p>
					</div>
				)}
				{arranger.recorded > 0 && (
					<div className='song-counter-wrapper'>
						<ImYoutube2 className='card-icon song-status-icon yt-icon' />
						<p className='counter-figure'>
							{arranger.recorded < 10
								? `0${arranger.recorded}`
								: arranger.recorded}
						</p>
					</div>
				)}
				{arranger.practicing > 0 && (
					<div className='song-counter-wrapper'>
						<GiMetronome className='card-icon song-status-icon' />
						<p className='counter-figure'>
							{arranger.practicing < 10
								? `0${arranger.practicing}`
								: arranger.practicing}
						</p>
					</div>
				)}
				{arranger.ready > 0 && (
					<div className='song-counter-wrapper'>
						<CgCamera className='card-icon song-status-icon' />
						<p className='counter-figure'>
							{arranger.ready < 10 ? `0${arranger.ready}` : arranger.ready}
						</p>
					</div>
				)}
				{arranger.backlog > 0 && (
					<div className='song-counter-wrapper'>
						<BiArchiveOut className='card-icon song-status-icon' />
						<p className='counter-figure'>
							{arranger.backlog < 10
								? `0${arranger.backlog}`
								: arranger.backlog}
						</p>
					</div>
				)}
				{arranger.archived > 0 && (
					<div className='song-counter-wrapper'>
						<BiArchive className='card-icon song-status-icon' />
						<p className='counter-figure'>
							{arranger.archived < 10
								? `0${arranger.archived}`
								: arranger.archived}
						</p>
					</div>
				)}
			</div>
			<div
				className={`song-count-wrapper ${width < breakpoint ? 'mobile' : ''}`}
			>
				<p className='primary-text'>
					{arranger.songs} song
					{arranger.songs > 1 ? (
						<span className='fill'>s</span>
					) : (
						<span className='transparent'>s</span>
					)}
				</p>
			</div>
		</StyledArrangerCard>
	);
};
const StyledArrangerCard = styled(motion.div)`
	cursor: pointer;
	font-weight: bolder;
	background-color: rgba(0, 0, 0, 0.05);
	&:hover {
		background-color: rgba(0, 0, 0, 0);
	}
	&.arranger-card-wrapper {
		border-bottom: 1px solid ${({ theme }) => theme.primaryColor};
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		column-gap: 0.5rem;
		padding: 0.5rem;
		height: 5rem;
		.arranger-wrapper {
			flex: 1;
			.primary-text {
				color: ${({ theme }) => theme.primaryColor};
				text-transform: capitalize;
				font-weight: bolder;
				text-shadow: 0px 1px 0px rgb(255 255 255 / 20%),
					0px -1px 0px rgb(0 0 0 / 70%);
				font-size: 1.8rem;
			}
		}
		.song-counters-container {
			display: flex;
			column-gap: 1rem;
			height: 100%;
			.song-counter-wrapper {
				display: flex;
				align-items: center;
				font-size: 2.5rem;
				width: 5rem;
				.deadline-icon,
				.heart-icon {
					font-size: 2.2rem;
					margin-right: 0.3rem;
				}
				.fingerstyle-icon,
				.classical-icon {
					font-size: 2.4rem;
				}
				.counter-figure {
					font-size: 1.6rem;
					color: ${({ theme }) => theme.secondaryColor};
					font-weight: bolder;
					text-shadow: 0px 1px 0px rgb(255 255 255 / 20%),
						0px -1px 0px rgb(0 0 0 / 70%);
				}
			}
			&.mobile {
				display: none;
			}
		}
		.song-count-wrapper {
			width: 80px;
			display: flex;
			flex-direction: row;
			justify-content: flex-end;
			align-items: center;
			row-gap: 0.5rem;
			.primary-text {
				color: ${({ theme }) => theme.secondaryColor};
				text-transform: uppercase;
				font-weight: bolder;
				text-shadow: 0px 1px 0px rgb(255 255 255 / 20%),
					0px -1px 0px rgb(0 0 0 / 70%);
				padding-right: 0.5rem;
				span {
					&.fill {
						color: ${({ theme }) => theme.secondaryColor};
					}
					&.transparent {
						color: transparent;
						text-shadow: none;
					}
				}
			}
			&.mobile {
				width: auto;
			}
		}
	}
`;

export default ArrangerCard;
