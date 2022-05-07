// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {collection,getFirestore} from "firebase/firestore"

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyComONDCv-fUrDB3owwHpo3QzD_Fe7zYHY",
    authDomain: "neog-hackathon.firebaseapp.com",
    projectId: "neog-hackathon",
    storageBucket: "neog-hackathon.appspot.com",
    messagingSenderId: "539005816076",
    appId: "1:539005816076:web:38befa3fed9aa25a378d29"
  };

  
// Initialize Firebase
const app=initializeApp(firebaseConfig);

// init service
const db=getFirestore(app);

// collection ref 
const colRef=collection(db,"todos");

// get collection data



export {db,colRef};



