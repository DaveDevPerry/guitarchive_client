import React from 'react';
import { useState } from 'react';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { useAuthContext } from '../../hooks/useAuthContext';
import { useIdeasContext } from '../../hooks/useIdeaContext';
import { useStylesContext } from '../../hooks/useStyleContext';
import { log } from '../../utils/helper';

const IdeaForm = () => {
	const { user } = useAuthContext();
	const { dispatch } = useIdeasContext();
	const { styles } = useStylesContext();
	let navigate = useNavigate();
	const [ideaData, setIdeaData] = useState({
		title: '',
		artist: '',
		style: '',
		notes: '',
		isComplete: false,
	});

	// create a toast
	const notify = () => {
		toast.success(`new song successfully added.`, {
			duration: 3000,
			style: {
				border: '2px solid #1da000',
			},
		});
	};

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
		// setIsFormOpen(false);
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
	return (
		<StyledIdeaForm>
			<form
				autoComplete='off'
				noValidate
				onSubmit={handleSubmit}
				// className={`${width < breakpoint ? 'mobile' : ''}`}
			>
				<div className='form-item'>
					<input
						type='text'
						name='title'
						variant='outlined'
						label='Title'
						// value={ideaData.title}
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
						// value={ideaData.title}
						onChange={(e) =>
							setIdeaData({ ...ideaData, artist: e.target.value })
						}
						placeholder='Artist'
						className='form-input'
					/>
				</div>
				<div className='form-item'>
					<textarea
						name='reason'
						className='input-grow'
						placeholder='Notes'
						value={ideaData.notes}
						rows='3'
						onChange={(e) =>
							setIdeaData({ ...ideaData, notes: e.target.value })
						}
					/>
				</div>
				<div className='form-item'>
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
										key={style._id}
										label={style.name}
										value={style._id}
										className='form-option'
									></option>
								))}
							</select>
						</div>
					</div>
				</div>

				<button className='form-action-btn btn-6 custom-btn' type='submit'>
					<p>add</p>
				</button>
			</form>
		</StyledIdeaForm>
	);
};
const StyledIdeaForm = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	/* overflow-y: auto; */
	/* border: 1px solid ${({ theme }) => theme.borderColor};
	border-radius: 0.4rem;
	box-shadow: inset 3px 3px 4px rgba(0, 0, 0, 0005),
		inset -2px -2px 2px rgba(0, 0, 0, 08);
	background-color: rgba(0, 0, 0, 0.1);
	padding: 0.5rem; */

	form {
		display: flex;
		justify-content: flex-start;
		align-items: flex-start;
		flex-wrap: wrap;
		gap: 1rem;
		.form-item {
			flex: 1 1 48%;
			display: flex;
			column-gap: 2rem;
			align-items: center;
			justify-content: space-between;
			/* .button {
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
			label {
				font-size: 1.6rem;
				text-transform: uppercase;
				margin: 10px 0 2px;
			} */
			.input-grow {
				margin: 0;
			}
			.choice-wrapper {
				display: flex;
				flex-direction: row;
				justify-content: space-between;
				align-items: center;
				column-gap: 0.5rem;
				flex: 1;
				/* .add-new-person-btn {
					height: 3.9rem;
					width: 3.9rem;
					padding: 0;
					color: ${({ theme }) => theme.btnIcon};
					cursor: pointer;
					.add-new-record-icon {
					}
				} */
			}
		}
	}
`;

export default IdeaForm;
