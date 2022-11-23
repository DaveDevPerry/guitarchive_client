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
import { useArtistsContext } from '../hooks/useArtistContext';
import { useArrangersContext } from '../hooks/useArrangerContext';
import { useStatusContext } from '../hooks/useStatusContext';
import { useStylesContext } from '../hooks/useStyleContext';

const Loader = () => {
	const { user } = useAuthContext();
	const { setDataLoaded } = useStateContext();
	const { dispatch } = useSongsContext();
	const { dispatch: artistDispatch } = useArtistsContext();
	const { dispatch: arrangerDispatch } = useArrangersContext();
	const { dispatch: statusDispatch } = useStatusContext();
	const { dispatch: stylesDispatch } = useStylesContext();

	const navigate = useNavigate();
	// const currentDay = new Date(new Date().setHours(0, 0, 0, 0));

	useEffect(() => {
		const fetchSongs = async () => {
			const response = await fetch(
				`${process.env.REACT_APP_BACKEND_URL}/api/songs`
			);
			const json = await response.json();
			// log(user, 'user');
			log(json, 'json songs');
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
				navigate('/songs');
			}, 1000);
		}, 3000);
	}, []);

	useEffect(() => {
		const fetchArtists = async () => {
			const response = await fetch(
				`${process.env.REACT_APP_BACKEND_URL}/api/artists`
			);
			const json = await response.json();
			// log(user, 'user');
			log(json, 'json artist');
			if (response.ok) {
				// dispatch({
				// 	type: 'SET_USERS',
				// 	payload: json,
				// });
				artistDispatch({
					type: 'SET_ARTISTS',
					payload: json,
				});
			}
		};

		// fetchArtists();

		if (user) {
			fetchArtists();
		}
		// setTimeout(() => {
		// 	setDataLoaded(true);
		// 	setTimeout(() => {
		// 		navigate('/home');
		// 	}, 1000);
		// }, 3000);
	}, []);

	useEffect(() => {
		const fetchArrangers = async () => {
			const response = await fetch(
				`${process.env.REACT_APP_BACKEND_URL}/api/arrangers`
			);
			const json = await response.json();
			// log(user, 'user');
			log(json, 'json arrangers');
			if (response.ok) {
				// dispatch({
				// 	type: 'SET_USERS',
				// 	payload: json,
				// });
				arrangerDispatch({
					type: 'SET_ARRANGERS',
					payload: json,
				});
			}
		};

		// fetchArrangers();

		if (user) {
			fetchArrangers();
		}
		// setTimeout(() => {
		// 	setDataLoaded(true);
		// 	setTimeout(() => {
		// 		navigate('/home');
		// 	}, 1000);
		// }, 3000);
	}, []);

	useEffect(() => {
		const fetchStatuses = async () => {
			const response = await fetch(
				`${process.env.REACT_APP_BACKEND_URL}/api/status`
			);
			const json = await response.json();
			// log(user, 'user');
			log(json, 'json statuses');
			if (response.ok) {
				// dispatch({
				// 	type: 'SET_USERS',
				// 	payload: json,
				// });
				statusDispatch({
					type: 'SET_STATUSES',
					payload: json,
				});
			}
		};

		// fetchStatuses();

		if (user) {
			fetchStatuses();
		}
		// setTimeout(() => {
		// 	setDataLoaded(true);
		// 	setTimeout(() => {
		// 		navigate('/home');
		// 	}, 1000);
		// }, 3000);
	}, []);

	useEffect(() => {
		const fetchStyles = async () => {
			const response = await fetch(
				`${process.env.REACT_APP_BACKEND_URL}/api/styles`
			);
			const json = await response.json();
			// log(user, 'user');
			log(json, 'json styles');
			if (response.ok) {
				// dispatch({
				// 	type: 'SET_USERS',
				// 	payload: json,
				// });
				stylesDispatch({
					type: 'SET_STYLES',
					payload: json,
				});
			}
		};

		// fetchStyles();

		if (user) {
			fetchStyles();
		}
		// setTimeout(() => {
		// 	setDataLoaded(true);
		// 	setTimeout(() => {
		// 		navigate('/home');
		// 	}, 1000);
		// }, 3000);
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
			<StyledPageLoader className='loader-container'>
				<div className='loader'>
					<div className='top'>
						<div className='point'></div>
						<div className='line'></div>
					</div>

					<div className='middle'>
						<div className='gubbins'>
							<div className='strip'>
								<ul>
									<li className='small'>
										<u>80</u>
									</li>
									<li className='small'>
										<u>84</u>
									</li>
									<li className='small'>
										<u>88</u>
									</li>
									<li className='small'>
										<u>92</u>
									</li>
									<li className='small'>
										<u>96</u>
									</li>
									<li className='small'>
										<u>100</u>
									</li>
									<li className='small'>
										<u>104</u>
									</li>
									<li className='small'>
										<u>108</u>
									</li>
									<li className='small'>
										<u>112</u>
									</li>
									<li className='small'>
										<u>116</u>
									</li>
									<li className='small'>
										<u>120</u>
									</li>
									<li className='medium'>
										<u>126</u>
									</li>
									<li className='medium'>
										<u>132</u>
									</li>
									<li className='medium'>
										<u>138</u>
									</li>
									<li className='medium'>
										<u>144</u>
									</li>
									<li className='medium'>
										<u>152</u>
									</li>
									<li className='medium'>
										<u>160</u>
									</li>
									<li className='medium'>
										<u>168</u>
									</li>
									<li className='large'>
										<u>176</u>
									</li>
									<li className='large'>
										<u>184</u>
									</li>
									<li className='large'>
										<u>192</u>
									</li>
									<li className='large'>
										<u>200</u>
									</li>
									<li className='large'>
										<u>208</u>
									</li>
								</ul>
							</div>
							<div className='wand-wrapper'>
								<div className='wand'>
									<ul className='marks'>
										<li className='little'>
											<u>&nbsp;</u>
										</li>
										<li className='little'>
											<u>&nbsp;</u>
										</li>
										<li className='little'>
											<u>&nbsp;</u>
										</li>
										<li className='little'>
											<u>&nbsp;</u>
										</li>
										<li className='little'>
											<u>&nbsp;</u>
										</li>
										<li className='little'>
											<u>&nbsp;</u>
										</li>
										<li className='little'>
											<u>&nbsp;</u>
										</li>
										<li className='little'>
											<u>&nbsp;</u>
										</li>
										<li className='medium'>
											<u>&nbsp;</u>
										</li>
										<li className='medium'>
											<u>&nbsp;</u>
										</li>
										<li className='medium'>
											<u>&nbsp;</u>
										</li>
										<li className='medium'>
											<u>&nbsp;</u>
										</li>
										<li className='medium'>
											<u>&nbsp;</u>
										</li>
										<li className='medium'>
											<u>&nbsp;</u>
										</li>
										<li className='medium'>
											<u>&nbsp;</u>
										</li>
										<li className='medium'>
											<u>&nbsp;</u>
										</li>
										<li className='medium'>
											<u>&nbsp;</u>
										</li>
										<li className='medium'>
											<u>&nbsp;</u>
										</li>
									</ul>
								</div>
								<div className='block'></div>
							</div>
						</div>

						<div className='base'>
							<div className='winder'></div>
						</div>
					</div>

					<div className='bottom'>
						<div className='foot'></div>
						<div className='foot'></div>
					</div>
				</div>
			</StyledPageLoader>
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
	overflow: hidden;
`;
const StyledPageLoader = styled.div`
	/* .loader-container { */
	/* @media screen and (max-width: 420px) { */
	position: absolute;
	top: 0;
	left: 0;
	height: 100vh;
	width: 100vw;
	display: flex;
	justify-content: center;
	align-items: center;
	/* background: radial-gradient(#181818, #121213); */
	background-color: transparent;
	background-image: url('/images/light wood texture.webp');
	/* background-color: rgb(31, 30, 30); */
	z-index: 50;
	/* } */

	.loader {
		position: relative;
		background-color: transparent;
		width: 120px;
		height: 220px;
		/* padding-bottom: 2px; */
		box-shadow: 0 8px 6px -6px rgb(7, 7, 7);
		/* } */
		.top {
			height: 10px;
			/* background-color: lightseagreen; */
			display: flex;
			justify-content: center;
			align-items: center;
			flex-direction: column;
		}
		.point {
			width: 35px;
			height: 8px;
			/* background-color: brown; */
			border-bottom: 8px solid rgb(85, 17, 17);
			border-left: 15px solid transparent;
			border-right: 15px solid transparent;
		}
		.line {
			background-color: rgb(85, 17, 17);
			height: 2px;
			width: 36px;
			border-top: 0.5px solid rgb(116, 19, 19);
		}
		.middle {
			/* background-color: lightskyblue; */
			height: 200px;
		}
		.gubbins {
			height: 140px;
			/* background-color: black; */
			margin: 0 10px;
			border-bottom: 140px solid black;
			border-left: 32px solid transparent;
			border-right: 32px solid transparent;
			position: relative;
		}
		.strip {
			position: absolute;
			width: 12px;
			height: 136px;
			top: 2px;
			left: 50%;
			transform: translateX(-50%);
			background-color: slategray;
			/* font-size: 4px; */
		}
		.strip ul li {
			font-size: 3px;
			list-style: none;
			padding: 0.2px;
		}
		.strip ul li:nth-child(even) {
			text-align: right;
		}
		/* .strip ul li:last-of-type {
	text-align: right;
	font-size: 4px;
} */
		.strip ul li.small {
			padding: 0.2px;
		}
		.strip ul li.medium {
			padding: 1px 0.2px;
			font-size: 3.5px;
		}
		.strip ul li.large {
			padding: 2.4px 0.2px;
			font-size: 4px;
		}
		.wand-wrapper {
			position: absolute;
			width: 16px;
			height: 136px;
			top: 6px;
			left: 30%;
			transform: translateX(-50%);
			/* background-color: purple; */
			/* animation goes here  */
			animation: tick 2s ease-in-out infinite;
			transform-origin: 50% 100%;
		}
		.wand {
			position: absolute;
			width: 4px;
			height: 100%;
			bottom: 0;
			left: 50%;
			transform: translateX(-50%);
			background-color: silver;
			border: 0.5px solid black;
		}
		.wand ul.marks li {
			list-style: none;
			font-size: 14px;
			line-height: 0.1px;
			/* width: 4px; */
			color: rgb(145, 145, 145);
		}
		.wand ul.marks li.medium {
			line-height: 8px;
		}
		.block {
			position: absolute;
			width: 16px;
			height: 14px;
			top: 30px;
			left: 50%;
			transform: translateX(-50%);
			/* background-color: silver; */
			border-top: 14px solid silver;
			border-left: 2px solid transparent;
			border-right: 2px solid transparent;
			border-radius: 2px;
		}
		.block::before {
			position: absolute;
			content: '';
			height: 3px;
			width: 3px;
			background-color: black;
			border-radius: 50%;
			bottom: 7px;
			left: 1px;
		}
		.block::after {
			position: absolute;
			content: '';
			height: 3px;
			width: 3px;
			background-color: black;
			border-radius: 50%;
			bottom: 7px;
			right: 1px;
		}

		.base {
			position: relative;
			height: 60px;
			/* background-color: brown; */
			border-bottom: 60px solid rgb(85, 17, 17);
			border-left: 10px solid transparent;
			border-right: 10px solid transparent;
			/* display: flex;
	/* align-items: center; */
			/* justify-content: center;  */
		}
		.winder {
			width: 10px;
			height: 4px;
			position: absolute;
			top: 20px;
			left: 102px;
			z-index: -1;
			background-color: silver;
			border: 0.5px solid black;
		}
		.winder::after {
			position: absolute;
			content: '';
			height: 8px;
			width: 1px;
			background-color: silver;
			border: 0.5px solid black;
			top: 1px;
			right: 2px;
		}
		.logo {
			position: absolute;
			height: 30px;
			width: 30px;
			border: 1px solid black;
			top: 10px;
			left: 50%;
			transform: translateX(-50%);
			background-color: gold;
			transform: rotate(45deg);
		}
		.logo-sign {
			transform: rotateX(-45deg);
		}

		.logo-top {
			position: absolute;
			height: 20px;
			width: 30px;
			top: 0;
			left: 0;
			border-bottom: 20px solid black;
			border-left: 15px solid transparent;
			border-right: 15px solid transparent;
		}

		.gold-top {
			/* background-color: gold; */
			z-index: 10;
			position: absolute;
			top: 2px;
			right: -14px;
			height: 18px;
			width: 26px;
			/* padding: 2px; */
			border-bottom: 17px solid gold;
			border-left: 14px solid transparent;
			border-right: 14px solid transparent;
		}
		.logo-bottom {
			position: absolute;
			height: 20px;
			width: 30px;
			top: 20px;
			left: 0;
			border-top: 20px solid black;
			border-left: 15px solid transparent;
			border-right: 15px solid transparent;
		}

		.gold-bottom {
			z-index: 10;
			position: absolute;
			bottom: 2px;
			right: -14px;
			height: 18px;
			width: 26px;
			/* padding: 2px; */
			border-top: 17px solid gold;
			border-left: 14px solid transparent;
			border-right: 14px solid transparent;
		}

		.bottom {
			/* background-color: lightgreen; */
			height: 10px;

			display: flex;
			justify-content: space-between;
			align-items: center;
		}
		.foot {
			/* background-color: black; */
			width: 14px;
			height: 10px;
			margin: 0 8px;
			border-top: 10px solid black;
			border-left: 2px solid transparent;
			border-right: 2px solid transparent;
		}
		.loader-container.hide-loader {
			animation: fadeOut 1s;
			animation-fill-mode: forwards;
		}

		/* .loader-container.hide {
		display: none;
	} */

		@keyframes tick {
			0%,
			100% {
				transform: rotate(-30deg);
			}
			50% {
				transform: rotate(30deg);
			}
		}

		@keyframes fadeOut {
			100% {
				opacity: 0;
				visibility: hidden;
			}
		}
	}
`;

export default Loader;
