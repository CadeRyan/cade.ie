// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDZfvLce2qpZmHzvBZaV7BaZzr6B286PsM",
  authDomain: "cadedotie.firebaseapp.com",
  projectId: "cadedotie",
  storageBucket: "cadedotie.firebasestorage.app",
  messagingSenderId: "875259223197",
  appId: "1:875259223197:web:a4c8faf48f1c66f1620874",
  measurementId: "G-S0L7BPYX83"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Analytics may not work during server-side rendering, so we need to check if window is defined
const analytics = typeof window !== 'undefined' ? getAnalytics(app) : null;

export { app, analytics };
