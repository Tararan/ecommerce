import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBX56QAjcXZpqEMs-Io8WqoCspCcOjAErY",
    authDomain: "e-commerce-clothing-db.firebaseapp.com",
    databaseURL: "https://e-commerce-clothing-db.firebaseio.com",
    projectId: "e-commerce-clothing-db",
    storageBucket: "e-commerce-clothing-db.appspot.com",
    messagingSenderId: "378228059818",
    appId: "1:378228059818:web:875370ba4f2062eb332ad3"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;

