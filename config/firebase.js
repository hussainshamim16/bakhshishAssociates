
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyCTLvBCPdVWE2furCDGZJR6j0RMvyGlkKw",
    authDomain: "bakhshishassociates-17558.firebaseapp.com",
    projectId: "bakhshishassociates-17558",
    storageBucket: "bakhshishassociates-17558.firebasestorage.app",
    messagingSenderId: "199748701686",
    appId: "1:199748701686:web:ff8b5611dbb14b9e100bd7",
    measurementId: "G-ZFRWX48C9G"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
