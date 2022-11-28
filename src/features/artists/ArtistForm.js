import React, { useState } from 'react';
import styled from 'styled-components';
// import FileBase from 'react-file-base64';
import { useAuthContext } from '../../hooks/useAuthContext';
import { useArtistsContext } from '../../hooks/useArtistContext';
import { useStateContext } from '../../lib/context';
import { log } from '../../utils/helper';
import toast from 'react-hot-toast';
// import { useArtistsContext } from '../../hooks/useArtistContext';
// import { useArrangersContext } from '../../hooks/useArrangerContext';
// import { useStylesContext } from '../../hooks/useStyleContext';
// import { useStatusContext } from '../../hooks/useStatusContext';
// import { useNavigate } from 'react-router-dom';
// import { NavLink } from 'react-router-dom';
// import ArtistMetrics from './ArtistMetrics';
// import Filter from './Filter';

const ArtistForm = ({
	inputText,
	setInputText,
	// artists,
	setArtists,
	setStatus,
	inputDate,
	setInputDate,
	inputDescription,
	setInputDescription,
	currentId,
	setCurrentId,
}) => {
	// let navigate = useNavigate();
	const { setIsArtistFormOpen } = useStateContext();
	const { dispatch: artistDispatch } = useArtistsContext();
	// const { artists } = useArtistsContext();
	const { user } = useAuthContext();

	const [artistData, setArtistData] = useState({
		name: '',
	});

	const handleSubmit = async (e) => {
		e.preventDefault();

		if (currentId) {
			// dispatch(updateArtist(currentId, artistData));
			log(currentId, 'update artist in artist form');
		} else {
			// dispatch(createArtist(artistData));
			const response = await fetch(
				`${process.env.REACT_APP_BACKEND_URL}/api/artists`,
				{
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
						Authorization: `Bearer ${user.token}`,
					},
					body: JSON.stringify(artistData),
				}
			);
			const json = await response.json();
			log(json, 'new artist json');

			if (response.ok) {
				artistDispatch({
					type: 'CREATE_ARTIST',
					payload: json,
				});
				log('here');
			}
		}
		clear();
		setIsArtistFormOpen(false);
		notify();
		// navigate('/');
	};
	const clear = () => {
		setCurrentId(null);
		setArtistData({
			name: '',
		});
	};
	const back = (e) => {
		e.preventDefault();
		setCurrentId(null);
		setArtistData({
			name: '',
		});
		setIsArtistFormOpen(false);
	};

	// create a toast
	const notify = () => {
		toast.success(`new artist successfully added.`, {
			// toast.success(`${headline_band} gig successfully added.`, {
			duration: 3000,
			style: {
				border: '2px solid #1da000',
			},
		});
	};

	return (
		<StyledArtistForm autoComplete='off' noValidate onSubmit={handleSubmit}>
			{/* <h2>{currentId ? 'Editing' : 'Creating'} a Memory</h2> */}
			{/* <h2>{currentId ? 'Editing' : 'Creating'} a Memory</h2> */}
			<div className='form-section'>
				<div className='form-row'>
					<div className='form-item'>
						<input
							type='text'
							name='name'
							variant='outlined'
							label='name'
							value={artistData.name}
							onChange={(e) =>
								setArtistData({ ...artistData, name: e.target.value })
							}
							placeholder='Artist Name'
							className='form-input'
						/>
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
		</StyledArtistForm>
	);
};
const StyledArtistForm = styled.form`
	/* background-image: url('/images/dark wood texture.webp'); */
	display: flex;
	flex-direction: column;
	/* row-gap: 1rem; */
	.form-section {
		border-bottom: 2px solid ${({ theme }) => theme.engravedBrown};
		padding: 2rem 0;
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
				/* @include flex(space-between, center, row); */
				display: flex;
				flex-direction: column;
				justify-content: space-between;
				row-gap: 0.5rem;
				flex: 1;
				/* align-items: center; */
				/* column-gap: 2rem; */
			}
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
			label.artist-label {
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

export default ArtistForm;
