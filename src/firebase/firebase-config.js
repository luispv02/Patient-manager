import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

 const firebaseConfig = {
  apiKey: "AIzaSyB2h_xU9on153k0ZInu3YrqRWBnCeYsC2s",
  authDomain: "patient-manager-8e1e0.firebaseapp.com",
  projectId: "patient-manager-8e1e0",
  storageBucket: "patient-manager-8e1e0.appspot.com",
  messagingSenderId: "958657892245",
  appId: "1:958657892245:web:a049fd0f8f949a6a5ab09c"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const db = getFirestore();



