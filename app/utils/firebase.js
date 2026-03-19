// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCKLMbl7NJUNis9dHELyYugdxrpuA5srtY",
  authDomain: "cprg306-assignments-63f88.firebaseapp.com",
  projectId: "cprg306-assignments-63f88",
  storageBucket: "cprg306-assignments-63f88.firebasestorage.app",
  messagingSenderId: "809761261980",
  appId: "1:809761261980:web:02a7a83a563449ff97e059"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//export auth to use in AuthContext
export const auth = getAuth(app);

