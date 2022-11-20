import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import toast from 'react-hot-toast';
import styled from 'styled-components';
import { useStateContext } from '../lib/context';
import { useLogout } from '../hooks/useLogout';
import { useAuthContext } from '../hooks/useAuthContext';

import Toggle from '../components/Toggler';
// import TVAppLinks from '../components/TVAppLinks';

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

	return (
		<StyledSettings
			initial={{ width: 0 }}
			animate={{ width: '100%' }}
			exit={{ x: window.innerWidth }}
		>
			<div className='wrapper'>
				<div className='settings-header'>
					<h2>Settings</h2>
					<div className='logout-btn-container'>
						<button onClick={handleClick}>Log out</button>
					</div>
				</div>
				<div className='account-details'>
					<h5 className='sub-heading'>account</h5>
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
				<div className='preferences'>
					<h5 className='sub-heading'>preferences</h5>
					<Toggle toggleTheme={themeToggler} theme={theme} />
				</div>
				{/* <TVAppLinks /> */}
			</div>
		</StyledSettings>
	);
};
const StyledSettings = styled(motion.div)`
	display: flex;
	flex-direction: column;
	row-gap: 1rem;
	flex: 1;
	max-width: 80rem;
	padding: 0.5rem 1rem;
	overflow-y: auto;
	z-index: 1;
	transition: all 200ms linear;
	margin: 0 auto;
	border-radius: 4px;
	.wrapper {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		row-gap: 2rem;
		padding: 1rem 2rem;
		background: ${({ theme }) => theme.white};
		flex: 1;
		transition: all 200ms linear;
		.settings-header {
			display: flex;
			flex-direction: row;
			justify-content: space-between;
			align-items: center;
			h2 {
				flex: 1;
			}
			.logout-btn-container {
				button {
					align-self: flex-end;
					background: ${({ theme }) => theme.white};
					color: ${({ theme }) => theme.secondaryColor};
					border: none;
					outline: none;
					font-family: 'Signika', sans-serif;
					cursor: pointer;
					font-size: 1.6rem;
					text-decoration: underline;
				}
			}
		}
		.account-details {
			display: flex;
			flex-direction: column;
			align-items: flex-start;
			justify-content: flex-start;
			.sub-heading {
				color: ${({ theme }) => theme.secondaryColor};
				border-bottom: 1px solid ${({ theme }) => theme.secondaryColor};
				margin-bottom: 1rem;
				width: 100%;
				font-size: 1.6rem;
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
					}
					#full-name {
						text-transform: capitalize;
					}
				}
			}
			p {
				span {
					font-weight: bold;
					text-transform: capitalize;
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
			flex: 1;
			/* display: none; */
			.sub-heading {
				color: ${({ theme }) => theme.secondaryColor};
				border-bottom: 1px solid ${({ theme }) => theme.secondaryColor};
				margin-bottom: 1rem;
				width: 100%;
				font-size: 1.6rem;
			}
		}
	}
	h3 {
		text-align: center;
		color: ${({ theme }) => theme.secondaryColor};
	}
`;

export default Settings;
