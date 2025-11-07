export const environment = {
  production: false,
  firebase: {
    apiKey: (window as any)['NG_APP_FIREBASE_API_KEY'],
    authDomain: (window as any)['NG_APP_FIREBASE_AUTH_DOMAIN'],
    projectId: (window as any)['NG_APP_FIREBASE_PROJECT_ID'],
    storageBucket: (window as any)['NG_APP_FIREBASE_STORAGE_BUCKET'],
    messagingSenderId: (window as any)['NG_APP_FIREBASE_SENDER_ID'],
    appId: (window as any)['NG_APP_FIREBASE_APP_ID'],
    measurementId: (window as any)['NG_APP_FIREBASE_MEASUREMENT_ID'],
    vapidKey: (window as any)['NG_APP_FIREBASE_VAPID_KEY']
  }
};
