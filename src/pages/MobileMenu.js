import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { NavLink, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { RiSettings2Fill } from 'react-icons/ri';
import { AiOutlineFileSearch } from 'react-icons/ai';
import { MdLocalLibrary } from 'react-icons/md';
import { TfiYoutube } from 'react-icons/tfi';
import { useStateContext } from '../lib/context';
import { useViewport } from '../hooks/useViewport';
import { ImStatsDots } from 'react-icons/im';
import { GiMusicalScore, GiLightBulb } from 'react-icons/gi';
import { FaUserEdit } from 'react-icons/fa';

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

	const container = {
		hidden: { opacity: 0 },
		show: {
			opacity: 1,
			delay: 2,
			transition: {
				staggerChildren: 0.2,
				// delayChildren: 0.5
			},
		},
	};

	const item = {
		hidden: { opacity: 0 },
		show: { opacity: 1 },
		exit: { opacity: 0 },
	};
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
				<motion.nav variants={container} initial='hidden' animate='show'>
					<motion.div className='menu-item' variants={item}>
						<NavLink
							to='/home'
							className={({ isActive }) => (isActive ? 'active' : 'inactive')}
							// variants={item}
						>
							<MdLocalLibrary className='nav-icon' />
							<p>library</p>
						</NavLink>
					</motion.div>
					<motion.div className='menu-item' variants={item}>
						<NavLink
							to='/ideas'
							className={({ isActive }) => (isActive ? 'active' : 'inactive')}
							// variants={item}
						>
							<GiLightBulb className='nav-icon' />
							<p>ideas</p>
						</NavLink>
					</motion.div>
					<motion.div className='menu-item' variants={item}>
						<NavLink
							to='/requests'
							className={({ isActive }) => (isActive ? 'active' : 'inactive')}
							// variants={item}
						>
							<AiOutlineFileSearch className='nav-icon' />
							<p>requests</p>
						</NavLink>
					</motion.div>
					<motion.div className='menu-item' variants={item}>
						<NavLink
							to='/artists'
							className={({ isActive }) => (isActive ? 'active' : 'inactive')}
							// variants={item}
						>
							<GiMusicalScore className='nav-icon' />
							<p>artists</p>
						</NavLink>
					</motion.div>
					<motion.div className='menu-item' variants={item}>
						<NavLink
							to='/arrangers'
							className={({ isActive }) => (isActive ? 'active' : 'inactive')}
							// variants={item}
						>
							<FaUserEdit className='nav-icon' />
							<p>arrangers</p>
						</NavLink>
					</motion.div>

					<motion.div className='menu-item' variants={item}>
						<NavLink
							to='/youtube'
							className={({ isActive }) => (isActive ? 'active' : 'inactive')}
							// variants={item}
						>
							<TfiYoutube className='nav-icon' />
							<p>youtube</p>
						</NavLink>
					</motion.div>
					<motion.div className='menu-item' variants={item}>
						<NavLink
							to='/stats'
							className={({ isActive }) => (isActive ? 'active' : 'inactive')}
							// variants={item}
						>
							<ImStatsDots className='nav-icon' />
							<p>stats</p>
						</NavLink>
					</motion.div>
					<motion.div className='menu-item' variants={item}>
						<NavLink
							to='/settings'
							className={({ isActive }) => (isActive ? 'active' : 'inactive')}
							// item={item}
						>
							<RiSettings2Fill className='nav-icon' />
							<p>settings</p>
						</NavLink>
					</motion.div>
				</motion.nav>
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
			background-image: url('/images/black wood.webp');
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
		.menu-item {
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
