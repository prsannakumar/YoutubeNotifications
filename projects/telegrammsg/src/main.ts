// main.ts

// 1️⃣ Declare the env property on window for TypeScript
declare global {
  interface Window {
    env: {
      apiKey: string;
      authDomain: string;
      projectId: string;
      storageBucket: string;
      messagingSenderId: string;
      appId: string;
      measurementId: string;
      vapidKey: string;
    };
  }
}

// 2️⃣ Access the env values safely
const firebaseConfig = window.env;

// 3️⃣ Initialize Firebase
import { initializeApp } from "firebase/app";
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';

const app = initializeApp(firebaseConfig);

// 4️⃣ Register service worker if supported
if ('serviceWorker' in navigator) {


  navigator.serviceWorker.register(`${window.location.origin}/YoutubeNotifications/firebase-messaging-sw.js`)

    .then((registration) => {
      console.log('✅ Service Worker registered:', registration.scope);
    })
    .catch((err) => {
      console.error('❌ Service Worker registration failed:', err);
    });
}

// 5️⃣ Bootstrap Angular
platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch(err => console.error('❌ Bootstrap error:', err));
