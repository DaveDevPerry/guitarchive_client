import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import toast from 'react-hot-toast';
import styled from 'styled-components';
import { useStateContext } from '../lib/context';
import { useLogout } from '../hooks/useLogout';
import { useAuthContext } from '../hooks/useAuthContext';
import Toggle from '../components/Toggler';
import AppDetails from '../components/AppDetails';
import { useViewport } from '../hooks/useViewport';

const Settings = ({ themeToggler, theme }) => {
	const { logout } = useLogout();
	const { user } = useAuthContext();
	const { dataLoaded } = useStateContext();

	const handleClick = () => {
		logout();
		notify();
	};
	// create a toast
	const notify = () => {
		toast.success(`you are now logged out.`, {
			duration: 3000,
			style: {
				border: '2px solid #1da000',
			},
		});
	};

	let navigate = useNavigate();
	useEffect(() => {
		if (dataLoaded === false) {
			navigate('/');
		}
	}, [navigate, dataLoaded]);

	const { width } = useViewport();
	const breakpoint = 620;

	return (
		<StyledSettings
			initial={{ width: 0 }}
			animate={{ width: '100%' }}
			exit={{ x: window.innerWidth }}
			className={`settings-page page ${width < breakpoint ? 'mobile' : ''}`}
		>
			<div
				id={`${theme === 'dark' ? 'dark' : 'light'}`}
				className={`wrapper ${width < breakpoint ? 'mobile' : ''}`}
			>
				<h2>Settings</h2>

				<div className='account-details settings-section'>
					<h5 className='sub-heading'>account</h5>
					<div className='settings-section-wrapper'>
						<ul className='user-details-list'>
							{user.firstName && user.lastName && (
								<li>
									<p>name:</p>
									<span id='full-name'>
										{user.firstName} {user.lastName}
									</span>
								</li>
							)}
							<li>
								<p>email:</p>
								<span>{user.email}</span>
							</li>
						</ul>
					</div>
				</div>
				<div className='preferences settings-section'>
					<h5 className='sub-heading'>preferences</h5>
					<div className='settings-section-wrapper'>
						<Toggle toggleTheme={themeToggler} theme={theme} />
					</div>
				</div>
				<div className='logout-btn-container'>
					<button onClick={handleClick}>Log out</button>
				</div>
			</div>

			<AppDetails theme={theme} />
		</StyledSettings>
	);
};
const StyledSettings = styled(motion.div)`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	row-gap: 2rem;
	flex: 1;
	max-width: 100rem;
	padding: 0.5rem 1rem 2rem 1rem;
	overflow-y: auto;
	z-index: 1;
	transition: all 200ms linear;
	margin: 0 auto;
	border-radius: 4px;
	&.mobile {
		padding: 0.5rem 1rem 1rem 1rem;
	}
	.wrapper {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		row-gap: 2rem;
		padding: 0rem 2rem;
		transition: all 200ms linear;
		box-shadow: 3px 3px 4px rgb(0 0 0);
		background-repeat: no-repeat;
		background-size: cover;
		padding: 1rem 2rem 2rem;
		border-radius: 1rem;
		&#dark {
			background-image: url('/images/dark wood texture.webp');
		}
		&#light {
			background-image: url('/images/white wood.webp');
		}
		&.mobile {
			border-radius: 0.4rem;
			padding: 1rem;
		}
		h2 {
			font-size: 2.5rem;
			text-align: center;
			color: ${({ theme }) => theme.primaryColor};
			font-weight: bolder;
			text-shadow: 0px 1px 0px rgb(255 255 255 / 30%),
				0px -1px 0px rgb(0 0 0 / 70%);
		}
		.logout-btn-container {
			flex: 1;
			button {
				background: ${({ theme }) => theme.btnBg};
				color: ${({ theme }) => theme.btnColor};
				border: 1px solid ${({ theme }) => theme.btnBorder};
				outline: none;
				cursor: pointer;
				font-size: 1.6rem;
				font-weight: bolder;
				width: 100%;
				margin-top: 3rem;
			}
		}
		.settings-section-wrapper {
			border-radius: 1rem;
			padding: 2rem 2rem;
			display: flex;
			flex-direction: column;
			justify-content: flex-start;
			row-gap: 1rem;
			flex: 1;
			border: 1px solid ${({ theme }) => theme.primaryColor};
			border-radius: 0.4rem;
			box-shadow: inset 3px 3px 4px rgba(0, 0, 0, 0005),
				inset -2px -2px 2px rgba(0, 0, 0, 08);
			background-color: rgba(0, 0, 0, 0.1);
			width: 100%;
			&.mobile {
				border-radius: 0.4rem;
				padding: 1rem;
				row-gap: 0.5rem;
			}
		}
		.account-details {
			display: flex;
			flex-direction: column;
			align-items: flex-start;
			justify-content: flex-start;
			.sub-heading {
				color: ${({ theme }) => theme.secondaryColor};
				width: 100%;
				font-size: 2rem;
				text-transform: capitalize;
				padding-left: 0.5rem;
			}
			.user-details-list {
				list-style: none;
				font-size: 1.6rem;
				li {
					display: flex;
					align-items: center;
					column-gap: 1rem;
					p {
						width: 8rem;
						text-align: right;
						font-weight: bold;
						color: ${({ theme }) => theme.primaryColor};
					}
					span,
					#full-name {
						font-weight: bold;
						text-transform: lowercase;
						color: ${({ theme }) => theme.secondaryColor};
					}
				}
			}

			a {
				text-decoration: none;
			}
		}
		.preferences {
			display: flex;
			flex-direction: column;
			align-items: flex-start;
			justify-content: flex-start;
			.sub-heading {
				color: ${({ theme }) => theme.secondaryColor};
				width: 100%;
				font-size: 2rem;
				text-transform: capitalize;
				padding-left: 0.5rem;
			}
		}
	}
	h3 {
		text-align: center;
		color: ${({ theme }) => theme.secondaryColor};
	}
`;

export default Settings;
