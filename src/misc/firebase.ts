import { initializeApp, FirebaseApp } from "firebase/app";
import { getFirestore, Firestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBlgWzfIqCPKHBudNjdhxjHMOLE6zOK_hs",
    authDomain: "fire1toolkit.firebaseapp.com",
    projectId: "fire1toolkit",
    storageBucket: "fire1toolkit.appspot.com",
    messagingSenderId: "538646320898",
    appId: "1:538646320898:web:dd4e34d97ae381d593941b"
};

const app: FirebaseApp = initializeApp(firebaseConfig);
export const db: Firestore = getFirestore(app);




