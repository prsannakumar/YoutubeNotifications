// src/main.ts
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';
import { initializeApp } from 'firebase/app';

// ✅ Initialize Firebase using values from env.js
const firebaseConfig = window['env']; // env.js must be loaded in index.html
const app = initializeApp(firebaseConfig);

// ✅ Register service worker for Firebase messaging (optional)
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/YoutubeNotifications/firebase-messaging-sw.js')
    .then(registration => console.log('✅ Service Worker registered:', registration.scope))
    .catch(err => console.error('❌ Service Worker registration failed:', err));
}

// Bootstrap Angular
platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch(err => console.error('❌ Bootstrap error:', err));
