import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/YoutubeNotifications/firebase-messaging-sw.js')
    .then((registration) => {
      console.log('✅ Service Worker registered:', registration.scope);
    })
    .catch((err) => {
      console.error('❌ Service Worker registration failed:', err);
    });
}

// Bootstrap the Angular application. Without this the app will not start and
// no UI will be rendered. The project previously registered the service
// worker but never bootstrapped the `AppModule`.
platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch(err => console.error('❌ Bootstrap error:', err));
