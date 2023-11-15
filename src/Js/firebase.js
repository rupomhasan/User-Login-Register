import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDABTB9qeioqqzYPD4XTk-9uRdCgfF3Mao",
  authDomain: "new-user-login-register.firebaseapp.com",
  projectId: "new-user-login-register",
  storageBucket: "new-user-login-register.appspot.com",
  messagingSenderId: "258915648049",
  appId: "1:258915648049:web:15c968183dc08600754b10",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth 