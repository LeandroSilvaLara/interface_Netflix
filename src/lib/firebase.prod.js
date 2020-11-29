import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// we need to somehow seed the database

// we need a config here

const config = {
    apiKey: "AIzaSyAcEtMW9Z48pcZb3Ryvm5lwQ0rkQL63GoM",
    authDomain: "netflix-project-82e36.firebaseapp.com",
    databaseURL: "https://netflix-project-82e36.firebaseio.com",
    projectId: "netflix-project-82e36",
    storageBucket: "netflix-project-82e36.appspot.com",
    messagingSenderId: "238794647813",
    appId: "1:238794647813:web:a4d95c4be3e667f47cef6c",

};

const firebase = Firebase.initializeApp(config);



export { firebase };