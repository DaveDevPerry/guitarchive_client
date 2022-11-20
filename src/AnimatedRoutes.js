import { Routes, Route, useLocation, Navigate } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Loader from './pages/Loader';
import Home from './pages/Home';
import Settings from './pages/Settings';
import Songs from './pages/Songs';

const AnimatedRoutes = ({ user, themeToggler, theme, currentDate }) => {
	const location = useLocation();

	return (
		<AnimatePresence mode='wait'>
			<Routes location={location} key={location.pathname}>
				<Route path='/' element={<Loader theme={theme} />} />
				<Route
					path='/login'
					element={!user ? <Login theme={theme} /> : <Navigate to='/' />}
				/>
				<Route
					path='/signup'
					element={!user ? <Signup theme={theme} /> : <Navigate to='/' />}
				/>
				<Route
					path='/home'
					element={
						user ? (
							<Home theme={theme} currentDate={currentDate} />
						) : (
							<Navigate to='/login' />
						)
					}
				/>
				<Route
					path='/songs'
					element={
						user ? (
							<Songs theme={theme} currentDate={currentDate} />
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
		</AnimatePresence>
	);
};

export default AnimatedRoutes;
