import { useEffect, useState } from 'react';
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
import Footer from './components/Footer';

function App() {
	// run one when app starts
	useEffect(() => {
		log('getting from ls');
	}, []);
	const { user } = useAuthContext();
	const [theme, themeToggler, mountedComponent] = useDarkMode();
	const themeMode = theme === 'light' ? lightTheme : darkTheme;

	const { width } = useViewport();
	const breakpoint = 620;

	const [currentDate] = useState(new Date().toLocaleDateString());

	if (!mountedComponent) return <div id='unmounted'>Can i see this</div>;
	return (
		<ThemeProvider theme={themeMode}>
			<GlobalStyles />
			<StateContext>
				<div className='App'>
					<BrowserRouter>
						<Toaster />
						<Header />
						<AnimatedRoutes
							currentDate={currentDate}
							user={user}
							themeToggler={themeToggler}
							theme={theme}
						/>
						{width < breakpoint && <Footer />}
					</BrowserRouter>
				</div>
			</StateContext>
		</ThemeProvider>
	);
}

export default App;
