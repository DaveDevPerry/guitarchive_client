import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { NavLink, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { RiSettings2Fill } from 'react-icons/ri';
// import { FaListAlt } from 'react-icons/fa';
import { AiFillHome } from 'react-icons/ai';
import { TfiYoutube } from 'react-icons/tfi';
import { useStateContext } from '../lib/context';
import { useViewport } from '../hooks/useViewport';
import { ImStatsDots } from 'react-icons/im';

const MobileMenu = ({ theme }) => {
	const { dataLoaded } = useStateContext();
	let navigate = useNavigate();
	const { width } = useViewport();
	const breakpoint = 620;
	useEffect(() => {
		if (dataLoaded === false) {
			navigate('/');
		}
	}, [navigate, dataLoaded]);
	return (
		<StyledMobileMenu
			initial={{ width: 0 }}
			animate={{ width: '100%' }}
			exit={{ x: window.innerWidth }}
			className={`menu-page page ${width < breakpoint ? 'mobile' : ''}`}
		>
			<div
				className={`menu-container ${width < breakpoint ? 'mobile' : ''}`}
				id={`${theme === 'dark' ? 'dark' : 'light'}`}
			>
				<nav>
					<NavLink
						to='/home'
						className={({ isActive }) => (isActive ? 'active' : 'inactive')}
					>
						<AiFillHome className='nav-icon' />
						<p>home</p>
					</NavLink>
					{/* <NavLink
						to='/songs'
						className={({ isActive }) => (isActive ? 'active' : 'inactive')}
					>
						<FaListAlt className='nav-icon' />
						<p>songs</p>
					</NavLink> */}
					<NavLink
						to='/stats'
						className={({ isActive }) => (isActive ? 'active' : 'inactive')}
					>
						<ImStatsDots className='nav-icon' />
						<p>stats</p>
					</NavLink>
					<NavLink
						to='/youtube'
						className={({ isActive }) => (isActive ? 'active' : 'inactive')}
					>
						<TfiYoutube className='nav-icon' />
						<p>youtube</p>
					</NavLink>
					{/* <NavLink
					to='/artists'
					className={({ isActive }) => (isActive ? 'active' : 'inactive')}
				>
					<GiMusicalScore className='nav-icon' />
					<p>artists</p>
				</NavLink> */}
					{/* <NavLink
					to='/arrangers'
					className={({ isActive }) => (isActive ? 'active' : 'inactive')}
				>
					<FaUserEdit className='nav-icon' />
					<p>arrangers</p>
				</NavLink> */}
					<NavLink
						to='/settings'
						className={({ isActive }) => (isActive ? 'active' : 'inactive')}
					>
						<RiSettings2Fill className='nav-icon' />
						<p>settings</p>
					</NavLink>
				</nav>
			</div>
		</StyledMobileMenu>
	);
};
const StyledMobileMenu = styled(motion.div)`
	display: flex;
	flex-direction: column;
	justify-content: center;
	row-gap: 1rem;
	max-width: 100rem;
	padding: 0.5rem 1rem;
	overflow-y: hidden;
	z-index: 1;
	transition: all 200ms linear;
	margin: 0 auto;
	flex: 1;
	&.mobile {
		padding: 0;
	}
	.menu-container {
		padding: 1rem 2rem 2rem;
		border-radius: 0.4rem;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		background-repeat: no-repeat;
		background-size: cover;
		row-gap: 0.5rem;
		box-shadow: 3px 3px 4px rgb(0 0 0);
		flex: 1;
		overflow-y: hidden;
		&#dark {
			background-image: url('/images/dark wood texture.webp');
		}
		&#light {
			background-image: url('/images/white wood.webp');
		}
		&.mobile {
			border-radius: 0;
			&#dark {
				background-image: none;
			}
			&#light {
				background-image: none;
			}
		}
	}
	nav {
		display: flex;
		flex-direction: column;
		justify-content: center;
		row-gap: 2rem;
		a {
			display: flex;
			justify-content: flex-start;
			column-gap: 2rem;
			align-items: center;
			text-decoration: none;
			.nav-icon {
				font-size: 3rem;
				color: ${({ theme }) => theme.secondaryColor};
				position: relative;
			}
			p {
				color: ${({ theme }) => theme.primaryColor};
				text-shadow: 0px 1px 0px rgb(255 255 255 / 30%),
					0px -1px 0px rgb(0 0 0 / 70%);
				font-weight: bolder;
				font-size: 3rem;
				text-transform: uppercase;
			}
		}
		a.active {
			.nav-icon {
				color: ${({ theme }) => theme.lightBrown};
				-webkit-transition: all 0.5s ease;
				transition: all 0.5s ease;
				p {
					color: ${({ theme }) => theme.green};
					color: ${({ theme }) => theme.lightBrown};
					font-weight: bolder;
				}
			}
		}
	}
`;

export default MobileMenu;
