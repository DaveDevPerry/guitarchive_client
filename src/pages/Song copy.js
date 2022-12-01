import { motion } from 'framer-motion';
import React, { useEffect } from 'react';
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
	// FaEdit,
} from 'react-icons/fa';
import { ImYoutube2 } from 'react-icons/im';
import { GiMetronome } from 'react-icons/gi';
import { CgCamera } from 'react-icons/cg';
import { BiArchiveOut, BiArchive } from 'react-icons/bi';
import { MdDeleteForever } from 'react-icons/md';
import { log } from '../utils/helper';
import { IoMusicalNotes } from 'react-icons/io5';
import { TbNumbers } from 'react-icons/tb';
import { TiArrowBack } from 'react-icons/ti';
import EditSongButton from '../features/song/EditSongButton';
import EditSongModal from '../features/song/EditSongModal';
import Tooltip from '../components/Tooltip';
import toast from 'react-hot-toast';
import DeleteSongModal from '../features/song/DeleteSongModal';

const Song = () => {
	// const { dataLoaded } = useStateContext();
	// const [currentId, setCurrentId] = useState(null);
	// const { song } = useSongsContext();
	const { user } = useAuthContext();

	// const currentDay = new Date(new Date().setHours(0, 0, 0, 0));

	// let navigate = useNavigate();
	// useEffect(() => {
	// 	if (dataLoaded === false) {
	// 		navigate('/');
	// 	}
	// }, [navigate, dataLoaded]);

	const { song, dispatch } = useSongsContext();
	// const { gig,gigCounterData, dispatch } = useGigsContext();
	const {
		songToView,
		setArtistToView,
		setArrangerToView,
		isEditFormOpen,
		isDeleteFormOpen,
		setIsDeleteFormOpen,
		// setIsEditFormOpen,
		dataLoaded,
	} = useStateContext();

	let navigate = useNavigate();
	useEffect(() => {
		if (dataLoaded === false) {
			navigate('/');
		}
	}, [navigate, dataLoaded]);

	useEffect(() => {
		// log(gigToView, ' gig id to view  in gig');

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
				// setBandDetailsData(bandData);
				// setBandSupportGigsData(bandSupportData);
				// setBandHeadlineGigsData(bandHeadlineData);
				// setBandAllGigsData(bandAllData);
				dispatch({
					type: 'SET_SONG',
					payload: songAllData[0],
				});
				// log(bandData, 'res ok band data');
				// log(sortedByDate, 'res ok sorted band data');
			}
		};
		if (user) {
			fetchSong();
		}
	}, [songToView, dispatch, user]);

	const handleDelete = async () => {
		if (!user) {
			// setError('You must be logged in');
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
			// toast.success(`${headline_band} gig successfully added.`, {
			duration: 3000,
			style: {
				border: '2px solid #1da000',
			},
		});
	};

	return (
		<StyledSong
			initial={{ width: 0 }}
			animate={{ width: '100%' }}
			exit={{ x: window.innerWidth }}
		>
			{isEditFormOpen === true && <EditSongModal />}
			{isDeleteFormOpen === true && (
				<DeleteSongModal
					handleDelete={handleDelete}
					handleCancel={handleCancel}
				/>
			)}
			{song && (
				<>
					<div className='nav-btns-container'>
						<TiArrowBack
							className='back-icon'
							onClick={() => {
								navigate('/songs');
							}}
						/>
						<MdDeleteForever
							className='delete-icon'
							onClick={() => {
								isDeleteFormOpen === true
									? setIsDeleteFormOpen(false)
									: setIsDeleteFormOpen(true);
							}}
						/>
						<EditSongButton />
					</div>

					<StyledSongDetails className='songs-details-container'>
						<div className='song-wrapper'>
							<p className='primary-text'>{song.title}</p>
							<h4
								className='secondary-text'
								onClick={(e) => {
									e.preventDefault();
									log(song.artist._id, 'song artist id on click');
									setArtistToView(song.artist._id);
									navigate('/artist');
								}}
							>
								{song.artist.name}
							</h4>
						</div>

						<div className='artist-wrapper'>
							<div className='rating-wrapper'>
								{[...Array(song.difficulty)].map((elementInArray, index) => (
									<FaStar key={index} className='star-on' />
								))}
								{[...Array(5 - song.difficulty)].map(
									(elementInArray, index) => (
										<FaRegStar key={index} className='star-off' />
									)
								)}
							</div>
							<p
								className='primary-text smaller'
								onClick={(e) => {
									e.preventDefault();
									log(song.arranger._id, 'song arranger id on click');
									setArrangerToView(song.arranger._id);
									navigate('/arranger');
								}}
							>
								{song.arranger.name}
							</p>
						</div>
						<div className='favourite-wrapper'>
							{song.isFavourite === true ? (
								<FaHeart className='card-icon heart-on' />
							) : (
								<FaRegHeart className='card-icon heart-off' />
							)}
						</div>

						<div className='deadline-wrapper'>
							{song.deadlineDate && (
								<p className='primary-text'>
									{format(parseISO(song.deadlineDate), 'dd/MM/yyyy')}
								</p>
							)}
							{song.reason && <h4 className='secondary-text'>{song.reason}</h4>}
						</div>
						<div className='file-wrapper'>
							{song.fileType === 'pdf' ? (
								<Tooltip content='pdf file' direction='left'>
									<img src='/images/pdf_icon.png' alt='pdf' />
								</Tooltip>
							) : (
								<Tooltip content='guitar pro file' direction='left'>
									<img src='/images/gp_icon.png' alt='guitar pro' />
								</Tooltip>
							)}
							{song.selectedFile && (
								<a href={song.selectedFile} download>
									<FaCloudDownloadAlt className='file-download-icon card-icon' />
								</a>
							)}
							{song.isTab ? (
								<Tooltip content='tablature' direction='right'>
									<TbNumbers className='music-type-icon' />
								</Tooltip>
							) : (
								<Tooltip content='music score' direction='right'>
									<IoMusicalNotes className='music-type-icon' />
								</Tooltip>
							)}
						</div>
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
							<h5>{song.status.name}</h5>
						</div>
					</StyledSongDetails>
				</>
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
	.nav-btns-container {
		display: flex;
		justify-content: space-between;
		align-items: center;
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
`;

const StyledSongDetails = styled.div`
	row-gap: 1rem;
	transition: all 200ms linear;
	text-align: center;
	.song-wrapper,
	.artist-wrapper {
		padding: 1rem;
	}
	.song-wrapper {
		.primary-text {
			color: rgba(105, 54, 25, 1);
			font-size: 4rem;
			text-align: center;
			line-height: 4rem;
			margin: 0;
			text-transform: capitalize;
			&.smaller {
				font-size: 3rem;
			}
		}
		h4 {
			margin-top: 1rem;
		}

		.secondary-text {
			color: rgb(199, 88, 29);
			text-transform: uppercase;
			font-size: 2.2rem;
			margin: 0;
			cursor: pointer;
		}
	}
	.artist-wrapper {
		padding: 1rem;
		.primary-text {
			text-transform: capitalize;
			cursor: pointer;
			&.smaller {
				font-size: 3rem;
			}
		}
	}
	.favourite-wrapper {
		.heart-on {
			color: ${({ theme }) => theme.red};
			font-size: 4rem;
		}
		.heart-off {
			color: ${({ theme }) => theme.darkBrown};
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
		flex: 1;
		padding: 1rem;
		display: flex;
		justify-content: center;
		align-items: center;
		column-gap: 2rem;
		cursor: pointer;
		a {
			text-decoration: none;
			.file-download-icon {
				cursor: pointer;
				font-size: 4rem;
				color: rgb(199, 88, 29);
			}
		}
		.music-type-icon {
			cursor: pointer;
			font-size: 3rem;
		}
	}
	.status-wrapper {
		padding: 1rem;
		display: flex;
		justify-content: center;
		align-items: center;
		column-gap: 1rem;
		h5 {
			color: rgba(105, 54, 25, 1);
			font-size: 2.6rem;
			margin: 0;
		}
		.status-icon {
			font-size: 3rem;
			color: ${({ theme }) => theme.darkBrown};
		}
		.yt-icon {
			font-size: 4.5rem;
			color: rgb(199, 88, 29);
		}
	}
	.deadline-wrapper {
		flex: 1;
		padding: 1rem;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		.primary-text {
			color: rgba(105, 54, 25, 1);
			font-size: 2.4rem;
			text-align: center;
			line-height: 4rem;
			margin: 0;
			&.smaller {
				font-size: 3rem;
			}
		}
		.secondary-text {
			color: rgb(199, 88, 29);
			text-transform: uppercase;
			font-size: 2.2rem;
			margin: 0;
		}
	}
	.star-on {
		color: rgb(199, 88, 29);
		font-size: 3rem;
	}
	.star-off {
		color: rgba(105, 54, 25, 1);
		font-size: 3rem;
	}
`;

export default Song;
