// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBjA0_nmX7GIwSfWzjY8XC7k9VNk4KdV_4",
  authDomain: "agencylanding.firebaseapp.com",
  projectId: "agencylanding",
  storageBucket: "agencylanding.appspot.com",
  messagingSenderId: "400287200959",
  appId: "1:400287200959:web:c04a100c80383ce11af80a",
  measurementId: "G-VFG23D41C3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);