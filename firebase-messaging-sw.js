importScripts('https://www.gstatic.com/firebasejs/9.6.11/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.6.11/firebase-messaging-compat.js');

// Initialize Firebase
firebase.initializeApp({
  apiKey: "YOUR_FIREBASE_API_KEY",
  authDomain: "YOUR_FIREBASE_AUTH_DOMAIN",
  projectId: "YOUR_FIREBASE_PROJECT_ID",
  storageBucket: "YOUR_FIREBASE_STORAGE_BUCKET",
  messagingSenderId: "YOUR_FIREBASE_SENDER_ID",
  appId: "YOUR_FIREBASE_APP_ID"
});

const messaging = firebase.messaging();

// Handle background messages
messaging.onBackgroundMessage((payload) => {
  console.log('📩 Received background message', payload);

  const notificationTitle = payload.data?.title || "Notification";
  const notificationOptions = {
    body: payload.data?.body || "",
    icon: "/assets/icon.png",
    image: payload.data?.image || null,
    data: {
      url: payload.data?.url  // Clickable URL
    }
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});

// Handle notification click
self.addEventListener('notificationclick', function(event) {
  event.notification.close();
  const url = event.notification.data?.url;
  if (url) {
    event.waitUntil(clients.openWindow(url));
  }
});
