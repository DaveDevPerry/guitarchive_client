import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { useViewport } from '../hooks/useViewport';
import { FiMenu } from 'react-icons/fi';

// import { AiFillHome } from 'react-icons/ai';
// import { RiSettings2Fill } from 'react-icons/ri';
// import { FaListAlt } from 'react-icons/fa';

const Header = () => {
	const { width } = useViewport();
	const breakpoint = 620;
	return (
		<StyledHeader>
			<div className='container'>
				<Link to='/'>
					<h1>
						guit
						<span>
							<strong>ARCHIVE</strong>
						</span>
					</h1>
				</Link>
				{width < breakpoint ? (
					<nav className='top-nav'>
						<NavLink
							to='/menu'
							className='filter-menu-icon-wrapper'
							// onClick={() => {
							// 	setIsMenuOpen((isMenuOpen) => !isMenuOpen);
							// }}
						>
							{/* <ImYoutube2 className='card-icon status-icon yt-icon' /> */}
							<FiMenu className='mobile-menu-icon' />
						</NavLink>
					</nav>
				) : (
					<nav className='top-nav desktop'>
						<NavLink
							to='/home'
							className={({ isActive }) => (isActive ? 'active' : 'inactive')}
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
							to='/stats'
							className={({ isActive }) => (isActive ? 'active' : 'inactive')}
						>
							<p>stats</p>
						</NavLink>
						{/* <NavLink
							to='/products'
							className={({ isActive }) => (isActive ? 'active' : 'inactive')}
						>
							<p>products</p>
						</NavLink> */}

						{/* <NavLink
							to='/artists'
							className={({ isActive }) => (isActive ? 'active' : 'inactive')}
						>
							<p>artists</p>
						</NavLink> */}
						{/* <NavLink
							to='/arrangers'
							className={({ isActive }) => (isActive ? 'active' : 'inactive')}
						>
							<p>arrangers</p>
						</NavLink> */}
						{/* <NavLink
							to='/youtube'
							className={({ isActive }) => (isActive ? 'active' : 'inactive')}
						>
							<p>youtube</p>
						</NavLink> */}
						<NavLink
							to='/settings'
							className={({ isActive }) => (isActive ? 'active' : 'inactive')}
						>
							<p>settings</p>
						</NavLink>
					</nav>
				)}
			</div>
		</StyledHeader>
	);
};
const StyledHeader = styled.header`
	transition: all 200ms linear;
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
			/* color: ${({ theme }) => theme.lightBrown}; */
			font-family: 'NewTegomin';
			font-weight: lighter;
			font-size: 4rem;
			text-shadow: 0px 1px 0px rgb(255 255 255 / 30%),
				0px -1px 0px rgb(0 0 0 / 70%);
			span {
				color: ${({ theme }) => theme.primaryColor};
				/* color: ${({ theme }) => theme.darkBrown}; */
				font-weight: bolder;
			}
		}
		/* a {
			display: grid;
			place-content: center;
			color: ${({ theme }) => theme.darkBrown};
			.search-icon {
				font-size: 3.2rem;
			}
			.settings-icon {
				font-size: 3rem;
			}
			.nav-icon {
				font-size: 3rem;
			}
		}
		a.active {
			.search-icon {
				color: ${({ theme }) => theme.secondaryColor};
				color: ${({ theme }) => theme.lightBrown};
			}
			.settings-icon {
				color: ${({ theme }) => theme.secondaryColor};
				color: ${({ theme }) => theme.lightBrown};
			}
			.nav-icon {
				color: ${({ theme }) => theme.secondaryColor};
				color: ${({ theme }) => theme.lightBrown};
			}
		} */
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
					/* color: rgb(199, 88, 29); */
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
			column-gap: 1.5rem;
			a {
				display: grid;
				place-content: center;
				p {
					/* color: ${({ theme }) => theme.txtDarkGrey}; */
					color: ${({ theme }) => theme.primaryColor};
					/* color: ${({ theme }) => theme.darkBrown}; */

					font-size: 1.6rem;
					text-transform: uppercase;
					font-size: 2rem;
					font-weight: bolder;
				}
				/* .home-icon {
					color: ${({ theme }) => theme.txtDarkGrey};
					font-size: 3rem;
				} */
			}
			a.active {
				p {
					/* color: ${({ theme }) => theme.green}; */
					color: ${({ theme }) => theme.secondaryColor};
					/* color: ${({ theme }) => theme.lightBrown}; */

					/* font-weight: bolder; */
				}
				/* .home-icon {
					color: ${({ theme }) => theme.green};
					font-size: 3rem;
				} */
			}
		}
	}
	.my-home {
		height: 2.8rem;
		aspect-ratio: 1/1;
	}
`;

export default Header;
