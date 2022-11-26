import { motion } from 'framer-motion';
import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const MobileMenu = () => {
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
					onClick={() => {}}
				>
					<p>home</p>
				</NavLink>
				<NavLink
					to='/songs'
					className={({ isActive }) => (isActive ? 'active' : 'inactive')}
				>
					<p>songs</p>
				</NavLink>
				<NavLink
					to='/artists'
					className={({ isActive }) => (isActive ? 'active' : 'inactive')}
				>
					<p>artists</p>
				</NavLink>
				<NavLink
					to='/settings'
					className={({ isActive }) => (isActive ? 'active' : 'inactive')}
				>
					<p>settings</p>
				</NavLink>
			</nav>
		</StyledMobileMenu>
	);
};
const StyledMobileMenu = styled(motion.div)`
	border: 2px solid red;
	background-color: limegreen;
	width: 100%;
	height: 100%;
	nav {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		row-gap: 2rem;
	}
`;

export default MobileMenu;
