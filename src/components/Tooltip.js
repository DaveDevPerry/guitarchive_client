import React, { useState } from 'react';
import '../assets/tooltip.css';

const Tooltip = (props) => {
	let timeout;
	const [active, setActive] = useState(false);

	const showTip = () => {
		timeout = setTimeout(() => {
			setActive(true);
			setTimeout(() => {
				clearInterval(timeout);
				setActive(false);
			}, 1500);
		}, props.delay || 100);
	};

	// const hideTip = () => {
	// 	clearInterval(timeout);
	// 	setActive(false);
	// };
	// const showTip = () => {
	// 	timeout = setTimeout(() => {
	// 		setActive(true);
	// 	}, props.delay || 400);
	// };

	// const hideTip = () => {
	// 	clearInterval(timeout);
	// 	setActive(false);
	// };

	return (
		<div
			className='Tooltip-Wrapper'
			// When to show the tooltip
			// onMouseEnter={showTip}
			// onMouseLeave={hideTip}
			onMouseDown={showTip}
		>
			{/* Wrapping */}
			{props.children}
			{active && (
				<div className={`Tooltip-Tip ${props.direction || 'top'}`}>
					{/* Content */}
					{props.content}
				</div>
			)}
		</div>
	);
};

export default Tooltip;
