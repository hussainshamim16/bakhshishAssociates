import { initializeApp, getApp } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-app.js";
import { getFirestore, collection, addDoc, getDocs, updateDoc, doc, deleteDoc, getDoc,query, limit  } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-firestore.js";
import { getAuth, onAuthStateChanged, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-auth.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBkgAapImc873xqrJfj1kYF1puKNlO5c1U",
    authDomain: "simple-data-hs.firebaseapp.com",
    projectId: "simple-data-hs",
    storageBucket: "simple-data-hs.appspot.com",
    messagingSenderId: "1098204691885",
    appId: "1:1098204691885:web:8c2e01d363c6ab2a423524"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);
const auth = getAuth(app);
// Initialize Cloud Storage and get a reference to the service
export { app, getFirestore, collection, addDoc, getDocs, updateDoc, doc, deleteDoc, getDoc, db ,query, limit,auth, onAuthStateChanged, signInWithEmailAndPassword, createUserWithEmailAndPassword };