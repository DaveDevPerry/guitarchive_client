import { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useSignup } from '../hooks/useSignup';
import { NavLink } from 'react-router-dom';
import AppDetails from '../components/AppDetails';

const Signup = ({ theme }) => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');
	const { signup, isLoading, error } = useSignup();

	const handleSubmit = async (e) => {
		e.preventDefault();
		await signup(email, password, firstName, lastName);
	};

	return (
		<StyledSignup
			className='signup-page'
			initial={{ width: 0 }}
			animate={{ width: '100%' }}
			exit={{ x: window.innerWidth }}
		>
			<div className='form-page-container'>
				<form onSubmit={handleSubmit} className='signup br'>
					<h3>Sign up</h3>
					<div>
						<label>Email:</label>
						<input
							type='email'
							onChange={(e) => setEmail(e.target.value)}
							value={email}
						/>
					</div>
					<div>
						<label>Password:</label>
						<input
							type='password'
							onChange={(e) => setPassword(e.target.value)}
							value={password}
						/>
					</div>
					<div>
						<label>first name:</label>
						<input
							type='text'
							onChange={(e) => setFirstName(e.target.value)}
							value={firstName}
						/>
					</div>
					<div>
						<label>last name:</label>
						<input
							type='text'
							onChange={(e) => setLastName(e.target.value)}
							value={lastName}
						/>
					</div>

					<button className='action-btn' disabled={isLoading}>
						Sign up
					</button>
					{error && <div className='error'>{error}</div>}
				</form>

				<p>
					Got an account? Log in<NavLink to='/login'> here</NavLink>
				</p>
				<div className='app-details-container'>
					<AppDetails theme={theme} />
				</div>
			</div>
		</StyledSignup>
	);
};
const StyledSignup = styled(motion.div)`
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	row-gap: 2rem;
	/* padding: 0.5rem; */
	max-width: 100rem;
	/* max-width: 42rem; */
	/* border: 2px solid blue; */
	padding: 0.5rem 1rem;
	overflow-y: auto;
	/* overflow-y: scroll; */
	/* overflow: hidden; */
	z-index: 1;
	/* overflow-y: auto; */
	transition: all 200ms linear;
	margin: 0 auto;
	flex: 1;
	z-index: 600;

	.form-page-container {
		display: flex;
		flex-direction: column;
		row-gap: 2rem;
		flex: 1;
		justify-content: flex-start;
	}
	.signup {
		display: flex;
		flex-direction: column;
		row-gap: 1rem;
		padding: 2rem;
		/* background-color: ${({ theme }) => theme.white}; */
		z-index: 601;
		/* margin: 0 1rem; */
		h3 {
			text-align: center;
			margin: 0;
			color: ${({ theme }) => theme.txtGrey};
		}
		input {
			padding: 0.8rem 1rem;
			margin: 0;
			font-size: 1.8rem;
			color: ${({ theme }) => theme.secondaryColor};
			flex: 1;
			&:focus {
				outline: none;
				border: none;
				/* border: 2px solid ${({ theme }) => theme.primaryColor}; */
				border-radius: 4px;
				box-sizing: border-box;
			}
		}
		.action-btn {
			color: ${({ theme }) => theme.white};
			background-color: ${({ theme }) => theme.green};

			font-weight: bolder;
			text-transform: uppercase;
			font-size: 1.6rem;
		}
	}
	p {
		text-align: center;
		color: ${({ theme }) => theme.txtGrey};
		a {
			color: ${({ theme }) => theme.green};
			text-decoration: none;
		}
	}
	.app-details-container {
		display: flex;
		flex-direction: column;
		justify-content: flex-end;
		flex: 1;
	}
`;
/* label,
	input {
		display: block;
		color: ${({ theme }) => theme.white};
	}
	input {
		padding: 10px;
		margin-top: 10px;
		margin-bottom: 20px;
		width: 100%;
		border: 2px solid ${({ theme }) => theme.borderGrey};
		border-radius: 4px;
		box-sizing: border-box;
	}
	input:focus {
		outline: none;
		border: none;
		border: 2px solid ${({ theme }) => theme.primaryColor};
		border-radius: 4px;
		box-sizing: border-box;
	}
	form button {
		background: ${({ theme }) => theme.primaryColor};
		border: 0;
		color: #fff;
		padding: 1rem;
		border-radius: 4px;
		cursor: pointer;
	}
	div.error {
		padding: 1rem;
		background: ${({ theme }) => theme.bgError};
		border: 1px solid ${({ theme }) => theme.error};
		color: ${({ theme }) => theme.error};
		border-radius: 4px;
	}
	input.error {
		border: 1px solid ${({ theme }) => theme.error};
	} */

export default Signup;
