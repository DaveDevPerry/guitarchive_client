import React from 'react';
import styled from 'styled-components';
import {
	MdOutlineArrowBackIosNew,
	MdOutlineArrowForwardIos,
} from 'react-icons/md';
// import { MdArrowLeft, MdArrowRight,MdOutlineArrowBackIosNew,MdOutlineArrowForwardIosNew } from 'react-icons/md';

const SongsPaginationFooter = ({
	page,
	pageCount,
	handlePrevious,
	handleNext,
	setPage,
}) => {
	return (
		<StyledSongsPaginationFooter>
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
				<button
					className='page-btn'
					disabled={page === pageCount}
					onClick={handleNext}
				>
					<MdOutlineArrowForwardIos className='arrow-icon' />
					{/* <MdArrowRight className='arrow-icon' /> */}
				</button>
			</div>
			<div className='footer-pages'>
				<p>
					{page} / {pageCount}
				</p>
			</div>
		</StyledSongsPaginationFooter>
	);
};
const StyledSongsPaginationFooter = styled.footer`
	/* border: 2px solid red; */
	display: flex;
	flex-direction: column;

	.footer-nav {
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		column-gap: 2rem;
		button.page-btn {
			padding: 0rem;
			display: grid;
			place-content: center;
			/* background-color: ${({ theme }) => theme.darkBrown}; */
			border-radius: 0.4rem;
			background-color: transparent;
			/* box-shadow: 3px 3px 4px rgb(0 0 0); */
			.arrow-icon {
				font-size: 3rem;
				color: ${({ theme }) => theme.lightBrown};
			}
		}
		#pagination-select {
			background-color: ${({ theme }) => theme.lightBrown};
			border: none;
			margin: 0;
			/* width: 100%; */
			/* width: unset; */
			cursor: inherit;
			line-height: inherit;
			padding: 0 10px;
			box-shadow: rgb(0 0 0 / 30%) 2px 2px 2px, rgb(0 0 0 / 10%) -2px -2px 2px;
			outline: none;
			border-radius: 0.4rem;
			color: ${({ theme }) => theme.white};
			height: 3.8rem;
			cursor: pointer;
			font-family: 'New Tegomin';
			text-transform: uppercase;
			font-size: 1.6rem;
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
					font-family: 'New Tegomin';
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
	.footer-pages {
		p {
			text-align: center;
		}
	}
`;

export default SongsPaginationFooter;
