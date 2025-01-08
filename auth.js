import { auth, db } from './firebase-config.js';
import { GoogleAuthProvider, signInWithRedirect, getRedirectResult } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-auth.js";
import { doc, getDoc, setDoc, serverTimestamp } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-firestore.js";

const provider = new GoogleAuthProvider();
const loginBtn = document.getElementById('login-btn');
const termsModal = document.getElementById('terms-modal');
const usernameModal = document.getElementById('username-modal');
const usernameInput = document.getElementById('username');
const saveUsernameBtn = document.getElementById('save-username');

// Login button
loginBtn.addEventListener('click', () => {
  signInWithRedirect(auth, provider);
});

// Handle redirect result
getRedirectResult(auth).then(async (result) => {
  if (result.user) {
    const user = result.user;
    const userDoc = await getDoc(doc(db, 'users', user.uid));

    if (!userDoc.exists()) {
      // First-time user
      termsModal.style.display = 'block';
    } else {
      // Redirect to game-options.html if user exists
      window.location.href = 'game-options.html';
    }
  }
}).catch((error) => {
  console.error('Error during authentication:', error);
});

// Accept terms button
document.getElementById('accept-terms').addEventListener('click', () => {
  termsModal.style.display = 'none';
  usernameModal.style.display = 'block';
});

// Save username button
saveUsernameBtn.addEventListener('click', async () => {
  const username = usernameInput.value.trim();
  if (username) {
    const user = auth.currentUser;
    await setDoc(doc(db, 'users', user.uid), {
      username,
      email: user.email,
      createdAt: serverTimestamp(),
      gameData: {}
    });
    window.location.href = 'game-options.html'; // Redirect after saving username
  } else {
    alert('Please enter a valid username.');
  }
});
