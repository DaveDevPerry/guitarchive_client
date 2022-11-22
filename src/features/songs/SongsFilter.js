import React from 'react';
import styled from 'styled-components';

const SongsFilter = () => {
	return (
		<StyledSongsFilter className='mob-nav' id='mob-nav'>
			<ul id='filters'>
				<li className='filters active' id='all-songs' data-filter='all-songs'>
					All songs
					<sup>
						<span id='all-songs-count'></span>
					</sup>
				</li>
				<li className='filters' id='fingerstyle' data-filter='fingerstyle'>
					fingerstyle
					<sup>
						<span id='fingerstyle-count'></span>
					</sup>
				</li>
				<li className='filters' id='classical' data-filter='classical'>
					classical
					<sup>
						<span id='classical-count'></span>
					</sup>
				</li>
				<li className='filters' id='favourites' data-filter='favourites'>
					favourites
					<sup>
						<span id='favourites-count'></span>
					</sup>
				</li>
				<li
					className='filters'
					id='my-arrangements'
					data-filter='my-arrangements'
				>
					my arrangements
					<sup>
						<span id='my-arrangements-count'></span>
					</sup>
				</li>
				<li className='filters' id='practicing' data-filter='practicing'>
					practicing
					<sup>
						<span id='practicing-count'></span>
					</sup>
				</li>
				<li className='filters' id='practice-next' data-filter='practice-next'>
					practice next
					<sup>
						<span id='practice-next-count'></span>
					</sup>
				</li>
				<li className='filters' id='ready-to-rec' data-filter='ready-to-rec'>
					ready to record
					<sup>
						<span id='ready-to-rec-count'></span>
					</sup>
				</li>
			</ul>
		</StyledSongsFilter>
	);
};
const StyledSongsFilter = styled.nav`
	padding: 0 0 0.5rem 0;
	font-size: 1.4rem;
	font-weight: bolder;
	border-bottom: 2px solid ${({ theme }) => theme.darkBrown};
	width: 100%;
	ul {
		/* @include flex(space-between, center, row); */
		display: flex;
		justify-content: space-between;
		align-items: center;
		flex-wrap: wrap;
		list-style: none;
		li {
			cursor: pointer;
			color: ${({ theme }) => theme.grey};
			&:hover {
				color: ${({ theme }) => theme.darkBrown};
			}
			span {
				margin-left: 0.3rem;
				color: ${({ theme }) => theme.brown};
			}
		}
	}
`;

export default SongsFilter;
