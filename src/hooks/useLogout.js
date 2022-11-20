import { useStateContext } from '../lib/context';
import { useAuthContext } from './useAuthContext';

export const useLogout = () => {
	const { dispatch } = useAuthContext();
	const { setDataLoaded } = useStateContext();

	const logout = () => {
		// remove user from storage
		localStorage.removeItem('brendas-blog');
		// dispatch a logout action - no payload needed
		dispatch({ type: 'LOGOUT' });
		setDataLoaded(false);
	};

	return { logout };
};
