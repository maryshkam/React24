import firebase from 'firebase';
import 'firebase/firestore';
import 'firebase/auth'

// const app = firebase.initializeApp({ ... });

const firebaseConfig = {
  apiKey: "AIzaSyA1KzYLgC0W0ftw7DbuPTCNzwuWLu7cBms",
  authDomain: "tester-5ac60.firebaseapp.com",
  databaseURL: "https://tester-5ac60.firebaseio.com",
  projectId: "tester-5ac60",
  storageBucket: "tester-5ac60.appspot.com",
  messagingSenderId: "1050900551814",
  appId: "1:1050900551814:web:302af8cbac960e76809907",
  measurementId: "G-16GDTJ0PZ4"
};




// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const auth=firebase.auth()
const db=firebase.firestore();
export {db,auth}