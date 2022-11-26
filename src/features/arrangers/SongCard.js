import React from 'react';
// import Link from 'next/link';
import styled from 'styled-components';
import {
	FaCloudDownloadAlt,
	FaRegStar,
	FaStar,
	FaRegHeart,
	FaHeart,
} from 'react-icons/fa';
import { ImYoutube2 } from 'react-icons/im';
import { GiMetronome } from 'react-icons/gi';
import { CgCamera } from 'react-icons/cg';
import { BiArchiveOut, BiArchive } from 'react-icons/bi';
import { IoMusicalNotes } from 'react-icons/io5';
import { TbNumbers } from 'react-icons/tb';
import { format, parseISO } from 'date-fns';
import { log } from '../../utils/helper';
import { useNavigate } from 'react-router-dom';
import { useStateContext } from '../../lib/context';
import { useViewport } from '../../hooks/useViewport';
// import moment from 'moment';

const SongCard = ({ song }) => {
	const { setSongToView } = useStateContext();
	const { width } = useViewport();
	const breakpoint = 460;
	let navigate = useNavigate();
	return (
		// <Link href={url + slug}>

		<StyledSongCard
			className='song-card-wrapper'
			onClick={(e) => {
				e.preventDefault();
				log(song._id, 'song id on click');
				setSongToView(song._id);
				navigate('/song');
			}}
		>
			{width > breakpoint ? (
				<>
					<div className='fav-wrapper'>
						{song.isFavourite === true ? (
							<FaHeart className='card-icon heart-on' />
						) : (
							<FaRegHeart className='card-icon heart-off' />
						)}
					</div>
					<div className='song-wrapper'>
						<h3 className='primary-text'>{song.title}</h3>
						<h4 className='secondary-text'>{song.artist.name}</h4>
					</div>

					<div className='artist-wrapper'>
						<h3 className='primary-text'>{song.arranger.name}</h3>
						{/* <div className='rating-wrapper'>
					<FaStar className='star-on' />
					<FaStar className='star-on' />
					<FaRegStar className='star-off' />
					<FaRegStar className='star-off' />
					<FaRegStar className='star-off' />
				</div> */}
						<div className='rating-wrapper'>
							{[...Array(song.difficulty)].map((elementInArray, index) => (
								<FaStar key={index} className='star-on' />
							))}
							{[...Array(5 - song.difficulty)].map((elementInArray, index) => (
								<FaRegStar key={index} className='star-off' />
							))}
						</div>
					</div>
					{/* <div className='genre-wrapper'>
					<h3 className='primary-text'>{song.genre[0]}</h3>
					<h4 className='secondary-text'>{song.genre[1]}</h4>
				</div> */}

					<div className='deadline-wrapper'>
						{song.deadlineDate && (
							<h3 className='primary-text'>
								{format(parseISO(song.deadlineDate), 'dd/MM/yyyy')}
							</h3>
						)}
						{/* {song.deadlineReason && (
						<h4 className='secondary-text'>{song.deadlineReason}</h4>
					)} */}
					</div>
					<div className='file-wrapper'>
						{song.isTab ? (
							<TbNumbers className='music-type-icon' />
						) : (
							<IoMusicalNotes className='music-type-icon' />
						)}
						{song.selectedFile && (
							<a href={song.selectedFile} download>
								<FaCloudDownloadAlt className='file-download-icon card-icon' />
							</a>
						)}

						{/* {song.sheetMusic && (
						<a
							href={song.sheetMusic.url}
							rel='noopener noreferrer'
							target='_blank'
						>
							<FaCloudDownloadAlt className='file-download-icon card-icon' />
						</a>
					)} */}
					</div>
					{/* <div className='status-wrapper'>
						<ImYoutube2 className='card-icon status-icon yt-icon' />
				</div> */}
					<div className='status-wrapper'>
						{song.status.name === 'Recorded' && (
							<ImYoutube2 className='card-icon status-icon yt-icon' />
						)}
						{song.status.name === 'Practicing' && (
							<GiMetronome className='card-icon status-icon' />
						)}
						{song.status.name === 'Ready' && (
							<CgCamera className='card-icon status-icon' />
						)}
						{song.status.name === 'Backlog' && (
							<BiArchiveOut className='card-icon status-icon' />
						)}
						{song.status.name === 'Archived' && (
							<BiArchive className='card-icon status-icon' />
						)}
					</div>
				</>
			) : (
				<>
					{/* <div className='fav-wrapper'>
				{song.isFavourite === true ? (
					<FaHeart className='card-icon heart-on' />
				) : (
					<FaRegHeart className='card-icon heart-off' />
				)}
			</div> */}
					<div className='song-wrapper'>
						<h3 className='primary-text'>{song.title}</h3>
						<h4 className='secondary-text'>{song.artist.name}</h4>
					</div>

					{/* <div className='artist-wrapper'>
				<h3 className='primary-text'>{song.arranger.name}</h3>
				<div className='rating-wrapper'>
					{[...Array(song.difficulty)].map((elementInArray, index) => (
						<FaStar key={index} className='star-on' />
					))}
					{[...Array(5 - song.difficulty)].map((elementInArray, index) => (
						<FaRegStar key={index} className='star-off' />
					))}
				</div>
			</div> */}
					{/* <div className='genre-wrapper'>
					<h3 className='primary-text'>{song.genre[0]}</h3>
					<h4 className='secondary-text'>{song.genre[1]}</h4>
				</div> */}

					<div className='mobile-deadline-wrapper'>
						{song.deadlineDate && (
							<h3 className='primary-text'>
								{format(parseISO(song.deadlineDate), 'dd/MM/yyyy')}
							</h3>
						)}
						{/* {song.deadlineReason && (
						<h4 className='secondary-text'>{song.deadlineReason}</h4>
					)} */}
					</div>
					{/* <div className='file-wrapper'>
				{song.selectedFile && (
					<a href={song.selectedFile} download>
						<FaCloudDownloadAlt className='file-download-icon card-icon' />
					</a>
				)}
			</div> */}
					{/* <div className='status-wrapper'>
				{song.status.name === 'Recorded' && (
					<ImYoutube2 className='card-icon status-icon yt-icon' />
				)}
				{song.status.name === 'Practicing' && (
					<GiMetronome className='card-icon status-icon' />
				)}
				{song.status.name === 'Ready' && (
					<CgCamera className='card-icon status-icon' />
				)}
				{song.status.name === 'Backlog' && (
					<BiArchiveOut className='card-icon status-icon' />
				)}
				{song.status.name === 'Archived' && (
					<BiArchive className='card-icon status-icon' />
				)}
			</div> */}
				</>
			)}
		</StyledSongCard>
		// </Link>
	);
};
const StyledSongCard = styled.div`
	cursor: pointer;
	&.song-card-wrapper {
		border-bottom: 1px solid ${({ theme }) => theme.darkBrown};
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		column-gap: 0.5rem;
		/* column-gap: 1rem; */
		padding: 0.5rem;
		/* padding: 0.5rem 1rem; */
		.primary-text {
			color: ${({ theme }) => theme.darkBrown};
			text-transform: capitalize;
		}
		.secondary-text {
			color: ${({ theme }) => theme.lightBrown};
			text-transform: uppercase;
		}
		.fav-wrapper,
		/* .file-wrapper, */
		/* .deadline-wrapper, */
		.status-wrapper {
			display: grid;
			place-content: center;
			width: 50px;
		}
		.file-wrapper {
			display: flex;
			align-items: center;
			column-gap: 0.5rem;
		}
		.deadline-wrapper {
			width: 100px;
			display: grid;
			place-content: center;

			.primary-text {
				color: ${({ theme }) => theme.white};
				text-transform: capitalize;
				/* font-weight: bolder; */
				font-weight: lighter;
				background-color: ${({ theme }) => theme.red};
				padding: 0.5rem 1rem;
				border-radius: 0.6rem;
				line-height: 1.4rem;
			}
		}
		.mobile-deadline-wrapper {
			/* width: 100px; */
			display: grid;
			place-content: center;
			.primary-text {
				font-size: 1.4rem;
			}
		}
		/* .artist-wrapper {
			flex: 1 1 40%;
		}
		.song-wrapper {
			flex: 1 1 60%;
		} */
		.song-wrapper {
			flex: 1;
			.primary-text {
				text-transform: capitalize;
			}
		}
		.artist-wrapper {
			width: 17rem;
			.primary-text {
				text-transform: capitalize;
			}
		}
		.fav-wrapper {
			width: auto;
			padding: 0.5rem;
		}
		/* .file-wrapper,
		.status-wrapper {
			display: grid;
			place-content: center;
			width: 5rem;
		} */
		.card-icon {
			font-size: 2.5rem;
			color: ${({ theme }) => theme.lightBrown};
		}
		.status-icon {
			font-size: 3rem;
			color: ${({ theme }) => theme.darkBrown};
		}
		.yt-icon {
			font-size: 4.5rem;
		}
		.star-on {
			color: ${({ theme }) => theme.lightBrown};
		}
		.star-off {
			color: ${({ theme }) => theme.darkBrown};
		}
		.heart-on {
			color: ${({ theme }) => theme.red};
			font-size: 2rem;
		}
		.heart-off {
			color: ${({ theme }) => theme.darkBrown};
			font-size: 2rem;
		}
		.file-download-icon {
			cursor: pointer;
			font-size: 3rem;
		}
		.music-type-icon {
			/* cursor: pointer; */
			font-size: 3rem;
		}
	}
	/* @media screen and (max-width: 400px) {

		&.song-card-wrapper {

			.fav-wrapper,
			.file-wrapper,
			.deadline-wrapper,
			.status-wrapper {
				width: unset;
			}

			.artist-wrapper {
				display: none;
			}
			.fav-wrapper,
			.file-wrapper {
				display: none;
			}

			.file-download-icon {
				display: none;
			}
		}
	} */
`;

export default SongCard;
