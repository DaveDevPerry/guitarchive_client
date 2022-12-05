import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
// import { log } from '../helper';

ChartJS.register(ArcElement, Tooltip, Legend);

const StatusPieChart = ({ songStats, theme }) => {
	// log(themeToggler, theme, 'themeToggler and theme');

	const borderFromTheme =
		theme === 'light' ? `${({ theme }) => theme.primaryColor}` : '#00000000';

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
					'#1aac83',
					'rgb(250, 186, 11)',
					'rgb(158, 11, 250)',
					'rgb(54, 162, 235)',
					'rgb(250, 11, 234)',
				],
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
