import React, { useState } from 'react';
import styled from 'styled-components';
import { useAuthContext } from '../../hooks/useAuthContext';
import { useArtistsContext } from '../../hooks/useArtistContext';
import { useStateContext } from '../../lib/context';
import { log } from '../../utils/helper';
import toast from 'react-hot-toast';
import { useViewport } from '../../hooks/useViewport';

const ArtistForm = ({ currentId, setCurrentId }) => {
	// let navigate = useNavigate();
	const { setIsArtistFormOpen } = useStateContext();
	const { dispatch: artistDispatch } = useArtistsContext();
	// const { artists } = useArtistsContext();
	const { user } = useAuthContext();

	const [artistData, setArtistData] = useState({
		name: '',
	});

	const { width } = useViewport();
	const breakpoint = 620;

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
		// e.preventDefault();
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
		<StyledArtistForm
			className={`${width < breakpoint ? 'mobile' : ''}`}
			autoComplete='off'
			noValidate
			onSubmit={handleSubmit}
		>
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
					<button className='form-action-btn btn-6 custom-btn' onClick={back}>
						cancel
					</button>
					<button className='form-action-btn btn-6 custom-btn' onClick={clear}>
						reset
					</button>
					<button className='form-action-btn btn-6 custom-btn' type='submit'>
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
		padding: 2rem 0;
		&:last-child {
			border-bottom: none;
			padding: 0;
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
		.btn-6 {
			flex: 1;
			border-color: #7c7c7c;
			background: linear-gradient(
				top,
				rgba(38, 38, 38, 0.8),
				#e6e6e6 25%,
				#ffffff 38%,
				#c5c5c5 63%,
				#f7f7f7 87%,
				rgba(38, 38, 38, 0.8)
			);
			background: -webkit-linear-gradient(
				top,
				rgba(38, 38, 38, 0.5),
				#e6e6e6 25%,
				#ffffff 38%,
				rgba(0, 0, 0, 0.25) 63%,
				#e6e6e6 87%,
				rgba(38, 38, 38, 0.4)
			);
		}
	}
	&.mobile {
		.form-section {
			.form-row {
				column-gap: 1rem;
			}
		}
	}

	/* .button-submit {
		margin-bottom: 10px;
	} */
`;

export default ArtistForm;
