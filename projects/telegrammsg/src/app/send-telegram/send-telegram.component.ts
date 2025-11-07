import { Component } from '@angular/core';
import { getMessaging, getToken } from 'firebase/messaging';
import { getApp, getApps, initializeApp } from 'firebase/app';
import { environment } from '../../environments/environment';


@Component({
  selector: 'app-send-telegram',
  templateUrl: './send-telegram.component.html',
  styleUrls: ['./send-telegram.component.css']
})
export class SendTelegramComponent {
  notificationPermission: NotificationPermission = 'default';

  async requestPermission() {
    this.notificationPermission = await Notification.requestPermission();
    console.log('Notification permission:', this.notificationPermission);

    if (this.notificationPermission === 'granted') {
      try {
        const registration = await navigator.serviceWorker.ready;

        let app;
        if (getApps().length === 0) {
          app = initializeApp(environment.firebase);
          console.log('✅ Firebase app initialized');
        } else {
          app = getApp();
        }

        const messaging = getMessaging(app);

        const token = await getToken(messaging, {
          vapidKey: environment.firebase.vapidKey,
          serviceWorkerRegistration: registration,
        });

        console.log('✅ FCM Token:', token);

        // Send token to your Worker
        const workerUrl = "https://telegram-worker.pprasannakumar264.workers.dev";
        await fetch(workerUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ fcmToken: token })
        });

        console.log("📤 FCM token sent to Worker!");
        // update DOM status
        this.notificationPermission = 'granted';

      } catch (err) {
        console.error('❌ Error getting token or sending to Worker:', err);
        this.notificationPermission = 'default'; // or show error message
      }
    } 
    // If permission is denied, Angular template will show warning automatically
  }
}
