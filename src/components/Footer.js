import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import { useViewport } from '../hooks/useViewport';

const Footer = () => {
	const location = useLocation();
	const { width } = useViewport();
	const breakpoint = 620;

	return (
		<>
			{location.pathname !== '/' && (
				<StyledFooter initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
					<div className={`container ${width < breakpoint ? 'mobile' : ''}`}>
						<p className='company-details'>
							designed and developed by{' '}
							<a
								href='https://www.daveperry.tech'
								target='_blank'
								rel='noreferrer'
							>
								daveperry.tech
							</a>{' '}
							2022
						</p>
					</div>
				</StyledFooter>
			)}
		</>
	);
};
const StyledFooter = styled(motion.footer)`
	position: relative;
	transition: all 200ms linear;
	.container {
		max-width: 100rem;
		margin: 0 auto;
		padding: 1rem 1rem 0;
		display: flex;
		align-items: center;
		justify-content: center;
		z-index: 500;
		p.company-details {
			font-size: 1.4rem;
			color: ${({ theme }) => theme.primaryColor};
			text-shadow: 0px 1px 0px rgb(255 255 255 / 30%),
				0px -1px 0px rgb(0 0 0 / 70%);
			font-weight: bolder;
			a {
				text-decoration: none;
				color: ${({ theme }) => theme.secondaryColor};
				text-shadow: 0px 1px 0px rgb(255 255 255 / 30%),
					0px -1px 0px rgb(0 0 0 / 70%);
				font-weight: bolder;
				cursor: pointer;
			}
		}
	}
`;

export default Footer;
