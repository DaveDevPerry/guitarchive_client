import { motion } from 'framer-motion';
import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useAuthContext } from '../hooks/useAuthContext';
import { useStateContext } from '../lib/context';
import { useNavigate } from 'react-router-dom';
import { TiArrowBack } from 'react-icons/ti';
import { useSongsContext } from '../hooks/useSongContext';
import SongsWidget from '../features/arrangers/SongsWidget';
import SongsFilter from '../features/arrangers/SongsFilter';
import SearchBar from '../components/SearchBar';
import { useViewport } from '../hooks/useViewport';

const Arranger = ({ arrangerFilteredSongs, arrangerSongStatusHandler }) => {
	const { user } = useAuthContext();
	const { arrangerSongs, dispatch: songDispatch } = useSongsContext();

	const { width } = useViewport();
	const breakpoint = 620;

	const { arrangerToView, dataLoaded } = useStateContext();

	let navigate = useNavigate();
	useEffect(() => {
		if (dataLoaded === false) {
			navigate('/');
		}
	}, [navigate, dataLoaded]);

	useEffect(() => {
		songDispatch({
			type: 'SET_ARRANGER',
			payload: arrangerToView,
		});
	}, [arrangerToView, songDispatch, user]);

	return (
		<>
			{width > breakpoint ? (
				<StyledArrangers
					initial={{ width: 0 }}
					animate={{ width: '100%' }}
					exit={{ x: window.innerWidth }}
				>
					{arrangerSongs.length < 1 && (
						<StyledNoArrangerDetails className='arrangers-details-container'>
							<div className='arranger-wrapper'>
								<p className='primary-text'>Arranger has no music</p>
							</div>
						</StyledNoArrangerDetails>
					)}
					{arrangerSongs[0] && (
						<StyledArrangerDetails className='arrangers-details-container'>
							<div className='arranger-wrapper'>
								<p className='primary-text'>{arrangerSongs[0].arranger.name}</p>
							</div>
						</StyledArrangerDetails>
					)}
					{arrangerSongs[0] && (
						<>
							<div className='user-actions-container'>
								{/* <AddSongButton /> */}
								<TiArrowBack
									className='back-icon'
									onClick={() => {
										navigate('/arrangers');
									}}
								/>
								<SongsFilter songStatusHandler={arrangerSongStatusHandler} />
								<SearchBar />
							</div>
							<SongsWidget
								songs={arrangerSongs}
								filteredSongs={arrangerFilteredSongs}
							/>
						</>
					)}
				</StyledArrangers>
			) : (
				<StyledMobileArrangers
					initial={{ width: 0 }}
					animate={{ width: '100%' }}
					exit={{ x: window.innerWidth }}
				>
					{arrangerSongs.length < 1 && (
						<StyledNoArrangerDetails className='arrangers-details-container'>
							<div className='arranger-wrapper'>
								<p className='primary-text'>Arranger has no music</p>
							</div>
						</StyledNoArrangerDetails>
					)}
					{arrangerSongs[0] && (
						<StyledArrangerDetails className='arrangers-details-container'>
							<div className='arranger-wrapper'>
								<p className='primary-text'>{arrangerSongs[0].arranger.name}</p>
							</div>
						</StyledArrangerDetails>
					)}
					{arrangerSongs[0] && (
						<>
							<div className='mobile-user-actions-container'>
								{/* <AddSongButton /> */}
								<TiArrowBack
									className='back-icon'
									onClick={() => {
										navigate('/arrangers');
									}}
								/>
								<SongsFilter songStatusHandler={arrangerSongStatusHandler} />
								{/* <SearchBar /> */}
							</div>
							<SongsWidget
								songs={arrangerSongs}
								filteredSongs={arrangerFilteredSongs}
							/>
						</>
					)}
				</StyledMobileArrangers>
			)}
		</>
	);
};
const StyledArrangers = styled(motion.div)`
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

const StyledArrangerDetails = styled.div`
	transition: all 200ms linear;
	text-align: center;
	.arranger-wrapper,
	.arranger-wrapper {
		padding: 0 1rem;
	}
	.arranger-wrapper {
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

const StyledNoArrangerDetails = styled.div`
	transition: all 200ms linear;
	text-align: center;
	.arranger-wrapper,
	.arranger-wrapper {
		padding: 0 1rem;
	}
	.arranger-wrapper {
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

const StyledMobileArrangers = styled(motion.div)`
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	max-width: 100rem;
	overflow-y: auto;
	z-index: 1;
	transition: all 200ms linear;
	margin: 0 auto;
	flex: 1;
	overflow-y: hidden;
	.mobile-user-actions-container {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 0 1rem 1rem 1rem;
		column-gap: 2rem;
		transition: all 200ms linear;
	}
	.back-icon {
		font-size: 4rem;
		cursor: pointer;
	}
`;
export default Arranger;
