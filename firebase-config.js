import { initializeApp } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyAYKcZJjTF9aKLG1MsXXl5oSCdukSl1Qj8",
  authDomain: "science-49b9b.firebaseapp.com",
  projectId: "science-49b9b",
  storageBucket: "science-49b9b.appspot.com", // Corrected storage bucket
  messagingSenderId: "924373786171",
  appId: "1:924373786171:web:66e157ef75a9e59cc8861e",
  measurementId: "G-ZS0X0K1F03"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

// Explicitly set the redirect domain for GitHub Pages
auth.useDeviceLanguage(); // Optional, sets the auth UI language to the browser's language

export { auth, db };
