import { useEffect, useState } from 'react';
import { log } from '../utils/helper';
// import { useNavigate } from 'react-router-dom';

export const useDarkMode = () => {
	// let navigate = useNavigate();
	const [theme, setTheme] = useState('light');
	const [mountedComponent, setMountedComponent] = useState(false);

	const setMode = (mode) => {
		window.localStorage.setItem('guitarchive-theme', mode);
		setTheme(mode);
	};

	const themeToggler = () => {
		theme === 'light' ? setMode('dark') : setMode('light');
		log('here');
		// navigate('/');
	};

	useEffect(() => {
		const localTheme = window.localStorage.getItem('guitarchive-theme');
		localTheme ? setTheme(localTheme) : setMode('light');
		setMountedComponent(true);
	}, []);
	return [theme, themeToggler, mountedComponent];
};
