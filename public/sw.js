const staticCacheName = 'site-static-v1';
const dynamicCacheName = 'site-dynamic-v1';
const assets = [
	'/static/js/main.chunk.js',
	'/static/js/0.chunk.js',
	'/static/js/bundle.js',
	'/index.html',
	'/',
	'/home',
	'/ideas',
	'/login',
	'/stats',
	'/artists',
	'/arrangers',
	'/settings',
	'/youtube',
	'https://fonts.googleapis.com/css2?family=New+Tegomin',
	// '/index.html',
	'/fonts/fonts.css',
	'/fonts/NewTegomin-Regular.woff',
	'/fonts/NewTegomin-Regular.woff2',
	'/images/white wood.webp',
	'/images/light wood background.webp',
	'/offline.html',
];

// '/js/app.js',
// '/js/ui.js',
// '/js/materialize.min.js',
// '/css/styles.css',
// '/css/materialize.min.css',
// '/pages/fallback.html'
// 'https://fonts.googleapis.com/icon?family=Material+Icons',
//   'https://fonts.gstatic.com/s/materialicons/v47/flUhRq6tzZclQEJ-Vdg-IuiaDsNcIhQ8tQ.woff2',

// cache size limit function
// const limitCacheSize = (name, size) => {
//   caches.open(name).then(cache => {
//     cache.keys().then(keys => {
//       if(keys.length > size){
//         cache.delete(keys[0]).then(limitCacheSize(name, size));
//       }
//     });
//   });
// };

// self is the service worker
const self = this;

// install event
self.addEventListener('install', (evt) => {
	//console.log('service worker installed');
	evt.waitUntil(
		caches.open(staticCacheName).then((cache) => {
			console.log('caching shell assets');
			cache.addAll(assets);
		})
	);
});

this.addEventListener('fetch', (event) => {
	// console.warn("url",event.request.url)

	if (!navigator.onLine) {
		if (event.request.url === 'http://localhost:3000/static/js/main.chunk.js') {
			event.waitUntil(
				this.registration.showNotification('Internet', {
					body: 'internet not working',
				})
			);
		}
		event.respondWith(
			caches.match(event.request).then((resp) => {
				if (resp) {
					return resp;
				}
				let requestUrl = event.request.clone();
				fetch(requestUrl);
			})
		);
	}
});

// activate event
self.addEventListener('activate', (evt) => {
	//console.log('service worker activated');
	evt.waitUntil(
		caches.keys().then((keys) => {
			//console.log(keys);
			return Promise.all(
				keys
					.filter((key) => key !== staticCacheName && key !== dynamicCacheName)
					.map((key) => caches.delete(key))
			);
		})
	);
});

// fetch events
// self.addEventListener('fetch', evt => {
//   if(evt.request.url.indexOf('firestore.googleapis.com') === -1){
//     evt.respondWith(
//       caches.match(evt.request).then(cacheRes => {
//         return cacheRes || fetch(evt.request).then(fetchRes => {
//           return caches.open(dynamicCacheName).then(cache => {
//             cache.put(evt.request.url, fetchRes.clone());
//             // check cached items size
//             limitCacheSize(dynamicCacheName, 15);
//             return fetchRes;
//           })
//         });
//       }).catch(() => {
//         if(evt.request.url.indexOf('.html') > -1){
//           return caches.match('/offline.html');
//           // return caches.match('/pages/fallback.html');
//         }
//       })
//     );
//   }
// });
