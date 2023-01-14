import { Link, NavLink, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { useViewport } from '../hooks/useViewport';
import { FiMenu } from 'react-icons/fi';
import { motion } from 'framer-motion';
// import { AnimatePresence, motion } from 'framer-motion';
// import { log } from '../utils/helper';
import { IoMdArrowDropdown } from 'react-icons/io';
// import { GrUserSettings } from 'react-icons/gr';
import { RiLogoutBoxLine } from 'react-icons/ri';
// import { useStateContext } from '../lib/context';
import { useLogout } from '../hooks/useLogout';
import { toast } from 'react-hot-toast';

const Header = ({ mode }) => {
	const location = useLocation();
	const { width } = useViewport();
	const breakpoint = 620;
	// const {
	// 	// showListsMenu,
	// 	// setShowListsMenu,
	// 	// showMusiciansMenu,
	// 	// setShowMusiciansMenu,
	// } = useStateContext();
	const { logout } = useLogout();

	// const handleSubMenu = () => {
	// 	log('clicked');
	// 	setShowListsMenu(!showListsMenu);
	// 	setShowMusiciansMenu(false);
	// };
	// const handleMusicianSubMenu = () => {
	// 	log('clicked');
	// 	setShowMusiciansMenu(!showMusiciansMenu);
	// 	setShowListsMenu(false);
	// };

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

	return (
		<>
			{location.pathname !== '/' && (
				<StyledHeader initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
					<div className={`container ${width < breakpoint ? 'mobile' : ''}`}>
						<Link to='/'>
							<h1 className={`${width < breakpoint ? 'mobile' : ''}`}>
								guit
								<span>
									<strong>ARCHIVE</strong>
								</span>
							</h1>
						</Link>
						{mode && mode === 'offline' && <p>offline mode</p>}
						{width < breakpoint ? (
							<nav className='top-nav'>
								<NavLink to='/menu' className='filter-menu-icon-wrapper'>
									<FiMenu className='mobile-menu-icon' />
								</NavLink>
							</nav>
						) : (
							<>
								{mode && mode === 'offline' && <p>offline mode</p>}
								<nav className='top-nav desktop'>
									<NavLink
										to='/home'
										className={({ isActive }) =>
											isActive ? 'active' : 'inactive'
										}
									>
										<p>library</p>
									</NavLink>
									<div className='test-sub-menu'>
										<p>
											lists{' '}
											<span>
												<IoMdArrowDropdown className='arrow-icon' />
											</span>
										</p>

										<div className='test-dropdown-links'>
											<NavLink
												to='/ideas'
												className={({ isActive }) =>
													isActive ? 'active' : 'inactive'
												}
											>
												<p>ideas</p>
											</NavLink>
											<NavLink
												to='/requests'
												className={({ isActive }) =>
													isActive ? 'active' : 'inactive'
												}
											>
												<p>requests</p>
											</NavLink>
										</div>
									</div>
									<div className='test-sub-menu'>
										<p>
											musicians{' '}
											<span>
												<IoMdArrowDropdown className='arrow-icon' />
											</span>
										</p>

										<div className='test-dropdown-links'>
											<NavLink
												to='/artists'
												className={({ isActive }) =>
													isActive ? 'active' : 'inactive'
												}
											>
												<p>artists</p>
											</NavLink>
											<NavLink
												to='/arrangers'
												className={({ isActive }) =>
													isActive ? 'active' : 'inactive'
												}
											>
												<p>arrangers</p>
											</NavLink>
										</div>
									</div>
									{/* <div className='sub-menu' onClick={handleSubMenu}>
										<p>
											lists{' '}
											<span>
												<IoMdArrowDropdown className='arrow-icon' />
											</span>
										</p>
										<AnimatePresence mode='wait'>
											{showListsMenu && (
												<motion.div
													className='dropdown-links'
													initial={{ opacity: 0 }}
													animate={{ opacity: 1 }}
													exit={{ opacity: 0 }}
												>
													<NavLink
														to='/ideas'
														className={({ isActive }) =>
															isActive ? 'active' : 'inactive'
														}
													>
														<p>ideas</p>
													</NavLink>
													<NavLink
														to='/requests'
														className={({ isActive }) =>
															isActive ? 'active' : 'inactive'
														}
													>
														<p>requests</p>
													</NavLink>
												</motion.div>
											)}
										</AnimatePresence>
									</div> */}
									{/* <div className='sub-menu' onClick={handleMusicianSubMenu}>
										<p>
											musicians{' '}
											<span>
												<IoMdArrowDropdown className='arrow-icon' />
											</span>
										</p>
										<AnimatePresence mode='wait'>
											{showMusiciansMenu && (
												<motion.div
													className='dropdown-links'
													initial={{ opacity: 0 }}
													animate={{ opacity: 1 }}
													exit={{ opacity: 0 }}
												>
													<NavLink
														to='/artists'
														className={({ isActive }) =>
															isActive ? 'active' : 'inactive'
														}
													>
														<p>artists</p>
													</NavLink>
													<NavLink
														to='/arrangers'
														className={({ isActive }) =>
															isActive ? 'active' : 'inactive'
														}
													>
														<p>arrangers</p>
													</NavLink>
												</motion.div>
											)}
										</AnimatePresence>
									</div> */}
									<NavLink
										to='/stats'
										className={({ isActive }) =>
											isActive ? 'active' : 'inactive'
										}
									>
										<p>stats</p>
									</NavLink>
									<div className='logout-nav-wrapper' onClick={handleClick}>
										<RiLogoutBoxLine className='logout-user-icon' />
									</div>

									{/* <NavLink
										to='/settings'
										className={({ isActive }) =>
											isActive ? 'active' : 'inactive'
										}
									>
										<GrUserSettings className='settings-icon' />
										<p>settings</p>
									</NavLink> */}
									{/* <NavLink
										to='/settings'
										className={({ isActive }) =>
											isActive ? 'active' : 'inactive'
										}
									>
										<p>settings</p>
									</NavLink> */}
								</nav>
							</>
						)}
					</div>
				</StyledHeader>
			)}
		</>
	);
};
const StyledHeader = styled(motion.header)`
	/* transition: all 200ms linear; */
	position: relative;
	.container {
		max-width: 100rem;
		margin: 0 auto;
		padding: 1rem;
		display: flex;
		align-items: center;
		justify-content: space-between;
		z-index: 500;
		h1 {
			color: ${({ theme }) => theme.secondaryColor};
			/* font-family: 'New Tegomin'; */
			font-weight: lighter;
			font-size: 4rem;
			text-shadow: 0px 1px 0px rgb(255 255 255 / 30%),
				0px -1px 0px rgb(0 0 0 / 70%);
			span {
				color: ${({ theme }) => theme.primaryColor};
				font-weight: bolder;
			}
			&.mobile {
				font-size: 3rem;
			}
		}
		&.mobile {
			padding-top: 0;
			padding-bottom: 0.5rem;
		}
		nav.top-nav {
			display: flex;
			align-items: center;
			justify-content: space-between;
			column-gap: 1rem;
			.filter-menu-icon-wrapper {
				display: flex;
				align-items: flex-end;
				.mobile-menu-icon {
					font-size: 3.5rem;
					color: ${({ theme }) => theme.secondaryColor};
				}
			}
			a {
				display: grid;
				place-content: center;
			}
		}
		nav.top-nav.desktop {
			display: flex;
			align-items: center;
			column-gap: 0.5rem;
			.sub-menu {
				position: relative;
				display: grid;
				place-content: center;
				column-gap: 0.5rem;
				padding-left: 0.5rem;
				cursor: pointer;
				p {
					color: ${({ theme }) => theme.primaryColor};
					font-size: 1.6rem;
					text-transform: uppercase;
					font-size: 2rem;
					font-weight: bolder;
					display: flex;
					align-items: center;
					transition: all 200ms ease-in-out;
					text-shadow: 0px 1px 0px rgb(255 255 255 / 30%),
						0px -1px 0px rgb(0 0 0 / 70%);
					&:hover {
						color: ${({ theme }) => theme.secondaryColor};
						transition: all 200ms ease-in-out;
					}
					span {
						display: flex;
						align-items: center;
						.arrow-icon {
							font-size: 2rem;
							color: ${({ theme }) => theme.secondaryColor};
						}
					}
				}
				.dropdown-links {
					position: absolute;
					top: calc(100% + 0.5rem);
					left: 0.5rem;
					border: 1px solid rgba(0, 0, 0, 0.2);
					box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.5);
					border-radius: 0.4rem;
					z-index: 3000000;
					background-color: ${({ theme }) => theme.dropDownLinks};
					padding-bottom: 0.5rem;
					font-size: 1.8rem;
					a {
						display: flex;
						justify-content: flex-start;
						padding: 0rem 0.3rem;
						p {
							color: ${({ theme }) => theme.primaryColor};
							font-size: 1.6rem;
							text-transform: uppercase;
							font-size: 2rem;
							font-weight: bolder;
							padding: 0.5rem;
							font-size: 1.8rem;
							transition: all 200ms ease-in-out;
							text-shadow: 0px 1px 0px rgb(255 255 255 / 30%),
								0px -1px 0px rgb(0 0 0 / 70%);
							&:hover {
								color: ${({ theme }) => theme.secondaryColor};
								transition: all 200ms ease-in-out;
							}
						}
						&:hover {
							background-color: rgba(0, 0, 0, 0.05);
						}
						&.active {
							p {
								color: ${({ theme }) => theme.secondaryColor};
							}
						}
					}
				}
			}
			a {
				display: grid;
				place-content: center;
				.settings-icon {
					color: ${({ theme }) => theme.primaryColor};
					font-size: 3rem;
					padding-left: 1rem;
					font-weight: bolder;
				}
				p {
					color: ${({ theme }) => theme.primaryColor};
					font-size: 1.6rem;
					text-transform: uppercase;
					font-size: 2rem;
					font-weight: bolder;
					padding-left: 0.5rem;
					transition: all 200ms ease-in-out;
					text-shadow: 0px 1px 0px rgb(255 255 255 / 30%),
						0px -1px 0px rgb(0 0 0 / 70%);
					&:hover {
						color: ${({ theme }) => theme.secondaryColor};
						transition: all 200ms ease-in-out;
					}
				}
			}
			a.active {
				.settings-icon {
					color: ${({ theme }) => theme.secondaryColor};
				}
				p {
					color: ${({ theme }) => theme.secondaryColor};
				}
			}
			.logout-nav-wrapper {
				display: grid;
				place-content: center;
				cursor: pointer;
				.logout-user-icon {
					color: ${({ theme }) => theme.primaryColor};
					font-size: 4rem;
					padding-left: 1rem;
					font-weight: bolder;
					transition: all 200ms ease-in-out;
					&:hover {
						color: ${({ theme }) => theme.secondaryColor};
						transition: all 200ms ease-in-out;
					}
				}
			}
			.test-sub-menu {
				position: relative;
				display: grid;
				place-content: center;
				column-gap: 0.5rem;
				padding-left: 0.5rem;
				cursor: pointer;
				p {
					color: ${({ theme }) => theme.primaryColor};
					font-size: 1.6rem;
					text-transform: uppercase;
					font-size: 2rem;
					font-weight: bolder;
					display: flex;
					align-items: center;
					transition: all 200ms ease-in-out;
					text-shadow: 0px 1px 0px rgb(255 255 255 / 30%),
						0px -1px 0px rgb(0 0 0 / 70%);
					&:hover {
						color: ${({ theme }) => theme.secondaryColor};
						transition: all 200ms ease-in-out;
					}
					span {
						display: flex;
						align-items: center;
						.arrow-icon {
							font-size: 2rem;
							color: ${({ theme }) => theme.secondaryColor};
						}
					}
				}
				.test-dropdown-links {
					position: absolute;
					top: calc(100% + 0.5rem);
					left: 0.5rem;
					border: 1px solid rgba(0, 0, 0, 0.2);
					box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.5);
					border-radius: 0.4rem;
					z-index: 3000000;
					background-color: ${({ theme }) => theme.dropDownLinks};
					padding-bottom: 0.5rem;
					font-size: 1.8rem;
					opacity: 0;
					visibility: hidden;
					-webkit-transition: opacity 0.5s;
					-moz-transition: opacity 0.5s;
					transition: opacity 0.5s;
					a {
						display: flex;
						justify-content: flex-start;
						padding: 0rem 0.3rem;
						p {
							color: ${({ theme }) => theme.primaryColor};
							font-size: 1.6rem;
							text-transform: uppercase;
							font-size: 2rem;
							font-weight: bolder;
							padding: 0.5rem;
							font-size: 1.8rem;
							transition: all 200ms ease-in-out;
							text-shadow: 0px 1px 0px rgb(255 255 255 / 30%),
								0px -1px 0px rgb(0 0 0 / 70%);
							&:hover {
								color: ${({ theme }) => theme.secondaryColor};
								transition: all 200ms ease-in-out;
							}
						}
						&:hover {
							background-color: rgba(0, 0, 0, 0.05);
						}
						&.active {
							p {
								color: ${({ theme }) => theme.secondaryColor};
							}
						}
					}
				}
				&:hover .test-dropdown-links {
					opacity: 1;
					visibility: visible;
				}
				&.test-dropdown-links:hover {
					opacity: 0;
					visibility: hidden;
				}
			}
		}
	}
	.my-home {
		height: 2.8rem;
		aspect-ratio: 1/1;
	}
`;

export default Header;
