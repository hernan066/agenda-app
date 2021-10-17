// Import the functions you need from the SDKs you need
import { getFirestore } from "@firebase/firestore";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDb-XRovXKe8HYW5y6_JXjVOuyHBJhu2eM",
  authDomain: "journalapp-6d010.firebaseapp.com",
  projectId: "journalapp-6d010",
  storageBucket: "journalapp-6d010.appspot.com",
  messagingSenderId: "717163301644",
  appId: "1:717163301644:web:9d212a7f22dae094c7d729"
};

// Initialize Firebase
 export const app = initializeApp(firebaseConfig);
 export const db = getFirestore(app);