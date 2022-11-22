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
} from 'react-icons/fa';
import { ImYoutube2 } from 'react-icons/im';
import { GiMetronome } from 'react-icons/gi';
import { CgCamera } from 'react-icons/cg';
import { BiArchiveOut, BiArchive } from 'react-icons/bi';
import { log } from '../utils/helper';

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
	const { songToView, dataLoaded } = useStateContext();

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

	return (
		<StyledSongs
			initial={{ width: 0 }}
			animate={{ width: '100%' }}
			exit={{ x: window.innerWidth }}
		>
			{song && (
				<StyledSongDetails className='songs-details-container'>
					<div className='song-wrapper'>
						<p className='primary-text'>{song.title}</p>
						{/* <Link href={'../composers/' + song.composer.slug}> */}
						<h4 className='secondary-text'>{song.artist.name}</h4>
						{/* </Link> */}
						{/* <Link href={'../composers/' + song.composer.slug}>
					<h4 className='secondary-text'>{song.composer.name}</h4>
				</Link> */}
					</div>

					<div className='artist-wrapper'>
						<div className='rating-wrapper'>
							{[...Array(song.difficulty)].map((elementInArray, index) => (
								<FaStar key={index} className='star-on' />
							))}
							{[...Array(5 - song.difficulty)].map((elementInArray, index) => (
								<FaRegStar key={index} className='star-off' />
							))}
						</div>
						{/* <Link href={'../arrangers/' + song.arranger.slug}> */}
						<p className='primary-text smaller'>{song.arranger.name}</p>
						{/* </Link> */}
					</div>
					<div className='favourite-wrapper'>
						{song.isFavourite === true ? (
							<FaHeart className='card-icon heart-on' />
						) : (
							<FaRegHeart className='card-icon heart-off' />
						)}
					</div>
					{/* <div className='lists-wrapper'>
						<h5 className='category-type'>{song.category}</h5>

						<div className='genre-wrapper'>
							{song.genre.map((genre, index) => (
								<p key={index}>{genre}</p>
							))}
						</div>
						<h5 className='category-type'>{song.genre}</h5>
					</div> */}
					<div className='deadline-wrapper'>
						{song.deadlineDate && (
							<p className='primary-text'>
								{format(parseISO(song.deadlineDate), 'dd/MM/yyyy')}
							</p>
						)}
						{song.reason && <h4 className='secondary-text'>{song.reason}</h4>}
					</div>
					{/* <p>{song.songStatus}</p> */}
					{/* <p>{song.deadline}</p> */}
					{/* <p>{song.deadlineReason}</p> */}
					{/* <p>{song.sheetMusic.url}</p> */}
					<div className='file-wrapper'>
						{song.selectedFile && (
							<a href={song.selectedFile} download>
								<FaCloudDownloadAlt className='file-download-icon card-icon' />
							</a>
						)}
						{/* <p>{song.sheetMusic && song.sheetMusic.fileName}</p> */}
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
			)}
		</StyledSongs>
	);
};
const StyledSongs = styled(motion.div)`
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	row-gap: 1rem;
	max-width: 100rem;
	/* max-width: 80rem; */
	padding: 0.5rem 1rem;
	overflow-y: auto;
	z-index: 1;
	transition: all 200ms linear;
	margin: 0 auto;
	flex: 1;
	overflow: auto;
	.sober-widget {
		background-color: white;
		padding: 2rem;
		border-radius: 4px;
		display: none;
	}
	.user-actions-container {
		/* @include flex(flex-start, center, row); */
		display: flex;
		justify-content: flex-start;
		align-items: center;

		// background-color: green;
		/* margin: 1rem 2rem; */
	}
`;

const StyledSongDetails = styled.div`
	row-gap: 1rem;
	transition: all 200ms linear;

	text-align: center;
	padding: 3rem 1rem;
	.song-wrapper,
	.artist-wrapper {
		padding: 1rem;
	}
	.song-wrapper {
		h4 {
			margin-top: 1rem;
		}
	}
	.favourite-wrapper {
		.heart-on {
			color: ${({ theme }) => theme.red};
			font-size: 4rem;
			cursor: pointer;
		}
		.heart-off {
			color: ${({ theme }) => theme.darkBrown};
			font-size: 4rem;
			cursor: pointer;
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
		display: grid;
		place-content: center;
		a {
			text-decoration: none;
			.file-download-icon {
				cursor: pointer;
				font-size: 8rem;
				color: rgb(199, 88, 29);
			}
		}
	}
	.status-wrapper {
		padding: 1rem;
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
	.primary-text {
		color: rgba(105, 54, 25, 1);
		font-size: 4rem;
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
	.star-on {
		color: rgb(199, 88, 29);
		font-size: 3rem;
	}
	.star-off {
		color: rgba(105, 54, 25, 1);
		font-size: 3rem;
	}
`;

// const StyledDayHeaderWidget = styled.div`
// 	display: flex;
// 	flex-direction: column;
// 	align-items: center;
// 	justify-content: center;
// 	.header-time {
// 		display: flex;
// 		flex-direction: column;
// 		align-items: center;
// 		justify-content: center;
// 		font-size: 1.6rem;
// 		font-size: 2rem;
// 		color: ${({ theme }) => theme.txtGrey};
// 	}
// `;

export default Song;
