import { useEffect, useState } from 'react';
import axios from 'axios';
import { BrowserRouter } from 'react-router-dom';
import { GlobalStyles } from './assets/globalStyles';
import { lightTheme, darkTheme } from './assets/Themes';
import { ThemeProvider } from 'styled-components';
import { useViewport } from './hooks/useViewport';
import { useAuthContext } from './hooks/useAuthContext';
import { StateContext } from './lib/context';
import { log } from './utils/helper';
import { Toaster } from 'react-hot-toast';
import AnimatedRoutes from './AnimatedRoutes';
import { useDarkMode } from './assets/useDarkMode';
import Header from './components/Header';
import MobileHeader from './components/MobileHeader';
// import Footer from './components/Footer';
import { useSongsContext } from './hooks/useSongContext';
// import MobileMenu from './components/MobileMenu';

function App() {
	// run one when app starts
	useEffect(() => {
		log('getting from ls');
	}, []);
	const { user } = useAuthContext();
	const { songs, artistSongs, arrangerSongs } = useSongsContext();
	const [theme, themeToggler, mountedComponent] = useDarkMode();
	const themeMode = theme === 'light' ? lightTheme : darkTheme;

	const { width } = useViewport();
	const breakpoint = 620;

	const [currentDate] = useState(new Date().toLocaleDateString());

	const [youtubeData, setYoutubeData] = useState(null);

	useEffect(() => {
		axios
			.get(
				`https://www.googleapis.com/youtube/v3
		/channels?part=statistics&id=${process.env.REACT_APP_PUBLIC_MY_USER_ID}&key=${process.env.REACT_APP_PUBLIC_MY_KEY}`
			)
			.then((response) => {
				const data = response.data.items;
				setYoutubeData(data);
			});
	}, []);

	const [songStatus, setSongStatus] = useState('all');
	const [filteredSongs, setFilteredSongs] = useState([]);
	const [songDetails, setSongDetails] = useState({});

	useEffect(() => {
		songFilterHandler();
	}, [songs, songStatus]);

	// const currentSongDay = new Date(new Date().setHours(0, 0, 0, 0));

	// function sand events
	const songFilterHandler = () => {
		switch (songStatus) {
			case 'tabs':
				setFilteredSongs(songs && songs.filter((song) => song.isTab));
				break;
			case 'scores':
				setFilteredSongs(songs && songs.filter((song) => song.isTab === false));
				break;
			case 'favourite':
				setFilteredSongs(songs && songs.filter((song) => song.isFavourite));
				break;
			case 'deadline':
				setFilteredSongs(
					songs &&
						songs.filter(
							(song) =>
								song.deadlineDate !== null && song.status.name !== 'Recorded'
						)
				);
				break;
			case 'practicing':
				setFilteredSongs(
					songs && songs.filter((song) => song.status.name === 'Practicing')
				);
				break;
			case 'ready':
				setFilteredSongs(
					songs && songs.filter((song) => song.status.name === 'Ready')
				);
				break;
			case 'recorded':
				setFilteredSongs(
					songs && songs.filter((song) => song.status.name === 'Recorded')
				);
				break;
			case 'backlog':
				setFilteredSongs(
					songs && songs.filter((song) => song.status.name === 'Backlog')
				);
				break;
			case 'archived':
				setFilteredSongs(
					songs && songs.filter((song) => song.status.name === 'Archived')
				);
				break;
			case 'pdf':
				setFilteredSongs(
					songs && songs.filter((song) => song.fileType === 'pdf')
				);
				break;
			case 'gp':
				setFilteredSongs(
					songs && songs.filter((song) => song.fileType !== 'pdf')
				);
				break;
			case 'difficulty-lth':
				setFilteredSongs(
					songs &&
						songs.sort((a, b) => {
							return b.difficulty - a.difficulty;
						})
				);
				break;
			case 'difficulty-htl':
				setFilteredSongs(
					songs &&
						songs.sort((a, b) => {
							return a.difficulty - b.difficulty;
						})
				);
				break;
			case 'remove-sort':
				setFilteredSongs(
					songs &&
						songs
							.sort((a, b) => {
								return new Date(b.deadlineDate) > new Date(a.deadlineDate);
							})
							.sort(function (a, b) {
								return (a.deadlineDate === null) - (b.deadlineDate === null);
							})
				);
				break;
			case 'all':
				setFilteredSongs(songs && songs);
				break;
			default:
				setFilteredSongs(songs && songs);
				break;
		}
	};

	const songStatusHandler = (e) => {
		log(e.target.textContent);
		log(e.target.value);
		setSongStatus(e.target.value);
	};

	// artists

	// const [artistStatus, setArtistStatus] = useState('all');
	// const [filteredArtists, setFilteredArtists] = useState([]);
	// const [artistDetails, setArtistDetails] = useState({});

	// useEffect(() => {
	// 	artistFilterHandler();
	// }, [artists, artistStatus]);

	// // const currentSongDay = new Date(new Date().setHours(0, 0, 0, 0));

	// // function sand events
	// const artistFilterHandler = () => {
	// 	switch (artistStatus) {
	// 		case 'tabs':
	// 			setFilteredArtists(
	// 				artists && artists.filter((artist) => artist.isTab)
	// 			);
	// 			break;
	// 		case 'scores':
	// 			setFilteredArtists(
	// 				artists &&
	// 					artists.filter((artist) => artist.isTab === false)
	// 			);
	// 			break;
	// 		case 'favourite':
	// 			setFilteredArtists(
	// 				artists &&
	// 					artists.filter((artist) => artist.isFavourite)
	// 			);
	// 			break;
	// 		case 'all':
	// 			setFilteredArtists(artists && artists);
	// 			break;
	// 		default:
	// 			setFilteredArtists(artists && artists);
	// 			break;
	// 	}
	// };

	// const artistStatusHandler = (e) => {
	// 	log(e.target.textContent);
	// 	log(e.target.value);
	// 	setArtistStatus(e.target.value);
	// };

	// artist songs

	const [artistSongStatus, setArtistSongStatus] = useState('all');
	const [artistFilteredSongs, setArtistFilteredSongs] = useState([]);
	const [artistSongDetails, setArtistSongDetails] = useState({});

	useEffect(() => {
		artistSongFilterHandler();
	}, [artistSongs, artistSongStatus]);

	// const currentSongDay = new Date(new Date().setHours(0, 0, 0, 0));

	// function sand events
	const artistSongFilterHandler = () => {
		switch (artistSongStatus) {
			case 'tabs':
				setArtistFilteredSongs(
					artistSongs && artistSongs.filter((artistSong) => artistSong.isTab)
				);
				break;
			case 'scores':
				setArtistFilteredSongs(
					artistSongs &&
						artistSongs.filter((artistSong) => artistSong.isTab === false)
				);
				break;
			case 'favourite':
				setArtistFilteredSongs(
					artistSongs &&
						artistSongs.filter((artistSong) => artistSong.isFavourite)
				);
				break;
			case 'all':
				setArtistFilteredSongs(artistSongs && artistSongs);
				break;
			default:
				setArtistFilteredSongs(artistSongs && artistSongs);
				break;
		}
	};

	const artistSongStatusHandler = (e) => {
		log(e.target.textContent);
		log(e.target.value);
		setArtistSongStatus(e.target.value);
	};

	// artist songs

	const [arrangerSongStatus, setArrangerSongStatus] = useState('all');
	const [arrangerFilteredSongs, setArrangerFilteredSongs] = useState([]);
	const [arrangerSongDetails, setArrangerSongDetails] = useState({});

	useEffect(() => {
		arrangerSongFilterHandler();
	}, [arrangerSongs, arrangerSongStatus]);

	// const currentSongDay = new Date(new Date().setHours(0, 0, 0, 0));

	// function sand events
	const arrangerSongFilterHandler = () => {
		switch (arrangerSongStatus) {
			case 'tabs':
				setArrangerFilteredSongs(
					arrangerSongs &&
						arrangerSongs.filter((arrangerSong) => arrangerSong.isTab)
				);
				break;
			case 'scores':
				setArrangerFilteredSongs(
					arrangerSongs &&
						arrangerSongs.filter((arrangerSong) => arrangerSong.isTab === false)
				);
				break;
			case 'favourite':
				setArrangerFilteredSongs(
					arrangerSongs &&
						arrangerSongs.filter((arrangerSong) => arrangerSong.isFavourite)
				);
				break;
			case 'all':
				setArrangerFilteredSongs(arrangerSongs && arrangerSongs);
				break;
			default:
				setArrangerFilteredSongs(arrangerSongs && arrangerSongs);
				break;
		}
	};

	const arrangerSongStatusHandler = (e) => {
		log(e.target.textContent);
		log(e.target.value);
		setArrangerSongStatus(e.target.value);
	};

	// const { isMenuOpen } = useStateContext();

	if (!mountedComponent) return <div id='unmounted'>Can i see this</div>;
	return (
		<ThemeProvider theme={themeMode}>
			<GlobalStyles />
			<StateContext>
				<div className='App'>
					<BrowserRouter>
						<Toaster />
						{width < breakpoint ? <MobileHeader /> : <Header />}
						{/* {isMenuOpen === true && <MobileMenu />} */}
						<AnimatedRoutes
							currentDate={currentDate}
							user={user}
							themeToggler={themeToggler}
							theme={theme}
							songStatus={songStatus}
							setSongStatus={setSongStatus}
							filteredSongs={filteredSongs}
							setFilteredSongs={setFilteredSongs}
							songStatusHandler={songStatusHandler}
							songDetails={songDetails}
							setSongDetails={setSongDetails}
							artistSongStatus={artistSongStatus}
							setArtistSongStatus={setArtistSongStatus}
							artistFilteredSongs={artistFilteredSongs}
							setArtistFilteredSongs={setArtistFilteredSongs}
							artistSongStatusHandler={artistSongStatusHandler}
							artistSongDetails={artistSongDetails}
							setArtistSongDetails={setArtistSongDetails}
							arrangerSongStatus={arrangerSongStatus}
							setArrangerSongStatus={setArrangerSongStatus}
							arrangerFilteredSongs={arrangerFilteredSongs}
							setArrangerFilteredSongs={setArrangerFilteredSongs}
							arrangerSongStatusHandler={arrangerSongStatusHandler}
							arrangerSongDetails={arrangerSongDetails}
							setArrangerSongDetails={setArrangerSongDetails}
							youtubeData={youtubeData}
						/>
						{/* {width < breakpoint && <Footer />} */}
					</BrowserRouter>
				</div>
			</StateContext>
		</ThemeProvider>
	);
}

export default App;
