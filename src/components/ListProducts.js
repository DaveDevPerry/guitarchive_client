import { useEffect, useState } from 'react';
import styled from 'styled-components';
import useSWR from 'swr';
import SongCard from './SongCard';
// import SongsPaginationFooter from './SongsPaginationFooter';
import SongsPaginationNav from './SongsPaginationNav';
// import Pagination from 'react-js-pagination';

const fetcher = (url) => fetch(url).then((res) => res.json());

function ListProducts() {
	const [page, setPage] = useState(1);
	const [pageCount, setPageCount] = useState(0);
	// const [filterIsFavourite, setFilterIsFavourite] = useState(true);
	// const [activePage, setActivePage] = useState(1);
	// const { data, error } = useSWR(
	// 	`http://localhost:4000/api/songs?page=${page}`,
	// 	fetcher
	// );
	// ?filter=Table/Field eq 'value'
	// p = {'lat':41.225, 'lon'=-73.1 }
	// const queryObj = {
	// 	page: page,
	// 	filter: filterIsFavourite,
	// };
	// r = requests.get( 'http://localhost:5000/pulse/', params=p )
	const { data, error } = useSWR(
		`${process.env.REACT_APP_BACKEND_URL}/api/products?page=${page}`,
		// `${process.env.REACT_APP_BACKEND_URL}/api/products?${queryObj}`,
		// `${process.env.REACT_APP_BACKEND_URL}/api/products?page=${page}&?filter=isFavourite`,
		fetcher
	);
	// const { data, error } = useSWR(
	// 	`http://localhost:4000/api/products?page=${page}`,
	// 	fetcher
	// );

	useEffect(() => {
		if (data) {
			setPageCount(data.pagination.pageCount);
		}
	}, [data]);

	function handlePrevious() {
		setPage((p) => {
			if (p === 1) return p;
			return p - 1;
		});
	}

	function handleNext() {
		setPage((p) => {
			if (p === pageCount) return p;
			return p + 1;
		});
	}

	if (error) {
		return <div>{JSON.stringify(error)}</div>;
	}

	if (!data) {
		return <p>Loading...</p>;
	}

	// const handlePageChange = (page) => {
	// 	console.log(`active page is ${page}`);
	// 	// this.setState({activePage: page});
	// 	setActivePage(page);
	// };

	return (
		<StyledSongsWidget>
			<div className='pagination-header'>
				<p>Page: {page}</p>
				<SongsPaginationNav
					page={page}
					setPage={setPage}
					pageCount={pageCount}
					handlePrevious={handlePrevious}
					handleNext={handleNext}
				/>
				<p>Page count: {pageCount}</p>
			</div>
			{/* <p>Page: {page}
				Page count: {pageCount}</p> */}
			<div className='songs-container'>
				{data.items.map((product) => {
					return <SongCard key={product._id} song={product} />;
				})}
				{/* <div className='product-item' key={product._id}>
						<div className='product-inner'>
							<span className='product-price'>${product.price}</span>
							<h3 className='product-name'>{product.productName}</h3>
						</div>
					</div> */}
				{/* return (
					<div className='product-item' key={product._id}>
						<div className='product-inner'>
							<span className='product-price'>${product.price}</span>
							<h3 className='product-name'>{product.productName}</h3>
						</div>
					</div>
				); */}

				{/* <footer>
					Page: {page}
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
					</select>
				</footer> */}
			</div>
			{/* <Pagination
				activePage={activePage}
				itemsCountPerPage={5}
				totalItemsCount={10}
				pageRangeDisplayed={2}
				onChange={() => {
					handlePageChange(page);
				}}
			/> */}
			{/* <SongsPaginationFooter
				page={page}
				setPage={setPage}
				pageCount={pageCount}
				handlePrevious={handlePrevious}
				handleNext={handleNext}
			/> */}
			{/* <footer>
				Page: {page}
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
				</select>
			</footer> */}
		</StyledSongsWidget>
	);
}
const StyledSongsWidget = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	max-width: 100rem;
	/* padding: 0.5rem 1rem; */
	overflow-y: hidden;
	z-index: 1;
	/* transition: all 200ms linear; */
	/* margin: 0 auto; */
	flex: 1;
	padding: 0 0.5rem 2rem 0.5rem;
	row-gap: 1rem;
	.pagination-header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		/* margin-bottom: 1rem; */
		p {
			font-weight: bolder;
			/* display: inline-block; */
		}
	}
	.songs-container {
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		/* flex: 1; */
		/* margin-bottom: 2rem; */
		overflow-y: auto;
		border: 1px solid ${({ theme }) => theme.darkBrown};
		border-radius: 0.4rem;
		box-shadow: 3px 3px 4px rgba(0, 0, 0, 08);
		background-color: rgba(0, 0, 0, 0.1);
		scroll-behavior: smooth;
		scroll-behavior: smooth;
		scrollbar-width: normal;
		scrollbar-color: ${({ theme }) => theme.lightBrown};
		::-webkit-scrollbar {
			height: 18px !important;
			width: 18px;
			background: ${({ theme }) => theme.lightBrown};
			user-select: none; /* supported by Chrome and Opera */
			-webkit-user-select: none; /* Safari */
			-khtml-user-select: none; /* Konqueror HTML */
			-moz-user-select: none; /* Firefox */
			-ms-user-select: none; /* Internet Explorer/Edge */
		}
		::-webkit-scrollbar-thumb {
			background-color: ${({ theme }) => theme.darkBrown};
			-webkit-box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.75);
			box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.75);
		}
		::-webkit-scrollbar-corner {
			background: rgb(75, 74, 74);
		}
	}
`;

export default ListProducts;
