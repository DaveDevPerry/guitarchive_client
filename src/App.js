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
	const { songs } = useSongsContext();
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
