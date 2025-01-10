import { initializeApp } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js";
import { getAuth, GoogleAuthProvider, signInWithRedirect, getRedirectResult } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyAYKcZJjTF9aKLG1MsXXl5oSCdukSl1Qj8",
    authDomain: "science-49b9b.firebaseapp.com",
    projectId: "science-49b9b",
    storageBucket: "science-49b9b.appspot.com",
    messagingSenderId: "924373786171",
    appId: "1:924373786171:web:66e157ef75a9e59cc8861e",
    measurementId: "G-ZS0X0K1F03"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Login Button
document.getElementById('login-btn').addEventListener('click', () => {
    const provider = new GoogleAuthProvider();
    signInWithRedirect(auth, provider)
        .then(() => console.log('Redirect initiated'))
        .catch((err) => console.error('Redirect error:', err));
});

// Handle Redirect Result
getRedirectResult(auth)
    .then((result) => {
        if (result && result.user) {
            console.log('User logged in:', result.user.displayName);
            window.location.href = 'game-options.html';
        } else {
            console.log('No user in redirect result.');
        }
    })
    .catch((err) => console.error('Error during redirect result:', err));
