import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyA3R5NkdJxj6VAXxJf0O_SINajfIgI4YHQ",
  authDomain: "ssp-auth.firebaseapp.com",
  projectId: "ssp-auth",
  storageBucket: "ssp-auth.appspot.com",
  messagingSenderId: "1018733033524",
  appId: "1:1018733033524:web:e7f097846c977d15b1f261",
};

const firebaseApp = initializeApp(firebaseConfig);

export default firebaseApp;
