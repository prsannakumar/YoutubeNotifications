importScripts('https://www.gstatic.com/firebasejs/9.6.11/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.6.11/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "YOUR_FIREBASE_API_KEY",
  authDomain: "YOUR_FIREBASE_AUTH_DOMAIN",
  projectId: "YOUR_FIREBASE_PROJECT_ID",
  storageBucket: "YOUR_FIREBASE_STORAGE_BUCKET",
  messagingSenderId: "YOUR_FIREBASE_SENDER_ID",
  appId: "YOUR_FIREBASE_APP_ID"
});

const messaging = firebase.messaging();

// Handle background messages (data-only)
messaging.onBackgroundMessage((payload) => {
  console.log('Received background message', payload);

  // Read all fields from data
  const notificationTitle = payload.data.title || "Notification";
  const notificationOptions = {
    body: payload.data.body || "Click to open link",
    icon: payload.data.icon || "/assets/icon.png",
    image: payload.data.image || null,
    data: { url: payload.data.url }  // dynamic URL
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});

self.addEventListener('notificationclick', function(event) {
  event.notification.close();
  const url = event.notification.data?.url;
  if (url) {
    event.waitUntil(clients.openWindow(url));
  }
});
