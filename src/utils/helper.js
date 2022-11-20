const log = (function (environment) {
	if (environment === 'production') {
		return () => {};
	}
	return (...args) => {
		console.log(...args);
	};
})(process.env.REACT_APP_NODE_ENV);

export { log };
