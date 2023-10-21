// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAwaRTfPWLjyCFjQgM2BrOzkCOQCDroPgc",
  authDomain: "travel-guru-580ed.firebaseapp.com",
  projectId: "travel-guru-580ed",
  storageBucket: "travel-guru-580ed.appspot.com",
  messagingSenderId: "126798909949",
  appId: "1:126798909949:web:a6168482ca5dcae0c08994"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;