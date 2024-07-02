import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "dinuspedia-store.firebaseapp.com",
  projectId: "dinuspedia-store",
  storageBucket: "dinuspedia-store.appspot.com",
  messagingSenderId: "1001461246365",
  appId: "1:1001461246365:web:2fe6853c8375970efc6774"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore(app);
export const storage = getStorage(app);