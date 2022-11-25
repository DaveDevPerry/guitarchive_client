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
// import { NavLink } from 'react-router-dom';
// import SongMetrics from './SongMetrics';
// import Filter from './Filter';

const EditSongForm = ({
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
	const { setIsEditFormOpen, songToView } = useStateContext();
	const { song, dispatch: songDispatch } = useSongsContext();
	const { artists } = useArtistsContext();
	const { arrangers } = useArrangersContext();
	const { styles } = useStylesContext();
	const { statuses } = useStatusContext();
	const { user } = useAuthContext();

	const [songData, setSongData] = useState({
		title: song.title,
		artist: song.artist.name,
		// newArtist: false,
		// newArranger: false,
		// newArtist: '',
		// newArranger: '',
		arranger: song.arranger.name,
		style: song.style.name,
		status: song.status.name,
		difficulty: song.difficulty,
		pages: 0,
		format: '',
		deadlineDate: song.deadlineDate,
		reason: song.reason,
		isFavourite: song.isFavourite,
		isTab: song.isTab,
		selectedFile: song.selectedFile,
	});

	const [newSongData, setNewSongData] = useState({
		songID: songToView,
	});

	const handleSubmit = async (e) => {
		e.preventDefault();

		const updatedSongData = newSongData;

		if (currentId) {
			// dispatch(updateSong(currentId, songData));
			log(currentId, 'update song in song form');
		} else {
			// dispatch(createSong(songData));
			const response = await fetch(
				`${process.env.REACT_APP_BACKEND_URL}/api/songs/${songToView}`,
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
				songDispatch({
					type: 'UPDATE_SONG',
					payload: json,
				});
				log('here');
			}
		}
		clear();
		setIsEditFormOpen(false);
		notify();
		navigate('/');
	};
	const clear = () => {
		// setCurrentId(null);
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
	const back = () => {
		clear();
		setIsEditFormOpen(false);
	};

	// create a toast
	const notify = () => {
		toast.success(`new song successfully updated.`, {
			// toast.success(`${headline_band} gig successfully added.`, {
			duration: 3000,
			style: {
				border: '2px solid #1da000',
			},
		});
	};

	return (
		<>
			{isArtistFormOpen === true && <ArtistModal currentId={currentId} />}
			{isArrangerFormOpen === true && <ArrangerModal currentId={currentId} />}
			<StyledEditSongForm autoComplete='off' noValidate onSubmit={handleSubmit}>
				<div className='form-section'>
					<div className='form-row'>
						<div className='form-item'>
							<input
								type='text'
								name='title'
								variant='outlined'
								label='Title'
								value={songData.title}
								onChange={(e) => {
									setNewSongData({ ...newSongData, title: e.target.value });
									setSongData({ ...songData, title: e.target.value });
								}}
								// onChange={(e) =>
								// 	setSongData({ ...songData, title: e.target.value })
								// }
								placeholder='Song Title'
								className='form-input'
							/>
						</div>
						<div className='form-item'>
							<div className='form-item-row'>
								<label className='song-label' htmlFor='favourite'>
									{' '}
									Is Favourite?
								</label>
								<input
									checked={songData.isFavourite}
									// onChange={onInputChange}
									onChange={(e) => {
										setSongData({ ...songData, isFavourite: e.target.checked });
										setNewSongData({
											...newSongData,
											isFavourite: e.target.checked,
										});
									}}
									type='checkbox'
									// id='storeData'
									name='favourite'
									// value={songData.isFavourite}
									// value='true'
								/>
								{/* <input
									checked={songData.isFavourite}
									// onChange={onInputChange}
									onChange={(e) =>
										setSongData({ ...songData, isFavourite: e.target.checked })
									}
									type='checkbox'
									// id='storeData'
									name='favourite'
									// value={songData.isFavourite}
									// value='true'
								/> */}
							</div>
							<div className='form-item-row'>
								<label className='song-label' htmlFor='difficulty'>
									{' '}
									difficulty
								</label>
								<input
									type='number'
									value={songData.difficulty}
									onChange={(e) => {
										setSongData({ ...songData, difficulty: e.target.value });
										setNewSongData({
											...newSongData,
											difficulty: e.target.value,
										});
									}}
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
								<select
									name='artist'
									onChange={(e) => {
										setSongData({ ...songData, artist: e.target.value });
										setNewSongData({ ...newSongData, artist: e.target.value });
									}}
									value={songData.artist}
									// label={songData.artist}
								>
									<option
										// label=
										value={songData.artist}
										label={songData.artist}
									></option>
									{artists.map((artist) => (
										<option
											key={artist._id}
											// selected
											label={artist.name}
											value={artist._id}
										></option>
									))}
								</select>
								<div
									className='add-artist-btn-form'
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
								<select
									name='arranger'
									onChange={(e) => {
										setSongData({ ...songData, arranger: e.target.value });
										setNewSongData({
											...newSongData,
											arranger: e.target.value,
										});
									}}
									value={songData.arranger}
								>
									<option
										value={songData.arranger}
										label={songData.arranger}
									></option>
									{arrangers.map((arranger) => (
										<option
											key={arranger._id}
											// selected
											label={arranger.name}
											value={arranger._id}
										></option>
									))}
								</select>

								<div
									className='add-artist-btn-form'
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

				{/* <div className='form-row'>
				<div className='form-item'>
					<label>pages</label>
					<input
						type='number'
						name='pages'
						value={songData.pages}
						onChange={(e) =>
							setSongData({ ...songData, pages: e.target.value })
						}
					/>
				</div>
			</div>
			<div className='form-row'>
				<div className='form-item'>
					<label>format</label>
					<input
						type='text'
						name='format'
						value={songData.format}
						onChange={(e) =>
							setSongData({ ...songData, format: e.target.value })
						}
					/>
				</div>
			</div> */}

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
									onChange={(e) => {
										setSongData({ ...songData, deadlineDate: e.target.value });
										setNewSongData({
											...newSongData,
											deadlineDate: e.target.value,
										});
									}}
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
								onChange={(e) => {
									setSongData({ ...songData, reason: e.target.value });
									setNewSongData({ ...newSongData, reason: e.target.value });
								}}
							/>
						</div>
					</div>
				</div>

				<div className='form-section'>
					<div className='form-row-no-wrap'>
						<div className='form-item'>
							<div className='choice-wrapper'>
								<select
									name='style'
									onChange={(e) => {
										setSongData({ ...songData, style: e.target.value });
										setNewSongData({ ...newSongData, style: e.target.value });
									}}
									value={songData.style}
								>
									<option
										value={songData.style}
										label={songData.style}
									></option>
									{styles.map((style) => (
										<option
											key={style._id}
											// selected
											label={style.name}
											value={style._id}
										></option>
									))}
								</select>
							</div>
						</div>
						<div className='form-item'>
							<div className='choice-wrapper'>
								<select
									name='status'
									onChange={(e) => {
										setSongData({ ...songData, status: e.target.value });
										setNewSongData({ ...newSongData, status: e.target.value });
									}}
									value={songData.status}
								>
									<option
										value={songData.status}
										label={songData.status}
									></option>
									{statuses.map((status) => (
										<option
											key={status._id}
											// selected
											label={status.name}
											value={status._id}
										></option>
									))}
								</select>
							</div>
						</div>
					</div>
				</div>

				<div className='form-section'>
					<div className='form-row'>
						<div className='form-item'>
							<div className='file-input'>
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
									Is tab?
								</label>
								<input
									checked={songData.isTab}
									// onChange={onInputChange}
									onChange={(e) => {
										setSongData({ ...songData, isTab: e.target.checked });
										setNewSongData({ ...newSongData, isTab: e.target.checked });
									}}
									type='checkbox'
									// id='storeData'
									name='tab'
									// value={songData.isFavourite}
									// value='true'
								/>
							</div>
						</div>
					</div>
				</div>

				<div className='form-section'>
					<div className='form-row'>
						<button className='form-action-btn' onClick={back}>
							cancel
						</button>
						<button className='form-action-btn' onClick={clear}>
							Clear
						</button>
						<button className='form-action-btn' type='submit'>
							Submit
						</button>
					</div>
				</div>
			</StyledEditSongForm>
		</>
	);
};
const StyledEditSongForm = styled.form`
	/* background-image: url('/images/dark wood texture.webp'); */
	display: flex;
	flex-direction: column;
	/* row-gap: 1rem; */
	.form-section {
		border-bottom: 2px solid ${({ theme }) => theme.engravedBrown};
		padding: 1rem 0;
		&:last-child {
			border-bottom: none;
			padding-bottom: 0;
		}
	}
	.form-row {
		// border: 1px solid white;
		// background-color: white;
		display: flex;
		justify-content: flex-start;
		flex-wrap: wrap;
		align-items: center;
		column-gap: 2rem;
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
			.form-input {
				width: 100%;
				/* flex: 1; */
			}
			.file-input {
				width: 100%;
				input[type='file'] {
					width: 100%;
				}
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
				column-gap: 0.5rem;
				flex: 1;
				.add-artist-btn-form {
					background-color: ${({ theme }) => theme.lightBrown};
					display: grid;
					place-content: center;
					padding: 1rem;
					cursor: pointer;
					.add-new-record-icon {
						color: ${({ theme }) => theme.white};
						font-size: 1.6rem;
						pointer-events: none;
					}
					/* flex: 1; */
					/* font-family: 'NewTegomin'; */
					/* padding: 0.5rem 1rem; */
				}
			}
			/* .choice-wrapper {
				display: flex;
				flex-direction: column;
				justify-content: space-between;
				row-gap: 0.5rem;
				flex: 1;
				.add-artist-btn-form {
					background-color: ${({ theme }) => theme.lightBrown};
					color: ${({ theme }) => theme.white};
					flex: 1;
					font-family: 'NewTegomin';
					padding: 0.5rem 1rem;
					font-size: 1.6rem;
				}
			} */
			.input-grow {
				/* flex: 1; */
				/* width: 100%; */
				resize: none;
				width: --webkit-fill-available;
				width: 100%;
				margin-top: 1rem;
				background-color: rgba(168, 105, 69, 0.57);
				box-shadow: rgb(0 0 0 / 30%) 2px 2px 2px, rgb(0 0 0 / 10%) -2px -2px 2px;
				border: none;
				outline: none;
				font-weight: bolder;
				/* font-size: 1.6rem; */
				::placeholder {
					/* Chrome, Firefox, Opera, Safari 10.1+ */
					${'' /* color: red; */}
					color: ${({ theme }) => theme.engravedBrown};
					/* font-size: 1.6rem; */
					/* font-family: 'NewTegomin'; */
					padding: 0.5rem 1rem;
					opacity: 1; /* Firefox */
				}

				:-ms-input-placeholder {
					/* Internet Explorer 10-11 */
					color: ${({ theme }) => theme.engravedBrown};
				}

				::-ms-input-placeholder {
					/* Microsoft Edge */
					color: ${({ theme }) => theme.engravedBrown};
				}
			}
			select {
				/* font-size: 1.6rem; */
				/* padding: 0.2rem; */
				/* appearance: none; */
				// Additional resets for further consistency
				background-color: transparent;
				background-color: rgba(168, 105, 69, 0.57);
				border: none;
				/* padding: 0 1em 0 0; */
				margin: 0;
				width: 100%;
				/* font-family: inherit; */
				/* font-size: inherit; */
				cursor: inherit;
				line-height: inherit;
				padding: 10px;
				box-shadow: rgb(0 0 0 / 30%) 2px 2px 2px, rgb(0 0 0 / 10%) -2px -2px 2px;
				outline: none;
				/* &:focus{

				} */
				option {
					font-size: 1.6rem;
					/* font-style: italic; */
					color: ${({ theme }) => theme.engravedBrown};
					background-color: rgba(36, 14, 0, 0.08);
					/* padding: 0.2rem; */
					border: 1px solid ${({ theme }) => theme.darkBrown};
					border-radius: 1rem 0 0 1rem;
					/* width: 25rem; */
					/* margin-left: 2rem; */
					&:focus {
						border: 1px solid ${({ theme }) => theme.darkBrown};
						outline: none;
					}
				}
			}
		}
		.form-item-row {
			display: flex;
			width: unset;
			align-items: center;
			column-gap: 1rem;
			/* flex: 1; */
			label.song-label {
				margin: 0;
			}
			.date-item {
				display: flex;
				align-items: center;
				justify-content: flex-start;
				column-gap: 1rem;
				/* flex: 1; */
				label.input-date {
					/* width: 100%; */
				}
				.input-date {
					font-size: 1.6rem;
					text-transform: uppercase;
					/* margin: 10px 0 2px; */
					/* width: unset; */
				}
			}
			label {
				font-size: 1.6rem;
				text-transform: uppercase;
			}
			input[type='checkbox'] {
				width: unset;
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
			/* select {
				font-size: 1.6rem;
				padding: 0.2rem;
				appearance: none;
				// Additional resets for further consistency
				background-color: transparent;
				border: none;
				padding: 0 1em 0 0;
				margin: 0;
				width: 100%;
				font-family: inherit;
				font-size: inherit;
				cursor: inherit;
				line-height: inherit;
				option {
					font-size: 1.6rem;
					font-style: italic;
					color: ${({ theme }) => theme.engravedBrown};
					background-color: rgba(36, 14, 0, 0.08);
					padding: 0.2rem;
					border: 1px solid ${({ theme }) => theme.darkBrown};
					border-radius: 1rem 0 0 1rem;
					width: 25rem;
					margin-left: 2rem;
					&:focus {
						border: 1px solid ${({ theme }) => theme.darkBrown};
						outline: none;
					}
				}
			} */
		}
		.form-action-btn {
			background-color: ${({ theme }) => theme.lightBrown};
			color: ${({ theme }) => theme.white};
			flex: 1;
			font-family: 'Oswald', serif;
			font-family: 'NewTegomin';
			padding: 0.5rem 1rem;
			/* text-transform: unset; */
			/* border: none;
		outline: none;
		border-radius: 0.4rem; */
			/* align-items: center; */
			font-size: 1.6rem;
		}
	}

	.form-row-no-wrap {
		// border: 1px solid white;
		// background-color: white;
		display: flex;
		justify-content: flex-start;
		/* flex-wrap: wrap; */
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
			.form-input {
				width: 100%;
				/* flex: 1; */
			}
			.file-input {
				width: 100%;
				input[type='file'] {
					width: 100%;
				}
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
				column-gap: 0.5rem;
				flex: 1;
				.add-artist-btn-form {
					background-color: ${({ theme }) => theme.lightBrown};
					display: grid;
					place-content: center;
					padding: 1rem;
					cursor: pointer;
					.add-new-record-icon {
						color: ${({ theme }) => theme.white};
						font-size: 1.6rem;
						pointer-events: none;
					}
					/* flex: 1; */
					/* font-family: 'NewTegomin'; */
					/* padding: 0.5rem 1rem; */
				}
			}
			/* .choice-wrapper {
				display: flex;
				flex-direction: column;
				justify-content: space-between;
				row-gap: 0.5rem;
				flex: 1;
				.add-artist-btn-form {
					background-color: ${({ theme }) => theme.lightBrown};
					color: ${({ theme }) => theme.white};
					flex: 1;
					font-family: 'NewTegomin';
					padding: 0.5rem 1rem;
					font-size: 1.6rem;
				}
			} */
			.input-grow {
				/* flex: 1; */
				/* width: 100%; */
				resize: none;
				width: --webkit-fill-available;
				width: 100%;
				margin-top: 1rem;
				background-color: rgba(168, 105, 69, 0.57);
				box-shadow: rgb(0 0 0 / 30%) 2px 2px 2px, rgb(0 0 0 / 10%) -2px -2px 2px;
				border: none;
				outline: none;
				font-weight: bolder;
				/* font-size: 1.6rem; */
				::placeholder {
					/* Chrome, Firefox, Opera, Safari 10.1+ */
					${'' /* color: red; */}
					color: ${({ theme }) => theme.engravedBrown};
					/* font-size: 1.6rem; */
					/* font-family: 'NewTegomin'; */
					padding: 0.5rem 1rem;
					opacity: 1; /* Firefox */
				}

				:-ms-input-placeholder {
					/* Internet Explorer 10-11 */
					color: ${({ theme }) => theme.engravedBrown};
				}

				::-ms-input-placeholder {
					/* Microsoft Edge */
					color: ${({ theme }) => theme.engravedBrown};
				}
			}
			select {
				/* font-size: 1.6rem; */
				/* padding: 0.2rem; */
				/* appearance: none; */
				// Additional resets for further consistency
				background-color: transparent;
				background-color: rgba(168, 105, 69, 0.57);
				border: none;
				/* padding: 0 1em 0 0; */
				margin: 0;
				width: 100%;
				/* font-family: inherit; */
				/* font-size: inherit; */
				cursor: inherit;
				line-height: inherit;
				padding: 10px;
				box-shadow: rgb(0 0 0 / 30%) 2px 2px 2px, rgb(0 0 0 / 10%) -2px -2px 2px;
				outline: none;
				/* &:focus{

				} */
				option {
					font-size: 1.6rem;
					/* font-style: italic; */
					color: ${({ theme }) => theme.engravedBrown};
					background-color: rgba(36, 14, 0, 0.08);
					/* padding: 0.2rem; */
					border: 1px solid ${({ theme }) => theme.darkBrown};
					border-radius: 1rem 0 0 1rem;
					/* width: 25rem; */
					/* margin-left: 2rem; */
					&:focus {
						border: 1px solid ${({ theme }) => theme.darkBrown};
						outline: none;
					}
				}
			}
		}
		.form-item-row {
			display: flex;
			width: unset;
			align-items: center;
			column-gap: 1rem;
			/* flex: 1; */
			label.song-label {
				margin: 0;
			}
			.date-item {
				display: flex;
				align-items: center;
				justify-content: flex-start;
				column-gap: 1rem;
				/* flex: 1; */
				label.input-date {
					/* width: 100%; */
				}
				.input-date {
					font-size: 1.6rem;
					text-transform: uppercase;
					/* margin: 10px 0 2px; */
					/* width: unset; */
				}
			}
			label {
				font-size: 1.6rem;
				text-transform: uppercase;
			}
			input[type='checkbox'] {
				width: unset;
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
			/* select {
				font-size: 1.6rem;
				padding: 0.2rem;
				appearance: none;
				// Additional resets for further consistency
				background-color: transparent;
				border: none;
				padding: 0 1em 0 0;
				margin: 0;
				width: 100%;
				font-family: inherit;
				font-size: inherit;
				cursor: inherit;
				line-height: inherit;
				option {
					font-size: 1.6rem;
					font-style: italic;
					color: ${({ theme }) => theme.engravedBrown};
					background-color: rgba(36, 14, 0, 0.08);
					padding: 0.2rem;
					border: 1px solid ${({ theme }) => theme.darkBrown};
					border-radius: 1rem 0 0 1rem;
					width: 25rem;
					margin-left: 2rem;
					&:focus {
						border: 1px solid ${({ theme }) => theme.darkBrown};
						outline: none;
					}
				}
			} */
		}
		.form-action-btn {
			background-color: ${({ theme }) => theme.lightBrown};
			color: ${({ theme }) => theme.white};
			flex: 1;
			font-family: 'Oswald', serif;
			font-family: 'NewTegomin';
			padding: 0.5rem 1rem;
			/* text-transform: unset; */
			/* border: none;
		outline: none;
		border-radius: 0.4rem; */
			/* align-items: center; */
			font-size: 1.6rem;
		}
	}

	.button-submit {
		margin-bottom: 10px;
	}
`;

export default EditSongForm;
