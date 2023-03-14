// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCdSTzebNu-CvXmHVuMM0zmbWXm6Q1Jd5A",
  authDomain: "tuter-380620.firebaseapp.com",
  projectId: "tuter-380620",
  storageBucket: "tuter-380620.appspot.com",
  messagingSenderId: "681481578170",
  appId: "1:681481578170:web:e7cfd4563cec897fdd4483",
  measurementId: "G-Q52BNNNLZG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);