import React, { useState } from 'react';
import styled from 'styled-components';
// import FileBase from 'react-file-base64';
import { useAuthContext } from '../../hooks/useAuthContext';
// import { useSongsContext } from '../../hooks/useSongContext';
import { useStateContext } from '../../lib/context';
import { log } from '../../utils/helper';
import toast from 'react-hot-toast';
// import { useArtistsContext } from '../../hooks/useArtistContext';
// import { useArrangersContext } from '../../hooks/useArrangerContext';
import { useStylesContext } from '../../hooks/useStyleContext';
// import { useStatusContext } from '../../hooks/useStatusContext';
import { useNavigate } from 'react-router-dom';
// import ArtistModal from '../artists/ArtistModal';
// import ArrangerModal from '../arrangers/ArrangerModal';
// import { GrAdd } from 'react-icons/gr';
import { useViewport } from '../../hooks/useViewport';
// import { AnimatePresence } from 'framer-motion';
import { useIdeasContext } from '../../hooks/useIdeaContext';

const SongForm = () => {
	let navigate = useNavigate();
	// const {
	// 	isArtistFormOpen,
	// 	setIsArtistFormOpen,
	// 	isArrangerFormOpen,
	// 	setIsArrangerFormOpen,
	// } = useStateContext();
	const { setIsIdeaFormOpen } = useStateContext();
	const { dispatch } = useIdeasContext();
	// const { artists } = useArtistsContext();
	// const { arrangers } = useArrangersContext();
	const { styles } = useStylesContext();
	// const { statuses } = useStatusContext();
	const { user } = useAuthContext();

	const [ideaData, setIdeaData] = useState({
		title: '',
		artist: '',
		style: '',
		notes: '',
		isComplete: false,
	});

	const handleSubmit = async (e) => {
		e.preventDefault();

		const response = await fetch(
			`${process.env.REACT_APP_BACKEND_URL}/api/ideas`,
			{
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					Authorization: `Bearer ${user.token}`,
				},
				body: JSON.stringify(ideaData),
			}
		);
		const json = await response.json();
		log(json, 'new song json');

		if (response.ok) {
			dispatch({
				type: 'CREATE_SONG',
				payload: json,
			});
			log('here');
		}

		clear();
		setIsIdeaFormOpen(false);
		notify();
		navigate('/ideas');
	};
	const clear = () => {
		// e.preventDefault();
		setIdeaData({
			title: '',
			artist: '',
			style: '',
			notes: '',
			isComplete: false,
		});
	};
	const back = (e) => {
		e.preventDefault();
		setIdeaData({
			title: '',
			artist: '',
			style: '',
			notes: '',
			isComplete: false,
		});
		setIsIdeaFormOpen(false);
	};

	// create a toast
	const notify = () => {
		toast.success(`new song successfully added.`, {
			duration: 3000,
			style: {
				border: '2px solid #1da000',
			},
		});
	};

	const { width } = useViewport();
	const breakpoint = 620;

	return (
		<>
			{/* <AnimatePresence mode='wait'>
				{isArtistFormOpen === true && (
					<ArtistModal currentId={currentId} setCurrentId={setCurrentId} />
				)}
				{isArrangerFormOpen === true && (
					<ArrangerModal currentId={currentId} setCurrentId={setCurrentId} />
				)}
			</AnimatePresence> */}
			<StyledSongForm
				autoComplete='off'
				noValidate
				onSubmit={handleSubmit}
				className={`${width < breakpoint ? 'mobile' : ''}`}
			>
				<div className='form-section'>
					<div className='form-row'>
						<div className='form-item'>
							<input
								type='text'
								name='title'
								variant='outlined'
								label='Title'
								value={ideaData.title}
								onChange={(e) =>
									setIdeaData({ ...ideaData, title: e.target.value })
								}
								placeholder='Title'
								className='form-input'
							/>
						</div>
						<div className='form-item'>
							<input
								type='text'
								name='artist'
								variant='outlined'
								label='Artist'
								value={ideaData.artist}
								onChange={(e) =>
									setIdeaData({ ...ideaData, artist: e.target.value })
								}
								placeholder='Artist'
								className='form-input'
							/>
						</div>
					</div>
				</div>

				<div className='form-section'>
					<div className='form-row'>
						<div className='form-item-row'>
							{/* <div className='form-item'> */}
							<div className='choice-wrapper'>
								<div className='form-dropdown'>
									<select
										name='style'
										onChange={(e) =>
											setIdeaData({ ...ideaData, style: e.target.value })
										}
										value={ideaData.style}
										className='form-select'
									>
										<option className='form-option'>Style</option>
										{styles.map((style) => (
											<option
												key={style.name}
												label={style.name}
												value={style.name}
												className='form-option'
											></option>
										))}
									</select>
								</div>
							</div>
							{/* </div> */}
						</div>
						{/* </div> */}

						{width < breakpoint ? (
							<div className='form-item-row-grow'>
								<textarea
									name='notes'
									className='input-grow'
									placeholder='Notes'
									value={ideaData.notes}
									rows='3'
									onChange={(e) =>
										setIdeaData({ ...ideaData, notes: e.target.value })
									}
								/>
							</div>
						) : (
							<div className='form-item-row-1'>
								{/* <div className='form-item'> */}
								<textarea
									name='notes'
									className='input-grow'
									placeholder='Notes'
									value={ideaData.notes}
									rows='3'
									onChange={(e) =>
										setIdeaData({ ...ideaData, notes: e.target.value })
									}
								/>
							</div>
						)}
					</div>
				</div>

				<div className='form-section'>
					<div className='form-row'>
						<button className='form-action-btn btn-6 custom-btn' onClick={back}>
							<p>cancel</p>
						</button>
						<button
							className='form-action-btn btn-6 custom-btn'
							onClick={(e) => {
								e.preventDefault();
								clear();
							}}
						>
							<p>Clear</p>
						</button>
						<button className='form-action-btn btn-6 custom-btn' type='submit'>
							<p>Submit</p>
						</button>
					</div>
				</div>
			</StyledSongForm>
		</>
	);
};
const StyledSongForm = styled.form`
	display: flex;
	flex-direction: column;
	row-gap: 2rem;

	.form-section {
		/* border-bottom: 2px solid ${({ theme }) => theme.primaryColor};
		padding: 1rem 0;
		&:last-child {
			border-bottom: none;
			padding-bottom: 0;
		}
		&:nth-child(2) {
			border-bottom: none;
		} */
	}
	.form-row {
		display: flex;
		justify-content: flex-start;
		flex-wrap: wrap;
		align-items: flex-start;
		column-gap: 2rem;
		row-gap: 1rem;
		.form-item {
			flex: 1 1 48%;
			display: flex;
			column-gap: 2rem;
			align-items: center;
			justify-content: space-between;

			.button {
				display: inline-block;
				padding: 0.4rem 1rem;
				cursor: pointer;
				border-radius: 0.4rem;
				background-color: ${({ theme }) => theme.btnBg};
				font-size: 1.2rem;
				margin: 0;
				margin-top: 0.75rem;
				margin-left: 0.9rem;
				text-transform: capitalize;
			}
			/* label {
				font-size: 1.6rem;
				text-transform: uppercase;
				margin: 10px 0 2px;
			} */
			.choice-wrapper {
				display: flex;
				flex-direction: row;
				justify-content: space-between;
				align-items: center;
				column-gap: 0.5rem;
				/* flex: 1; */
				/* width: 20rem; */
			}
		}
		.form-item-row {
			/* flex: 1 1 48%; */
			display: flex;
			column-gap: 2rem;
			align-items: center;
			justify-content: space-between;
			width: fit-content;
			.choice-wrapper {
				display: flex;
				justify-content: space-between;
				align-items: center;
				column-gap: 2rem;
				width: 20rem;
			}
			.input-grow {
				margin: 0;
				flex: 1;
			}
		}
		.form-item-row-grow {
			flex: 1 1 48%;
			display: flex;
			column-gap: 2rem;
			align-items: center;
			justify-content: space-between;
			width: fit-content;
			.choice-wrapper {
				display: flex;
				justify-content: space-between;
				align-items: center;
				column-gap: 2rem;
				width: 20rem;
			}
			.input-grow {
				margin: 0;
				flex: 1;
			}
		}
		.form-item-row-1 {
			/* flex: 1 1 48%; */
			display: flex;
			column-gap: 2rem;
			align-items: center;
			justify-content: space-between;
			/* width: fit-content; */
			flex: 1;
			/* .choice-wrapper {
				display: flex;
				justify-content: space-between;
				align-items: center;
				column-gap: 2rem;
				width: 20rem;
			} */
			.input-grow {
				margin: 0;
				flex: 1;
			}
		}
		.form-action-btn {
			flex: 1;
		}
	}

	/* .form-row-no-wrap {
		display: flex;
		justify-content: flex-start;
		align-items: center;
		column-gap: 1rem;
		row-gap: 1rem;
		.form-input {
			width: unset;
			flex: 1;
		}
		.form-item {
			flex: 1 1 48%;
			display: flex;
			column-gap: 2rem;
			align-items: center;
			justify-content: space-between;
			label {
				font-size: 1.6rem;
				text-transform: uppercase;
				margin: 10px 0 2px;
			}
			.choice-wrapper {
				display: flex;
				flex-direction: row;
				justify-content: space-between;
				column-gap: 0.5rem;
				flex: 1;
			}
		}
		.form-item-row {
			display: flex;
			width: unset;
			align-items: center;
			column-gap: 1rem;
			label.song-label {
				margin: 0;
			}
			.date-item {
				display: flex;
				align-items: center;
				justify-content: flex-start;
				column-gap: 1rem;
			}
			label {
				font-size: 1.6rem;
				text-transform: uppercase;
			}
			.choice-wrapper {
				display: flex;
				justify-content: space-between;
				align-items: center;
				column-gap: 2rem;
			}
		}
	} */
	&.mobile {
		.form-section {
			/* &.mobile{ */
			.form-row {
				row-gap: 2rem;
			}
			/* } */
			&:last-child {
				.form-row {
					column-gap: 1rem;
				}
			}
		}
	}
`;

export default SongForm;
