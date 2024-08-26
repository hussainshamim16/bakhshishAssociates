// Import the functions you need from the SDKs you need
import { initializeApp, getApp } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-app.js";
import { getFirestore, collection, addDoc, doc, setDoc, getDocs ,deleteField , deleteDoc} from "https://www.gstatic.com/firebasejs/10.13.0/firebase-firestore.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-auth.js";
import { getStorage, ref, uploadBytes, getDownloadURL } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-storage.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
    apiKey: "AIzaSyCaHCFFXrpRNcOB-mz68ZVv_2BQf6fMQU8",
    authDomain: "bk-associate.firebaseapp.com",
    projectId: "bk-associate",
    storageBucket: "bk-associate.appspot.com",
    messagingSenderId: "396083023464",
    appId: "1:396083023464:web:c7a9060b694eaa99a275dd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

const auth = getAuth(app);

// Get a non-default Storage bucket
const firebaseApp = getApp();
const storage = getStorage(firebaseApp, "https://www.gstatic.com/firebasejs/10.13.0/firebase-storage.js");

export {
    getFirestore,
    collection,
    addDoc,
    doc,
    setDoc,
    db,
    app,
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    getStorage,
    ref,
    uploadBytes,
    getDownloadURL,
    getDocs,
    deleteField ,
    deleteDoc,
}