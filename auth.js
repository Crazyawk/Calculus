import { auth } from './firebase-config.js';
import { GoogleAuthProvider, signInWithRedirect, getRedirectResult, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-auth.js";

const provider = new GoogleAuthProvider();
const loginBtn = document.getElementById('login-btn');

// Handle login button click
loginBtn.addEventListener('click', () => {
  console.log('Initiating Google login...');
  signInWithRedirect(auth, provider);
});

// Handle authentication state changes
onAuthStateChanged(auth, (user) => {
  if (user) {
    console.log('User is logged in:', user);
    // Redirect to game-options.html
    window.location.href = 'game-options.html';
  } else {
    console.log('No user logged in.');
  }
});

// Handle redirect result (debugging)
getRedirectResult(auth)
  .then((result) => {
    if (result.user) {
      console.log('Redirect result:', result.user);
    }
  })
  .catch((error) => {
    console.error('Error during redirect:', error);
  });
