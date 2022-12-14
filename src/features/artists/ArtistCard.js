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

const ArtistCard = ({ artist, item }) => {
	const { setArtistToView } = useStateContext();
	const { width } = useViewport();
	const breakpoint = 620;
	let navigate = useNavigate();
	return (
		<StyledArtistCard
			className='artist-card-wrapper'
			onClick={(e) => {
				e.preventDefault();
				setArtistToView(artist.name);
				navigate('/artist');
			}}
			variants={item}
		>
			<div className={`artist-wrapper ${width < breakpoint ? 'mobile' : ''}`}>
				<h3 className='primary-text'>{artist.name}</h3>
			</div>
			<div
				className={`song-counters-container ${
					width < breakpoint ? 'mobile' : ''
				}`}
			>
				{artist.deadline > 0 && (
					<div className='song-counter-wrapper'>
						<GoAlert className='card-icon song-status-icon deadline-icon' />
						<p className='counter-figure'>
							{artist.deadline < 10 ? `0${artist.deadline}` : artist.deadline}
						</p>
					</div>
				)}
				{artist.fav > 0 && (
					<div className='song-counter-wrapper'>
						<FaHeart className='card-icon song-status-icon heart-icon' />
						<p className='counter-figure'>
							{artist.fav < 10 ? `0${artist.fav}` : artist.fav}
						</p>
					</div>
				)}
				{artist.tab > 0 && (
					<div className='song-counter-wrapper'>
						<TbNumbers className='card-icon song-status-icon' />
						<p className='counter-figure'>
							{artist.tab < 10 ? `0${artist.tab}` : artist.tab}
						</p>
					</div>
				)}
				{artist.score > 0 && (
					<div className='song-counter-wrapper'>
						<IoMusicalNotes className='card-icon song-status-icon' />
						<p className='counter-figure'>
							{artist.score < 10 ? `0${artist.score}` : artist.score}
						</p>
					</div>
				)}
				{artist.fingerstyle > 0 && (
					<div className='song-counter-wrapper'>
						<IoHandLeftSharp className='card-icon song-status-icon fingerstyle-icon' />
						<p className='counter-figure'>
							{artist.fingerstyle < 10
								? `0${artist.fingerstyle}`
								: artist.fingerstyle}
						</p>
					</div>
				)}
				{artist.electric > 0 && (
					<div className='song-counter-wrapper'>
						<FaGuitar className='card-icon song-status-icon electric-icon' />
						<p className='counter-figure'>
							{artist.electric < 10 ? `0${artist.electric}` : artist.electric}
						</p>
					</div>
				)}
				{artist.classical > 0 && (
					<div className='song-counter-wrapper'>
						<SiStylelint className='card-icon song-status-icon classical-icon' />
						<p className='counter-figure'>
							{artist.classical < 10
								? `0${artist.classical}`
								: artist.classical}
						</p>
					</div>
				)}
				{artist.recorded > 0 && (
					<div className='song-counter-wrapper'>
						<ImYoutube2 className='card-icon song-status-icon yt-icon' />
						<p className='counter-figure'>
							{artist.recorded < 10 ? `0${artist.recorded}` : artist.recorded}
						</p>
					</div>
				)}
				{artist.practicing > 0 && (
					<div className='song-counter-wrapper'>
						<GiMetronome className='card-icon song-status-icon' />
						<p className='counter-figure'>
							{artist.practicing < 10
								? `0${artist.practicing}`
								: artist.practicing}
						</p>
					</div>
				)}
				{artist.ready > 0 && (
					<div className='song-counter-wrapper'>
						<CgCamera className='card-icon song-status-icon' />
						<p className='counter-figure'>
							{artist.ready < 10 ? `0${artist.ready}` : artist.ready}
						</p>
					</div>
				)}
				{artist.backlog > 0 && (
					<div className='song-counter-wrapper'>
						<BiArchiveOut className='card-icon song-status-icon' />
						<p className='counter-figure'>
							{artist.backlog < 10 ? `0${artist.backlog}` : artist.backlog}
						</p>
					</div>
				)}
				{artist.archived > 0 && (
					<div className='song-counter-wrapper'>
						<BiArchive className='card-icon song-status-icon' />
						<p className='counter-figure'>
							{artist.archived < 10 ? `0${artist.archived}` : artist.archived}
						</p>
					</div>
				)}
			</div>
			<div
				className={`song-count-wrapper ${width < breakpoint ? 'mobile' : ''}`}
			>
				<p className='primary-text'>
					{artist.songs} song
					{artist.songs > 1 ? (
						<span className='fill'>s</span>
					) : (
						<span className='transparent'>s</span>
					)}
				</p>
			</div>
		</StyledArtistCard>
	);
};
const StyledArtistCard = styled(motion.div)`
	cursor: pointer;
	font-weight: bolder;
	background-color: rgba(0, 0, 0, 0.05);
	&:hover {
		background-color: rgba(0, 0, 0, 0);
	}
	&.artist-card-wrapper {
		border-bottom: 1px solid ${({ theme }) => theme.primaryColor};
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		column-gap: 0.5rem;
		padding: 0.5rem;
		height: 5rem;
		.artist-wrapper {
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

export default ArtistCard;
