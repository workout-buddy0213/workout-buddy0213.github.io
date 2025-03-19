// Import Firebase SDK modules
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-analytics.js";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCRTkiVZrr5bYCNrCggTLzD-Ywj4ZTC1eM",
  authDomain: "workout-buddy-62453.firebaseapp.com",
  projectId: "workout-buddy-62453",
  storageBucket: "workout-buddy-62453.appspot.com",
  messagingSenderId: "579196835771",
  appId: "1:579196835771:web:ff0c8151cdd43c56c1969e",
  measurementId: "G-ER0Q8SHBQX"
};

// Initialize Firebase services
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const analytics = getAnalytics(app);
