// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB-thldrn09k8IE-n8jx5ejaLpuvIqNx90",
  authDomain: "netflixgpt-47b74.firebaseapp.com",
  projectId: "netflixgpt-47b74",
  storageBucket: "netflixgpt-47b74.firebasestorage.app",
  messagingSenderId: "413571424375",
  appId: "1:413571424375:web:b99501cc6acec50f156672",
  measurementId: "G-6V7V9JR23P",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
