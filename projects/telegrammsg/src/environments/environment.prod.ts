declare global {
  interface Window {
    env: any;
  }
}

export const environment = {
  production: true,
  firebase: window?.env?.firebase || {
    apiKey: '',
    authDomain: '',
    projectId: '',
    storageBucket: '',
    messagingSenderId: '',
    appId: '',
    vapidKey: ''
  }
};
