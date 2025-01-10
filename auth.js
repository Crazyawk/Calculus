import { auth } from './firebase-config.js';
import { GoogleAuthProvider, signInWithRedirect, getRedirectResult, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-auth.js";

const provider = new GoogleAuthProvider();
const loginBtn = document.getElementById('login-btn');

// Add logging to track flow
function log(message) {
  document.body.innerHTML += `<p style="color: red;">${message}</p>`;
}

// Handle login button click
loginBtn.addEventListener('click', () => {
  log('Login button clicked. Redirecting to Google...');
  signInWithRedirect(auth, provider);
});

// Handle authentication state changes
onAuthStateChanged(auth, (user) => {
  if (user) {
    log(`User is logged in: ${user.displayName}`);
    window.location.href = 'game-options.html';
  } else {
    log('No user is logged in.');
  }
});

// Handle redirect result
getRedirectResult(auth)
  .then((result) => {
    if (result && result.user) {
      log(`Redirect result successful: ${result.user.displayName}`);
    } else {
      log('No user in redirect result.');
    }
  })
  .catch((error) => {
    log(`Error during redirect result: ${error.message}`);
  });
