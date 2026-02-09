// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDNnarR9HXSso9Glqa22sADbPEQ8RoNae4",
  authDomain: "movieflexgpt-a01b0.firebaseapp.com",
  projectId: "movieflexgpt-a01b0",
  storageBucket: "movieflexgpt-a01b0.firebasestorage.app",
  messagingSenderId: "222666309407",
  appId: "1:222666309407:web:b13f159053ae8143013a2a",
  measurementId: "G-61MC89E7D3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
