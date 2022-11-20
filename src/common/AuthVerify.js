import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
// import { log } from '../helper';
import { useLogout } from '../hooks/useLogout';

const parseJwt = (token) => {
	// log(token, ' token auth verify 2');
	try {
		return JSON.parse(atob(token.split('.')[1]));
	} catch (e) {
		return null;
	}
};

const AuthVerify = () => {
	// const AuthVerify = (props) => {
	const { logout } = useLogout();
	let location = useLocation();

	useEffect(() => {
		const user = JSON.parse(localStorage.getItem('brendas-blog'));
		// log(user, ' auth verify 1');
		if (user) {
			const decodedJwt = parseJwt(user.token);
			if (decodedJwt.exp * 1000 < Date.now() + 4000) {
				logout();
			}
		}
	}, [location]);

	return;
};

export default AuthVerify;
