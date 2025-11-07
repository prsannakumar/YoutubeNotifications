const fs = require('fs');
const path = require('path');

// Path to create env.js
const envPath = path.join(__dirname, '../projects/telegrammsg/src/assets/env.js');
fs.mkdirSync(path.dirname(envPath), { recursive: true });

// Build the env.js content using your GitHub Secrets
const content = `window.env = {
  firebase: {
    apiKey: "${process.env.NG_APP_FIREBASE_API_KEY}",
    authDomain: "${process.env.NG_APP_FIREBASE_AUTH_DOMAIN}",
    projectId: "${process.env.NG_APP_FIREBASE_PROJECT_ID}",
    storageBucket: "${process.env.NG_APP_FIREBASE_STORAGE_BUCKET}",
    messagingSenderId: "${process.env.NG_APP_FIREBASE_SENDER_ID}",
    appId: "${process.env.NG_APP_FIREBASE_APP_ID}",
    measurementId: "${process.env.NG_APP_FIREBASE_MEASUREMENT_ID}",
    vapidKey: "${process.env.NG_APP_FIREBASE_VAPID_KEY}"
  }
};`;

fs.writeFileSync(envPath, content, 'utf8');
console.log('✅ env.js created at', envPath);
