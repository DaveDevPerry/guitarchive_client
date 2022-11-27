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
				<select
					value={page}
					onChange={(event) => {
						setPage(event.target.value);
					}}
				>
					{Array(pageCount)
						.fill(null)
						.map((_, index) => {
							return <option key={index}>{index + 1}</option>;
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

			{/* Page: {page}
			<br />
			Page count: {pageCount}
			<br />
			<button disabled={page === 1} onClick={handlePrevious}>
				Previous
			</button>
			<button disabled={page === pageCount} onClick={handleNext}>
				Next
			</button>
			<select
				value={page}
				onChange={(event) => {
					setPage(event.target.value);
				}}
			>
				{Array(pageCount)
					.fill(null)
					.map((_, index) => {
						return <option key={index}>{index + 1}</option>;
					})}
			</select> */}
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
	}
	.footer-pages {
		p {
			text-align: center;
		}
	}
`;

export default SongsPaginationFooter;
