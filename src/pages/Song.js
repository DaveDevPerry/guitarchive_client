import { AnimatePresence, motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useAuthContext } from '../hooks/useAuthContext';
import { useStateContext } from '../lib/context';
import { useNavigate } from 'react-router-dom';
import { useSongsContext } from '../hooks/useSongContext';
import { format, parseISO } from 'date-fns';
import {
	FaCloudDownloadAlt,
	FaRegStar,
	FaStar,
	FaRegHeart,
	FaHeart,
	FaGuitar,
} from 'react-icons/fa';
import { BsFileEarmarkPdf } from 'react-icons/bs';
// import { ImYoutube2 } from 'react-icons/im';
import { TfiYoutube } from 'react-icons/tfi';

import { GiMetronome } from 'react-icons/gi';
import { CgCamera } from 'react-icons/cg';
import { BiArchiveOut, BiArchive } from 'react-icons/bi';
import { log } from '../utils/helper';
import { IoMusicalNotes } from 'react-icons/io5';
import { TbNumbers } from 'react-icons/tb';
import EditSongButton from '../features/song/EditSongButton';
import EditSongModal from '../features/song/EditSongModal';
import Tooltip from '../components/Tooltip';
import toast from 'react-hot-toast';
import DeleteSongModal from '../features/song/DeleteSongModal';
import { useViewport } from '../hooks/useViewport';
import DeleteSongButton from '../features/song/DeleteSongButton';
import BackButton from '../features/song/BackButton';
import DownloadSongButton from '../features/song/DownloadSongButton';
import { SiStylelint } from 'react-icons/si';
import { IoHandLeftSharp } from 'react-icons/io5';
import { Bars } from 'react-loader-spinner';

const Song = ({ theme }) => {
	const { user } = useAuthContext();
	const { width } = useViewport();
	const breakpoint = 620;
	const { song, dispatch } = useSongsContext();
	const {
		songToView,
		setArtistToView,
		setArrangerToView,
		isEditFormOpen,
		isDeleteFormOpen,
		setIsDeleteFormOpen,
		dataLoaded,
	} = useStateContext();

	let navigate = useNavigate();
	useEffect(() => {
		if (dataLoaded === false) {
			navigate('/');
		}
	}, [navigate, dataLoaded]);

	const [songLoaded, setSongLoaded] = useState(false);

	useEffect(() => {
		const fetchSong = async () => {
			const response = await fetch(
				`${process.env.REACT_APP_BACKEND_URL}/api/songs`,
				{
					headers: {
						Authorization: `Bearer ${user.token}`,
					},
				}
			);
			const json = await response.json();
			const clonedSongs = [...json];
			const songAllData = clonedSongs.filter((obj) => obj._id === songToView);
			log(songAllData, 'song all data - song');
			if (response.ok) {
				dispatch({
					type: 'SET_SONG',
					payload: songAllData[0],
				});
				setSongLoaded(true);
			}
		};
		if (user) {
			fetchSong();
		}
	}, [songToView, dispatch, user]);
	const handleDelete = async () => {
		if (!user) {
			return;
		}

		const response = await fetch(
			`${process.env.REACT_APP_BACKEND_URL}/api/songs/${songToView}`,
			{
				method: 'DELETE',
				headers: {
					Authorization: `Bearer ${user.token}`,
				},
			}
		);
		const json = await response.json();
		log(json, 'delete json');
		if (response.ok) {
			dispatch({ type: 'DELETE_SONG', payload: songToView });
			setIsDeleteFormOpen(false);
			notify();
			navigate('/');
		}
	};
	const handleCancel = async () => {
		setIsDeleteFormOpen(false);
	};

	// create a toast
	const notify = () => {
		toast.success(`song successfully deleted.`, {
			duration: 3000,
			style: {
				border: '2px solid #1da000',
			},
		});
	};

	const container = {
		hidden: { opacity: 1 },
		show: {
			opacity: 1,
			delay: 2,
			transition: {
				staggerChildren: 0.2,
				// delayChildren: 0.5
			},
		},
	};

	const item = {
		hidden: { opacity: 0 },
		show: { opacity: 1 },
		exit: { opacity: 0 },
	};

	return (
		<StyledSong
			initial={{ width: 0 }}
			// transition={{ delay: 0.5 }}
			animate={{ width: '100%' }}
			exit={{ x: window.innerWidth }}
			className={`song-page page ${width < breakpoint ? 'mobile' : ''}`}
		>
			<AnimatePresence mode='wait'>
				{isEditFormOpen === true && <EditSongModal />}
				{isDeleteFormOpen === true && (
					<DeleteSongModal
						handleDelete={handleDelete}
						handleCancel={handleCancel}
						theme={theme}
					/>
				)}
			</AnimatePresence>
			{song && (
				<StyledSongContainer
					id={`${theme === 'dark' ? 'dark' : 'light'}`}
					className={`${width < breakpoint ? 'mobile' : ''}`}
				>
					<div className='songs-list-header'>
						<div className='nav-btns-container'>
							<BackButton />
							<DownloadSongButton song={song} />
						</div>
					</div>

					{songLoaded === true ? (
						<AnimatePresence mode='wait'>
							<StyledSongDetails
								className={`song-details-container ${
									width < breakpoint ? 'mobile' : ''
								}`}
								variants={container}
								initial='hidden'
								animate='show'
							>
								<motion.div className='song-wrapper' variants={item}>
									<p className='primary-text'>{song.title}</p>
									<h4
										className='secondary-text'
										onClick={(e) => {
											e.preventDefault();
											log(song.artist.name, 'song artist id on click');
											setArtistToView(song.artist.name);
											navigate('/artist');
										}}
									>
										{song.artist.name}
									</h4>
								</motion.div>
								<motion.div
									className='favourite-status-container'
									variants={item}
								>
									<div className='heart-wrapper'>
										{song.isFavourite === true ? (
											<FaHeart className='card-icon heart-on' />
										) : (
											<FaRegHeart className='card-icon heart-off' />
										)}
									</div>
								</motion.div>
								<motion.div className='artist-wrapper' variants={item}>
									<p
										className='primary-text smaller'
										onClick={(e) => {
											e.preventDefault();
											log(song.arranger.name, 'song arranger id on click');
											setArrangerToView(song.arranger.name);
											navigate('/arranger');
										}}
									>
										{song.arranger.name}
									</p>
									<div className='rating-wrapper'>
										{[...Array(song.difficulty)].map(
											(elementInArray, index) => (
												<FaStar key={index} className='star-on' />
											)
										)}
										{[...Array(5 - song.difficulty)].map(
											(elementInArray, index) => (
												<FaRegStar key={index} className='star-off' />
											)
										)}
									</div>
								</motion.div>
								{song.isCapo ? (
									<motion.p className='capo-status' variants={item}>
										Capo on {song.capoFret}
									</motion.p>
								) : (
									<motion.p className='capo-status' variants={item}>
										No Capo
									</motion.p>
								)}
								{/* <motion.div
									className='line-wrapper'
									variants={item}
								></motion.div> */}
								{/* <motion.div className='favourite-wrapper' variants={item}>
									{song.isFavourite === true ? (
										<FaHeart className='card-icon heart-on' />
									) : (
										<FaRegHeart className='card-icon heart-off' />
									)}
								</motion.div> */}

								<motion.div className='file-wrapper' variants={item}>
									{song.fileType === 'pdf' ? (
										<Tooltip content='pdf file' direction='bottom'>
											<BsFileEarmarkPdf className='status-icon pdf-icon' />
										</Tooltip>
									) : (
										<Tooltip content='guitar pro file' direction='bottom'>
											<FaGuitar className='status-icon guitar-icon' />
										</Tooltip>
									)}
									{song.style.name === 'fingerstyle' && (
										<Tooltip content='fingerstyle' direction='bottom'>
											<IoHandLeftSharp className='status-icon fingerstyle-icon' />
										</Tooltip>
									)}
									{song.style.name === 'classical' && (
										<Tooltip content='classical' direction='bottom'>
											<SiStylelint className='status-icon classical-icon' />
										</Tooltip>
									)}
									{song.selectedFile && (
										<a href={song.selectedFile} download>
											<FaCloudDownloadAlt className='file-download-icon card-icon' />
										</a>
									)}
									{song.isTab ? (
										<Tooltip content='tablature' direction='bottom'>
											<TbNumbers className='music-type-icon' />
										</Tooltip>
									) : (
										<Tooltip content='music score' direction='bottom'>
											<IoMusicalNotes className='music-type-icon' />
										</Tooltip>
									)}
									{song.status.name === 'Recorded' && (
										<Tooltip content='recorded' direction='bottom'>
											<TfiYoutube className='card-icon status-icon youtube-channel-icon' />
											{/* <ImYoutube2 className='card-icon status-icon yt-icon' /> */}
										</Tooltip>
									)}
									{song.status.name === 'Practicing' && (
										<Tooltip content='practicing' direction='bottom'>
											<GiMetronome className='card-icon status-icon' />
										</Tooltip>
									)}
									{song.status.name === 'Ready' && (
										<Tooltip content='ready to record' direction='bottom'>
											<CgCamera className='card-icon status-icon' />
										</Tooltip>
									)}
									{song.status.name === 'Backlog' && (
										<Tooltip content='backlog' direction='bottom'>
											<BiArchiveOut className='card-icon status-icon' />
										</Tooltip>
									)}
									{song.status.name === 'Archived' && (
										<Tooltip content='archived' direction='bottom'>
											<BiArchive className='card-icon status-icon' />
										</Tooltip>
									)}
								</motion.div>
								{song.deadlineDate && (
									<motion.div className='deadline-wrapper' variants={item}>
										<p className='primary-text'>
											{format(parseISO(song.deadlineDate), 'dd/MM/yyyy')}
										</p>
										{song.reason && (
											<h4 className='secondary-text'>{song.reason}</h4>
										)}
									</motion.div>
								)}
							</StyledSongDetails>
						</AnimatePresence>
					) : (
						<StyledSongDetails
							className={`song-details-container loading ${
								width < breakpoint ? 'mobile' : ''
							}`}
						>
							<div className='loader-center'>
								<Bars
									height='100'
									width='100'
									color='#7f0101'
									ariaLabel='bars-loading'
									wrapperStyle={{}}
									wrapperClass=''
									visible={true}
								/>
							</div>
						</StyledSongDetails>
					)}

					<div className='songs-list-header'>
						<div className='nav-btns-container'>
							<DeleteSongButton />
							<EditSongButton />
						</div>
					</div>
				</StyledSongContainer>
			)}
		</StyledSong>
	);
};
const StyledSong = styled(motion.div)`
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	max-width: 100rem;
	padding: 0.5rem 1rem;
	overflow-y: auto;
	z-index: 1;
	transition: all 200ms linear;
	margin: 0 auto;
	flex: 1;
	overflow-y: hidden;
	row-gap: 1rem;
	&.mobile {
		padding: 0;
	}
`;

const StyledSongDetails = styled(motion.div)`
	row-gap: 1rem;
	transition: all 200ms linear;
	text-align: center;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: center;
	overflow-y: auto;
	padding: 0.5rem;
	padding-right: 0;
	scroll-behavior: smooth;
	scroll-behavior: smooth;
	scrollbar-width: normal;
	scrollbar-color: ${({ theme }) => theme.lightBrown};
	flex: 1;
	border: 1px solid ${({ theme }) => theme.darkBrown};
	border-radius: 0.4rem;
	box-shadow: inset 3px 3px 4px rgba(0, 0, 0, 0005),
		inset -2px -2px 2px rgba(0, 0, 0, 08);
	background-color: rgba(0, 0, 0, 0.1);
	padding: 2rem 2rem;
	&.mobile {
		row-gap: 1rem;
		.song-wrapper,
		.artist-wrapper {
			padding: 0;
		}
		.song-wrapper {
			.primary-text {
				font-size: 3rem;
				line-height: 3rem;
				&.smaller {
					font-size: 2rem;
				}
			}
			.secondary-text {
				font-size: 2.4rem;
			}
		}
		.artist-wrapper {
			.primary-text {
				&.smaller {
					font-size: 2.4rem;
				}
			}
		}
		.favourite-wrapper {
			display: none;
			.heart-on {
				font-size: 3rem;
			}
			.heart-off {
				font-size: 3rem;
			}
		}
		.lists-wrapper {
			.category-type {
				font-size: 2rem;
				color: ${({ theme }) => theme.darkBrown};
			}
			.genre-wrapper {
				display: flex;
				justify-content: center;
				align-items: center;
				column-gap: 2rem;
				p {
					font-size: 1.8rem;
					color: ${({ theme }) => theme.lightBrown};
					font-weight: bolder;
				}
			}
		}

		.file-wrapper {
			padding: 0rem;
			a {
				text-decoration: none;
				display: none;
				.file-download-icon {
					cursor: pointer;
					font-size: 5rem;
					color: ${({ theme }) => theme.secondaryColor};
				}
			}
			.music-type-icon {
				cursor: pointer;
				font-size: 4rem;
				color: ${({ theme }) => theme.primaryColor};
			}
			.img-container {
				background-color: ${({ theme }) => theme.primaryColor};
				padding: 0.5rem;
				border-radius: 1rem;
				img {
					height: 4rem;
				}
			}
			.status-icon {
				font-size: 3.5rem;
				color: ${({ theme }) => theme.primaryColor};
			}
			.yt-icon {
				font-size: 5.5rem;
			}
			.fingerstyle-icon {
				font-size: 3rem;
			}
			.classical-icon {
				font-size: 3rem;
			}
			.pdf-icon {
				font-size: 3rem;
			}
			.guitar-icon {
				font-size: 3rem;
			}
		}
		.deadline-wrapper {
			.primary-text {
				font-size: 2.4rem;
				line-height: 2.4rem;
				&.smaller {
					font-size: 3rem;
				}
			}
			.secondary-text {
				text-transform: uppercase;
				font-size: 2.2rem;
				margin: 0;
				color: ${({ theme }) => theme.secondaryColor};
				text-shadow: 0px 1px 0px rgb(255 255 255 / 20%),
					0px -1px 0px rgb(0 0 0 / 70%);
			}
		}
		.star-on {
			color: ${({ theme }) => theme.secondaryColor};
			font-size: 2.5rem;
		}
		.star-off {
			color: ${({ theme }) => theme.primaryColor};
			font-size: 2.5rem;
		}
	}
	&.loading {
		flex: 1;
		display: flex;
		justify-content: center;
		align-items: center;
		transition: all 200ms linear;
		.loader-center {
			margin: 0;
			flex: 1;
			display: flex;
			justify-content: center;
			align-items: center;
		}
	}
	.song-wrapper,
	.artist-wrapper {
		padding: 1rem;
	}
	.song-wrapper {
		.primary-text {
			font-size: 4rem;
			text-align: center;
			line-height: 4rem;
			margin: 0;
			color: ${({ theme }) => theme.primaryColor};
			text-transform: capitalize;
			font-weight: bolder;
			text-shadow: 0px 1px 0px rgb(255 255 255 / 20%),
				0px -1px 0px rgb(0 0 0 / 70%);
			&.smaller {
				font-size: 3rem;
			}
		}
		h4 {
			margin-top: 1rem;
		}
		.secondary-text {
			text-transform: uppercase;
			font-size: 3rem;
			margin: 0;
			cursor: pointer;
			color: ${({ theme }) => theme.secondaryColor};
			text-shadow: 0px 1px 0px rgb(255 255 255 / 20%),
				0px -1px 0px rgb(0 0 0 / 70%);
		}
	}
	.favourite-status-container {
		display: flex;
		justify-content: center;
		align-items: center;
		/* border: 1px solid; */
		.heart-wrapper {
			display: grid;
			place-content: center;
			.heart-on {
				font-size: 4.5rem;
				color: ${({ theme }) => theme.red};
			}
			.heart-off {
				font-size: 4.5rem;
			}
		}
	}
	.artist-wrapper {
		padding: 1rem;
		.primary-text {
			text-transform: capitalize;
			cursor: pointer;
			color: ${({ theme }) => theme.primaryColor};
			text-transform: capitalize;
			font-weight: bolder;
			text-shadow: 0px 1px 0px rgb(255 255 255 / 20%),
				0px -1px 0px rgb(0 0 0 / 70%);
			&.smaller {
				font-size: 3rem;
			}
		}
	}
	.capo-status {
		text-transform: uppercase;
		font-size: 2rem;
		color: ${({ theme }) => theme.primaryColor};
		/* text-transform: capitalize; */
		font-weight: bolder;
		text-shadow: 0px 1px 0px rgb(255 255 255 / 20%),
			0px -1px 0px rgb(0 0 0 / 70%);
	}
	.line-wrapper {
		width: 20rem;
		border-bottom: 2px solid ${({ theme }) => theme.primaryColor};
		display: none;
	}
	.favourite-wrapper {
		display: none;
		.heart-on {
			color: ${({ theme }) => theme.red};
			font-size: 4rem;
		}
		.heart-off {
			color: ${({ theme }) => theme.primaryColor};
			font-size: 4rem;
		}
	}
	.lists-wrapper {
		.category-type {
			font-size: 2rem;
			color: ${({ theme }) => theme.darkBrown};
		}
		.genre-wrapper {
			display: flex;
			justify-content: center;
			align-items: center;
			column-gap: 2rem;
			p {
				font-size: 1.8rem;
				color: ${({ theme }) => theme.lightBrown};
				font-weight: bolder;
			}
		}
	}

	.file-wrapper {
		padding: 1rem;
		display: flex;
		justify-content: center;
		align-items: center;
		column-gap: 2rem;
		cursor: pointer;
		a {
			text-decoration: none;
			display: none;
			.file-download-icon {
				cursor: pointer;
				font-size: 5rem;
				color: ${({ theme }) => theme.secondaryColor};
			}
		}
		.music-type-icon {
			cursor: pointer;
			font-size: 4rem;
			color: ${({ theme }) => theme.primaryColor};
		}
		.img-container {
			background-color: ${({ theme }) => theme.primaryColor};
			padding: 0.5rem;
			border-radius: 1rem;
			img {
				height: 4rem;
			}
		}
		.status-icon {
			font-size: 4.5rem;
			color: ${({ theme }) => theme.primaryColor};
		}
		.yt-icon {
			font-size: 6.5rem;
		}
		.fingerstyle-icon {
			font-size: 4rem;
		}
		.classical-icon {
			font-size: 4rem;
		}
		.pdf-icon {
			font-size: 4rem;
		}
		.guitar-icon {
			font-size: 4rem;
		}
	}
	.status-wrapper {
		padding: 1rem;
		display: flex;
		justify-content: center;
		align-items: center;
		column-gap: 1rem;
		h5 {
			color: ${({ theme }) => theme.primaryColor};
			font-size: 2.6rem;
			margin: 0;
		}
		.status-icon {
			font-size: 3rem;
			color: ${({ theme }) => theme.primaryColor};
		}
		.yt-icon {
			font-size: 4.5rem;
			color: ${({ theme }) => theme.secondaryColor};
		}
		.youtube-channel-icon {
			font-size: 4rem;
			color: ${({ theme }) => theme.secondaryColor};
		}
	}
	.deadline-wrapper {
		padding: 1rem;
		display: flex;
		width: 100%;
		flex-direction: column;
		justify-content: flex-start;
		align-items: center;
		flex: 1;
		.primary-text {
			color: ${({ theme }) => theme.primaryColor};
			text-shadow: 0px 1px 0px rgb(255 255 255 / 20%),
				0px -1px 0px rgb(0 0 0 / 70%);
			font-size: 2.4rem;
			text-align: center;
			line-height: 4rem;
			margin: 0;
			font-weight: bolder;
			&.smaller {
				font-size: 3rem;
			}
		}
		.secondary-text {
			text-transform: uppercase;
			font-size: 2.2rem;
			margin: 0;
			color: ${({ theme }) => theme.secondaryColor};
			text-shadow: 0px 1px 0px rgb(255 255 255 / 20%),
				0px -1px 0px rgb(0 0 0 / 70%);
		}
	}
	.star-on {
		color: ${({ theme }) => theme.secondaryColor};
		font-size: 3rem;
	}
	.star-off {
		color: ${({ theme }) => theme.primaryColor};
		font-size: 3rem;
	}
`;

const StyledSongContainer = styled.div`
	padding: 2rem;
	border-radius: 1rem;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	background-repeat: no-repeat;
	background-size: cover;
	row-gap: 1rem;
	box-shadow: 3px 3px 4px rgb(0 0 0);
	overflow-y: hidden;
	flex: 1;
	&#dark {
		background-image: url('/images/black wood.webp');
	}
	&#light {
		background-image: url('/images/white wood.webp');
	}
	&.mobile {
		border-radius: 0rem;
		padding: 1rem 1rem 0;
	}
	.songs-list-header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		.list-filter-value {
			font-size: 2.5rem;
			text-transform: capitalize;
			color: ${({ theme }) => theme.primaryColor};
			color: black;
			font-weight: bolder;
			line-height: 1;
			padding-left: 0.5rem;
			text-shadow: 0px 1px 0px rgb(255 255 255 / 30%),
				0px -1px 0px rgb(0 0 0 / 70%);
			&.mobile {
				font-size: 2.2rem;
			}
		}
		.nav-btns-container {
			display: flex;
			/* justify-content: center; */
			justify-content: space-between;
			align-items: center;
			column-gap: 1rem;
			flex: 1;
			color: ${({ theme }) => theme.secondaryColor};
			button {
				width: 18rem;
				display: flex;
				justify-content: center;
				a {
					display: flex;
					justify-content: center;
				}
			}
			.heart-wrapper {
				display: grid;
				place-content: center;
				.heart-on {
					font-size: 2.5rem;
				}
				.heart-off {
					font-size: 2.5rem;
				}
			}
			.back-icon {
				font-size: 4rem;
				cursor: pointer;
			}
			.edit-icon {
				font-size: 2.5rem;
				cursor: pointer;
			}
			.delete-icon {
				font-size: 3rem;
				cursor: pointer;
			}
		}
	}
`;

export default Song;
