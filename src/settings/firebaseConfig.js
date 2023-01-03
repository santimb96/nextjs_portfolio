// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_apiKey,
  authDomain: process.env.NEXT_PUBLIC_authDomain,
  databaseURL: process.env.NEXT_PUBLIC_databaseURL,
  projectId: process.env.NEXT_PUBLIC_projectId,
  storageBucket: process.env.NEXT_PUBLIC_storageBucket,
  messagingSenderId: process.env.NEXT_PUBLIC_messagingSenderId,
  appId: process.env.NEXT_PUBLIC_appId,
  measurementId: process.env.NEXT_PUBLIC_measurementId
  // apiKey: "AIzaSyDxO9WzYHJLHl1yaULoJ_3r0IbArc7rPkA",
  // authDomain: "portfoliodb-8c400.firebaseapp.com",
  // databaseURL: "https://portfoliodb-8c400-default-rtdb.europe-west1.firebasedatabase.app",
  // projectId: "portfoliodb-8c400",
  // storageBucket: "portfoliodb-8c400.appspot.com",
  // messagingSenderId: "1060408210554",
  // appId: "1:1060408210554:web:f91338f38f2aaf9a9777c3",
  // measurementId: "G-TMW118Z89W"
}

// Initialize Firebase

const app = initializeApp(firebaseConfig)

const initApp = () => getFirestore(app)
const auth = () => getAuth(app)
// const analytics = getAnalytics(app);

export { initApp, auth }
