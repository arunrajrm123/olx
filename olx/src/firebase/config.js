
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/storage'


import 'firebase/firestore'; // Import other Firebase services if needed


const firebaseConfig = {
    apiKey: "AIzaSyC95HmgnT5hCy5i_HNU9TqnCichk4hF55I",
    authDomain: "olxs-4be95.firebaseapp.com",
    projectId: "olxs-4be95",
    storageBucket: "olxs-4be95.appspot.com",
    messagingSenderId: "834648908316",
    appId: "1:834648908316:web:dccffd3fed53bf2da5b5d9",
    measurementId: "G-2VBGVE423F"
  };
export default firebase.initializeApp(firebaseConfig)