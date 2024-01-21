
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyBs9-iAsLke70NAVqGyEPthaHRYvYV-tV0",
  authDomain: "personalportfolio-7e8f8.firebaseapp.com",
  projectId: "personalportfolio-7e8f8",
  storageBucket: "personalportfolio-7e8f8.appspot.com",
  messagingSenderId: "345332930083",
  appId: "1:345332930083:web:7503807dbee1f8fe774396"
};

const app = initializeApp(firebaseConfig);
export const database = getAuth(app);