// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAXvs7SyDMSQ4-Y6tRK_yqmw3axDBgJXPc",
  authDomain: "class-critique-14317.firebaseapp.com",
  projectId: "class-critique-14317",
  storageBucket: "class-critique-14317.appspot.com",
  messagingSenderId: "102326997724",
  appId: "1:102326997724:web:5a55a4d7b8b5e1bf70da19",
  measurementId: "G-4JWQP9ZTRJ" // Optional
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const analytics = getAnalytics(app);

export { auth, createUserWithEmailAndPassword, signInWithEmailAndPassword };
