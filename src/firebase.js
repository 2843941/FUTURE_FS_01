import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyC0aDQjsLyI5_C8aNvPeeYGTFh1afuW47Y",
    authDomain: "my-portfolio-bc5a5.firebaseapp.com",
    projectId: "my-portfolio-bc5a5",
    storageBucket: "my-portfolio-bc5a5.firebasestorage.app",
    messagingSenderId: "968795522521",
    appId: "1:968795522521:web:aed841bcba022112b005c8",
    measurementId: "G-HPLZV7STHH"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);