import React, { useState } from 'react';
import styled from 'styled-components';
import { useAuthContext } from '../../hooks/useAuthContext';
import { useArtistsContext } from '../../hooks/useArtistContext';
import { useStateContext } from '../../lib/context';
import { log } from '../../utils/helper';
import toast from 'react-hot-toast';

const ArtistForm = ({ currentId, setCurrentId }) => {
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
	display: flex;
	flex-direction: column;
	overflow-y: hidden;
	.form-section {
		border-bottom: 2px solid ${({ theme }) => theme.engravedBrown};
		padding: 2rem 0;
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
			}
		}
		.form-action-btn {
			background-color: ${({ theme }) => theme.btnBg};
			border: 1px solid ${({ theme }) => theme.btnBorder};
			color: ${({ theme }) => theme.btnColor};
			flex: 1;
			font-family: 'NewTegomin';
			padding: 0.5rem 1rem;
			border-radius: 0.4rem;
			font-size: 1.6rem;
			font-weight: bolder;
		}
	}

	.button-submit {
		margin-bottom: 10px;
	}
`;

export default ArtistForm;
