import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/index.css';
import App from './App';
import { ViewportContextProvider } from './context/ViewportContext';
import { AuthContextProvider } from './context/AuthContext';
import { SongsContextProvider } from './context/SongContext';
import { ArtistsContextProvider } from './context/ArtistContext';
import { ArrangersContextProvider } from './context/ArrangerContext';
import { StatusContextProvider } from './context/StatusContext';
import { StylesContextProvider } from './context/StyleContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<ViewportContextProvider>
			<AuthContextProvider>
				<SongsContextProvider>
					<ArtistsContextProvider>
						<ArrangersContextProvider>
							<StatusContextProvider>
								<StylesContextProvider>
									<App />
								</StylesContextProvider>
							</StatusContextProvider>
						</ArrangersContextProvider>
					</ArtistsContextProvider>
				</SongsContextProvider>
			</AuthContextProvider>
		</ViewportContextProvider>
	</React.StrictMode>
);
