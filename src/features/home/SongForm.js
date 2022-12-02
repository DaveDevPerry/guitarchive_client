import React, { useState } from 'react';
import styled from 'styled-components';
import FileBase from 'react-file-base64';
import { useAuthContext } from '../../hooks/useAuthContext';
import { useSongsContext } from '../../hooks/useSongContext';
import { useStateContext } from '../../lib/context';
import { log } from '../../utils/helper';
import toast from 'react-hot-toast';
import { useArtistsContext } from '../../hooks/useArtistContext';
import { useArrangersContext } from '../../hooks/useArrangerContext';
import { useStylesContext } from '../../hooks/useStyleContext';
import { useStatusContext } from '../../hooks/useStatusContext';
import { useNavigate } from 'react-router-dom';
import ArtistModal from '../artists/ArtistModal';
import ArrangerModal from '../arrangers/ArrangerModal';
import { GrAdd } from 'react-icons/gr';

const SongForm = ({
	inputText,
	setInputText,
	songs,
	setSongs,
	setStatus,
	inputDate,
	setInputDate,
	inputDescription,
	setInputDescription,
	currentId,
	setCurrentId,
}) => {
	let navigate = useNavigate();
	const {
		isArtistFormOpen,
		setIsArtistFormOpen,
		isArrangerFormOpen,
		setIsArrangerFormOpen,
	} = useStateContext();
	const { setIsFormOpen } = useStateContext();
	const { dispatch: songDispatch } = useSongsContext();
	const { artists } = useArtistsContext();
	const { arrangers } = useArrangersContext();
	const { styles } = useStylesContext();
	const { statuses } = useStatusContext();
	const { user } = useAuthContext();

	const [songData, setSongData] = useState({
		title: '',
		artist: '',
		// newArtist: false,
		// newArranger: false,
		// newArtist: '',
		// newArranger: '',
		arranger: '',
		style: '',
		status: '',
		difficulty: 3,
		pages: 0,
		format: '',
		deadlineDate: '',
		reason: '',
		isFavourite: false,
		isTab: true,
		selectedFile: '',
	});

	const handleSubmit = async (e) => {
		e.preventDefault();

		if (currentId) {
			// dispatch(updateSong(currentId, songData));
			log(currentId, 'update song in song form');
		} else {
			// dispatch(createSong(songData));
			const response = await fetch(
				`${process.env.REACT_APP_BACKEND_URL}/api/songs`,
				{
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
						Authorization: `Bearer ${user.token}`,
					},
					body: JSON.stringify(songData),
				}
			);
			const json = await response.json();
			log(json, 'new song json');

			if (response.ok) {
				songDispatch({
					type: 'CREATE_SONG',
					payload: json,
				});
				log('here');
			}
		}
		clear();
		setIsFormOpen(false);
		notify();
		navigate('/');
	};
	const clear = () => {
		setSongData({
			artist: '',
			title: '',
			arranger: '',
			// newArtist: false,
			// newArranger: false,
			// newArtist: '',
			// newArranger: '',
			style: '',
			status: '',
			difficulty: 3,
			pages: 0,
			format: '',
			deadlineDate: '',
			reason: '',
			isFavourite: false,
			isTab: true,
			selectedFile: '',
		});
	};
	const back = (e) => {
		e.preventDefault();
		setSongData({
			artist: '',
			title: '',
			arranger: '',
			// newArtist: false,
			// newArranger: false,
			// newArtist: '',
			// newArranger: '',
			style: '',
			status: '',
			difficulty: 3,
			pages: 0,
			format: '',
			deadlineDate: '',
			reason: '',
			isFavourite: false,
			isTab: true,
			selectedFile: '',
		});
		setIsFormOpen(false);
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

	return (
		<>
			{isArtistFormOpen === true && (
				<ArtistModal currentId={currentId} setCurrentId={setCurrentId} />
			)}
			{isArrangerFormOpen === true && (
				<ArrangerModal currentId={currentId} setCurrentId={setCurrentId} />
			)}
			<StyledSongForm autoComplete='off' noValidate onSubmit={handleSubmit}>
				<div className='form-section'>
					<div className='form-row'>
						<div className='form-item'>
							<input
								type='text'
								name='title'
								variant='outlined'
								label='Title'
								value={songData.title}
								onChange={(e) =>
									setSongData({ ...songData, title: e.target.value })
								}
								placeholder='Song Title'
								className='form-input'
							/>
						</div>
						<div className='form-item'>
							<div className='form-item-row'>
								<label className='song-label' htmlFor='favourite'>
									Favourite
								</label>
								<input
									checked={songData.isFavourite}
									onChange={(e) =>
										setSongData({ ...songData, isFavourite: e.target.checked })
									}
									type='checkbox'
									name='favourite'
								/>
							</div>
							<div className='form-item-row'>
								<label className='song-label' htmlFor='difficulty'>
									difficulty
								</label>
								<input
									type='number'
									value={songData.difficulty}
									onChange={(e) =>
										setSongData({ ...songData, difficulty: e.target.value })
									}
									className='form-number'
									name='difficulty'
								/>
							</div>
						</div>
					</div>
				</div>
				<div className='form-section'>
					<div className='form-row'>
						<div className='form-item'>
							<div className='choice-wrapper'>
								<div className='form-dropdown'>
									<select
										name='artist'
										onChange={(e) =>
											setSongData({ ...songData, artist: e.target.value })
										}
										value={songData.artist}
										className='form-select'
									>
										<option className='form-option'>-- select artist --</option>
										{artists.map((artist) => (
											<option
												key={artist._id}
												label={artist.name}
												value={artist._id}
												className='form-option'
											></option>
										))}
									</select>
								</div>
								<div
									className='add-new-person-btn'
									onClick={() => {
										isArtistFormOpen === true
											? setIsArtistFormOpen(false)
											: setIsArtistFormOpen(true);
									}}
								>
									<GrAdd className='add-new-record-icon' />
								</div>
							</div>
						</div>

						<div className='form-item'>
							<div className='choice-wrapper'>
								<div className='form-dropdown'>
									<select
										name='arranger'
										onChange={(e) =>
											setSongData({ ...songData, arranger: e.target.value })
										}
										value={songData.arranger}
										className='form-select'
									>
										<option className='form-option'>
											-- select arranger --
										</option>
										{arrangers.map((arranger) => (
											<option
												key={arranger._id}
												label={arranger.name}
												value={arranger._id}
												className='form-option'
											></option>
										))}
									</select>
								</div>
								<div
									className='add-new-person-btn'
									onClick={() => {
										isArrangerFormOpen === true
											? setIsArrangerFormOpen(false)
											: setIsArrangerFormOpen(true);
									}}
								>
									<GrAdd className='add-new-record-icon' />
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className='form-section'>
					<div className='form-row'>
						<div className='form-item-row'>
							<div className='date-item'>
								<label className='input-date'>Deadline Date</label>
								<input
									type='date'
									name='deadlineDate'
									// value={
									// 	songData.deadlineDate == null ? '' : songData.deadlineDate
									// 	// : songData.deadlineDate.toISOString().split('T')[0]
									// }
									className='date-input'
									onChange={(e) =>
										setSongData({ ...songData, deadlineDate: e.target.value })
									}
								/>
							</div>
						</div>
					</div>

					<div className='form-row'>
						<div className='form-item'>
							<textarea
								name='reason'
								className='input-grow'
								placeholder='Reason for deadline'
								value={songData.reason}
								rows='3'
								onChange={(e) =>
									setSongData({ ...songData, reason: e.target.value })
								}
							/>
						</div>
					</div>
				</div>

				<div className='form-section'>
					<div className='form-row-no-wrap'>
						<div className='form-item'>
							<div className='choice-wrapper'>
								<div className='form-dropdown'>
									<select
										name='style'
										onChange={(e) =>
											setSongData({ ...songData, style: e.target.value })
										}
										value={songData.style}
										className='form-select'
									>
										<option
											className='form-option'
											// label=
											// value={artist.name}
										>
											-- select style --
										</option>
										{styles.map((style) => (
											<option
												key={style._id}
												// selected
												label={style.name}
												value={style._id}
												className='form-option'
											></option>
										))}
									</select>
								</div>
							</div>
						</div>
						<div className='form-item'>
							<div className='choice-wrapper'>
								<div className='form-dropdown'>
									<select
										name='status'
										onChange={(e) =>
											setSongData({ ...songData, status: e.target.value })
										}
										value={songData.status}
										className='form-select'
									>
										<option className='form-option'>-- select status --</option>
										{statuses.map((status) => (
											<option
												key={status._id}
												// selected
												label={status.name}
												value={status._id}
												className='form-option'
											></option>
										))}
									</select>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className='form-section'>
					<div className='form-row'>
						<div className='form-item'>
							<div className='file-input'>
								<label className='button' htmlFor='upload'>
									Upload File
								</label>
								<FileBase
									type='false'
									multiple={false}
									onDone={({ base64 }) =>
										setSongData({ ...songData, selectedFile: base64 })
									}
								/>
							</div>
						</div>
						<div className='form-item'>
							<div className='form-item-row'>
								<label className='song-label' htmlFor='tab'>
									tablature
								</label>
								<input
									checked={songData.isTab}
									onChange={(e) =>
										setSongData({ ...songData, isTab: e.target.checked })
									}
									type='checkbox'
									name='tab'
								/>
							</div>
						</div>
					</div>
				</div>

				<div className='form-section'>
					<div className='form-row'>
						<button className='form-action-btn' onClick={back}>
							<p>cancel</p>
						</button>
						<button className='form-action-btn' onClick={clear}>
							<p>Clear</p>
						</button>
						<button className='form-action-btn' type='submit'>
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
	.form-section {
		border-bottom: 2px solid ${({ theme }) => theme.primaryColor};
		padding: 1rem 0;
		&:last-child {
			border-bottom: none;
			padding-bottom: 0;
		}
	}
	.form-row {
		display: flex;
		justify-content: flex-start;
		flex-wrap: wrap;
		align-items: center;
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
				/* pointer-events: none; */
			}
			label {
				font-size: 1.6rem;
				text-transform: uppercase;
				margin: 10px 0 2px;
			}
			.choice-wrapper {
				display: flex;
				flex-direction: row;
				justify-content: space-between;
				align-items: center;
				column-gap: 0.5rem;
				flex: 1;
				/* color: ${({ theme }) => theme.btnIcon}; */
				.add-new-person-btn {
					background-color: ${({ theme }) => theme.btnBg};
					display: grid;
					place-content: center;
					height: 3.9rem;
					width: 3.9rem;
					cursor: pointer;
					border-radius: 0.4rem;
					box-shadow: rgb(0 0 0 / 30%) 2px 2px 2px,
						rgb(0 0 0 / 10%) -2px -2px 2px;
					/* box-shadow: rgb(0 0 0 / 60%) 2px 2px 2px,
						rgb(0 0 0 / 40%) -2px -2px 2px; */
					color: ${({ theme }) => theme.btnIcon};
					/* border: 2px solid ${({ theme }) => theme.borderLight}; */
					.add-new-record-icon {
						font-size: 2.2rem;
						pointer-events: none;
						/* color: ${({ theme }) => theme.btnIcon}; */
					}
				}
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
				.input-date {
					font-size: 1.6rem;
					text-transform: uppercase;
				}
			}
			label {
				font-size: 1.6rem;
				text-transform: uppercase;
			}
			input[type='number'].form-number {
				width: 60px;
			}
			.choice-wrapper {
				display: flex;
				justify-content: space-between;
				align-items: center;
				column-gap: 2rem;
			}
		}
		.form-action-btn {
			/* color: ${({ theme }) => theme.white}; */
			flex: 1;
			font-family: 'NewTegomin';
			padding: 0.5rem 1rem;
			background-color: ${({ theme }) => theme.btnBg};
			border-radius: 0.4rem;
			/* box-shadow: 3px 3px 4px rgb(0 0 0), -2px -2px 2px rgba(0, 0, 0, 0.4); */
			border: 1px solid ${({ theme }) => theme.btnBorder};
			font-size: 1.6rem;
			p {
				color: ${({ theme }) => theme.btnColor};
				font-weight: bolder;
			}
		}
	}

	.form-row-no-wrap {
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
				.add-new-person-btn {
					background-color: ${({ theme }) => theme.btnBg};
					display: grid;
					place-content: center;
					padding: 1rem;
					cursor: pointer;
					border-radius: 0.4rem;
					box-shadow: rgb(0 0 0 / 30%) 2px 2px 2px,
						rgb(0 0 0 / 10%) -2px -2px 2px;
					color: ${({ theme }) => theme.btnIcon};
					/* border: 2px solid ${({ theme }) => theme.borderLight}; */
					.add-new-record-icon {
						color: ${({ theme }) => theme.btnIcon};
						font-size: 1.6rem;
						pointer-events: none;
					}
				}
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
				.input-date {
					font-size: 1.6rem;
					text-transform: uppercase;
				}
			}
			label {
				font-size: 1.6rem;
				text-transform: uppercase;
			}
			input[type='number'].form-number {
				width: 60px;
			}
			.choice-wrapper {
				display: flex;
				justify-content: space-between;
				align-items: center;
				column-gap: 2rem;
			}
		}
		.form-action-btn {
			background-color: ${({ theme }) => theme.btnBg};
			color: ${({ theme }) => theme.btnColor};
			flex: 1;
			font-family: 'NewTegomin';
			padding: 0.5rem 1rem;
			font-size: 1.6rem;
		}
	}

	.button-submit {
		margin-bottom: 10px;
	}
`;

export default SongForm;
