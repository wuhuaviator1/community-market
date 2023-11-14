// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDliRm2HbjNTRBFkaMMk_eyf-RHYJKTrfw",
  authDomain: "my-project-187-404905.firebaseapp.com",
  databaseURL: "https://my-project-187-404905-default-rtdb.firebaseio.com",
  projectId: "my-project-187-404905",
  storageBucket: "my-project-187-404905.appspot.com",
  messagingSenderId: "129354217522",
  appId: "1:129354217522:web:bf19f53fac8bfd53cb642b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth, GoogleAuthProvider };

