// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyDrkBXMAS7e0MP4uWFrulJXR0dfTDKj-FI",
  authDomain: "uptmchat-31715.firebaseapp.com",
  projectId: "uptmchat-31715",
  storageBucket: "uptmchat-31715.appspot.com",
  messagingSenderId: "249536798110",
  appId: "1:249536798110:web:dbf33c747d9258cce64a8f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);