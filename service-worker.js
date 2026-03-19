self.addEventListener('install', e => {
  e.waitUntil(
    caches.open('BP').then(cache => cache.addAll([
      '/',
      '/index.html',
    ]))
  );
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(cached => cached || fetch(e.request))
  );
});