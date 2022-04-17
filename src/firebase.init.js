// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCXwnM5aFNChcDE2Hw_xpRXol7U2sty1Nw",
  authDomain: "diligate-developer.firebaseapp.com",
  projectId: "diligate-developer",
  storageBucket: "diligate-developer.appspot.com",
  messagingSenderId: "960433902980",
  appId: "1:960433902980:web:d37129f497fe03dd8b79d1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;