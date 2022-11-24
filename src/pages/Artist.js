import { motion } from 'framer-motion';
import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useAuthContext } from '../hooks/useAuthContext';
import { useStateContext } from '../lib/context';
import { useNavigate } from 'react-router-dom';
// import { useArtistsContext } from '../hooks/useArtistContext';
// import { format, parseISO } from 'date-fns';
// import {
// 	FaCloudDownloadAlt,
// 	FaRegStar,
// 	FaStar,
// 	FaRegHeart,
// 	FaHeart,
// } from 'react-icons/fa';
// import { ImYoutube2 } from 'react-icons/im';
// import { GiMetronome } from 'react-icons/gi';
// import { CgCamera } from 'react-icons/cg';
// import { BiArchiveOut, BiArchive } from 'react-icons/bi';
// import { log } from '../utils/helper';
// import { IoMusicalNotes } from 'react-icons/io5';
// import { TbNumbers } from 'react-icons/tb';
import { TiArrowBack } from 'react-icons/ti';
import { useSongsContext } from '../hooks/useSongContext';
import SongsWidget from '../features/artists/SongsWidget';
import SongsFilter from '../features/artists/SongsFilter';
import SearchBar from '../components/SearchBar';
import { useViewport } from '../hooks/useViewport';

const Artist = ({
	artistSongStatus,
	setArtistSongStatus,
	artistFilteredSongs,
	setArtistFilteredSongs,
	artistSongStatusHandler,
	artistSongDetails,
	setArtistSongDetails,
}) => {
	// const { dataLoaded } = useStateContext();
	// const [currentId, setCurrentId] = useState(null);
	// const { artist } = useArtistsContext();
	const { user } = useAuthContext();
	const { artistSongs, dispatch: songDispatch } = useSongsContext();

	const { width } = useViewport();
	const breakpoint = 620;

	// const currentDay = new Date(new Date().setHours(0, 0, 0, 0));

	// let navigate = useNavigate();
	// useEffect(() => {
	// 	if (dataLoaded === false) {
	// 		navigate('/');
	// 	}
	// }, [navigate, dataLoaded]);

	// const { artist} = useArtistsContext();
	// const { gig,gigCounterData, dispatch } = useGigsContext();
	const { artistToView, dataLoaded } = useStateContext();

	let navigate = useNavigate();
	useEffect(() => {
		if (dataLoaded === false) {
			navigate('/');
		}
	}, [navigate, dataLoaded]);

	useEffect(() => {
		songDispatch({
			type: 'SET_ARTIST',
			payload: artistToView,
		});
	}, [artistToView, songDispatch, user]);

	return (
		<>
			{width > breakpoint ? (
				<StyledArtists
					initial={{ width: 0 }}
					animate={{ width: '100%' }}
					exit={{ x: window.innerWidth }}
				>
					{artistSongs.length < 1 && (
						<StyledNoArtistDetails className='artists-details-container'>
							<div className='artist-wrapper'>
								<p className='primary-text'>Artist has no music</p>
							</div>
						</StyledNoArtistDetails>
					)}
					{artistSongs[0] && (
						<StyledArtistDetails className='artists-details-container'>
							<div className='artist-wrapper'>
								<p className='primary-text'>{artistSongs[0].artist.name}</p>
								{/* <h4 className='secondary-text'>{artist.artist.name}</h4> */}
							</div>
						</StyledArtistDetails>
					)}
					{artistSongs[0] && (
						<>
							<div className='user-actions-container'>
								{/* <AddSongButton /> */}
								<TiArrowBack
									className='back-icon'
									onClick={() => {
										navigate('/artists');
									}}
								/>
								<SongsFilter songStatusHandler={artistSongStatusHandler} />
								<SearchBar />
							</div>
							<SongsWidget
								songs={artistSongs}
								// artistFilteredSongs={artistFilteredSongs}
								filteredSongs={artistFilteredSongs}
							/>
						</>
					)}
					{/* <TiArrowBack
				className='back-icon'
				onClick={() => {
					navigate('/artists');
				}}
			/> */}
				</StyledArtists>
			) : (
				<StyledMobileArtists
					initial={{ width: 0 }}
					animate={{ width: '100%' }}
					exit={{ x: window.innerWidth }}
				>
					{artistSongs.length < 1 && (
						<StyledNoArtistDetails className='artists-details-container'>
							<div className='artist-wrapper'>
								<p className='primary-text'>Artist has no music</p>
							</div>
						</StyledNoArtistDetails>
					)}
					{artistSongs[0] && (
						<StyledArtistDetails className='artists-details-container'>
							<div className='artist-wrapper'>
								<p className='primary-text'>{artistSongs[0].artist.name}</p>
								{/* <h4 className='secondary-text'>{artist.artist.name}</h4> */}
							</div>
						</StyledArtistDetails>
					)}
					{artistSongs[0] && (
						<>
							<div className='mobile-user-actions-container'>
								{/* <AddSongButton /> */}
								<TiArrowBack
									className='back-icon'
									onClick={() => {
										navigate('/artists');
									}}
								/>
								<SongsFilter songStatusHandler={artistSongStatusHandler} />
								{/* <SearchBar /> */}
							</div>
							<SongsWidget
								songs={artistSongs}
								// artistFilteredSongs={artistFilteredSongs}
								filteredSongs={artistFilteredSongs}
							/>
						</>
					)}
					{/* <TiArrowBack
				className='back-icon'
				onClick={() => {
					navigate('/artists');
				}}
			/> */}
				</StyledMobileArtists>
			)}
		</>
	);
};
const StyledArtists = styled(motion.div)`
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	/* row-gap: 1rem; */
	max-width: 100rem;
	/* max-width: 80rem; */
	padding: 0.5rem 1rem;
	overflow-y: auto;
	z-index: 1;
	transition: all 200ms linear;
	margin: 0 auto;
	flex: 1;
	overflow: auto;
	.user-actions-container {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 0 0 1rem 0;
		column-gap: 2rem;
		/* background-color: rgba(0, 0, 0, 0.1); */
		transition: all 200ms linear;
		/* border-bottom: 1px solid ${({ theme }) => theme.darkBrown}; */
		/* border-top: 1px solid ${({ theme }) => theme.darkBrown}; */
	}
	.back-icon {
		font-size: 4rem;
		cursor: pointer;
	}
`;

const StyledArtistDetails = styled.div`
	/* row-gap: 1rem; */
	transition: all 200ms linear;

	text-align: center;
	/* padding: 3rem 1rem; */
	display: none;
	.artist-wrapper,
	.artist-wrapper {
		padding: 0 1rem;
	}
	.artist-wrapper {
		.primary-text {
			color: rgba(105, 54, 25, 1);
			font-size: 4rem;
			text-align: center;
			line-height: 4rem;
			margin: 0;
			text-transform: uppercase;
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
		}
	}
`;

const StyledNoArtistDetails = styled.div`
	/* row-gap: 1rem; */
	transition: all 200ms linear;

	text-align: center;
	/* padding: 3rem 1rem; */
	display: none;
	.artist-wrapper,
	.artist-wrapper {
		padding: 0 1rem;
	}
	.artist-wrapper {
		.primary-text {
			color: rgba(105, 54, 25, 1);
			font-size: 4rem;
			text-align: center;
			line-height: 4rem;
			margin: 0;
			text-transform: uppercase;
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
		}
	}
`;

const StyledMobileArtists = styled(motion.div)`
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	/* row-gap: 1rem; */
	max-width: 100rem;
	/* max-width: 80rem; */
	/* padding: 0.5rem 1rem; */
	overflow-y: auto;
	z-index: 1;
	transition: all 200ms linear;
	margin: 0 auto;
	flex: 1;
	overflow: auto;
	.mobile-user-actions-container {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 0 1rem 1rem 1rem;
		column-gap: 2rem;
		/* background-color: rgba(0, 0, 0, 0.1); */
		transition: all 200ms linear;
		/* border-bottom: 1px solid ${({ theme }) => theme.darkBrown}; */
		/* border-top: 1px solid ${({ theme }) => theme.darkBrown}; */
	}
	.back-icon {
		font-size: 4rem;
		cursor: pointer;
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

export default Artist;
