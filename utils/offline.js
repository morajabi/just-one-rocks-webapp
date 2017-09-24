/**
 * Registers our Service Worker on the site
 * Need more? check out:
 * https://github.com/GoogleChrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
 */

if (
	process.env.NODE_ENV === 'production' &&
	typeof window !== 'undefined' &&
	process.browser &&
	'serviceWorker' in navigator
) {
	navigator.serviceWorker
		.register('sw.js')
		.then(reg => {
			console.log('[offline] Service worker registered (0-0) ', reg)
		})
		.catch(error => {
			console.error('[offline] Error during service worker registration:', error)
		})
}
