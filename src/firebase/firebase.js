
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyC_JZRjWtP6ODDJXPL0mXSWz7bDJhEu6Bc",
  authDomain: "mohhh-bbc3c.firebaseapp.com",
  projectId: "mohhh-bbc3c",
  storageBucket: "mohhh-bbc3c.appspot.com",
  messagingSenderId: "998457806797",
  appId: "1:998457806797:web:39d42f1e4b46ffb8a2be84"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);
const auth = getAuth(app);

export { db, storage, auth };