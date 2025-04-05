// Service Worker for PWA functionality
const CACHE_NAME = 'personal-website-v1';
const urlsToCache = [
  '/personal-website/',
  '/personal-website/index.html',
  '/personal-website/about/index.html',
  '/personal-website/articles/index.html',
  '/personal-website/projects/index.html',
  '/personal-website/contact/index.html',
  '/personal-website/login/index.html',
  '/personal-website/_next/static/css/46738541b3feabac.css',
  '/personal-website/_next/static/css/enhanced-styles.css',
  '/personal-website/_next/static/css/enhanced-buttons.css',
  '/personal-website/js/theme-switcher.js',
  '/personal-website/js/ui-enhancements.js',
  '/personal-website/js/notification-system.js',
  '/personal-website/js/enhanced-buttons.js',
  '/personal-website/images/icon-192x192.png',
  '/personal-website/images/icon-512x512.png',
  '/personal-website/manifest.json'
];

// Install event - cache assets
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});

// Activate event - clean up old caches
self.addEventListener('activate', event => {
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

// Fetch event - serve from cache, fall back to network
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // Cache hit - return response
        if (response) {
          return response;
        }
        
        // Clone the request
        const fetchRequest = event.request.clone();
        
        return fetch(fetchRequest).then(
          response => {
            // Check if valid response
            if (!response || response.status !== 200 || response.type !== 'basic') {
              return response;
            }
            
            // Clone the response
            const responseToCache = response.clone();
            
            caches.open(CACHE_NAME)
              .then(cache => {
                // Don't cache API calls or external resources
                if (event.request.url.indexOf('/api/') === -1 && 
                    event.request.url.startsWith(self.location.origin)) {
                  cache.put(event.request, responseToCache);
                }
              });
              
            return response;
          }
        );
      })
  );
});

// Background sync for offline form submissions
self.addEventListener('sync', event => {
  if (event.tag === 'contact-form-sync') {
    event.waitUntil(syncContactForm());
  } else if (event.tag === 'subscription-sync') {
    event.waitUntil(syncSubscription());
  }
});

// Handle contact form submissions when offline
function syncContactForm() {
  return getDataFromIndexedDB('contact-forms')
    .then(forms => {
      return Promise.all(forms.map(form => {
        // In a real app, this would send the data to a server
        console.log('Syncing contact form:', form);
        
        // After successful sync, remove from IndexedDB
        return removeFromIndexedDB('contact-forms', form.id);
      }));
    });
}

// Handle subscription requests when offline
function syncSubscription() {
  return getDataFromIndexedDB('subscriptions')
    .then(subscriptions => {
      return Promise.all(subscriptions.map(subscription => {
        // In a real app, this would send the data to a server
        console.log('Syncing subscription:', subscription);
        
        // After successful sync, remove from IndexedDB
        return removeFromIndexedDB('subscriptions', subscription.id);
      }));
    });
}

// Helper function to get data from IndexedDB
function getDataFromIndexedDB(storeName) {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open('personal-website-db', 1);
    
    request.onerror = event => {
      reject('Error opening IndexedDB');
    };
    
    request.onsuccess = event => {
      const db = event.target.result;
      const transaction = db.transaction(storeName, 'readonly');
      const store = transaction.objectStore(storeName);
      const getAllRequest = store.getAll();
      
      getAllRequest.onsuccess = () => {
        resolve(getAllRequest.result);
      };
      
      getAllRequest.onerror = () => {
        reject('Error getting data from IndexedDB');
      };
    };
  });
}

// Helper function to remove data from IndexedDB
function removeFromIndexedDB(storeName, id) {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open('personal-website-db', 1);
    
    request.onerror = event => {
      reject('Error opening IndexedDB');
    };
    
    request.onsuccess = event => {
      const db = event.target.result;
      const transaction = db.transaction(storeName, 'readwrite');
      const store = transaction.objectStore(storeName);
      const deleteRequest = store.delete(id);
      
      deleteRequest.onsuccess = () => {
        resolve();
      };
      
      deleteRequest.onerror = () => {
        reject('Error removing data from IndexedDB');
      };
    };
  });
}

// Push notification event handler
self.addEventListener('push', event => {
  const data = event.data.json();
  const options = {
    body: data.body,
    icon: '/personal-website/images/icon-192x192.png',
    badge: '/personal-website/images/badge-72x72.png',
    data: {
      url: data.url || '/personal-website/'
    }
  };
  
  event.waitUntil(
    self.registration.showNotification(data.title, options)
  );
});

// Notification click event handler
self.addEventListener('notificationclick', event => {
  event.notification.close();
  
  event.waitUntil(
    clients.openWindow(event.notification.data.url)
  );
});
