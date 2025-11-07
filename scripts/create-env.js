const fs = require('fs');
const path = require('path');

// Target path for env.js
const envPath = path.join(__dirname, '../projects/telegrammsg/src/assets/env.js');

// Ensure the directory exists
fs.mkdirSync(path.dirname(envPath), { recursive: true });

// Generate env.js content
const content = `window.env = {
  firebase: {
    apiKey: '${process.env.FIREBASE_API_KEY}',
    authDomain: '${process.env.FIREBASE_PROJECT_ID}.firebaseapp.com',
    projectId: '${process.env.FIREBASE_PROJECT_ID}',
    storageBucket: '${process.env.FIREBASE_PROJECT_ID}.appspot.com',
    messagingSenderId: '${process.env.FIREBASE_MESSAGING_SENDER_ID}',
    appId: '${process.env.FIREBASE_APP_ID}'
  }
};`;

// Write file
fs.writeFileSync(envPath, content, 'utf8');
console.log('✅ env.js created at', envPath);
