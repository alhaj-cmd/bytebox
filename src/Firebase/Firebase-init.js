// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCGn8BeJr46JyFO39aQ_pf_tWO9mRIrmR0",
  authDomain: "fir-auth-99654.firebaseapp.com",
  projectId: "fir-auth-99654",
  storageBucket: "fir-auth-99654.firebasestorage.app",
  messagingSenderId: "498966108220",
  appId: "1:498966108220:web:19bbe3b1bc5cf683d88b39"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)