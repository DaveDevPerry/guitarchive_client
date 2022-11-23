import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import { useViewport } from '../../hooks/useViewport';
// import { useArtistsContext } from '../../hooks/useArtistContext';
// import { getArtists } from '../services';
// import { gsap } from 'gsap';

// import {
// 	Section,
// 	SectionText,
// 	SectionTitle,
// 	SectionDivider,
// } from '../styles/GlobalComponents';
import ArtistCard from './ArtistCard';
// import { artistsTextWrapper, InfoText } from './artistsStyles';

const ArtistsWidget = ({ artists, url }) => {
	// const { dispatch } = useArtistsContext();
	// console.log(artists, 'SONGS widget');
	const { width } = useViewport();
	const breakpoint = 620;
	// let navigate = useNavigate();
	return (
		<>
			{width > breakpoint ? (
				<StyledArtistsContainer className='artists-container'>
					{artists &&
						artists.map((artist, index) => (
							// <ArtistCard key={index} artist={artist} slug={artist.slug} />
							<ArtistCard
								key={index}
								url={url}
								artist={artist}
								slug={artist.slug}
								// onClick={dispatch({ type: 'SET_SONG', payload: artist })}
							/>
						))}
				</StyledArtistsContainer>
			) : (
				<StyledMobileArtistsContainer>
					{artists &&
						artists.map((artist, index) => (
							// <ArtistCard key={index} artist={artist} slug={artist.slug} />
							<ArtistCard
								key={index}
								url={url}
								artist={artist}
								slug={artist.slug}
								// onClick={dispatch({ type: 'SET_SONG', payload: artist })}
							/>
						))}
				</StyledMobileArtistsContainer>
			)}
		</>
	);
};
const StyledArtistsContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	flex: 1;
	margin-bottom: 2rem;
	overflow-y: scroll;
	/* width: 1000px; */
	border: 1px solid ${({ theme }) => theme.darkBrown};
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
		/* background: rgb(75, 74, 74); */
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
		/* width: 18px; */
		/* max-height: 25px; */
	}

	::-webkit-scrollbar-corner {
		background: rgb(75, 74, 74);
	}
`;
const StyledMobileArtistsContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	flex: 1;
	margin-bottom: 0rem;
	overflow-y: scroll;
	/* width: 1000px; */
	border: none;
	border-top: 1px solid ${({ theme }) => theme.darkBrown};
	box-shadow: none;
	background-color: rgba(0, 0, 0, 0.1);
	scroll-behavior: smooth;
	scroll-behavior: smooth;
	scrollbar-width: normal;
	scrollbar-color: ${({ theme }) => theme.lightBrown};
	::-webkit-scrollbar {
		height: 18px !important;
		width: 18px;
		background: ${({ theme }) => theme.lightBrown};
		/* background: rgb(75, 74, 74); */
		user-select: none; /* supported by Chrome and Opera */
		-webkit-user-select: none; /* Safari */
		-khtml-user-select: none; /* Konqueror HTML */
		-moz-user-select: none; /* Firefox */
		-ms-user-select: none; /* Internet Explorer/Edge */
		display: none;
	}

	::-webkit-scrollbar-thumb {
		background-color: ${({ theme }) => theme.darkBrown};
		-webkit-box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.75);
		box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.75);
		/* width: 18px; */
		/* max-height: 25px; */
	}

	::-webkit-scrollbar-corner {
		background: rgb(75, 74, 74);
	}
`;

export default ArtistsWidget;

// export async function getStaticProps() {
// const composers = (await getComposers()) || [];
// 	const artists = (await getArtists()) || [];
// 	return {
// 		props: {
// 			// composers,
// 			artists,
// 		},
// 		revalidate: 10,
// 	};
// }
