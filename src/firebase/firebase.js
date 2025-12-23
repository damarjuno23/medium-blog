// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider } from "firebase/auth/web-extension";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBAlXSad-IGRqKtRK7wL-ou1NGS0jEQvZE",
  authDomain: "medium-blog-ecf29.firebaseapp.com",
  projectId: "medium-blog-ecf29",
  storageBucket: "medium-blog-ecf29.firebasestorage.app",
  messagingSenderId: "672687983826",
  appId: "1:672687983826:web:6ef579af95d3eca955b10b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const provider = new GoogleAuthProvider();
export const storage = getStorage();
export const db = getFirestore(app);