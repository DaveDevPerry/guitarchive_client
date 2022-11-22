import { Link } from 'react-router-dom';
import styled from 'styled-components';
// import { useViewport } from '../hooks/useViewport';
import { ImYoutube2 } from 'react-icons/im';

// import { AiFillHome } from 'react-icons/ai';
// import { RiSettings2Fill } from 'react-icons/ri';
// import { FaListAlt } from 'react-icons/fa';

const MobileHeader = () => {
	// const { width } = useViewport();
	// const breakpoint = 620;
	return (
		<StyledMobileHeader>
			<div className='container'>
				<div className='filter-icon-wrapper'>
					<ImYoutube2 className='card-icon status-icon yt-icon' />
				</div>
				<Link to='/'>
					<h1>
						guit
						<span>
							<strong>ARCHIVE</strong>
						</span>
					</h1>
				</Link>
				<div className='filter-menu-icon-wrapper'>
					<ImYoutube2 className='card-icon status-icon yt-icon' />
				</div>
				{/* {width > breakpoint && (
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
							to='/settings'
							className={({ isActive }) => (isActive ? 'active' : 'inactive')}
						>
							<p>settings</p>
						</NavLink>
					</nav>
				)} */}
			</div>
		</StyledMobileHeader>
	);
};
const StyledMobileHeader = styled.header`
	/* background: ${({ theme }) => theme.primaryColor}; */
	/* transition: all 200ms linear; */
	background-color: rgba(0, 0, 0, 0.1);
	/* position: relative; */
	transition: all 200ms linear;
	border-bottom: 1px solid ${({ theme }) => theme.darkBrown};
	.container {
		max-width: 100rem;
		margin: 0 auto;
		padding: 1rem;
		display: flex;
		align-items: flex-start;
		justify-content: space-between;
		z-index: 500;

		h1 {
			/* font-size: 2.2rem; */
			color: ${({ theme }) => theme.lightBrown};
			font-family: 'NewTegomin';
			font-weight: lighter;
			font-size: 3rem;
			line-height: 2.5rem;
			span {
				color: ${({ theme }) => theme.darkBrown};
				font-weight: bolder;
			}
		}
		.filter-icon-wrapper,
		.filter-menu-icon-wrapper {
			/* display: grid;
			place-content: center; */
			display: flex;
			align-items: flex-end;
			.yt-icon {
				font-size: 3.5rem;
				color: rgb(199, 88, 29);
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

export default MobileHeader;
