const fs = require('fs');
const path = require('path');

// Path to env.js
const envPath = path.join(__dirname, '../projects/telegrammsg/src/assets/env.js');

// Ensure the folder exists
fs.mkdirSync(path.dirname(envPath), { recursive: true });

// Hardcoded Firebase config (replace with your actual values for now)
const content = `window.env = {
  firebase: {
    apiKey: "hardcoded_api_key",
    authDomain: "hardcoded_project.firebaseapp.com",
    projectId: "hardcoded_project",
    storageBucket: "hardcoded_project.appspot.com",
    messagingSenderId: "hardcoded_sender_id",
    appId: "hardcoded_app_id"
  }
};`;

// Write env.js
fs.writeFileSync(envPath, content, 'utf8');
console.log('✅ env.js created at', envPath);
