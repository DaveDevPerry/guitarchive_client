// import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

// import useSWR from 'swr';
import { useViewport } from '../../hooks/useViewport';
import ArtistCard from './ArtistCard';
// import SongCard from './SongCard';
// import SongsPaginationNav from './SongsPaginationNav';

// const fetcher = (url) => fetch(url).then((res) => res.json());

function ArtistsList({ filterValue, artists }) {
	// const [page, setPage] = useState(1);
	// const [pageCount, setPageCount] = useState(0);
	// const [songCount, setSongCount] = useState(0);

	const { width } = useViewport();
	const breakpoint = 620;

	const container = {
		hidden: { opacity: 0 },
		show: {
			opacity: 1,
			delay: 2,
			transition: {
				staggerChildren: 0.2,
				// delayChildren: 0.5
			},
		},
	};

	const item = {
		hidden: { opacity: 0 },
		show: { opacity: 1 },
		exit: { opacity: 0 },
	};

	// const { data, error } = useSWR(
	// 	`${process.env.REACT_APP_BACKEND_URL}/api/products/${filterValue}?page=${page}`,
	// 	fetcher
	// );
	// useEffect(() => {
	// 	if (data) {
	// 		setPageCount(data.pagination.pageCount);
	// 		setSongCount(data.pagination.count);
	// 	}
	// }, [data]);

	// function handlePrevious(e) {
	// 	e.preventDefault();
	// 	setPage((p) => {
	// 		if (p === 1) return p;
	// 		return p - 1;
	// 	});
	// }

	// function handleNext(e) {
	// 	e.preventDefault();

	// 	setPage((p) => {
	// 		if (p === pageCount) return p;
	// 		return p + 1;
	// 	});
	// }

	// if (error) {
	// 	return <div>{JSON.stringify(error)}</div>;
	// }

	// if (!data) {
	// 	return <p>Loading...</p>;
	// }

	return (
		<StyledArtistsList className={`${width < breakpoint ? 'mobile' : ''}`}>
			<motion.div
				className={`artists-container ${width < breakpoint ? 'mobile' : ''}`}
				variants={container}
				initial='hidden'
				animate='show'
			>
				{artists &&
					artists.map((artist, index) => {
						return <ArtistCard key={index} artist={artist} item={item} />;
					})}
				{/* {data.items.map((product) => {
					return <SongCard key={product._id} song={product} />;
				})} */}
			</motion.div>
			{/* <div
				className={`pagination-header ${width < breakpoint ? 'mobile' : ''}`}
			>
				<p>
					Page:
					<span>
						{page}/{pageCount}
					</span>
				</p>
				<SongsPaginationNav
					page={page}
					setPage={setPage}
					pageCount={pageCount}
					handlePrevious={handlePrevious}
					handleNext={handleNext}
				/>
				<p>
					Songs:<span>{songCount}</span>
				</p>
			</div> */}
		</StyledArtistsList>
	);
}
const StyledArtistsList = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	max-width: 100rem;
	overflow-y: hidden;
	z-index: 1;
	flex: 1;
	row-gap: 1rem;
	padding-bottom: 0.5rem;
	&.mobile {
		row-gap: 1rem;
		padding-bottom: 0rem;
	}
	.pagination-header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 0 0.5rem;
		/* border-radius: 1rem;
		padding: 1rem 2rem;
		border-radius: 0.4rem 0.4rem 1rem 1rem;
		box-shadow: inset 3px 3px 4px rgba(0, 0, 0, 0005),
			inset -2px -2px 2px rgba(0, 0, 0, 08);
		background-color: rgba(0, 0, 0, 0.1); */
		&.mobile {
			border-radius: 0.4rem;
			padding: 0;
		}
		p {
			font-weight: bolder;
			color: ${({ theme }) => theme.primaryColor};
			text-shadow: 0px 1px 0px rgb(255 255 255 / 20%),
				0px -1px 0px rgb(0 0 0 / 70%);
			span {
				color: ${({ theme }) => theme.secondaryColor};
				/* text-shadow: 0px 1px 0px rgb(255 255 255 / 20%),
					0px -1px 0px rgb(0 0 0 / 70%); */
			}
		}
	}
	.artists-container {
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		overflow-y: auto;
		border: 1px solid ${({ theme }) => theme.primaryColor};
		border-radius: 0.4rem;
		box-shadow: inset 3px 3px 4px rgba(0, 0, 0, 0005),
			inset -2px -2px 2px rgba(0, 0, 0, 08);
		background-color: rgba(0, 0, 0, 0.1);
		padding: 0.5rem;
		padding-right: 0;
		scroll-behavior: smooth;
		scroll-behavior: smooth;
		scrollbar-width: normal;
		scrollbar-color: ${({ theme }) => theme.lightBrown};
		flex: 1;
		&.mobile {
			border-radius: 0.4rem;
		}
		::-webkit-scrollbar {
			display: none;
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

export default ArtistsList;
