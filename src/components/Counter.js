import { animate } from 'framer-motion';
import React, { useEffect, useRef } from 'react';

function Counter({ from, to }) {
	const ref = useRef();

	useEffect(() => {
		const controls = animate(from, to, {
			duration: 3,
			onUpdate(value) {
				ref.current.textContent = value.toFixed(0);
			},
		});
		return () => controls.stop();
	}, [from, to]);

	return <span ref={ref} />;
}

export default Counter;
