import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCLf5cEkP5EyT-Xvau1S9r3yupaoUyZ5xg",
  authDomain: "wsf-portal-f3a61.firebaseapp.com",
  projectId: "wsf-portal-f3a61",
  storageBucket: "wsf-portal-f3a61.appspot.com",
  messagingSenderId: "178025620807",
  appId: "1:178025620807:web:8946b16b43a42ff6605862",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
