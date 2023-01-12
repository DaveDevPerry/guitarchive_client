import { useState, useEffect, useRef } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { useGigsContext } from '../hooks/useGigsContext';
import { useAuthContext } from '../../hooks/useAuthContext';
import styled from 'styled-components';
import { log } from '../../utils/helper';
// import { log } from '../helper';
// import { CgCloseR } from 'react-icons/cg';
// import { useBandsContext } from '../hooks/useBandsContext';

const SearchSongs = ({
	setDisplay,
	display,
	songTitleToSearch,
	setSongTitleToSearch,
}) => {
	const { user } = useAuthContext();
	// const [display, setDisplay] = useState(false);
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
				// setOptions(json);
			}
		};
		// if we have a value for the user then fetch the workouts
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
		// setHeadline_band(poke);
		// setCreateNewBand(false);
		setDisplay(false);
	};

	return (
		<StyledSearchSongs className='search-container' ref={wrapperRef}>
			<input
				id='auto'
				onClick={() => setDisplay(!display)}
				// className={emptyFields.includes('headline_band') ? 'error' : ''}
				autoFocus
				value={search}
				onChange={(event) => {
					setSearch(event.target.value);
					setSongTitleToSearch(event.target.value);
					// songStatusHandler
					// setHeadline_band(event.target.value);
				}}
				autoComplete='off'
				required
				placeholder='Song title, artist'
			/>
			{/* {display && options.length > 0 && ( */}
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
	#auto {
		font-size: 1.4rem;
		font-style: italic;
		color: ${({ theme }) => theme.engravedBrown};
		background-color: rgba(36, 14, 0, 0.127);
		padding: 0 1rem;
		border: 1px solid ${({ theme }) => theme.darkBrown};
		border-radius: 0.4rem 0 0 0.4rem;
		width: 25rem;
		/* margin-left: 2rem; */
		/* font-weight: lighter; */
		height: 3.8rem;
		/* font-family: 'New Tegomin', serif; */
		&:focus {
			border: 1px solid ${({ theme }) => theme.darkBrown};
			outline: none;
		}
	}
	.autoContainer {
		position: absolute;
		background-color: ${({ theme }) => theme.white};
		z-index: 500;
		width: 100%;
		padding: 0 1rem;
		left: 0;
		/* border: 1px solid ${({ theme }) => theme.primaryColor}; */
		.option {
			padding: 0.3rem 0;
		}
	}
`;

export default SearchSongs;
