self.addEventListener('install', e => {
  e.waitUntil(
    caches.open('BP').then(cache => cache.addAll([
      '/',
      '/index.html',
      "/BP192.png",
      "/bp152",
    ]))
  );
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(cached => cached || fetch(e.request))
  );
});
