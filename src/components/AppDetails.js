import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useViewport } from '../hooks/useViewport';

const AppDetails = ({ theme }) => {
	useEffect(() => {}, [theme]);
	const { width } = useViewport();
	const breakpoint = 620;
	return (
		<StyledAppDetails
			className={`${width < breakpoint ? 'mobile' : ''}`}
			id={`${theme === 'dark' ? 'dark' : 'light'}`}
		>
			<div
				className={theme && theme === 'light' ? 'label-img' : 'label-img dark'}
			></div>
			<div className='dev-link-container'>
				<p>developed by&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
				<a
					href='https://www.daveperry.tech'
					className='developer-link'
					rel='noopener noreferrer'
					target='_blank'
				>
					<Brand id='brand'>
						dave<span>perry</span>
						<span>.</span>tech
					</Brand>
				</a>
				<div className='qr-code-wrapper'>
					<img
						src='./images/qr-code-daveperry.png'
						alt='qr code'
						className='qr-code'
					/>
				</div>
			</div>
			<div className='studio-img'></div>
		</StyledAppDetails>
	);
};
const StyledAppDetails = styled.div`
	display: flex;
	flex-direction: row;
	column-gap: 2rem;
	justify-content: space-between;
	padding: 2rem 1rem;
	background-repeat: no-repeat;
	background-size: cover;
	transition: all 200ms linear;
	border-radius: 1rem;
	box-shadow: 3px 3px 4px rgb(0 0 0);
	&#dark {
		background-image: url('/images/black wood.webp');
	}
	&#light {
		background-image: url('/images/white wood.webp');
	}
	&.mobile {
		border-radius: 0.4rem;
		box-shadow: none;
		&#dark {
			background-image: none;
		}
		&#light {
			background-image: none;
		}
	}
	.dev-link-container {
		display: flex;
		flex-direction: column;
		p {
			align-self: center;
			font-size: 1.2rem;
			font-weight: bolder;
			color: ${({ theme }) => theme.primaryColor};
			text-shadow: 0px 1px 0px rgba(255, 255, 255, 0.3),
				0px -1px 0px rgba(0, 0, 0, 0.7);
		}
		.qr-code-wrapper {
			display: flex;
			align-items: center;
			justify-content: center;
			.qr-code {
				width: 10rem;
				height: 10rem;
			}
		}
	}
	a.developer-link {
		text-decoration: none;
		align-self: center;
		font-size: 1.2rem;
		color: ${({ theme }) => theme.white};
	}
	.label-img {
		background-image: url('/images/KTMA_logo.webp');
		background-repeat: no-repeat;
		background-position: center;
		background-size: contain;
		width: 6rem;
		transition: all 200ms linear;
	}
	.label-img.dark {
		background-image: url('/images/KTMA_Logo1.webp');
		background-repeat: no-repeat;
		background-position: center;
		background-size: contain;
		width: 6rem;
		transition: all 200ms linear;
	}
	.studio-img {
		background-image: url('/images/Rox_logo.webp');
		background-repeat: no-repeat;
		background-position: center;
		background-size: contain;
		width: 6rem;
		transition: all 200ms linear;
	}
`;

const Brand = styled.div`
	font-family: 'Oswald', serif;
	font-size: 2.8rem;
	font-weight: lighter;
	text-align: center;
	line-height: 1;
	color: ${({ theme }) => theme.primaryColor};
	text-shadow: 0px 1px 0px rgba(255, 255, 255, 0.3),
		0px -1px 0px rgba(0, 0, 0, 0.7);
	span {
		font-weight: bolder;
	}
	span:last-child {
		color: ${({ theme }) => theme.red};
		font-size: 5rem;
		line-height: 0;
		font-weight: bolder;
	}
`;

export default AppDetails;
