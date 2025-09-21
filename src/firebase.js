// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDuNDFQciBk39bWcq7-iRRHQZx8my6ttU0",
  authDomain: "rated-6bd01.firebaseapp.com",
  projectId: "rated-6bd01",
  storageBucket: "rated-6bd01.firebasestorage.app",
  messagingSenderId: "410827974060",
  appId: "1:410827974060:web:30b0facd7b9aed92ac4609",
  measurementId: "G-03H0YDCNKR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

// Export the app instance
export default app;