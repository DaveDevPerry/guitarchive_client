import { useStateContext } from '../lib/context';
import { useArrangersContext } from './useArrangerContext';
import { useArtistsContext } from './useArtistContext';
import { useAuthContext } from './useAuthContext';
import { useSongsContext } from './useSongContext';
import { useStatusContext } from './useStatusContext';
import { useStylesContext } from './useStyleContext';

export const useLogout = () => {
	const { dispatch } = useAuthContext();
	const { setDataLoaded } = useStateContext();
	const { dispatch: songsDispatch } = useSongsContext();
	const { dispatch: artistDispatch } = useArtistsContext();
	const { dispatch: arrangerDispatch } = useArrangersContext();
	const { dispatch: styleDispatch } = useStylesContext();
	const { dispatch: statusDispatch } = useStatusContext();

	const logout = () => {
		// remove user from storage
		localStorage.removeItem('guitarchive');
		// dispatch a logout action - no payload needed
		dispatch({ type: 'LOGOUT' });
		songsDispatch({ type: 'LOGOUT' });
		artistDispatch({ type: 'LOGOUT' });
		arrangerDispatch({ type: 'LOGOUT' });
		styleDispatch({ type: 'LOGOUT' });
		statusDispatch({ type: 'LOGOUT' });

		setDataLoaded(false);
	};

	return { logout };
};
