import { auth } from './firebase-config.js';
import { GoogleAuthProvider, signInWithRedirect, getRedirectResult, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-auth.js";

const provider = new GoogleAuthProvider();
const loginBtn = document.getElementById('login-btn');

// Handle login
loginBtn.addEventListener('click', () => {
  signInWithRedirect(auth, provider);
});

// Check authentication state
onAuthStateChanged(auth, (user) => {
  if (user) {
    console.log('User is logged in:', user);
    window.location.href = 'game-options.html';
  } else {
    console.log('No user is logged in.');
  }
});

// Debug redirect result
getRedirectResult(auth)
  .then((result) => {
    if (result.user) {
      console.log('Redirect result successful:', result.user);
    }
  })
  .catch((error) => {
    console.error('Error during redirect result:', error);
  });
