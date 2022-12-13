import { useEffect, useState } from 'react';
import { log } from '../utils/helper';

export const useDarkMode = () => {
	const [theme, setTheme] = useState('light');
	const [mountedComponent, setMountedComponent] = useState(false);

	const setMode = (mode) => {
		window.localStorage.setItem('guitarchive-theme', mode);
		setTheme(mode);
	};

	const themeToggler = () => {
		theme === 'light' ? setMode('dark') : setMode('light');
		log('here');
	};

	useEffect(() => {
		const localTheme = window.localStorage.getItem('guitarchive-theme');
		localTheme ? setTheme(localTheme) : setMode('light');
		setMountedComponent(true);
	}, []);
	return [theme, themeToggler, mountedComponent];
};
