// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCDnAKRdk15rCOaiyK1S8m00YRHckpe8TU",
  authDomain: "cputemptracker.firebaseapp.com",
  projectId: "cputemptracker",
  storageBucket: "cputemptracker.appspot.com",
  messagingSenderId: "751453239310",
  appId: "1:751453239310:web:1d2665a64bd547c6c7245f",
  measurementId: "G-2WD18M3EHZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);