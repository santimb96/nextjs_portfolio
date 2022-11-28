// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDxO9WzYHJLHl1yaULoJ_3r0IbArc7rPkA",
  authDomain: "portfoliodb-8c400.firebaseapp.com",
  databaseURL: "https://portfoliodb-8c400-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "portfoliodb-8c400",
  storageBucket: "portfoliodb-8c400.appspot.com",
  messagingSenderId: "1060408210554",
  appId: "1:1060408210554:web:f91338f38f2aaf9a9777c3",
  measurementId: "G-TMW118Z89W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);