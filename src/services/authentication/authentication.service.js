import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";

import { getApps, initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyC0AxZAviTFA0sEhIpAB048T8paDmZ1dm4",
  authDomain: "mealstogo-bbf50.firebaseapp.com",
  projectId: "mealstogo-bbf50",
  storageBucket: "mealstogo-bbf50.appspot.com",
  messagingSenderId: "94737148332",
  appId: "1:94737148332:web:8c2c8b92c13b810d08f209",
  measurementId: "G-5QSGG886ZZ",
};
let app;
if (!getApps().length) {
  app = initializeApp(firebaseConfig);
}

export const authRequest = getAuth(app);

export const loginRequest = (auth, email, password) =>
  signInWithEmailAndPassword(auth, email, password);

export const RegisterRequest = (auth, email, password) =>
  createUserWithEmailAndPassword(auth, email, password);
