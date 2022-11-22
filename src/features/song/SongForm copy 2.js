import React, { useState } from 'react';
import styled from 'styled-components';
import FileBase from 'react-file-base64';
import { useAuthContext } from '../../hooks/useAuthContext';
import { useSongsContext } from '../../hooks/useSongContext';
import { useStateContext } from '../../lib/context';
import { log } from '../../utils/helper';
import toast from 'react-hot-toast';
// import { NavLink } from 'react-router-dom';
// import SongMetrics from './SongMetrics';
// import Filter from './Filter';

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
	const { setIsFormOpen } = useStateContext();
	const { dispatch: songDispatch } = useSongsContext();
	const { user } = useAuthContext();

	const [songData, setSongData] = useState({
		title: '',
		artist: '',
		arranger: '',
		style: '',
		status: '',
		difficulty: 3,
		pages: 0,
		format: '',
		deadlineDate: '',
		reason: '',
		isFavourite: false,
		selectedFile: '',
	});
	// const song = useSelector((state) =>
	// 	currentId ? state.songs.find((p) => p._id === currentId) : null
	// );
	// const classes = useStyles();
	// const dispatch = useDispatch();

	// useEffect(() => {
	// 	if (song) setSongData(song);
	// }, [song]);

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
	};
	const clear = () => {
		setCurrentId(null);
		setSongData({
			artist: '',
			title: '',
			arranger: '',
			style: '',
			status: '',
			difficulty: 3,
			pages: 0,
			format: '',
			deadlineDate: '',
			reason: '',
			isFavourite: false,
			selectedFile: '',
		});
	};
	const back = () => {
		clear();
		setIsFormOpen(false);
	};

	// create a toast
	const notify = () => {
		toast.success(`new song successfully added.`, {
			// toast.success(`${headline_band} gig successfully added.`, {
			duration: 3000,
			style: {
				border: '2px solid #1da000',
			},
		});
	};

	// /// js code and functions
	// const inputTextHandler = (e) => {
	// 	setInputText(e.target.value);
	// };
	// const inputDescriptionHandler = (e) => {
	// 	log(e.target.value);
	// 	setInputDescription(e.target.value);
	// };

	// const inputDateHandler = (e) => {
	// 	log(e.target.value);
	// 	setInputDate(e.target.value);
	// };

	// const submitCancelSongHandler = (e) => {
	// 	e.preventDefault();
	// 	setInputText('');
	// 	setInputDate('');
	// 	setInputDescription('');

	// 	setIsFormOpen(false);
	// };
	// const submitSongHandler = async (e) => {
	// 	e.preventDefault();

	// 	const newSong = {
	// 		name: inputText,
	// 		deadlineDate: inputDate,
	// 		description: inputDescription,
	// 		isComplete: false,
	// 		// id: Math.random() * 1000,
	// 	};

	// 	log(newSong, 'new song to create');

	// 	const response = await fetch(
	// 		`${process.env.REACT_APP_BACKEND_URL}/api/songs`,
	// 		{
	// 			method: 'SONG',
	// 			headers: {
	// 				'Content-Type': 'application/json',
	// 				Authorization: `Bearer ${user.token}`,
	// 			},
	// 			body: JSON.stringify(newSong),
	// 			// body: JSON.stringify({ newSong }),/
	// 		}
	// 	);
	// 	const json = await response.json();
	// 	log(json, 'new song json');

	// 	// const allLevelsCorrectSongs = [];

	// 	// json.forEach((level) => {
	// 	// 	const clonedSongs = [...level.songs];
	// 	// 	log(clonedSongs, 'cloned songs');
	// 	// 	const correctSongsInLevel = clonedSongs.filter((song) => {
	// 	// 		return currentUser && currentUser.correctSongIDs.includes(song._id);
	// 	// 	});
	// 	// 	log(correctSongsInLevel, 'correctSongsInLevel');
	// 	// 	allLevelsCorrectSongs.push(correctSongsInLevel);
	// 	// 	log(allLevelsCorrectSongs, 'all levels correct songs');
	// 	// });
	// 	if (response.ok) {
	// 		songDispatch({
	// 			type: 'CREATE_SONG',
	// 			payload: json,
	// 		});
	// 		log('here');
	// 	}

	// 	// setSongs([
	// 	// 	...songs,
	// 	// 	{
	// 	// 		name: inputText,
	// 	// 		deadlineDate: inputDate,
	// 	// 		description: inputDescription,
	// 	// 		isComplete: false,
	// 	// 		// id: Math.random() * 1000,
	// 	// 	},
	// 	// ]);
	// 	setInputText('');
	// 	setInputDate('');
	// 	setInputDescription('');

	// 	setIsFormOpen(false);
	// };

	return (
		<StyledSongForm autoComplete='off' noValidate onSubmit={handleSubmit}>
			{/* <h2>{currentId ? 'Editing' : 'Creating'} a Memory</h2> */}
			{/* <h2>{currentId ? 'Editing' : 'Creating'} a Memory</h2> */}
			<div className='form-row'>
				<div className='form-item'>
					<label>Title</label>
					{/* <input type="text" name="title" value="<%= song.title %>" autofocus /> */}
					<input
						type='text'
						name='title'
						variant='outlined'
						label='Title'
						value={songData.title}
						onChange={(e) =>
							setSongData({ ...songData, title: e.target.value })
						}
						placeholder='title'
					/>
				</div>
			</div>
			{/* <div className="form-row">
	<div className="form-item">
		<label>Artist</label>
		<div className="choice-wrapper">
			<select name="artist">
				{artists.forEach(artist => {
					artist.id === songData.artist ? (
						<option
					selected
					label={artist.name}
					value={artist.id}
				></option>
					) :(
						<option label={artist.name} value={artist.id}></option>
					)  })}
			</select>
			<input
				type="text"
				name="artist"
				value={songData.artist}
				placeholder="add an artist here, if not listed above"
				className="input-create"
			/>
		</div>
	</div>
</div> */}
			{/* <div className="form-row">
	<div className="form-item">
		<label>Arranged By</label>
		<div className="choice-wrapper">
			<select name="arranger">
				{arrangers.forEach(arranger => { 
					arranger.id ===
				songData.arranger ? (
					<option
					selected
					label={arranger.name}
					value={arranger.id}
				></option>
				) :(
					<option
					label={arranger.name}
					value={arranger.id}
				></option>
				)
			 })}
			</select>
			<input
				type="text"
				name="arranger"
				value={songData.arranger}
				placeholder="add an arranger here, if not listed above"
				className="input-create"
			/>
		</div>
	</div>
</div> */}
			{/* <div className="form-row">
	<div className="form-item">
		<label>Style</label>
		<div className="choice-wrapper">
			<select name="style">
				{styles.forEach(style => { 
					style.id === songData.style ? (
						<option
					selected
					label={style.name}
					value={style.id}
				></option>
					):(
						<option 	label={style.name}
					value={style.id}></option>

					) })}
			</select>
			<input
				type="text"
				name="style"
				value={songData.style}
				placeholder="add a style here, if not listed above"
				className="input-create"
			/>
		</div>
	</div>
</div> */}
			{/* 
<div className="form-row">
	<div className="form-item">
		<label>Status</label>
		<div className="choice-wrapper">
			<select name="status">
				{statuses.forEach(status => { 
				status.id === songData.status ? (
					<option
					selected
					label={status.name}
					value={status.id}
				></option>
				):(
					<option label={status.name}
					value={status.id}></option>

				)})}
			</select>
			<input
				type="text"
				name="status"
				value={songData.status}
				placeholder="add a status here, if not listed above"
				className="input-create"
			/>
		</div>
	</div>
</div> */}

			<div className='form-row'>
				<div className='form-item'>
					<label>difficulty</label>
					<input
						type='range'
						min='1'
						max='5'
						name='difficulty'
						value={songData.difficulty}
						onChange={(e) =>
							setSongData({ ...songData, difficulty: e.target.value })
						}
					/>
				</div>
			</div>
			<div className='form-row'>
				<div className='form-item'>
					<label>favourite</label>
					<input
						type='text'
						name='isFavourite'
						value={songData.isFavourite}
						onChange={(e) =>
							setSongData({ ...songData, isFavourite: e.target.value })
						}
					/>
				</div>
			</div>
			<div className='form-row'>
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
			</div>

			<div className='form-row'>
				<div className='form-item-date'>
					<div className='date-item'>
						<label className='input-date'>Deadline Date </label>

						<input
							type='date'
							name='deadlineDate'
							value={
								songData.deadlineDate == null ? '' : songData.deadlineDate
								// : songData.deadlineDate.toISOString().split('T')[0]
							}
							className='date-input'
							onChange={(e) =>
								setSongData({ ...songData, deadlineDate: e.target.value })
							}
						/>
					</div>
				</div>

				{/* <div className='form-item'>
					<label>Reason</label>
					<textarea name='reason' className='input-grow'>
						{' '}
						{songData.reason}
					</textarea>
				</div> */}
			</div>
			<div className='file-input'>
				<FileBase
					type='false'
					multiple={false}
					onDone={({ base64 }) =>
						setSongData({ ...songData, selectedFile: base64 })
					}
				/>
			</div>
			{/* <input
				type='text'
				name='artist'
				variant='outlined'
				label='Creator'
				value={songData.artist}
				onChange={(e) => setSongData({ ...songData, artist: e.target.value })}
				placeholder='artist'
			/>
			<input
				type='text'
				name='title'
				variant='outlined'
				label='Title'
				value={songData.title}
				onChange={(e) => setSongData({ ...songData, title: e.target.value })}
				placeholder='title'
			/>
			<input
				type='text'
				name='arranger'
				variant='outlined'
				label='Message'
				value={songData.arranger}
				onChange={(e) => setSongData({ ...songData, arranger: e.target.value })}
				placeholder='arranger'
			/>
			<input
				type='text'
				name='style'
				variant='outlined'
				label='Tags'
				value={songData.style}
				onChange={(e) => setSongData({ ...songData, style: e.target.value })}
				placeholder='style'
			/>
			<input
				type='text'
				name='status'
				variant='outlined'
				label='Tags'
				value={songData.status}
				onChange={(e) => setSongData({ ...songData, status: e.target.value })}
				placeholder='status'
			/> */}
			{/* <input
				type='text'
				name='style'
				variant='outlined'
				label='Tags'
				value={songData.style}
				onChange={(e) =>
					setSongData({ ...songData, style: e.target.value})
				}
				placeholder='style'
			/> */}
			{/* <div className='file-input'>
				<FileBase
					type='false'
					multiple={false}
					onDone={({ base64 }) =>
						setSongData({ ...songData, selectedFile: base64 })
					}
				/>
			</div> */}
			<button
				// className='button-submit'
				// variant='contained'
				// color='primary'
				// size='large'
				type='submit'
			>
				Submit
			</button>
			<button
				// variant='contained'
				// color='secondary'
				// size='small'
				onClick={clear}
			>
				Clear
			</button>
			<button
				// variant='contained'
				// color='secondary'
				// size='small'
				onClick={back}
			>
				back
			</button>
			{/* <NavLink to='/songs'>back</NavLink> */}
			{/* <div className='form-group'>
				<input
					value={inputText}
					type='text'
					className='song-input'
					onChange={inputTextHandler}
					placeholder='song'
				/>
			</div>
			<div className='form-group'>
				<textarea
					value={inputDescription}
					className='song-input-description'
					onChange={inputDescriptionHandler}
					placeholder='notes'
					rows='3'
				></textarea>
			</div>
			<div className='form-group-dates'>
				<label>Deadline:</label>
				<div>
					<input
						type='date'
						name='deadlineDate'
						id='deadline'
						value={inputDate}
						onChange={inputDateHandler}
					/>
				</div>
			</div>
			<div className='form-group'>
				<button
					className='song-button-cancel'
					// type='submit'
					onClick={submitCancelSongHandler}
				>
					CANCEL
				</button>
				<button
					className='song-button'
					type='submit'
					onClick={submitSongHandler}
				>
					CREATE
				</button>
			</div> */}
		</StyledSongForm>
	);
};
const StyledSongForm = styled.form`
	/* background-image: url('/images/dark wood texture.webp'); */
	.form-row {
		// border: 1px solid white;
		// background-color: white;
		.form-item {
			label {
				font-size: 1.6rem;
				text-transform: uppercase;
				margin: 10px 0 2px;
			}
			.choice-wrapper {
				/* @include flex(space-between, center, row); */
				display: flex;
				justify-content: space-between;
				align-items: center;
				column-gap: 2rem;
			}
			.input-grow {
				flex: 1;
				width: 100%;
			}
			select {
				font-size: 1.6rem;
				padding: 0.2rem;
				option {
					font-size: 1.6rem;
					font-style: italic;
					/* color: $engraved-brown; */
					color: ${({ theme }) => theme.engravedBrown};
					background-color: rgba(36, 14, 0, 0.08);
					// box-shadow: inset -2px -2px 2px rgba(150, 150, 150, 0.1),
					// 	inset 3px 3px 3px #1d0b0120;
					padding: 0.2rem;
					border: 1px solid ${({ theme }) => theme.darkBrown};
					// border-radius: 0.7rem 0 0 0.7rem;
					border-radius: 1rem 0 0 1rem;
					width: 25rem;
					margin-left: 2rem;
					&:focus {
						border: 1px solid ${({ theme }) => theme.darkBrown};
						outline: none;
					}
				}
			}
		}
	}
	.input-date {
		font-size: 1.6rem;
		text-transform: uppercase;
		margin: 10px 0 2px;
	}

	.file-input {
		width: 97%;
		margin: 10px 0;
	}
	.button-submit {
		margin-bottom: 10px;
	}
`;
// const StyledSongForm = styled.form`
// 	/* display: flex;
// 	flex-direction: column;
// 	justify-content: flex-start;
// 	flex: unset;
// 	row-gap: 1rem;
// 	border-radius: 0.5rem;
// 	padding: 2rem 1rem;
// 	background-color: white;
// 	box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.05); */
// 	display: flex;
// 	flex-wrap: wrap;
// 	justify-content: center;
// 	.file-input {
// 		width: 97%;
// 		margin: 10px 0;
// 	}
// 	.button-submit {
// 		margin-bottom: 10px;
// 	}
// `;
// const StyledSongForm = styled.form`
// 	display: flex;
// 	flex-direction: column;
// 	justify-content: flex-start;
// 	flex: unset;
// 	row-gap: 1rem;
// 	border-radius: 0.5rem;
// 	padding: 2rem 1rem;
// 	background-color: white;
// 	box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.05);
// 	.form-group {
// 		display: flex;
// 		align-items: center;
// 		padding: 0rem;
// 		column-gap: 1rem;
// 		.song-input {
// 			font-size: 1.8rem;
// 			width: 100%;
// 			border-radius: 0.5rem;
// 			box-shadow: inset -3px -3px 3px rgba(0, 0, 0, 0.4),
// 				inset 3px 3px 3px rgb(145, 143, 143, 0.3);
// 			padding: 0.5rem 1rem;
// 			background-color: rgba(239, 239, 239, 0.437);
// 		}
// 		.song-input-description {
// 			width: 100%;
// 			resize: none;
// 			font-size: 1.6rem;
// 			font-size: 1.8rem;
// 			font-family: 'Poppins', sans-serif;
// 			border: none;
// 			border-radius: 0.5rem;
// 			box-shadow: inset -3px -3px 3px rgba(0, 0, 0, 0.4),
// 				inset 3px 3px 3px rgb(145, 143, 143, 0.3);
// 			padding: 0.5rem 1rem;
// 			background-color: rgba(239, 239, 239, 0.437);
// 		}
// 	}
// 	label {
// 		font-size: 1.6rem;
// 	}
// 	input,
// 	button {
// 		padding: 0.5rem;

// 		border: none;
// 		background: white;
// 	}
// 	input#deadline {
// 		border: 2px solid #9a9a9a;
// 		padding: 0.5rem;
// 		font-size: 1.6rem;
// 		/* border: none; */
// 		background: white;
// 		height: 3rem;
// 		border-radius: 0.5rem;
// 		cursor: pointer;
// 		color: rgb(62, 61, 61);
// 	}
// 	button {
// 		color: white;
// 		background-color: #9a9a9a;
// 		border-radius: 0.5rem;
// 		font-size: 1.8rem;
// 		background-color: #1aac83;
// 		padding: 0.5rem 2rem;
// 		cursor: pointer;
// 		transition: all 0.3s ease;
// 		flex: 1;
// 		&.song-button-cancel {
// 			background-color: #e7195a;
// 		}
// 	}
// 	button:hover {
// 		background: #1aac83;
// 		color: white;
// 	}
// 	input:focus,
// 	.song-input-description:focus {
// 		outline: none;
// 		border: 2px solid #1aac83;
// 		box-sizing: border-box;
// 	}
// 	.form-group-dates {
// 		display: flex;
// 		align-items: center;
// 		padding: 0rem;
// 		column-gap: 1rem;
// 		label {
// 			flex: 1;
// 			text-align: right;
// 		}
// 		div {
// 			flex: 1;
// 			text-align: left;
// 		}
// 	}
// `;
export default SongForm;
