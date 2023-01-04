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
import { HiDotsVertical } from 'react-icons/hi';
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
import { AnimatePresence, motion } from 'framer-motion';
import Tooltip from '../../components/Tooltip';
import { log } from '../../utils/helper';
import { useRequestsContext } from '../../hooks/useRequestContext';
import { useAuthContext } from '../../hooks/useAuthContext';
import { toast } from 'react-hot-toast';
import { useStateContext } from '../../lib/context';
// import { log } from '../../utils/helper';

const SongCard = ({ song, item, handleOptions, index }) => {
	const { showOptions, setShowOptions, setShowNotes } = useStateContext();
	const { user } = useAuthContext();
	const { width } = useViewport();
	const breakpoint = 620;

	const { dispatch } = useRequestsContext();
	// let navigate = useNavigate();

	const handleSubmit = async (id) => {
		// e.preventDefault();
		log(id, 'id');

		const updatedSongData = {
			songID: id,
			isComplete: !song.isComplete,
			// isComplete: true,
		};

		const response = await fetch(
			`${process.env.REACT_APP_BACKEND_URL}/api/requests/${id}`,
			{
				method: 'PATCH',
				headers: {
					'Content-Type': 'application/json',
					Authorization: `Bearer ${user.token}`,
				},
				body: JSON.stringify({ updatedSongData }),
			}
		);
		const json = await response.json();
		log(json, 'new song json');

		if (response.ok) {
			dispatch({
				type: 'UPDATE_SONG',
				payload: json,
			});
			log('here');
		}
	};
	const handleDelete = async (id) => {
		// e.preventDefault();
		log(id, 'id');

		// const updatedSongData = {
		// 	songID: id,
		// 	isComplete: true,
		// };

		const response = await fetch(
			`${process.env.REACT_APP_BACKEND_URL}/api/requests/${id}`,
			{
				method: 'DELETE',
				headers: {
					'Content-Type': 'application/json',
					Authorization: `Bearer ${user.token}`,
				},
				// body: JSON.stringify({ updatedSongData }),
			}
		);
		const json = await response.json();
		log(json, 'new song json');

		if (response.ok) {
			dispatch({
				type: 'DELETE_SONG',
				payload: id,
			});
			log('here');
		}
	};

	// create a toast
	const notify = (songTitle) => {
		toast.success(`${songTitle} deleted from requests.`, {
			duration: 2000,
			style: {
				border: '2px solid #1da000',
				textAlign: 'center',
			},
		});
	};
	// clear();
	// setIsEditFormOpen(false);
	// notify();
	// navigate('/');
	// };

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
				<h2 className='primary-text'>{song.title}</h2>
				<h3 className='secondary-text'>{song.artist}</h3>
			</div>
			<div
				className={`notes-wrapper ${width < breakpoint ? 'mobile' : ''}`}
				onClick={(e) => {
					e.preventDefault();
					log(song.notes, 'song id on click');
					setShowNotes(true);
					// navigate('/song');
				}}
			>
				{/* <h3 className='primary-text'>{song.title}</h3>
				<h4 className='secondary-text'>{song.artist}</h4> */}
				{song.notes.length >= 1 && <MdSpeakerNotes className='notes-icon' />}
				{/* {song.notes.length >= 1 && (
					<Tooltip content='notes' direction='left'>
						<MdSpeakerNotes className='notes-icon' />
					</Tooltip>
				)} */}
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
				{song.isComplete === true ? (
					<div
						className='action-icon-wrapper off'
						onClick={() => {
							// e.preventDefault();
							// log(song._id, 'song id on click');
							// setSongToView(song._id);
							handleSubmit(song._id);
						}}
					>
						<ImCheckmark className='check-icon' />
					</div>
				) : (
					<div
						className='action-icon-wrapper'
						onClick={() => {
							// e.preventDefault();
							// log(song._id, 'song id on click');
							// setSongToView(song._id);
							handleSubmit(song._id);
						}}
					>
						<ImCheckmark className='check-icon' />
					</div>
				)}
			</div>

			<div className='options-wrapper'>
				<div
					className='options-icon-wrapper'
					onClick={(e) => {
						// e.preventDefault();
						// log(song._id, 'song id on click');
						// setSongToView(song._id);
						handleDelete(song._id);
						handleOptions(e, song._id, index);
					}}
				>
					<HiDotsVertical className='options-icon' />
				</div>
				<AnimatePresence mode='wait'>
					{showOptions === index && (
						<motion.div
							className='options-modal'
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}
						>
							<p
								onClick={() => {
									log(song.title, 'for notify');
									// handleDelete(song._id);
									// removeSongFromPlaylist(song._id, playlist._id);
									notify(song.title);
									setTimeout(() => {
										setShowOptions(false);
									}, 2000);
								}}
							>
								delete
							</p>
						</motion.div>
					)}
				</AnimatePresence>
			</div>

			{/* <div className='playlist_btns_group'>
								<button className='fav_song playlist_btn'>
									<FiHeart className='far fa-heart fa-lg' />
								</button>
								<button
									className='options_song playlist_btn'
									onClick={(e) => {
										handleOptions(e, song.title, i);
									}}
								>
									<FaEllipsisV className='fas fa-ellipsis-v fa-lg' />
								</button>
								
							</div> */}
			{/* <div className="options-icon-wrapper">
					<HiDotsVertical className='options-icon' />
				</div> */}
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
				transition: all 200ms linear;
				.check-icon {
					font-size: 1.4rem;
					color: white;
					/* color: ${({ theme }) => theme.primaryColor}; */
				}
				&.hide {
					display: none;
				}
				&.off {
					background-color: ${({ theme }) => theme.filterBorder};
				}
			}
		}
		.options-wrapper {
			position: relative;
			display: grid;
			place-content: center;
			.options-icon-wrapper {
				display: grid;
				place-content: center;
				width: 3rem;
				/* height: 3rem; */
				/* background-color: ${({ theme }) => theme.green}; */
				/* border-radius: 0.4rem; */
				transition: all 200ms linear;
				.options-icon {
					font-size: 3rem;
				}
			}
			.options-modal {
				position: absolute;
				right: 100%;
				top: 50%;
				transform: translateY(-50%);
				height: calc(100% - 1rem);
				background-color: ${({ theme }) => theme.secondaryColor};
				color: white;
				width: max-content;
				border-radius: 0.5rem;
				padding: 0.5rem;
				display: grid;
				place-content: center;
				p {
					text-transform: uppercase;
					font-weight: bold;
					padding: 0 1rem;
				}
			}
		}
		&.mobile {
			column-gap: 0.5rem;
		}
	}
`;

export default SongCard;
