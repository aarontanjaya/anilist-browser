const currentCacheVersion = 'v1';

const installSW = () => {
  self.addEventListener('install', () => {
    console.log('worker installed');
  });
};

const activateSW = () => {
  self.addEventListener('activate', () => {
    console.log('activating worker, deleting deprecated caches...');
    caches.keys().forEach((item) => {
      if (item !== currentCacheVersion) {
        console.log('delete cache key ', item);
        caches.delete(item);
      }
    });
  });
};

const listenToFetch = () => {
  self.addEventListener('fetch', (e) => {
    if (navigator.onLine) {
      let currReq = e.request.clone();
      return fetch(e.request).then((res) => {
        if (!res.ok) {
          return res;
        }

        caches.open(currentCacheVersion).then((c) => {
          c.put(currReq.url, res);
        });
        return res;
      });
    }
    e.respondWith(
      caches.open(currentCacheVersion).then((c) => {
        c.match(e.request).then((res) => {
          if (res) {
            return response;
          }
        });
      }),
    );
  });
};

installSW();
activateSW();
listenToFetch();
