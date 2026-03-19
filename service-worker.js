const CACHE_NAME = 'v1-assets';
const ASSETS_TO_CACHE = [
  '/',
  '/index.html',
  'bp192.png', // Cache your specific icon files
  'BP512.png'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS_TO_CACHE);
    })
  );
});
