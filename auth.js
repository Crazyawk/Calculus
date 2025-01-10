import { auth } from './firebase-config.js';
import { GoogleAuthProvider, signInWithRedirect, getRedirectResult } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-auth.js";

// Setup Google Auth provider
const provider = new GoogleAuthProvider();

// Debug logging function
function log(message) {
  console.log(message);
  const debugDiv = document.getElementById('debug');
  if (debugDiv) {
    debugDiv.innerHTML += `<p>${message}</p>`;
  }
}

// Login button click event
document.getElementById('login-btn').addEventListener('click', () => {
  log('Login button clicked. Starting redirect...');
  signInWithRedirect(auth, provider).catch((error) => {
    log(`Login failed: ${error.message}`);
  });
});

// Handle redirect result
getRedirectResult(auth)
  .then((result) => {
    if (result && result.user) {
      log(`Redirect successful. Logged in as: ${result.user.displayName}`);
      window.location.href = 'game-options.html';
    } else {
      log('No user in redirect result.');
    }
  })
  .catch((error) => {
    log(`Error during redirect result: ${error.message}`);
  });
