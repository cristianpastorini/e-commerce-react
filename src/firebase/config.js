// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAqwg8TawQ-Igh4muvNYTHw-mrcCmlOUoU",
    authDomain: "coder-proyecto1.firebaseapp.com",
    projectId: "coder-proyecto1",
    storageBucket: "coder-proyecto1.appspot.com",
    messagingSenderId: "558853144456",
    appId: "1:558853144456:web:239d5295d2923d3485c43d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore (app)