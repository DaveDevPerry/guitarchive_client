import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/index.css';
import App from './App';
// import * as serviceWorkerRegistration from './serviceWorkerRegistration';
// import * as registerSW from './registerSW';
import swDev from './swDev';
import { ViewportContextProvider } from './context/ViewportContext';
import { AuthContextProvider } from './context/AuthContext';
import { SongsContextProvider } from './context/SongContext';
import { ArtistsContextProvider } from './context/ArtistContext';
import { ArrangersContextProvider } from './context/ArrangerContext';
import { StatusContextProvider } from './context/StatusContext';
import { StylesContextProvider } from './context/StyleContext';
import { IdeasContextProvider } from './context/IdeaContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<ViewportContextProvider>
			<AuthContextProvider>
				<SongsContextProvider>
					<IdeasContextProvider>
						<ArtistsContextProvider>
							<ArrangersContextProvider>
								<StatusContextProvider>
									<StylesContextProvider>
										<App />
									</StylesContextProvider>
								</StatusContextProvider>
							</ArrangersContextProvider>
						</ArtistsContextProvider>
					</IdeasContextProvider>
				</SongsContextProvider>
			</AuthContextProvider>
		</ViewportContextProvider>
	</React.StrictMode>
);
swDev();
// registerSW.register();
// serviceWorkerRegistration.register();
