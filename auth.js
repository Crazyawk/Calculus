import { auth } from './firebase-config.js';
import { GoogleAuthProvider, signInWithRedirect, getRedirectResult, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-auth.js";

const provider = new GoogleAuthProvider();
const loginBtn = document.getElementById('login-btn');

// Login button
loginBtn.addEventListener('click', () => {
  signInWithRedirect(auth, provider);
});

// Handle authentication state
onAuthStateChanged(auth, (user) => {
  if (user) {
    console.log('User logged in:', user);
    window.location.href = 'game-options.html'; // Redirect after login
  }
});

// Handle redirect result (for additional debugging)
getRedirectResult(auth).then((result) => {
  if (result.user) {
    console.log('Redirect result:', result.user);
  }
}).catch((error) => {
  console.error('Error during redirect:', error);
});
