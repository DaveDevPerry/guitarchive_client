import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/index.css';
import App from './App';
import { ViewportContextProvider } from './context/ViewportContext';
import { AuthContextProvider } from './context/AuthContext';
import { SongsContextProvider } from './context/SongContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<ViewportContextProvider>
			<AuthContextProvider>
				<SongsContextProvider>
					<App />
				</SongsContextProvider>
			</AuthContextProvider>
		</ViewportContextProvider>
	</React.StrictMode>
);
