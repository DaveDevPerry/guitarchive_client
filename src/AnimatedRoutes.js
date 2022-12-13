import { Routes, Route, useLocation, Navigate } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
// import Login from './pages/Login';
// import Signup from './pages/Signup';
// import Loader from './pages/Loader';
// import Home from './pages/Home';
// import Settings from './pages/Settings';
// import Songs from './pages/Songs';
// import Song from './pages/Song';
// import Artists from './pages/Artists';
// import Arrangers from './pages/Arrangers';
// import MobileMenu from './pages/MobileMenu';
// import YouTube from './pages/YouTube';
// import Artist from './pages/Artist';
// import Arranger from './pages/Arranger';
// import Products from './pages/Products';
// import Stats from './pages/Stats';
// import Ideas from './pages/Ideas';
// import Requests from './pages/Requests';

// import Settings from './pages/Settings';
// import Songs from './pages/Songs';
// import Song from './pages/Song';
// import Artists from './pages/Artists';
// import Arrangers from './pages/Arrangers';
// import MobileMenu from './pages/MobileMenu';
// import YouTube from './pages/YouTube';
// import Artist from './pages/Artist';
// import Arranger from './pages/Arranger';
// import Products from './pages/Products';
// import Stats from './pages/Stats';
import { lazy, Suspense } from 'react';

const AnimatedRoutes = ({
	user,
	themeToggler,
	theme,
	currentDate,
	filteredSongs,
	setFilteredSongs,
	songStatusHandler,
	setSongDetails,
	youtubeData,
	youtubeTarget,
	artistSongStatus,
	setArtistSongStatus,
	artistFilteredSongs,
	setArtistFilteredSongs,
	artistSongStatusHandler,
	artistSongDetails,
	setArtistSongDetails,
	arrangerSongStatus,
	setArrangerSongStatus,
	arrangerFilteredSongs,
	setArrangerFilteredSongs,
	arrangerSongStatusHandler,
	arrangerSongDetails,
	setArrangerSongDetails,
	filteredIdeas,
	setFilteredIdeas,
	ideaStatusHandler,
	filteredRequests,
	setFilteredRequests,
	requestStatusHandler,
	mode,
	setMode,
}) => {
	const location = useLocation();

	// 	import Settings from './pages/Settings';
	// import Songs from './pages/Songs';
	// import Song from './pages/Song';
	// import Artists from './pages/Artists';
	// import Arrangers from './pages/Arrangers';
	// import MobileMenu from './pages/MobileMenu';
	// import YouTube from './pages/YouTube';
	// import Artist from './pages/Artist';
	// import Arranger from './pages/Arranger';
	// import Products from './pages/Products';
	// import Stats from './pages/Stats';
	// import Ideas from './pages/Ideas';
	// import Requests from './pages/Requests';

	const Login = lazy(() => import('./pages/Login'));
	const Loader = lazy(() => import('./pages/Loader'));
	const Home = lazy(() => import('./pages/Home'));
	const Ideas = lazy(() => import('./pages/Ideas'));
	const Requests = lazy(() => import('./pages/Requests'));
	const Artists = lazy(() => import('./pages/Artists'));
	const Artist = lazy(() => import('./pages/Artist'));
	const Arrangers = lazy(() => import('./pages/Arrangers'));
	const Arranger = lazy(() => import('./pages/Arranger'));
	const Stats = lazy(() => import('./pages/Stats'));
	const Settings = lazy(() => import('./pages/Settings'));
	const YouTube = lazy(() => import('./pages/YouTube'));
	const MobileMenu = lazy(() => import('./pages/MobileMenu'));
	const Song = lazy(() => import('./pages/Song'));
	const Products = lazy(() => import('./pages/Products'));
	const Songs = lazy(() => import('./pages/Songs'));

	return (
		<AnimatePresence mode='wait'>
			<Suspense fallback={<h1>loading ....</h1>}>
				<Routes location={location} key={location.pathname}>
					<Route
						path='/'
						element={
							<Loader
								theme={theme}
								youtubeData={youtubeData}
								setMode={setMode}
							/>
						}
					/>
					<Route
						path='/login'
						element={!user ? <Login theme={theme} /> : <Navigate to='/' />}
					/>
					{/* <Route
					path='/signup'
					element={!user ? <Signup theme={theme} /> : <Navigate to='/' />}
				/> */}
					<Route
						path='/home'
						element={
							user ? (
								<Home
									theme={theme}
									currentDate={currentDate}
									youtubeData={youtubeData}
								/>
							) : (
								<Navigate to='/login' />
							)
						}
					/>
					<Route
						path='/ideas'
						element={
							user ? (
								<Ideas
									theme={theme}
									currentDate={currentDate}
									filteredIdeas={filteredIdeas}
									setFilteredIdeas={setFilteredIdeas}
									ideaStatusHandler={ideaStatusHandler}
								/>
							) : (
								<Navigate to='/login' />
							)
						}
					/>
					<Route
						path='/requests'
						element={
							user ? (
								<Requests
									theme={theme}
									currentDate={currentDate}
									filteredRequests={filteredRequests}
									setFilteredRequests={setFilteredRequests}
									requestStatusHandler={requestStatusHandler}
								/>
							) : (
								<Navigate to='/login' />
							)
						}
					/>
					<Route
						path='/stats'
						element={
							user ? (
								<Stats
									theme={theme}
									currentDate={currentDate}
									youtubeData={youtubeData}
								/>
							) : (
								<Navigate to='/login' />
							)
						}
					/>
					<Route
						path='/youtube'
						element={
							user ? (
								<YouTube
									theme={theme}
									currentDate={currentDate}
									youtubeData={youtubeData}
									youtubeTarget={youtubeTarget}
								/>
							) : (
								<Navigate to='/login' />
							)
						}
					/>

					<Route
						path='/menu'
						element={
							user ? (
								<MobileMenu theme={theme} currentDate={currentDate} />
							) : (
								<Navigate to='/login' />
							)
						}
					/>
					<Route
						path='/songs'
						element={
							user ? (
								<Songs
									theme={theme}
									currentDate={currentDate}
									// 	songStatus={songStatus}
									// setSongStatus={setSongStatus}
									filteredSongs={filteredSongs}
									setFilteredSongs={setFilteredSongs}
									songStatusHandler={songStatusHandler}
									// songDetails={songDetails}
									setSongDetails={setSongDetails}
								/>
							) : (
								<Navigate to='/login' />
							)
						}
					/>
					<Route
						path='/products'
						element={
							user ? (
								<Products
									theme={theme}
									// currentDate={currentDate}
									// // 	songStatus={songStatus}
									// // setSongStatus={setSongStatus}
									// filteredSongs={filteredSongs}
									// setFilteredSongs={setFilteredSongs}
									// songStatusHandler={songStatusHandler}
									// // songDetails={songDetails}
									// setSongDetails={setSongDetails}
								/>
							) : (
								<Navigate to='/login' />
							)
						}
					/>
					<Route
						path='/song'
						element={
							user ? (
								<Song theme={theme} currentDate={currentDate} />
							) : (
								<Navigate to='/login' />
							)
						}
					/>
					<Route
						path='/artists'
						element={
							user ? (
								<Artists theme={theme} currentDate={currentDate} />
							) : (
								<Navigate to='/login' />
							)
						}
					/>
					<Route
						path='/artist'
						element={
							user ? (
								<Artist
									theme={theme}
									currentDate={currentDate}
									// artistSongStatus={artistSongStatus}
									// setArtistSongStatus={setArtistSongStatus}
									artistFilteredSongs={artistFilteredSongs}
									setArtistFilteredSongs={setArtistFilteredSongs}
									artistSongStatusHandler={artistSongStatusHandler}
									// artistSongDetails={artistSongDetails}
									setArtistSongDetails={setArtistSongDetails}
								/>
							) : (
								<Navigate to='/login' />
							)
						}
					/>
					<Route
						path='/arrangers'
						element={
							user ? (
								<Arrangers theme={theme} currentDate={currentDate} />
							) : (
								<Navigate to='/login' />
							)
						}
					/>
					<Route
						path='/arranger'
						element={
							user ? (
								<Arranger
									theme={theme}
									currentDate={currentDate}
									arrangerFilteredSongs={arrangerFilteredSongs}
									setArrangerFilteredSongs={setArrangerFilteredSongs}
									arrangerSongStatusHandler={arrangerSongStatusHandler}
									setArrangerSongDetails={setArrangerSongDetails}
								/>
							) : (
								<Navigate to='/login' />
							)
						}
					/>
					<Route
						path='/settings'
						element={
							user ? (
								<Settings themeToggler={themeToggler} theme={theme} />
							) : (
								<Navigate to='/login' />
							)
						}
					/>
				</Routes>
			</Suspense>
		</AnimatePresence>
	);
};

export default AnimatedRoutes;
