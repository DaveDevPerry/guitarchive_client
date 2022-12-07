import { motion } from 'framer-motion';
import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useAuthContext } from '../hooks/useAuthContext';
import { useStateContext } from '../lib/context';
import { useNavigate } from 'react-router-dom';
// import { TiArrowBack } from 'react-icons/ti';
import { useSongsContext } from '../hooks/useSongContext';
// import SongsWidget from '../features/artists/SongsWidget';
// import SongsFilter from '../features/artists/SongsFilter';
// import SearchBar from '../components/SearchBar';
import { useViewport } from '../hooks/useViewport';
import SongsListContainer from '../features/artists/SongsListContainer';

const Artist = ({ artistSongStatusHandler, artistFilteredSongs, theme }) => {
	const { user } = useAuthContext();
	const { artistSongs, dispatch: songDispatch } = useSongsContext();

	const { width } = useViewport();
	const breakpoint = 620;

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
		<StyledArtists
			initial={{ width: 0 }}
			animate={{ width: '100%' }}
			exit={{ x: window.innerWidth }}
			className={`artist-page page ${width < breakpoint ? 'mobile' : ''}`}
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
					</div>
				</StyledArtistDetails>
			)}
			{/* {width < breakpoint ? (
				<>
					{artistSongs[0] && (
						<div className='mobile-user-actions-container'>
							<TiArrowBack
								className='back-icon'
								onClick={() => {
									navigate('/artists');
								}}
							/>
							<SongsFilter songStatusHandler={artistSongStatusHandler} />
						</div>
					)}
				</>
			) : (
				<>
					{artistSongs[0] && (
						<div className='user-actions-container'>
							<TiArrowBack
								className='back-icon'
								onClick={() => {
									navigate('/artists');
								}}
							/>
							<SongsFilter songStatusHandler={artistSongStatusHandler} />
							<SearchBar />
						</div>
					)}
				</>
			)} */}
			<SongsListContainer
				// filterValue={filterValue}
				// 	homeSongFilterHandler={homeSongFilterHandler}
				// 	setFilterValue={setFilterValue}
				songs={artistSongs}
				filteredSongs={artistFilteredSongs}
				theme={theme}
			/>
			{/* <SongsWidget songs={artistSongs} filteredSongs={artistFilteredSongs} /> */}
		</StyledArtists>
	);
};
const StyledArtists = styled(motion.div)`
	overflow-y: auto;
	&.mobile {
		padding: 0;
	}
	.mobile-user-actions-container {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 0 1rem 1rem 1rem;
		column-gap: 2rem;
		transition: all 200ms linear;
	}
	.user-actions-container {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 0 0 1rem 0;
		column-gap: 2rem;
		transition: all 200ms linear;
	}
	.back-icon {
		font-size: 4rem;
		cursor: pointer;
	}
`;

const StyledArtistDetails = styled.div`
	transition: all 200ms linear;
	text-align: center;
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
	transition: all 200ms linear;
	text-align: center;
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
export default Artist;
