// js/firebase-config.js

// Импортируем функции Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth, GoogleAuthProvider, GithubAuthProvider } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

// ВАШИ РЕАЛЬНЫЕ КЛЮЧИ (С вашего скриншота)
const firebaseConfig = {
  apiKey: "AIzaSyAi1JlJNL8EeVpZxVwvYGMtR3vWt90MT3s",
  authDomain: "it-guide-6d0c0.firebaseapp.com",
  projectId: "it-guide-6d0c0",
  storageBucket: "it-guide-6d0c0.firebasestorage.app",
  messagingSenderId: "90024853954",
  appId: "1:90024853954:web:eb326c862fd4600209d65b",
  measurementId: "G-ML13LKGH0N"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const googleProvider = new GoogleAuthProvider();
export const githubProvider = new GithubAuthProvider();