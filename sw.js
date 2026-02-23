self.addEventListener('fetch', (event) => {
  // Este código básico permite que la app sea instalable
  event.respondWith(
    fetch(event.request).catch(() => caches.match(event.request))
  );
});
