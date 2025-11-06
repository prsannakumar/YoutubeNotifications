import { Component } from '@angular/core';
import { getMessaging, getToken } from 'firebase/messaging';
import { getApp, getApps, initializeApp } from 'firebase/app';
import { environment } from '../../environment';

@Component({
  selector: 'app-send-telegram',
  templateUrl: './send-telegram.component.html',
  styleUrls: ['./send-telegram.component.css']
})
export class SendTelegramComponent {

  async requestPermission() {
    const permission = await Notification.requestPermission();
    console.log('Notification permission:', permission);

    if (permission === 'granted') {
      const registration = await navigator.serviceWorker.ready;

      let app;
      if (getApps().length === 0) {
        app = initializeApp(environment.firebase);
        console.log('✅ Firebase app initialized');
      } else {
        app = getApp();
      }

      const messaging = getMessaging(app);

      try {
        const token = await getToken(messaging, {
          vapidKey: environment.firebase.vapidKey,
          serviceWorkerRegistration: registration,
        });
        console.log('✅ FCM Token:', token);

        // --- Send token to Cloudflare Worker ---
        const workerUrl = "https://telegram-worker.pprasannakumar264.workers.dev"; // your actual worker URL
        await fetch(workerUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ fcmToken: token })
        });
        console.log("📤 FCM token sent to Worker!");
        alert("you are registered successfully");

      } catch (err) {
        console.error('❌ Error getting token or sending to Worker:', err);
        alert("you are not registered");
      }
    } else {
      console.log('🚫 Permission not granted for Notification');
    }
  }
}
