// import React, { useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { log } from '../utils/helper';
import { useAuthContext } from '../hooks/useAuthContext';
import { useStateContext } from '../lib/context';
import AuthVerify from '../common/AuthVerify';
import { useSongsContext } from '../hooks/useSongContext';

const Loader = () => {
	const { user } = useAuthContext();
	const { setDataLoaded } = useStateContext();
	const { dispatch } = useSongsContext();

	const navigate = useNavigate();
	// const currentDay = new Date(new Date().setHours(0, 0, 0, 0));

	useEffect(() => {
		const fetchSongs = async () => {
			const response = await fetch(
				`${process.env.REACT_APP_BACKEND_URL}/api/songs`
			);
			const json = await response.json();
			// log(user, 'user');
			log(json, 'json user');
			if (response.ok) {
				// dispatch({
				// 	type: 'SET_USERS',
				// 	payload: json,
				// });
				dispatch({
					type: 'SET_SONGS',
					payload: json,
				});
			}
		};

		// fetchSongs();

		if (user) {
			fetchSongs();
		}
		setTimeout(() => {
			setDataLoaded(true);
			setTimeout(() => {
				navigate('/home');
			}, 1000);
		}, 3000);
	}, []);
	// useEffect(() => {
	// 	// const fetchUsers = async () => {
	// 	// 	const response = await fetch(
	// 	// 		`${process.env.REACT_APP_BACKEND_URL}/api/user`
	// 	// 	);
	// 	// 	const json = await response.json();
	// 	// 	log(user, 'user');
	// 	// 	log(json, 'json user');
	// 	// 	if (response.ok) {
	// 	// 		// dispatch({
	// 	// 		// 	type: 'SET_USERS',
	// 	// 		// 	payload: json,
	// 	// 		// });
	// 	// 		dispatch({
	// 	// 			type: 'SET_USER',
	// 	// 			payload: json,
	// 	// 		});
	// 	// 	}
	// 	// };
	// 	// if (user) {
	// 	// 	fetchUsers();
	// 	// }
	// 	setTimeout(() => {
	// 		setDataLoaded(true);
	// 		setTimeout(() => {
	// 			navigate('/home');
	// 		}, 1000);
	// 	}, 1000);
	// }, []);

	return (
		<StyledLoader
			className='loader'
			initial={{ width: 0 }}
			animate={{ width: '100%' }}
			exit={{ x: window.innerWidth }}
		>
			<h1>loader</h1>
			<AuthVerify />
		</StyledLoader>
	);
};
const StyledLoader = styled(motion.section)`
	position: absolute;
	top: 0;
	left: 0;
	width: 100vw;
	height: 100vh;
	width: 100%;
	height: 100%;
	background-color: ${({ theme }) => theme.bgApp};
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	row-gap: 4rem;
	z-index: 500;
`;

export default Loader;
