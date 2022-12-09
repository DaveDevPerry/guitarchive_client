import { animate } from 'framer-motion';
import React, { useEffect, useRef } from 'react';

function YoutubeCounter({ from, to, time }) {
	const ref = useRef();

	useEffect(() => {
		const controls = animate(from, to, {
			duration: time,
			onUpdate(value) {
				ref.current.textContent = value.toFixed(0);
			},
		});
		return () => controls.stop();
	}, [from, to]);

	return <span ref={ref} />;
}

export default YoutubeCounter;
