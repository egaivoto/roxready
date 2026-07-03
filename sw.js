/* ROXREADY service worker — offline support with background refresh.
   Strategy: serve from cache immediately, update the cache from the
   network in the background (stale-while-revalidate). Users get new
   versions on their next visit after a deploy. */
const CACHE = "roxready-v1";
const CORE = ["./", "./index.html", "./manifest.webmanifest", "./icon-192.png", "./icon-512.png"];

self.addEventListener("install", e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(CORE)));
  self.skipWaiting();
});

self.addEventListener("activate", e => {
  e.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", e => {
  if (e.request.method !== "GET" || !e.request.url.startsWith(self.location.origin)) return;
  e.respondWith(
    caches.open(CACHE).then(async cache => {
      const cached = await cache.match(e.request);
      const fresh = fetch(e.request).then(resp => {
        if (resp && resp.ok) cache.put(e.request, resp.clone());
        return resp;
      }).catch(() => cached);
      return cached || fresh;
    })
  );
});
