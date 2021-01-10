import firebase from 'firebase';

/* firebase configuration */
const config =  {
  apiKey: "AIzaSyBsQhiBeBxUxQw744BHlQfEPty5aUhbLY4",
  authDomain: "n-tri-569d8.firebaseapp.com",
  databaseURL: "https://n-tri-569d8-default-rtdb.firebaseio.com",
  projectId: "n-tri-569d8",
  storageBucket: "n-tri-569d8.appspot.com",
  messagingSenderId: "625441764832",
  appId: "1:625441764832:web:ace3552467d5d7b2db6785",
  measurementId: "G-C7EF5TGRG5"
};

if (!firebase.apps.length) 
  {firebase.initializeApp(config)}


export default firebase;