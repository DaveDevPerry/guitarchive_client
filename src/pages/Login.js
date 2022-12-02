import { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useLogin } from '../hooks/useLogin';
// import { NavLink } from 'react-router-dom';
import AppDetails from '../components/AppDetails';
import { useViewport } from '../hooks/useViewport';

const Login = ({ theme }) => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const { login, error, isLoading } = useLogin();
	const { width } = useViewport();
	const breakpoint = 620;

	const handleSubmit = async (e) => {
		e.preventDefault();
		await login(email, password);
	};

	return (
		<StyledLogin
			className={`login-page page ${width < breakpoint ? 'mobile' : ''}`}
			initial={{ width: 0 }}
			animate={{ width: '100%' }}
			exit={{ x: window.innerWidth }}
		>
			<div className='form-page-container'>
				<form
					onSubmit={handleSubmit}
					className='login br'
					id={`${theme === 'dark' ? 'dark' : 'light'}`}
				>
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
							id='input-password'
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
		</StyledLogin>
	);
};
const StyledLogin = styled(motion.div)`
	/* display: flex;
	flex-direction: column;
	justify-content: flex-start;
	row-gap: 2rem;
	max-width: 100rem;
	padding: 0.5rem 1rem;
	overflow-y: auto;
	z-index: 1;
	transition: all 200ms linear;
	margin: 0 auto;
	flex: 1;
	z-index: 600; */
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	row-gap: 2rem;
	max-width: 100rem;
	padding: 0.5rem 1rem;
	z-index: 1;
	transition: all 200ms linear;
	margin: 0 auto;
	flex: 1;
	overflow-y: hidden;
	.form-page-container {
		display: flex;
		flex-direction: column;
		row-gap: 2rem;
		flex: 1;
		justify-content: flex-start;

		.login {
			display: flex;
			flex-direction: column;
			row-gap: 1rem;
			padding: 2rem;
			border-radius: 1rem;
			z-index: 601;
			&#dark {
				background-image: url('/images/dark wood texture.webp');
			}
			&#light {
				background-image: url('/images/white wood.webp');
			}
			h3 {
				text-align: center;
				margin: 0;
				font-weight: bolder;
				color: ${({ theme }) => theme.primaryColor};
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
					color: ${({ theme }) => theme.primaryColor};
					text-shadow: 0px 1px 0px rgba(255, 255, 255, 0.3),
						0px -1px 0px rgba(0, 0, 0, 0.7);
				}

				input[type='email'],
				input[type='password'] {
					padding: 0.8rem 1rem;
					margin: 0;
					font-size: 1.8rem;
					flex: 1;
					width: 100%;
				}
			}

			.action-btn {
				color: ${({ theme }) => theme.btnColor};
				background-color: ${({ theme }) => theme.btnBg};
				font-weight: bolder;
				text-transform: uppercase;
				font-size: 1.6rem;
				margin-top: 2rem;
				border: 1px solid ${({ theme }) => theme.btnBorder};
			}
		}
		.app-details-container {
			display: flex;
			flex-direction: column;
			justify-content: flex-end;
			flex: 1;
		}
	}
	&.mobile {
		.form-page-container {
			display: flex;
			flex-direction: column;
			row-gap: 2rem;
			flex: 1;
			justify-content: flex-start;

			.login {
				row-gap: 1rem;
				padding: 1rem;
				border-radius: 0.4rem;

				h3 {
					font-size: 2.5rem;
					line-height: 2.5rem;
				}
				.login-input-wrapper {
					label {
						font-size: 1.6rem;
						margin: 10px 0 2px;
					}

					input[type='email'],
					input[type='password'] {
						padding: 0.8rem 1rem;
						font-size: 1.8rem;

						width: 100%;
					}
				}

				.action-btn {
					font-size: 1.6rem;
					margin-top: 2rem;
				}
			}
			.app-details-container {
				display: flex;
				flex-direction: column;
				justify-content: flex-end;
				flex: 1;
			}
		}
	}
`;

export default Login;
