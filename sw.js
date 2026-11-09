// Fonctionnement hors ligne : l'application est gardee en cache sur le telephone.
// VERSION doit rester identique a la constante gr de app.js (numero affiche en haut de l'ecran).
// Changer ce numero suffit a declencher la mise a jour : l'application se recharge toute seule.
const VERSION = '0.2.2';
const CACHE = 'arclibre-' + VERSION;
const FILES = ['./', 'index.html', 'app.css', 'app.js', 'manifest.webmanifest', 'icons/icon-192.png', 'icons/icon-512.png',
  'icons/icon-maskable-512.png', 'icons/apple-touch-icon.png', 'fonts/bsc-500.woff2', 'fonts/bsc-600.woff2', 'fonts/bsc-700.woff2'];
self.addEventListener('install', (e) => {
  // cache: 'reload' : on ne reprend jamais une copie perimee du cache HTTP du navigateur.
  e.waitUntil(caches.open(CACHE)
    .then((c) => Promise.all(FILES.map((f) => c.add(new Request(f, { cache: 'reload' })))))
    .then(() => self.skipWaiting()));
});
self.addEventListener('activate', (e) => {
  e.waitUntil(caches.keys().then((ks) => Promise.all(ks.filter((k) => k !== CACHE).map((k) => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener('fetch', (e) => {
  if (e.request.method !== 'GET') return;
  e.respondWith(caches.match(e.request, { ignoreSearch: true }).then((r) => r || fetch(e.request)));
});
