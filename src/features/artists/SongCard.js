import React from 'react';
import styled from 'styled-components';
import {
	// FaCloudDownloadAlt,
	FaRegStar,
	FaStar,
	FaRegHeart,
	FaHeart,
	FaGuitar,
} from 'react-icons/fa';
import { SiStylelint } from 'react-icons/si';
import { IoHandLeftSharp } from 'react-icons/io5';
import { BsFileEarmarkPdf } from 'react-icons/bs';
import { ImYoutube2 } from 'react-icons/im';
import { GiMetronome } from 'react-icons/gi';
import { CgCamera } from 'react-icons/cg';
import { BiArchiveOut, BiArchive } from 'react-icons/bi';
import { GoAlert } from 'react-icons/go';
import { IoMusicalNotes } from 'react-icons/io5';
import { TbNumbers } from 'react-icons/tb';
import { format, parseISO } from 'date-fns';
import { log } from '../../utils/helper';
import { useNavigate } from 'react-router-dom';
import { useStateContext } from '../../lib/context';
import { useViewport } from '../../hooks/useViewport';
import Tooltip from '../../components/Tooltip';

const SongCard = ({ song }) => {
	const { setSongToView } = useStateContext();
	const { width } = useViewport();
	const breakpoint = 620;
	let navigate = useNavigate();
	return (
		<StyledSongCard className='song-card-wrapper'>
			<div className={`fav-wrapper ${width < breakpoint ? 'hide' : ''}`}>
				{song.isFavourite === true ? (
					<FaHeart className='card-icon heart-on' />
				) : (
					<FaRegHeart className='card-icon heart-off' />
				)}
			</div>
			<div
				className={`song-wrapper ${width < breakpoint ? 'mobile' : ''}`}
				onClick={(e) => {
					e.preventDefault();
					log(song._id, 'song id on click');
					setSongToView(song._id);
					navigate('/song');
				}}
			>
				<h3 className='primary-text'>{song.title}</h3>
				<h4 className='secondary-text'>{song.artist.name}</h4>
			</div>
			<div className={`artist-wrapper ${width < breakpoint ? 'hide' : ''}`}>
				<h3 className='primary-text'>{song.arranger.name}</h3>
				<div className='rating-wrapper'>
					{[...Array(song.difficulty)].map((elementInArray, index) => (
						<FaStar key={index} className='star-on' />
					))}
					{[...Array(5 - song.difficulty)].map((elementInArray, index) => (
						<FaRegStar key={index} className='star-off' />
					))}
				</div>
			</div>
			<div className={`deadline-wrapper ${width < breakpoint ? 'mobile' : ''}`}>
				{song.deadlineDate && (
					<>
						<GoAlert className='alert-icon' />
						<p className='primary-text'>
							{format(parseISO(song.deadlineDate), 'dd/MM/yyyy')}
						</p>
					</>
				)}
			</div>
			<div className={`file-wrapper ${width < breakpoint ? 'hide' : ''}`}>
				{song.fileType === 'pdf' ? (
					<Tooltip content='pdf file' direction='left'>
						<BsFileEarmarkPdf className='status-icon pdf-icon' />
					</Tooltip>
				) : (
					<Tooltip content='guitar pro file' direction='left'>
						<FaGuitar className='status-icon guitar-icon' />
					</Tooltip>
				)}
				{song.style.name === 'fingerstyle' && (
					<Tooltip content='fingerstyle' direction='left'>
						<IoHandLeftSharp className='status-icon fingerstyle-icon' />
					</Tooltip>
				)}
				{song.style.name === 'classical' && (
					<Tooltip content='classical' direction='left'>
						<SiStylelint className='status-icon classical-icon' />
					</Tooltip>
				)}
				{song.isTab ? (
					<Tooltip content='tablature' direction='left'>
						<TbNumbers className='music-type-icon' />
					</Tooltip>
				) : (
					<Tooltip content='music score' direction='left'>
						<IoMusicalNotes className='music-type-icon' />
					</Tooltip>
				)}

				{/* {song.fileType === 'pdf' ? (
					<Tooltip content='pdf file' direction='left'>
						<img src='/images/pdf_icon.png' alt='pdf' className='img-icon' />
					</Tooltip>
				) : (
					<Tooltip content='guitar pro file' direction='left'>
						<img
							src='/images/gp_icon.png'
							alt='guitar pro'
							className='img-icon'
						/>
					</Tooltip>
				)} */}
			</div>
			<div className={`status-wrapper ${width < breakpoint ? 'hide' : ''}`}>
				{song.status.name === 'Recorded' && (
					<Tooltip content='Recorded' direction='left'>
						<ImYoutube2 className='card-icon song-status-icon yt-icon' />
					</Tooltip>
				)}
				{song.status.name === 'Practicing' && (
					<Tooltip content='Practicing' direction='left'>
						<GiMetronome className='card-icon song-status-icon' />
					</Tooltip>
				)}
				{song.status.name === 'Ready' && (
					<Tooltip content='Ready' direction='left'>
						<CgCamera className='card-icon song-status-icon' />
					</Tooltip>
				)}
				{song.status.name === 'Backlog' && (
					<Tooltip content='Backlog' direction='left'>
						<BiArchiveOut className='card-icon song-status-icon' />
					</Tooltip>
				)}
				{song.status.name === 'Archived' && (
					<Tooltip content='Archived' direction='left'>
						<BiArchive className='card-icon song-status-icon' />
					</Tooltip>
				)}
			</div>
		</StyledSongCard>
	);
};
const StyledSongCard = styled.div`
	cursor: pointer;
	/* color: ${({ theme }) => theme.primaryColor}; */

	font-weight: bolder;
	background-color: rgba(0, 0, 0, 0.05);
	&:hover {
		background-color: rgba(0, 0, 0, 0);
	}
	&.song-card-wrapper {
		border-bottom: 1px solid ${({ theme }) => theme.primaryColor};
		/* border-bottom: 1px solid ${({ theme }) => theme.primaryColor}; */
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		column-gap: 0.5rem;
		padding: 0.5rem;
		color: ${({ theme }) => theme.white};

		.fav-wrapper {
			display: grid;
			place-content: center;
			width: auto;
			padding: 0.5rem;
			&.hide {
				display: none;
			}
			.heart-on {
				/* color: ${({ theme }) => theme.red}; */
				color: ${({ theme }) => theme.primaryColor};
				font-size: 2rem;
			}
			.heart-off {
				color: ${({ theme }) => theme.primaryColor};
				font-size: 2rem;
			}
		}
		.song-wrapper {
			flex: 1;
			.primary-text {
				color: ${({ theme }) => theme.primaryColor};
				/* color: ${({ theme }) => theme.primaryColor}; */
				/* color: black; */
				text-transform: capitalize;
				font-weight: bolder;
				/* font-weight: lighter; */
				/* text-shadow: 0px 1px 0px rgb(255 255 255 / 20%),
					0px -1px 0px rgb(0 0 0 / 70%); */
				text-shadow: 0px 1px 0px rgb(255 255 255 / 20%),
					0px -1px 0px rgb(0 0 0 / 70%);
			}
			.secondary-text {
				color: ${({ theme }) => theme.secondaryColor};
				font-weight: bolder;
				text-transform: uppercase;
				text-shadow: 0px 1px 0px rgb(255 255 255 / 20%),
					0px -1px 0px rgb(0 0 0 / 70%);
			}
			&.mobile {
				.secondary-text {
					color: ${({ theme }) => theme.secondaryColor};
					/* font-weight: bolder;
				text-transform: uppercase; */
				}
			}
		}
		.artist-wrapper {
			width: 17rem;
			.primary-text {
				color: ${({ theme }) => theme.primaryColor};
				text-transform: capitalize;
				font-weight: bolder;
				text-shadow: 0px 1px 0px rgb(255 255 255 / 20%),
					0px -1px 0px rgb(0 0 0 / 70%);
			}
			.star-on {
				color: ${({ theme }) => theme.secondaryColor};
			}
			.star-off {
				color: ${({ theme }) => theme.primaryColor};
			}
			&.hide {
				display: none;
			}
		}
		.file-wrapper {
			display: flex;
			align-items: center;
			column-gap: 0.5rem;
			color: ${({ theme }) => theme.primaryColor};
			&.hide {
				display: none;
			}
			.img-icon {
				height: 30px;
				width: 30px;
			}
			.music-type-icon {
				font-size: 3rem;
			}
			.pdf-icon {
				font-size: 3rem;
				/* color: ${({ theme }) => theme.primaryColor}; */
			}
			.guitar-icon {
				font-size: 3rem;
			}
			.fingerstyle-icon {
				font-size: 2.8rem;
			}
			.classical-icon {
				font-size: 3rem;
			}
		}
		.deadline-wrapper {
			width: 100px;
			/* display: grid;
			place-content: center; */
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			row-gap: 0.5rem;
			.alert-icon {
				font-size: 1.8rem;
				color: ${({ theme }) => theme.alert};
			}
			.primary-text {
				color: ${({ theme }) => theme.white};
				text-transform: capitalize;
				font-weight: bolder;
				/* background-color: ${({ theme }) => theme.alert}; */
				/* padding: 0.5rem 1rem; */
				border-radius: 0.6rem;
				line-height: 1.4rem;
				font-size: 1.4rem;
				text-shadow: 0px 1px 0px rgb(255 255 255 / 20%),
					0px -1px 0px rgb(0 0 0 / 70%);
			}
			&.mobile {
				width: auto;
				/* display: grid;
				place-content: center;
				.primary-text {
					font-size: 1.4rem;
				} */
			}
		}
		.status-wrapper {
			display: grid;
			place-content: center;
			width: 50px;
			.card-icon {
				font-size: 2.5rem;
				color: ${({ theme }) => theme.primaryColor};
			}
			.song-status-icon {
				font-size: 3rem;
				color: ${({ theme }) => theme.primaryColor};
			}
			.yt-icon {
				font-size: 4rem;
			}

			.file-download-icon {
				cursor: pointer;
				font-size: 3rem;
			}
			&.hide {
				display: none;
			}
		}
	}
`;

export default SongCard;
