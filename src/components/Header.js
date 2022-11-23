import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { useViewport } from '../hooks/useViewport';
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
				{width > breakpoint && (
					<nav className='top-nav desktop'>
						{/* <NavLink
							to='/home'
							className={({ isActive }) => (isActive ? 'active' : 'inactive')}
						>
							<p>home</p>
						</NavLink> */}
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
							to='/arrangers'
							className={({ isActive }) => (isActive ? 'active' : 'inactive')}
						>
							<p>arrangers</p>
						</NavLink>
						<NavLink
							to='/settings'
							className={({ isActive }) => (isActive ? 'active' : 'inactive')}
						>
							<p>settings</p>
						</NavLink>
					</nav>
				)}
				{/* {width < breakpoint ? (
					<nav className='top-nav'>
						<NavLink
							to='/home'
							className={({ isActive }) => (isActive ? 'active' : 'inactive')}
						>
							<AiFillHome className='home-icon' />
						</NavLink>
						<NavLink
							to='/posts'
							className={({ isActive }) => (isActive ? 'active' : 'inactive')}
						>
							<FaListAlt className='weights-icon' />
						</NavLink>
						<NavLink
							to='/settings'
							className={({ isActive }) => (isActive ? 'active' : 'inactive')}
						>
							<RiSettings2Fill className='settings-icon' />
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
							to='/posts'
							className={({ isActive }) => (isActive ? 'active' : 'inactive')}
						>
							<p>posts</p>
						</NavLink>
						<NavLink
							to='/settings'
							className={({ isActive }) => (isActive ? 'active' : 'inactive')}
						>
							<p>settings</p>
						</NavLink>
					</nav>
				)} */}
			</div>
		</StyledHeader>
	);
};
const StyledHeader = styled.header`
	/* background: ${({ theme }) => theme.primaryColor}; */
	transition: all 200ms linear;
	.container {
		max-width: 100rem;
		margin: 0 auto;
		padding: 1rem;
		display: flex;
		align-items: center;
		justify-content: space-between;
		z-index: 500;

		h1 {
			/* font-size: 2.2rem; */
			color: ${({ theme }) => theme.lightBrown};
			font-family: 'NewTegomin';
			font-weight: lighter;
			font-size: 4rem;
			span {
				color: ${({ theme }) => theme.darkBrown};
				font-weight: bolder;
				/* font-size: 2.4rem; */
			}
		}
		a {
			display: grid;
			place-content: center;
			color: ${({ theme }) => theme.darkBrown};
			.search-icon {
				/* color: ${({ theme }) => theme.txtDarkGrey}; */
				font-size: 3.2rem;
			}
			.settings-icon {
				/* color: ${({ theme }) => theme.txtDarkGrey}; */
				font-size: 3rem;
			}
			.nav-icon {
				/* color: ${({ theme }) => theme.txtDarkGrey}; */
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
		}
		/* .add-icon {
			color: ${({ theme }) => theme.primaryColor};
			font-size: 2.6rem;
		} */
		nav.top-nav {
			display: flex;
			align-items: center;
			column-gap: 1rem;
			a {
				display: grid;
				place-content: center;
				p {
					color: ${({ theme }) => theme.txtDarkGrey};
					color: ${({ theme }) => theme.darkBrown};

					font-size: 1.6rem;
					font-size: 3.5rem;
					text-transform: uppercase;
				}
				.home-icon {
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
				}
			}
			a.active {
				p {
					color: ${({ theme }) => theme.green};
					color: ${({ theme }) => theme.lightBrown};

					font-weight: bolder;
				}
				.home-icon {
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
				}
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
					color: ${({ theme }) => theme.txtDarkGrey};
					color: ${({ theme }) => theme.darkBrown};

					font-size: 1.6rem;
					text-transform: uppercase;
					font-size: 2rem;
				}
				/* .home-icon {
					color: ${({ theme }) => theme.txtDarkGrey};
					font-size: 3rem;
				} */
			}
			a.active {
				p {
					color: ${({ theme }) => theme.green};
					color: ${({ theme }) => theme.lightBrown};

					font-weight: bolder;
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
