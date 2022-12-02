import React from 'react';
import styled from 'styled-components';
import {
	MdOutlineArrowBackIosNew,
	MdOutlineArrowForwardIos,
} from 'react-icons/md';
// import { MdArrowLeft, MdArrowRight,MdOutlineArrowBackIosNew,MdOutlineArrowForwardIosNew } from 'react-icons/md';

const SongsPaginationNav = ({
	page,
	pageCount,
	handlePrevious,
	handleNext,
	setPage,
}) => {
	return (
		<StyledSongsPaginationNav>
			<div className='footer-nav'>
				<button
					className='page-btn'
					disabled={page === 1}
					onClick={handlePrevious}
				>
					{/* <MdArrowLeft className='arrow-icon' /> */}
					<MdOutlineArrowBackIosNew className='arrow-icon' />
				</button>
				{/* <div className='page-links-wrapper'>
					{Array(pageCount)
						.fill(null)
						.map((_, index) => {
							return (
								<button
									className='page-btn'
									key={index}
									onClick={(event) => {
										setPage(event.target.value);
									}}
								>
									{index + 1}
								</button>
							);
						})}
				</div> */}
				<div className='filter-page-dropdown'>
					<select
						id='pagination-select'
						value={page}
						onChange={(event) => {
							setPage(event.target.value);
						}}
					>
						{pageCount &&
							Array(pageCount)
								.fill(null)
								.map((_, index) => {
									return <option key={index}>page {index + 1}</option>;
								})}
					</select>
				</div>
				<button
					className='page-btn'
					disabled={page === pageCount}
					onClick={handleNext}
				>
					<MdOutlineArrowForwardIos className='arrow-icon' />
					{/* <MdArrowRight className='arrow-icon' /> */}
				</button>
			</div>
		</StyledSongsPaginationNav>
	);
};
const StyledSongsPaginationNav = styled.nav`
	/* border: 2px solid red; */
	display: flex;
	flex-direction: column;

	.footer-nav {
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		column-gap: 1rem;
		button.page-btn {
			padding: 0rem;
			display: grid;
			place-content: center;
			/* background-color: ${({ theme }) => theme.darkBrown}; */
			border-radius: 0.4rem;
			background-color: transparent;
			/* box-shadow: 3px 3px 4px rgb(0 0 0); */
			.arrow-icon {
				font-size: 2rem;
				color: ${({ theme }) => theme.lightBrown};
			}
		}
		/* .filter-page-dropdown{ */

		#pagination-select {
			cursor: inherit;
			line-height: inherit;
			-webkit-appearance: none;
			-moz-appearance: none;
			appearance: none;
			-moz-border-radius: 0.4rem;
			border-radius: 0.4rem;
			outline: none;
			padding: 5px 45px 5px 10px;
			position: relative;
			width: 100%;
			box-sizing: border-box;
			border: none;
			-webkit-transition: 0.5s;
			transition: 0.5s;
			/* box-shadow: rgb(0 0 0 / 30%) 2px 2px 2px, rgb(0 0 0 / 10%) -2px -2px 2px; */
			/* box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.8), -1px -1px 2px rgba(0, 0, 0, 0.5); */
			/* border: 1px solid rgba(0, 0, 0, 0.8); */
			font-family: 'NewTegomin';
			text-transform: uppercase;
			font-size: 1.6rem;
			font-weight: bolder;
			cursor: pointer;
			background-color: ${({ theme }) => theme.filterBg};
			/* background-color: ${({ theme }) => theme.bgBrown}; */
			border: 1px solid ${({ theme }) => theme.filterBorder};
			color: ${({ theme }) => theme.filterColor};
			option {
				font-size: 1.6rem;
				color: ${({ theme }) => theme.white};
				padding: 1rem;
				border: 1px solid ${({ theme }) => theme.darkBrown};
				border-radius: 0 0 1rem 1rem;
				&:focus {
					border: 1px solid ${({ theme }) => theme.darkBrown};
					outline: none;
				}
				&:hover {
					border: 1px solid ${({ theme }) => theme.darkBrown};
					outline: none;
					cursor: pointer;
				}
				&.default-filter {
					font-family: 'NewTegomin';
					text-transform: uppercase;
					cursor: pointer;
					&:hover {
						border: 1px solid ${({ theme }) => theme.darkBrown};
						outline: none;
						cursor: pointer;
					}
				}
			}
		}
		.filter-page-dropdown {
			position: relative;
		}
		.filter-page-dropdown:after {
			-moz-border-radius: 0 3px 3px 0;
			border-radius: 0 3px 3px 0;
			color: ${({ theme }) => theme.filterIcon};
			content: '▼';
			display: block;
			font-size: 1.6rem;
			width: 3.5rem;
			height: 3.5rem;
			padding: 7px 0;
			position: absolute;
			pointer-events: none;
			top: -3px;
			bottom: 0;
			text-align: center;
			right: 2px;
		}
		.page-links-wrapper {
			display: flex;
			flex-direction: row;
			justify-content: center;
			align-items: center;
			column-gap: 0.5rem;
			button.page-btn {
				padding: 0rem 1rem;
				display: grid;
				place-content: center;
				background-color: ${({ theme }) => theme.lightBrown};
				border-radius: 0.4rem;
				/* background-color: transparent; */
				/* box-shadow: 3px 3px 4px rgb(0 0 0); */
				color: ${({ theme }) => theme.darkBrown};
				font-weight: bolder;
			}
		}
	}
`;

export default SongsPaginationNav;
