import { useState, useEffect, useRef } from 'react';
import { useAuthContext } from '../hooks/useAuthContext';
import styled from 'styled-components';
import { log } from '../utils/helper';

const SearchSongs = ({
	setDisplay,
	display,
	songTitleToSearch,
	setSongTitleToSearch,
}) => {
	const { user } = useAuthContext();
	const [options, setOptions] = useState([]);
	const [search, setSearch] = useState('');
	const wrapperRef = useRef(null);

	useEffect(() => {
		const fetchAllSongs = async () => {
			const response = await fetch(
				`${process.env.REACT_APP_BACKEND_URL}/api/songs`,
				{
					headers: {
						Authorization: `Bearer ${user.token}`,
					},
				}
			);
			const json = await response.json();
			const clonedSongs = [...json];
			const sortedSongs = clonedSongs.sort((a, b) => {
				return a.title > b.title ? 1 : -1;
			});

			if (response.ok) {
				setOptions(sortedSongs);
			}
		};
		if (user) {
			fetchAllSongs();
		}
	}, []);

	// sets event listeners
	useEffect(() => {
		document.addEventListener('mousedown', handleClickOutside);
		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
		};
	}, []);

	const handleClickOutside = (event) => {
		const { current: wrap } = wrapperRef;
		if (wrap && !wrap.contains(event.target)) {
			setDisplay(false);
		}
	};

	const setBandDex = (poke) => {
		log(poke, 'poke setBandDex');
		setSearch(poke);
		setSongTitleToSearch(poke);
		setDisplay(false);
	};

	return (
		<StyledSearchSongs className='search-container' ref={wrapperRef}>
			<input
				id='auto'
				onClick={() => setDisplay(!display)}
				autoFocus
				value={search}
				onChange={(event) => {
					setSearch(event.target.value);
				}}
				autoComplete='off'
				required
				placeholder='Song title, artist'
			/>
			{display && (
				<div className='autoContainer'>
					{options
						.filter(({ title }) => title.indexOf(search.toLowerCase()) > -1)
						.map((v, i) => {
							return (
								<div
									key={i}
									className='option'
									onClick={() => setBandDex(v.title)}
								>
									<span>{v.title}</span>
								</div>
							);
						})}
				</div>
			)}
		</StyledSearchSongs>
	);
};
const StyledSearchSongs = styled.div`
	position: relative;
	.autoContainer {
		position: absolute;
		background-color: ${({ theme }) => theme.white};
		z-index: 500;
		width: 100%;
		padding: 0 1rem;
		left: 0;
		.option {
			padding: 0.3rem 0;
		}
	}
`;

export default SearchSongs;
