// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "@firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBi1zEIKuoSq705XgU-BlO8FNep_6KTh0w",
  authDomain: "practices-bb04c.firebaseapp.com",
  projectId: "practices-bb04c",
  storageBucket: "practices-bb04c.appspot.com",
  messagingSenderId: "694550010962",
  appId: "1:694550010962:web:507c5133cef1c0a98fd38b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)