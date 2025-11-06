// firebase-messaging-sw.js

importScripts('https://www.gstatic.com/firebasejs/9.6.11/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.6.11/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIzaSyAyW3X3v0EwjlprJqe2NLTEi-i5ZWO79kU",
  authDomain: "prasanna-notify-bot.firebaseapp.com",
  projectId: "prasanna-notify-bot",
  storageBucket: "prasanna-notify-bot.firebasestorage.app",
  messagingSenderId: "1017019533161",
  appId: "1:1017019533161:web:bab151b7bd2ae118151ff8",
  measurementId: "G-4436P5QY4R"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log('📩 Received background message ', payload);
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
