import React from 'react';
import styled from 'styled-components';
import {
	MdOutlineArrowBackIosNew,
	MdOutlineArrowForwardIos,
} from 'react-icons/md';
import { useViewport } from '../../hooks/useViewport';
// import { useState } from 'react';
// import { log } from '../../utils/helper';
// import { MdArrowLeft, MdArrowRight,MdOutlineArrowBackIosNew,MdOutlineArrowForwardIosNew } from 'react-icons/md';

const SongsPaginationNav = ({
	page,
	pageCount,
	handlePrevious,
	handleNext,
	setPage,
	handleTestPage,
	handleChoosePage,
}) => {
	const { width } = useViewport();
	const breakpoint = 620;

	// const [testPage, setTestPage] = useState(page);
	// useEffect(() => {
	// 	log(testPage, 'test page');
	// }, [testPage]);

	return (
		<StyledSongsPaginationNav>
			<div className={`footer-nav ${width < breakpoint ? 'mobile' : ''}`}>
				<button
					className='page-btn  btn-6 custom-btn'
					disabled={page === 1}
					onClick={handlePrevious}
				>
					{/* <MdArrowLeft className='arrow-icon' /> */}
					<MdOutlineArrowBackIosNew className='arrow-icon' />
				</button>
				<div className='filter-page-number-btn'>
					{Array(pageCount)
						.fill(null)
						.map((_, index) => {
							return (
								<button
									key={index}
									className='page-btn btn-6 custom-btn page-number-btn'
									onClick={(e) => {
										handleChoosePage(e, index + 1);
									}}
									disabled={page === index + 1}
								>
									{index + 1}
								</button>
							);
						})}
				</div>
				{/* <div className='filter-page-dropdown'>
					<select
						id='pagination-select'
						value={page}
						onChange={(event) => {
							handleTestPage(event.target.value);
							setTestPage(parseInt(event.target.value.split(' ')[1]));
							setPage(event.target.value);
						}}
						className='filter-song-select'
					>
						{Array(pageCount)
							.fill(null)
							.map((_, index) => {
								return (
									<option key={index} className='form-option'>
										page {index + 1}
									</option>
								);
							})}
					</select>
				</div> */}
				<button
					className='page-btn  btn-6 custom-btn'
					disabled={page === pageCount}
					onClick={handleNext}
				>
					<MdOutlineArrowForwardIos className='arrow-icon' />
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
		&.mobile {
			column-gap: 0.5rem;
		}
		/* button.page-btn {
			padding: 0rem;
			display: grid;
			place-content: center;
			border-radius: 0.4rem;
			background-color: transparent;
			.arrow-icon {
				font-size: 2rem;
				color: ${({ theme }) => theme.lightBrown};
			}
		} */
		.page-btn {
			height: 3.9rem;
			width: 1.9rem;
			/* width: 3.9rem; */
			padding: 0;
			color: ${({ theme }) => theme.btnIcon};
		}
		.filter-page-number-btn {
			display: flex;
			justify-content: center;
			align-items: center;
			column-gap: 0.5rem;
			.page-number-btn {
				height: 3.9rem;
				width: 3.9rem;
				/* width: 3.9rem; */
				padding: 0;
				display: grid;
				place-content: center;
				color: ${({ theme }) => theme.btnIcon};
			}
		}
		select.filter-song-select {
			cursor: inherit;
			line-height: inherit;
			-webkit-appearance: none;
			-moz-appearance: none;
			appearance: none;
			-moz-border-radius: 0.4rem;
			border-radius: 0.4rem;
			outline: none;
			padding: 8px 45px 8px 10px;
			position: relative;
			width: 100%;
			box-sizing: border-box;
			border: none;
			-webkit-transition: 0.5s;
			transition: 0.5s;
			font-family: 'NewTegomin';
			text-transform: uppercase;
			font-size: 1.6rem;
			font-weight: bolder;
			cursor: pointer;
			background-color: ${({ theme }) => theme.filterBg};
			border: 1px solid ${({ theme }) => theme.filterBorder};
			color: ${({ theme }) => theme.filterColor};

			color: ${({ theme }) => theme.btnColor};
			border-radius: 5px;
			padding: 8px 45px 8px 10px;
			font-size: 1.6rem;
			font-weight: 900;
			font-style: normal;
			text-shadow: 0px -1px 0px rgba(0, 0, 0, 0.4);
			text-decoration: none;
			background: transparent;
			cursor: pointer;
			position: relative;
			display: inline-block;
			box-shadow: inset 0px 1px 0px rgba(255, 255, 255, 1),
				0px 1px 3px rgba(0, 0, 0, 0.3);
			outline: none;
			border: 1px solid #ba6;
			height: 4.1rem;
			/* line-height: 1; */
			border-color: #7c7c7c;
			background: linear-gradient(
				top,
				rgba(38, 38, 38, 0.8),
				#e6e6e6 25%,
				#ffffff 38%,
				#c5c5c5 63%,
				#f7f7f7 87%,
				rgba(38, 38, 38, 0.8)
			);
			background: -webkit-linear-gradient(
				top,
				rgba(38, 38, 38, 0.5),
				#e6e6e6 25%,
				#ffffff 38%,
				rgba(0, 0, 0, 0.25) 63%,
				#e6e6e6 87%,
				rgba(38, 38, 38, 0.4)
			);
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
			top: 1px;
			bottom: 0;
			text-align: center;
			right: 2px;
			font-weight: bolder;
		}
		.page-links-wrapper {
			display: flex;
			flex-direction: row;
			justify-content: center;
			align-items: center;
			column-gap: 0.5rem;
			.page-btn {
				height: 3.9rem;
				width: 3.9rem;
				padding: 0;
			}
		}
	}
`;

export default SongsPaginationNav;
