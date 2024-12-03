import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyAzFuNy7oS5sTj6JbWR1eczagYBL5joKc4",
    authDomain: "library-app-dddfe.firebaseapp.com",
    projectId: "library-app-dddfe",
    storageBucket: "library-app-dddfe.appspot.com",
    messagingSenderId: "42736597196",
    appId: "1:42736597196:web:b7615f95282a73d697ea69",
    measurementId: "G-JQFPSR1QWT"
  };

const app = initializeApp(firebaseConfig);

let db = getFirestore(app)
let auth = getAuth(app)
let storage = getStorage(app) 

export {db, auth, storage}