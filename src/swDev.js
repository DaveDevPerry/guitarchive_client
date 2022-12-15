export default function swDev() {
	let swUrl = `${process.env.PUBLIC_URL}/sw.js`;
	// let swUrl = `${process.env.PUBLIC_URL}/anilsw.js`;
	navigator.serviceWorker.register(swUrl).then((response) => {
		console.warn('response', response);
	});
}
