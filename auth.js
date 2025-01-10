import { auth } from './firebase-config.js';
import { GoogleAuthProvider, signInWithRedirect, getRedirectResult } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-auth.js";

const provider = new GoogleAuthProvider();

document.getElementById('login-btn').addEventListener('click', () => {
    console.log('Login clicked');
    signInWithRedirect(auth, provider).catch((err) => console.error('Redirect error:', err));
});

getRedirectResult(auth)
    .then((result) => {
        if (result && result.user) {
            console.log('Logged in as:', result.user.displayName);
            window.location.href = 'game-options.html';
        } else {
            console.log('No redirect result');
        }
    })
    .catch((err) => console.error('Redirect result error:', err));
