// Import the functions you need from the SDKs you need
const initializeApp = require("firebase/app").initializeApp;
const getFirestore = require("firebase/firestore").getFirestore;
const getAuth = require("firebase/auth").getAuth;
require("dotenv").config();
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGE_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
};
// Initialize Firebase

const app = initializeApp(firebaseConfig);
exports.auth = getAuth(app);
exports.app = app;
// Export firestore database
// It will be imported into your react app whenever it is needed
exports.db = getFirestore(app);
