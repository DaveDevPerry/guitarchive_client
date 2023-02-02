import { useEffect, useState } from 'react';
import axios from 'axios';
import { BrowserRouter } from 'react-router-dom';
import { GlobalStyles } from './assets/globalStyles';
import { lightTheme, darkTheme } from './assets/Themes';
import { ThemeProvider } from 'styled-components';
import { useAuthContext } from './hooks/useAuthContext';
import { StateContext, useStateContext } from './lib/context';
import { log } from './utils/helper';
import { Toaster } from 'react-hot-toast';
import AnimatedRoutes from './AnimatedRoutes';
import { useDarkMode } from './assets/useDarkMode';
import Header from './components/Header';
import { useSongsContext } from './hooks/useSongContext';
import { useViewport } from './hooks/useViewport';
import Footer from './components/Footer';
import { useIdeasContext } from './hooks/useIdeaContext';
import { useRequestsContext } from './hooks/useRequestContext';
import { useYoutubeTargetsContext } from './hooks/useYoutubeTargetContext';

function App() {
	// run one when app starts
	useEffect(() => {
		log('getting from ls');
	}, []);
	const { user } = useAuthContext();
	const { songs, artistSongs, arrangerSongs } = useSongsContext();
	const { dispatch: youtubeDispatch } = useYoutubeTargetsContext();
	const { ideas } = useIdeasContext();
	const { requests } = useRequestsContext();
	const [theme, themeToggler, mountedComponent] = useDarkMode();
	const themeMode = theme === 'light' ? lightTheme : darkTheme;
	const [currentDate] = useState(new Date().toLocaleDateString());
	const [youtubeData, setYoutubeData] = useState(null);
	const [mode, setMode] = useState('online');
	// const [hasYoutubeAccount, setHasYoutubeAccount] = useState(false);
	// const { hasYoutubeAccount, setHasYoutubeAccount } = useStateContext();

	useEffect(() => {
		if (
			process.env.REACT_APP_PUBLIC_MY_USER_ID === undefined ||
			process.env.REACT_APP_PUBLIC_MY_KEY === undefined
		) {
			log('undefined no youtube api data');
			youtubeDispatch({
				type: 'SET_HAS_YOUTUBE',
				payload: false,
			});
			// setHasYoutubeAccount(false);
			return;
		}
		axios
			.get(
				`https://www.googleapis.com/youtube/v3
		/channels?part=statistics&id=${process.env.REACT_APP_PUBLIC_MY_USER_ID}&key=${process.env.REACT_APP_PUBLIC_MY_KEY}`
			)
			.then((response) => {
				log(response, 'response youtube api data');

				const data = response.data.items;
				setYoutubeData(data);
				// setHasYoutubeAccount(true);
				youtubeDispatch({
					type: 'SET_HAS_YOUTUBE',
					payload: true,
				});
			});
		// .catch((error) => {
		// 	// do something with error
		// 	log(error, 'no youtube api data');
		// })
		// .finally(() => {
		// 	//  dataIsLoading = false;
		// 	log('no youtube api data');
		// });
		// .catch((error) => {
		// 	log(error, 'no youtube api data');
		// });
		// axios
		// 	.get(
		// 		`https://www.googleapis.com/youtube/v3
		// /channels?part=statistics&id=${process.env.REACT_APP_PUBLIC_MY_USER_ID}&key=${process.env.REACT_APP_PUBLIC_MY_KEY}`
		// 	)
		// 	.then((response) => {
		// 		const data = response.data.items;
		// 		setYoutubeData(data);
		// 	});
	}, []);

	const [songStatus, setSongStatus] = useState('all');
	const [filteredSongs, setFilteredSongs] = useState([]);
	const [songDetails, setSongDetails] = useState({});

	useEffect(() => {
		songFilterHandler();
	}, [songs, songStatus]);

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

	// ideas
	const [ideaStatus, setIdeaStatus] = useState('ideas');
	const [filteredIdeas, setFilteredIdeas] = useState([]);

	useEffect(() => {
		ideasSongFilterHandler();
	}, [ideas, ideaStatus]);
	// function sand events
	const ideasSongFilterHandler = (e) => {
		log(ideaStatus, 'in set filter');
		switch (ideaStatus) {
			case 'ideas':
				setFilteredIdeas(
					ideas && ideas.filter((idea) => idea.isComplete === false)
				);
				break;
			case 'fingerstyle':
				setFilteredIdeas(
					ideas && ideas.filter((idea) => idea.style === 'fingerstyle')
				);
				break;
			case 'electric':
				setFilteredIdeas(
					ideas && ideas.filter((idea) => idea.style === 'electric')
				);
				break;
			case 'classical':
				setFilteredIdeas(
					ideas && ideas.filter((idea) => idea.style === 'classical')
				);
				break;
			case 'notes':
				setFilteredIdeas(
					ideas && ideas.filter((idea) => idea.notes.length >= 1)
				);
				break;
			case 'no-notes':
				setFilteredIdeas(
					ideas && ideas.filter((idea) => idea.notes.length === 0)
				);
				break;
			case 'complete':
				setFilteredIdeas(
					ideas && ideas.filter((idea) => idea.isComplete === true)
				);
				break;
			case 'all':
				setFilteredIdeas(ideas && ideas);
				break;
			default:
				setFilteredIdeas(
					ideas && ideas.filter((idea) => idea.isComplete === false)
				);

				break;
		}
	};
	// function sand events
	const ideaStatusHandler = (e) => {
		log(e.target.value);
		setIdeaStatus(e.target.value);
	};
	// ideas
	const [requestStatus, setRequestStatus] = useState('requests');
	const [filteredRequests, setFilteredRequests] = useState([]);

	useEffect(() => {
		requestsSongFilterHandler();
	}, [requests, requestStatus]);
	// function sand events
	const requestsSongFilterHandler = (e) => {
		log(requestStatus, 'in set filter');
		switch (requestStatus) {
			case 'requests':
				setFilteredRequests(
					requests && requests.filter((request) => request.isComplete === false)
				);
				break;
			case 'fingerstyle':
				setFilteredRequests(
					requests &&
						requests.filter((request) => request.style === 'fingerstyle')
				);
				break;
			case 'electric':
				setFilteredRequests(
					requests && requests.filter((request) => request.style === 'electric')
				);
				break;
			case 'classical':
				setFilteredRequests(
					requests &&
						requests.filter((request) => request.style === 'classical')
				);
				break;
			case 'notes':
				setFilteredRequests(
					requests && requests.filter((request) => request.notes.length >= 1)
				);
				break;
			case 'no-notes':
				setFilteredRequests(
					requests && requests.filter((request) => request.notes.length === 0)
				);
				break;
			case 'complete':
				setFilteredRequests(
					requests && requests.filter((request) => request.isComplete === true)
				);
				break;
			case 'all':
				setFilteredRequests(requests && requests);
				break;
			default:
				setFilteredRequests(
					requests && requests.filter((request) => request.isComplete === false)
				);

				break;
		}
	};
	// function sand events

	const requestStatusHandler = (e) => {
		// log(e.target.textContent);
		log(e.target.value);
		setRequestStatus(e.target.value);
	};

	// artist songs

	const [artistSongStatus, setArtistSongStatus] = useState('all');
	const [artistFilteredSongs, setArtistFilteredSongs] = useState([]);
	const [artistSongDetails, setArtistSongDetails] = useState({});

	useEffect(() => {
		artistSongFilterHandler();
	}, [artistSongs, artistSongStatus]);
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
	const { width } = useViewport();
	const breakpoint = 620;

	// if (!mountedComponent) return <div id='unmounted'>Can i see this</div>;
	if (!mountedComponent)
		return (
			<div id='unmounted'>
				<h1>guitarchive</h1>
			</div>
		);

	return (
		<ThemeProvider theme={themeMode}>
			<GlobalStyles />
			<StateContext>
				<div
					className={`App ${width < breakpoint ? 'mobile' : ''}`}
					id={`${theme === 'dark' ? 'dark' : 'light'}`}
				>
					<BrowserRouter>
						<Toaster />
						<Header mode={mode} />
						<AnimatedRoutes
							mode={mode}
							setMode={setMode}
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
							filteredIdeas={filteredIdeas}
							setFilteredIdeas={setFilteredIdeas}
							ideaStatusHandler={ideaStatusHandler}
							filteredRequests={filteredRequests}
							setFilteredRequests={setFilteredRequests}
							requestStatusHandler={requestStatusHandler}
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
							// youtubeTarget={youtubeTarget}
						/>
						{width > breakpoint && <Footer />}
					</BrowserRouter>
					{/* {showNotes === true ? (
						<div className='test-modal'>modal</div>
					) : (
						<div></div>
					)} */}
				</div>
			</StateContext>
		</ThemeProvider>
	);
}

export default App;
