import 'regenerator-runtime';
import CacheHelper from './utils/cache-helper';

// Daftar asset yang akan dicaching
const assetsToCache = [
  './',
  './images/logo.jpg',
  './images/icon-48.jpg',
  './images/icon-96.jpg',
  './images/icon-144.jpg',
  './images/icon-196.jpg',
  './images/icon-384.jpg',
  './images/heroes/hero-image_2.jpg',
  './index.html',
  './favicon.jpg',
  './app.bundle.js',
  './app.webmanifest',
  './sw.bundle.js',
];

self.addEventListener('install', (event) => {
  console.log('Installing Service Worker ...');
  event.waitUntil(CacheHelper.cachingAppShell([...assetsToCache]));
});

self.addEventListener('activate', (event) => {
  console.log('Activating Service Worker ...');
  event.waitUntil(CacheHelper.deleteOldCache());
});

self.addEventListener('fetch', (event) => {
  // console.log(event.request);

  event.respondWith(CacheHelper.revalidateCache(event.request));
});
