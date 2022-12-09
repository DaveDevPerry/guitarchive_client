import React from 'react';
import styled from 'styled-components';
import { SiStylelint } from 'react-icons/si';
import { IoHandLeftSharp } from 'react-icons/io5';
import { MdSpeakerNotes } from 'react-icons/md';
// import {
// 	FaRegStar,
// 	FaStar,
// 	FaRegHeart,
// 	FaHeart,
// 	FaGuitar,
// } from 'react-icons/fa';
// import { SiStylelint } from 'react-icons/si';
// import { IoHandLeftSharp } from 'react-icons/io5';
// import { BsFileEarmarkPdf } from 'react-icons/bs';
import { ImCheckmark } from 'react-icons/im';
import { GiGuitarHead } from 'react-icons/gi';
// import { CgCamera } from 'react-icons/cg';
// import { BiArchiveOut, BiArchive } from 'react-icons/bi';
// import { GoAlert } from 'react-icons/go';
// import { IoMusicalNotes } from 'react-icons/io5';
// import { TbNumbers } from 'react-icons/tb';
// import { format, parseISO } from 'date-fns';
// import { log } from '../../utils/helper';
// import { useNavigate } from 'react-router-dom';
// import { useStateContext } from '../../lib/context';
import { useViewport } from '../../hooks/useViewport';
import { motion } from 'framer-motion';
import Tooltip from '../../components/Tooltip';
// import { log } from '../../utils/helper';

const SongCard = ({ song, item }) => {
	// const { setSongToView } = useStateContext();
	const { width } = useViewport();
	const breakpoint = 620;
	// let navigate = useNavigate();
	return (
		<StyledSongCard
			className={`song-card-wrapper ${width < breakpoint ? 'mobile' : ''}`}
			variants={item}
		>
			<div
				className={`song-wrapper ${width < breakpoint ? 'mobile' : ''}`}
				// onClick={(e) => {
				// 	e.preventDefault();
				// 	log(song._id, 'song id on click');
				// 	setSongToView(song._id);
				// 	navigate('/song');
				// }}
			>
				<h3 className='primary-text'>{song.title}</h3>
				<h4 className='secondary-text'>{song.artist}</h4>
			</div>
			<div
				className={`notes-wrapper ${width < breakpoint ? 'mobile' : ''}`}
				// onClick={(e) => {
				// 	e.preventDefault();
				// 	log(song.notes, 'song id on click');
				// 	setSongToView(song._id);
				// 	navigate('/song');
				// }}
			>
				{/* <h3 className='primary-text'>{song.title}</h3>
				<h4 className='secondary-text'>{song.artist}</h4> */}
				{song.notes.length >= 1 && (
					<Tooltip content='notes' direction='left'>
						<MdSpeakerNotes className='notes-icon' />
					</Tooltip>
				)}
			</div>
			<div className={`file-wrapper ${width < breakpoint ? 'hide' : ''}`}>
				{/* {song.fileType === 'pdf' ? (
					<Tooltip content='pdf file' direction='left'>
						<BsFileEarmarkPdf className='status-icon pdf-icon' />
					</Tooltip>
				) : (
					<Tooltip content='guitar pro file' direction='left'>
						<FaGuitar className='status-icon guitar-icon' />
					</Tooltip>
				)} */}
				{song.style === 'fingerstyle' && (
					<Tooltip content='fingerstyle' direction='left'>
						<IoHandLeftSharp className='status-icon fingerstyle-icon' />
					</Tooltip>
				)}
				{song.style === 'electric' && (
					<Tooltip content='electric' direction='left'>
						<GiGuitarHead className='status-icon electric-icon' />
					</Tooltip>
				)}
				{song.style === 'classical' && (
					<Tooltip content='classical' direction='left'>
						<SiStylelint className='status-icon classical-icon' />
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
			<div className={`action-wrapper ${width < breakpoint ? 'hide' : ''}`}>
				<div className='action-icon-wrapper'>
					<ImCheckmark className='check-icon' />
				</div>
			</div>
			{/* <div className={`artist-wrapper ${width < breakpoint ? 'hide' : ''}`}>
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

			</div> */}
			{/* <div className={`status-wrapper ${width < breakpoint ? 'hide' : ''}`}>
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
			</div> */}
		</StyledSongCard>
	);
};
const StyledSongCard = styled(motion.div)`
	cursor: pointer;
	font-weight: bolder;
	background-color: rgba(0, 0, 0, 0.05);
	&:hover {
		background-color: rgba(0, 0, 0, 0);
	}
	&.song-card-wrapper {
		border-bottom: 1px solid ${({ theme }) => theme.borderColor};
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		column-gap: 2rem;
		padding: 0.5rem;

		.song-wrapper {
			flex: 1;
			padding-left: 1rem;
			.primary-text {
				color: ${({ theme }) => theme.primaryColor};
				text-transform: capitalize;
				font-weight: bolder;
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
				padding-left: 0.5rem;
				/* .primary-text {
					font-weight: lighter;
					text-shadow: none;
				}
				.secondary-text {
					color: ${({ theme }) => theme.secondaryColor};
					font-weight: lighter;
					text-shadow: none;
				} */
			}
		}
		.notes-wrapper {
			display: flex;
			align-items: center;
			column-gap: 0.5rem;
			color: ${({ theme }) => theme.primaryColor};
			&.hide {
				display: none;
			}

			.notes-icon {
				font-size: 3rem;
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

			.electric-icon {
				font-size: 3rem;
			}
			.fingerstyle-icon {
				font-size: 2.8rem;
			}
			.classical-icon {
				font-size: 3rem;
			}
		}
		.action-wrapper {
			display: flex;
			justify-content: center;
			align-items: center;
			column-gap: 1rem;
			padding: 0.2rem 1rem;
			.action-icon-wrapper {
				display: grid;
				place-content: center;
				width: 3rem;
				height: 3rem;
				background-color: ${({ theme }) => theme.green};
				border-radius: 0.4rem;
				.check-icon {
					font-size: 1.4rem;
					color: white;
					/* color: ${({ theme }) => theme.primaryColor}; */
				}
				&.hide {
					display: none;
				}
			}
		}
		&.mobile {
			column-gap: 0.5rem;
		}
	}
`;

export default SongCard;
