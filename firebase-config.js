// firebase-config.js

// Import SDKs
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-storage.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js";

// Firebase configuration yawe
const firebaseConfig = {
  apiKey: "AIzaSyBC-bxI0yfqnlp2TyDAYZH0vEYcQH_tDf0",
  authDomain: "murikimpano.firebaseapp.com",
  projectId: "murikimpano",
  storageBucket: "murikimpano.firebasestorage.app",
  messagingSenderId: "288360394906",
  appId: "1:288360394906:web:036db545a633f8eba5af23",
  measurementId: "G-08Q2CKEE87",
  databaseURL: "https://murikimpano.firebaseio.com"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export services
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);
const realtimeDB = getDatabase(app);

// Exports
export { app, auth, db, storage, realtimeDB };