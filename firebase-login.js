// Import Firebase modules
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js";

// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCclAKzCw-SC_oGMDNOQtkBcGbMIBIUhhk",
    authDomain: "project-8c3cc.firebaseapp.com",
    projectId: "project-8c3cc",
    storageBucket: "project-8c3cc.firebasestorage.app",
    messagingSenderId: "774937463762",
    appId: "1:774937463762:web:9a5572b7d4e200b79e560b",
    measurementId: "G-STSE9HGCG2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

// Google Login Function
export function handleGoogleLogin() {
    console.log("Starting Google login...");

    signInWithPopup(auth, provider)
        .then((result) => {
            console.log("Login successful:", result.user);
            alert("Login successful! Redirecting...");
            window.location.href = "home.html";
        })
        .catch((error) => {
            console.error("Google login error:", error.code, error.message);
            alert(`Google login failed: ${error.message}`);
        });
}

// Export auth for reuse
export { auth };
