import { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useLogin } from '../hooks/useLogin';
// import { NavLink } from 'react-router-dom';
import AppDetails from '../components/AppDetails';

const Login = ({ theme }) => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const { login, error, isLoading } = useLogin();

	const handleSubmit = async (e) => {
		e.preventDefault();
		await login(email, password);
	};

	return (
		<StyledLogin
			className='login-page'
			initial={{ width: 0 }}
			animate={{ width: '100%' }}
			exit={{ x: window.innerWidth }}
		>
			{/* <div className='brand-wrapper'>
				<h1 id='brand'>TV Quiz</h1>
			</div> */}

			<div className='form-page-container'>
				<form onSubmit={handleSubmit} className='login br'>
					<h3>Log in</h3>
					<div className='login-input-wrapper'>
						<label>Email:</label>
						<input
							type='email'
							onChange={(e) => setEmail(e.target.value)}
							value={email}
							autoComplete='current-email'
						/>
					</div>
					<div className='login-input-wrapper'>
						<label>Password:</label>
						<input
							type='password'
							onChange={(e) => setPassword(e.target.value)}
							value={password}
							autoComplete='current-password'
						/>
					</div>
					<button className='action-btn' disabled={isLoading}>
						Log in
					</button>
					{error && <div className='error'>{error}</div>}
				</form>

				{/* <p>
					Need an account? Sign up<NavLink to='/signup'> here</NavLink>
				</p> */}
				<div className='app-details-container'>
					<AppDetails theme={theme} />
				</div>
			</div>

			{/* <div className='launch-wrapper'>
				<h1 className='launch-btn' id='lets-rock'>
					It's the CD's or Me
				</h1>
			</div> */}
		</StyledLogin>
	);
};
const StyledLogin = styled(motion.div)`
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	row-gap: 2rem;
	/* padding: 0.5rem; */
	max-width: 80rem;
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
	.login {
		display: flex;
		flex-direction: column;
		row-gap: 1rem;
		padding: 2rem;
		/* background-color: ${({ theme }) => theme.white}; */
		background-image: url('/images/dark wood texture.webp');
		/* border: 0.2rem solid ${({ theme }) => theme.primaryColor}; */
		/* border-radius: 1rem; */
		/* box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.05); */
		z-index: 601;
		/* margin: 0 1rem; */
		h3 {
			text-align: center;
			margin: 0;
			/* color: ${({ theme }) => theme.txtGrey}; */
			font-weight: bolder;
			color: ${({ theme }) => theme.engravedBrown};
			text-shadow: 0px 1px 0px rgba(255, 255, 255, 0.3),
				0px -1px 0px rgba(0, 0, 0, 0.7);
			font-size: 2.5rem;
			line-height: 2.5rem;
		}
		.login-input-wrapper {
			label {
				font-size: 1.6rem;
				text-transform: uppercase;
				margin: 10px 0 2px;
				color: ${({ theme }) => theme.engravedBrown};
			}

			input[type='email'],
			input[type='password'] {
				padding: 0.8rem 1rem;
				margin: 0;
				font-size: 1.8rem;
				flex: 1;
				border-radius: 4px;
				box-sizing: border-box;

				background-color: rgba(168, 105, 69, 0.57);
				box-shadow: rgb(0 0 0 / 30%) 2px 2px 2px, rgb(0 0 0 / 10%) -2px -2px 2px;
				width: 100%;
			}
			input:-webkit-autofill {
				-webkit-text-fill-color: ${({ theme }) => theme.engravedBrown};

				/* -webkit-text-fill-color: #ffffff; */
				-webkit-box-shadow: 0 0 0px 1000px rgba(168, 105, 69, 0.57) inset;
				/* -webkit-box-shadow: 0 0 0px 1000px #151718 inset; */
				transition: background-color 5000s ease-in-out 0s;
				padding: 0.8rem 1rem;
				margin: 0;
				font-size: 1.8rem;
				flex: 1;
				border-radius: 4px;
				box-sizing: border-box;
			}
		}

		.action-btn {
			color: ${({ theme }) => theme.white};
			background-color: ${({ theme }) => theme.lightBrown};
			font-weight: bolder;
			text-transform: uppercase;
			font-size: 1.6rem;
			margin-top: 2rem;
		}
	}
	/* p {
		text-align: center;
		color: ${({ theme }) => theme.txtGrey};
		a {
			color: ${({ theme }) => theme.green};
			text-decoration: none;
		}
	} */
	.app-details-container {
		display: flex;
		flex-direction: column;
		justify-content: flex-end;
		flex: 1;
	}
`;

export default Login;
