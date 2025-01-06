import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD47iZa1SFe4mB6m604aLhlbSsQnd17PZc",
  authDomain: "science-2ffc1.firebaseapp.com",
  projectId: "science-2ffc1",
  storageBucket: "science-2ffc1.firebasestorage.app",
  messagingSenderId: "832581015711",
  appId: "1:832581015711:web:aec8e9a1aa084a641faaaa",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const analytics = getAnalytics(app);

export { auth, provider, signInWithPopup };
