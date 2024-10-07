// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-b90c5.firebaseapp.com",
  projectId: "mern-blog-b90c5",
  storageBucket: "mern-blog-b90c5.appspot.com",
  messagingSenderId: "214505211841",
  appId: "1:214505211841:web:8c12bc47fb76da3a7e5140"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

