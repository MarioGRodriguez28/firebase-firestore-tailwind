import {initializeApp} from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore/lite";

const firebaseConfig = {
  apiKey: "AIzaSyAmA8okQVpgbqClHtOKPcapu7WoMHJjRXA",
  authDomain: "react-firebase-2-68f74.firebaseapp.com",
  projectId: "react-firebase-2-68f74",
  storageBucket: "react-firebase-2-68f74.appspot.com",
  messagingSenderId: "327883469527",
  appId: "1:327883469527:web:18757045d23108ddc47692",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export {auth, db};
