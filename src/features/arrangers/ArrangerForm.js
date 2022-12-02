import React, { useState } from 'react';
import styled from 'styled-components';
import { useAuthContext } from '../../hooks/useAuthContext';
import { useArrangersContext } from '../../hooks/useArrangerContext';
import { useStateContext } from '../../lib/context';
import { log } from '../../utils/helper';
import toast from 'react-hot-toast';

const ArrangerForm = ({ currentId, setCurrentId, theme }) => {
	// let navigate = useNavigate();
	const { setIsArrangerFormOpen } = useStateContext();
	const { dispatch: arrangerDispatch } = useArrangersContext();
	// const { arrangers } = useArrangersContext();
	const { user } = useAuthContext();

	const [arrangerData, setArrangerData] = useState({
		name: '',
	});

	const handleSubmit = async (e) => {
		e.preventDefault();

		if (currentId) {
			// dispatch(updateArranger(currentId, arrangerData));
			log(currentId, 'update arranger in arranger form');
		} else {
			// dispatch(createArranger(arrangerData));
			const response = await fetch(
				`${process.env.REACT_APP_BACKEND_URL}/api/arrangers`,
				{
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
						Authorization: `Bearer ${user.token}`,
					},
					body: JSON.stringify(arrangerData),
				}
			);
			const json = await response.json();
			log(json, 'new arranger json');

			if (response.ok) {
				arrangerDispatch({
					type: 'CREATE_ARRANGER',
					payload: json,
				});
				log('here');
			}
		}
		clear();
		setIsArrangerFormOpen(false);
		notify();
		// navigate('/');
	};
	const clear = () => {
		// setCurrentId(null);
		setArrangerData({
			name: '',
		});
	};
	const back = (e) => {
		e.preventDefault();
		setArrangerData({
			name: '',
		});
		setIsArrangerFormOpen(false);
	};

	// create a toast
	const notify = () => {
		toast.success(`new arranger successfully added.`, {
			// toast.success(`${headline_band} gig successfully added.`, {
			duration: 3000,
			style: {
				border: '2px solid #1da000',
			},
		});
	};

	return (
		<StyledArrangerForm autoComplete='off' noValidate onSubmit={handleSubmit}>
			<div className='form-section'>
				<div className='form-row'>
					<div className='form-item'>
						<input
							type='text'
							name='name'
							variant='outlined'
							label='name'
							value={arrangerData.name}
							onChange={(e) =>
								setArrangerData({ ...arrangerData, name: e.target.value })
							}
							placeholder='Arranger Name'
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
		</StyledArrangerForm>
	);
};
const StyledArrangerForm = styled.form`
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

export default ArrangerForm;
