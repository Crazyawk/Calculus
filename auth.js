import { auth } from './firebase-config.js';
import { GoogleAuthProvider, signInWithRedirect, getRedirectResult, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-auth.js";

const provider = new GoogleAuthProvider();
const loginBtn = document.getElementById('login-btn');

// Handle login button click
loginBtn.addEventListener('click', () => {
  signInWithRedirect(auth, provider);
});

// Detect authentication state changes
onAuthStateChanged(auth, (user) => {
  if (user) {
    console.log('User is logged in:', user);
    window.location.href = 'game-options.html';
  } else {
    console.log('No user is logged in.');
  }
});

// Handle redirect result (optional for debugging)
getRedirectResult(auth)
  .then((result) => {
    if (result.user) {
      console.log('Redirect result successful:', result.user);
    }
  })
  .catch((error) => {
    console.error('Error during redirect result:', error);
  });
