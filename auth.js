import { auth } from './firebase-config.js';
import { GoogleAuthProvider, signInWithRedirect, getRedirectResult, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-auth.js";

const provider = new GoogleAuthProvider();
const loginBtn = document.getElementById('login-btn');

// Handle login button click
loginBtn.addEventListener('click', () => {
  console.log('Login button clicked. Redirecting to Google...');
  signInWithRedirect(auth, provider);
});

// Handle authentication state changes
onAuthStateChanged(auth, (user) => {
  if (user) {
    console.log('User is logged in:', user);
    window.location.href = 'game-options.html'; // Redirect to game options
  } else {
    console.log('No user is logged in.');
  }
});

// Handle redirect result for debugging
getRedirectResult(auth)
  .then((result) => {
    if (result.user) {
      console.log('Redirect result successful:', result.user);
    } else {
      console.log('No user returned in redirect result.');
    }
  })
  .catch((error) => {
    console.error('Error during redirect result:', error.message);
  });
