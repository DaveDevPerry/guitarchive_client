import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { NavLink, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { RiSettings2Fill } from 'react-icons/ri';
import { FaListAlt, FaUserEdit } from 'react-icons/fa';
import { AiFillHome } from 'react-icons/ai';
import { GiMusicalScore } from 'react-icons/gi';
import { TfiYoutube } from 'react-icons/tfi';
import { useStateContext } from '../lib/context';

const MobileMenu = () => {
	const { dataLoaded } = useStateContext();
	let navigate = useNavigate();
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
		>
			<nav>
				<NavLink
					to='/home'
					className={({ isActive }) => (isActive ? 'active' : 'inactive')}
				>
					<AiFillHome className='nav-icon' />
					<p>home</p>
				</NavLink>
				<NavLink
					to='/stats'
					className={({ isActive }) => (isActive ? 'active' : 'inactive')}
				>
					<AiFillHome className='nav-icon' />
					<p>stats</p>
				</NavLink>
				<NavLink
					to='/products'
					className={({ isActive }) => (isActive ? 'active' : 'inactive')}
				>
					<FaListAlt className='nav-icon' />
					<p>products</p>
				</NavLink>
				<NavLink
					to='/youtube'
					className={({ isActive }) => (isActive ? 'active' : 'inactive')}
				>
					<TfiYoutube className='nav-icon' />
					<p>youtube</p>
				</NavLink>
				<NavLink
					to='/songs'
					className={({ isActive }) => (isActive ? 'active' : 'inactive')}
				>
					<FaListAlt className='nav-icon' />
					<p>songs</p>
				</NavLink>
				<NavLink
					to='/artists'
					className={({ isActive }) => (isActive ? 'active' : 'inactive')}
				>
					<GiMusicalScore className='nav-icon' />
					<p>artists</p>
				</NavLink>
				<NavLink
					to='/arrangers'
					className={({ isActive }) => (isActive ? 'active' : 'inactive')}
				>
					<FaUserEdit className='nav-icon' />
					<p>arrangers</p>
				</NavLink>
				<NavLink
					to='/settings'
					className={({ isActive }) => (isActive ? 'active' : 'inactive')}
				>
					<RiSettings2Fill className='nav-icon' />
					<p>settings</p>
				</NavLink>
			</nav>
		</StyledMobileMenu>
	);
};
const StyledMobileMenu = styled(motion.div)`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	row-gap: 1rem;
	max-width: 100rem;
	padding: 0.5rem 1rem;
	overflow-y: hidden;
	z-index: 1;
	transition: all 200ms linear;
	margin: 0 auto;
	flex: 1;
	/* overflow-y: hidden; */
	nav {
		display: flex;
		flex-direction: column;
		justify-content: center;
		/* align-items: center; */
		row-gap: 2rem;
		transform: translateY(-35px);
		a {
			display: flex;
			justify-content: flex-start;
			column-gap: 2rem;
			align-items: center;
			text-decoration: none;
			.nav-icon {
				font-size: 3rem;
				color: ${({ theme }) => theme.lightBrown};
				position: relative;
			}
			p {
				color: ${({ theme }) => theme.txtDarkGrey};
				color: ${({ theme }) => theme.darkBrown};

				font-size: 3rem;
				/* font-size: 3.5rem; */
				text-transform: uppercase;
			}
			/* .home-icon {
					color: ${({ theme }) => theme.txtDarkGrey};
					color: ${({ theme }) => theme.darkBrown};

					font-size: 2.5rem;
				}
				.weights-icon {
					color: ${({ theme }) => theme.txtDarkGrey};
					color: ${({ theme }) => theme.darkBrown};

					font-size: 2.5rem;
				}
				.settings-icon {
					color: ${({ theme }) => theme.txtDarkGrey};
					color: ${({ theme }) => theme.darkBrown};

					font-size: 2.5rem;
				} */
		}
		a.active {
			.nav-icon {
				color: ${({ theme }) => theme.lightBrown};
				-webkit-transition: all 0.5s ease;
				transition: all 0.5s ease;
			}
			p {
				color: ${({ theme }) => theme.green};
				color: ${({ theme }) => theme.lightBrown};

				font-weight: bolder;
			}
			/* .home-icon {
					color: ${({ theme }) => theme.green};
					color: ${({ theme }) => theme.lightBrown};

					font-size: 2.5rem;
				}
				.weights-icon {
					color: ${({ theme }) => theme.green};
					color: ${({ theme }) => theme.lightBrown};

					font-size: 2.5rem;
				}
				.settings-icon {
					color: ${({ theme }) => theme.green};
					color: ${({ theme }) => theme.lightBrown};

					font-size: 2.5rem;
				} */
		}
	}
`;

export default MobileMenu;
