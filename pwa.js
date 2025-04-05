// PWA Registration Script
if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    navigator.serviceWorker.register('/personal-website/service-worker.js')
      .then(function(registration) {
        console.log('ServiceWorker registration successful with scope: ', registration.scope);
        
        // Setup IndexedDB for offline support
        setupIndexedDB();
        
        // Setup background sync for forms
        setupBackgroundSync();
      })
      .catch(function(error) {
        console.log('ServiceWorker registration failed: ', error);
      });
  });
}

// Setup IndexedDB for offline data storage
function setupIndexedDB() {
  const request = indexedDB.open('personal-website-db', 1);
  
  request.onerror = function(event) {
    console.log('Error opening IndexedDB:', event.target.errorCode);
  };
  
  request.onupgradeneeded = function(event) {
    const db = event.target.result;
    
    // Create object stores for offline data
    if (!db.objectStoreNames.contains('contact-forms')) {
      const contactStore = db.createObjectStore('contact-forms', { keyPath: 'id', autoIncrement: true });
      contactStore.createIndex('date', 'date', { unique: false });
    }
    
    if (!db.objectStoreNames.contains('subscriptions')) {
      const subscriptionStore = db.createObjectStore('subscriptions', { keyPath: 'id', autoIncrement: true });
      subscriptionStore.createIndex('email', 'email', { unique: true });
      subscriptionStore.createIndex('topic', 'topic', { unique: false });
    }
    
    if (!db.objectStoreNames.contains('articles')) {
      db.createObjectStore('articles', { keyPath: 'id' });
    }
    
    if (!db.objectStoreNames.contains('projects')) {
      db.createObjectStore('projects', { keyPath: 'id' });
    }
  };
}

// Setup background sync for forms
function setupBackgroundSync() {
  // Check if background sync is supported
  if ('SyncManager' in window) {
    // Register sync for contact forms
    navigator.serviceWorker.ready
      .then(registration => {
        document.addEventListener('contact-form-submit', event => {
          storeContactForm(event.detail)
            .then(() => registration.sync.register('contact-form-sync'))
            .catch(error => console.log('Error storing contact form:', error));
        });
        
        document.addEventListener('subscription-submit', event => {
          storeSubscription(event.detail)
            .then(() => registration.sync.register('subscription-sync'))
            .catch(error => console.log('Error storing subscription:', error));
        });
      });
  }
}

// Store contact form data in IndexedDB
function storeContactForm(formData) {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open('personal-website-db', 1);
    
    request.onerror = event => {
      reject('Error opening IndexedDB');
    };
    
    request.onsuccess = event => {
      const db = event.target.result;
      const transaction = db.transaction('contact-forms', 'readwrite');
      const store = transaction.objectStore('contact-forms');
      
      // Add date for sorting
      formData.date = new Date().toISOString();
      
      const addRequest = store.add(formData);
      
      addRequest.onsuccess = () => {
        resolve();
      };
      
      addRequest.onerror = () => {
        reject('Error storing contact form data');
      };
    };
  });
}

// Store subscription data in IndexedDB
function storeSubscription(subscriptionData) {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open('personal-website-db', 1);
    
    request.onerror = event => {
      reject('Error opening IndexedDB');
    };
    
    request.onsuccess = event => {
      const db = event.target.result;
      const transaction = db.transaction('subscriptions', 'readwrite');
      const store = transaction.objectStore('subscriptions');
      
      // Add date for tracking
      subscriptionData.date = new Date().toISOString();
      
      const addRequest = store.add(subscriptionData);
      
      addRequest.onsuccess = () => {
        resolve();
      };
      
      addRequest.onerror = () => {
        reject('Error storing subscription data');
      };
    };
  });
}

// Check if app is installed or in standalone mode
function isAppInstalled() {
  return window.matchMedia('(display-mode: standalone)').matches || 
         window.navigator.standalone || // for iOS
         document.referrer.includes('android-app://');
}

// Show install prompt when appropriate
let deferredPrompt;
window.addEventListener('beforeinstallprompt', (e) => {
  // Prevent Chrome 67 and earlier from automatically showing the prompt
  e.preventDefault();
  // Stash the event so it can be triggered later
  deferredPrompt = e;
  
  // Show install button if available
  const installButton = document.getElementById('install-button');
  if (installButton) {
    installButton.classList.remove('hidden');
    
    installButton.addEventListener('click', () => {
      // Show the install prompt
      deferredPrompt.prompt();
      
      // Wait for the user to respond to the prompt
      deferredPrompt.userChoice.then((choiceResult) => {
        if (choiceResult.outcome === 'accepted') {
          console.log('User accepted the install prompt');
          // Hide the install button
          installButton.classList.add('hidden');
        } else {
          console.log('User dismissed the install prompt');
        }
        deferredPrompt = null;
      });
    });
  }
});

// Hide install button when app is installed
window.addEventListener('appinstalled', (evt) => {
  console.log('App was installed');
  const installButton = document.getElementById('install-button');
  if (installButton) {
    installButton.classList.add('hidden');
  }
});
