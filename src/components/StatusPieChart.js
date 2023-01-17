import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
// import { log } from '../helper';

ChartJS.register(ArcElement, Tooltip, Legend);

const StatusPieChart = ({ songStats, theme }) => {
	// log(themeToggler, theme, 'themeToggler and theme');

	// const borderFromTheme =
	// 	theme === 'light' ? 'rgba(105, 54, 25, 0)' : '#156d01';
	const borderFromTheme =
		theme === 'light'
			? `${({ theme }) => theme.primaryColor}`
			: `${({ theme }) => theme.primaryColor}`;

	const options = {
		responsive: false,
		// aspectRatio: 3,
		// maintainAspectRatio: true,
		plugins: {
			legend: {
				position: 'left',
				labels: {
					color: `${({ theme }) => theme.primaryColor}`,
					textTransform: 'uppercase',
					// textShadow: '0px 1px 0px rgb(255 255 255 / 30%)',

					// fontSize: 18,
				},
				// display: false,
			},
			title: {
				display: true,
				text: 'status',
				align: 'end',
				position: 'top',
			},
		},
		animation: {
			duration: 3000,
		},
	};

	const clonedNames = [...songStats];
	const statNames = clonedNames
		.map(function (obj) {
			return `${obj.statName}`;
		})
		.slice(1, 6);

	const clonedStats = [...songStats];
	const statCount = clonedStats
		.map(function (obj) {
			return obj.statCount;
		})
		.slice(1, 6);

	const data = {
		labels: statNames,
		datasets: [
			{
				label: '# of songs',
				data: statCount,
				backgroundColor: [
					'rgba(158, 11, 250,0.5)',
					'rgba(21, 109, 1,0.5)',
					'rgba(234, 178, 9,0.5)',
					'rgba(0, 53, 88,0.5)',
					'rgba(80, 51, 0,0.5)',
				],
				// backgroundColor: [
				// 	'rgba(158, 11, 250,0.5)',
				// 	'#156d01',
				// 	'#eab209',
				// 	'rgb(0, 53, 88)',
				// 	'rgb(80, 51, 0)',
				// ],
				borderColor: [
					borderFromTheme,
					borderFromTheme,
					borderFromTheme,
					borderFromTheme,
					borderFromTheme,
				],
				borderWidth: 2,
			},
		],
	};
	return <Pie data={data} options={options} />;
};

export default StatusPieChart;
