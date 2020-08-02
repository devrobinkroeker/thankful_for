// importScripts('https://storage.googleapis.com/workbox-cdn/releases/5.1.2/workbox-sw.js');

// workbox.routing.registerRoute(
  
//   ({request}) => request.destination === 'script',
//   new workbox.strategies.NetworkFirst()
// );

self.addEventListener('install', e => {

  e.waitUntil(

    caches.open('static').then(cache => {

      return cache.addAll(['./index.html']);
    }));

    console.log('Cache files.');

});

self.addEventListener('fetch', e => {

  e.respondWith(

    caches.match(e.request).then(res => {

      return res || fetch(e.request);
    }));

    console.log('Get cached files.');
})

self.addEventListener('activate', e => {

  self.clients.claim();
});