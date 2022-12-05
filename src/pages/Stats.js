import { motion } from 'framer-motion';
import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useStateContext } from '../lib/context';
import { useNavigate } from 'react-router-dom';
import SongStatusStats from '../components/SongStatusStats';
import YoutubeStats from '../components/YoutubeStats';
import { useViewport } from '../hooks/useViewport';
import MyArrangementStats from '../features/stats/MyArrangementStats';
import SheetMusicTypeStats from '../features/stats/SheetMusicTypeStats';
import StyleStats from '../features/stats/StyleStats';

const Stats = ({ youtubeData, theme }) => {
	const { dataLoaded } = useStateContext();
	const { width } = useViewport();
	const breakpoint = 620;
	let navigate = useNavigate();
	useEffect(() => {
		if (dataLoaded === false) {
			navigate('/');
		}
	}, [navigate, dataLoaded]);

	return (
		<StyledStats
			initial={{ width: 0 }}
			animate={{ width: '100%' }}
			exit={{ x: window.innerWidth }}
			className={`page ${width < breakpoint ? 'mobile' : ''}`}
		>
			<YoutubeStats youtubeData={youtubeData} />
			<SongStatusStats theme={theme} />
			<div className='stat-flex-container'>
				<MyArrangementStats />
				<SheetMusicTypeStats />
			</div>
			<div className='stat-flex-container'>
				<StyleStats />
				<SheetMusicTypeStats />
			</div>
		</StyledStats>
	);
};
const StyledStats = styled(motion.div)`
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	row-gap: 2rem;
	max-width: 100rem;
	padding: 0.5rem 1rem;
	overflow-y: auto;
	z-index: 1;
	transition: all 200ms linear;
	margin: 0 auto;
	flex: 1;
	.stat-flex-container {
		display: flex;
		gap: 1rem;
		flex-wrap: wrap;
	}
	&.mobile {
		row-gap: 1rem;
		padding-bottom: 2rem;
	}
`;
export default Stats;
