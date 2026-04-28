// Nome do Cache (Mude a versão se alterar muitas questões no banco.js)
const CACHE_NAME = 'genomasus-cache-v1';

// O que precisa ser salvo para rodar offline
const urlsToCache = [
  './',
  './index.html',
  './banco.js',
  'https://unpkg.com/react@18/umd/react.production.min.js',
  'https://unpkg.com/react-dom@18/umd/react-dom.production.min.js',
  'https://unpkg.com/@babel/standalone/babel.min.js',
  'https://cdn.tailwindcss.com',
  'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700;900&display=swap'
];

// Instalação do Service Worker (Baixa tudo na primeira vez que abre o site)
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Abrindo cache offline...');
        return cache.addAll(urlsToCache);
      })
  );
});

// Interceptando a rede (Busca do cache se não tiver internet)
self.addEventListener('fetch', event => {
  // Ignora chamadas para o Google Forms/Sheets (elas falham quietas se offline e tentam depois)
  if (event.request.url.includes('docs.google.com')) return;

  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // Se achou no cache, retorna. Senão, vai na rede buscar.
        return response || fetch(event.request);
      })
  );
});

// Limpeza de Caches antigos (quando você atualizar a versão)
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});
