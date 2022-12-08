const CACHE_NAME = 'guitarchive-version-2';
const urlsToCache = [
	'index.html',
	'offline.html',
	'whitewood.webp',
	'NewTegomin-Regular.woff',
	'NewTegomin-Regular.woff2',
];
// const cacheUrls = [
// 	"static/css/main.c16ed571.chunk.css",
// 	"./images/dark wood texture.webp",
// 	"static/js/main.182aaaa5.chunk.js",
// 	"static/js/runtime~main.229c360f.js"
// 	]

// self is the service worker
const self = this;

// Install SW
self.addEventListener('install', (event) => {
	event.waitUntil(
		caches.open(CACHE_NAME).then((cache) => {
			console.log('Opened cache');
			return cache.addAll(urlsToCache);
		})
	);
});

// Listen for requests
self.addEventListener('fetch', (event) => {
	event.respondWith(
		caches.match(event.request).then(() => {
			// return fetch(event.request).catch(() =>
			// 	caches.matchAll(['offline.html', './images/dark wood texture.webp'])
			// );
			return fetch(event.request).catch(() => caches.match('offline.html'));
		})
	);
});

// Activate the SW
self.addEventListener('activate', (event) => {
	const cacheWhitelist = [];
	cacheWhitelist.push(CACHE_NAME);
	event.waitUntil(
		caches.keys().then((cacheNames) =>
			Promise.all(
				cacheNames.map((cacheName) => {
					if (!cacheWhitelist.includes(cacheName)) {
						return caches.delete(cacheName);
					}
				})
			)
		)
	);
});
