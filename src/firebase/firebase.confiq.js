import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDmUZ8fvlVbUhZ7W_cFCRatmRwiGlGiG6s",
  authDomain: "public-library-bangladesh.firebaseapp.com",
  projectId: "public-library-bangladesh",
  storageBucket: "public-library-bangladesh.appspot.com",
  messagingSenderId: "1067681362316",
  appId: "1:1067681362316:web:9f9e6f279d1309220466a9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);