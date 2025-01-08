import { auth } from './firebase-config.js';
import { GoogleAuthProvider, signInWithRedirect, getRedirectResult, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-auth.js";

const provider = new GoogleAuthProvider();
const loginBtn = document.getElementById('login-btn');
const debugDiv = document.getElementById('debug');

// Utility function to display messages on the page
function logMessage(message) {
  debugDiv.innerHTML += `<p>${message}</p>`;
}

// Handle login button click
loginBtn.addEventListener('click', () => {
  logMessage('Login button clicked. Redirecting to Google...');
  signInWithRedirect(auth, provider);
});

// Detect authentication state changes
onAuthStateChanged(auth, (user) => {
  if (user) {
    logMessage(`User is logged in: ${user.displayName}`);
    window.location.href = 'game-options.html';
  } else {
    logMessage('No user is logged in.');
  }
});

// Handle redirect results
getRedirectResult(auth)
  .then((result) => {
    if (result.user) {
      logMessage(`Redirect result successful: ${result.user.displayName}`);
    }
  })
  .catch((error) => {
    logMessage(`Error during redirect result: ${error.message}`);
  });
