import { NavLink } from 'react-router-dom';
import { useAuthContext } from '../hooks/useAuthContext';
import styled from 'styled-components';
import { RiSettings2Fill } from 'react-icons/ri';
import { FaListAlt } from 'react-icons/fa';
import { AiFillHome } from 'react-icons/ai';

const Footer = () => {
	const { user } = useAuthContext();

	return (
		<StyledFooter>
			<nav>
				{user && (
					<div>
						<NavLink
							to='/home'
							className={({ isActive }) => (isActive ? 'active' : 'inactive')}
						>
							<AiFillHome className='nav-icon' />

							<p>home</p>
						</NavLink>
						<NavLink
							to='/posts'
							className={({ isActive }) => (isActive ? 'active' : 'inactive')}
						>
							<FaListAlt className='nav-icon' />
							<p>posts</p>
						</NavLink>
						<NavLink
							to='/settings'
							className={({ isActive }) => (isActive ? 'active' : 'inactive')}
						>
							<RiSettings2Fill className='nav-icon' />
							{/* <MdOutlineDateRange className='nav-icon' /> */}
							<p>settings</p>
						</NavLink>
						{/* <NavLink
							to='/finance'
							className={({ isActive }) => (isActive ? 'active' : 'inactive')}
						>
							<GrMoney className='nav-icon' />
							<p>finance</p>
						</NavLink>
						<NavLink
							to='/activities'
							className={({ isActive }) => (isActive ? 'active' : 'inactive')}
						>
							<ImHappy className='nav-icon' />
							<p>activity</p>
						</NavLink> */}
					</div>
				)}
			</nav>
		</StyledFooter>
	);
};
const StyledFooter = styled.footer`
	background: ${({ theme }) => theme.primaryColor};
	position: relative;
	transition: all 200ms linear;
	nav {
		max-width: 60rem;
		margin: 0 auto;
		div {
			max-width: 100rem;
			display: flex;
			align-items: center;
			justify-content: space-evenly;
			a {
				color: ${({ theme }) => theme.secondaryColor};
				text-decoration: none;
				flex: 1;
				text-align: center;
				text-transform: uppercase;
				font-weight: bold;
				padding: 1rem 0 0.5rem 0;
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;
				.nav-icon {
					font-size: 2.4rem;
					color: ${({ theme }) => theme.secondaryColor};
					position: relative;
				}
				&:hover {
					color: ${({ theme }) => theme.secondaryColor};
					-webkit-transition: all 0.5s ease;
					transition: all 0.5s ease;
					.nav-icon {
						color: ${({ theme }) => theme.secondaryColor};
						-webkit-transition: all 0.5s ease;
						transition: all 0.5s ease;
					}
				}
				&.active {
					color: ${({ theme }) => theme.green};
					-webkit-transition: all 0.5s ease;
					transition: all 0.5s ease;
					.nav-icon {
						color: ${({ theme }) => theme.green};
						-webkit-transition: all 0.5s ease;
						transition: all 0.5s ease;
					}
					p {
						text-transform: uppercase;
						font-size: 1.2rem;
						font-weight: bolder;
					}
				}

				p {
					text-transform: uppercase;
					font-size: 1.2rem;
					font-weight: normal;
				}
			}
			a:before,
			a:after {
				position: absolute;
				-webkit-transition: all 0.8s ease;
				transition: all 0.8s ease;
			}
			a:before {
				top: 0;
				display: block;
				height: 3px;
				width: 0%;
				content: '';
				background-color: ${({ theme }) => theme.green};
			}
			a:after {
				left: 0;
				top: 0;
				padding: 0.5em 0;
				position: absolute;
				content: '';
				color: #ffffff;
				white-space: nowrap;
				max-width: 0%;
				overflow: hidden;
			}
			a:hover:before {
				opacity: 1;
				width: 4.5rem;
			}
			a.active:before {
				opacity: 1;
				width: 4.5rem;
			}
			a:hover:after {
				max-width: 100%;
			}
			.add-icon {
				color: ${({ theme }) => theme.primaryColor};
				font-size: 3.5rem;
			}
		}
	}
`;

export default Footer;
