import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const config ={
    apiKey: "AIzaSyB1MehWwH_0MW8fq-_bCyk5cWPelZmt5bQ",
    authDomain: "shop-db-70d9a.firebaseapp.com",
    databaseURL: "https://shop-db-70d9a.firebaseio.com",
    projectId: "shop-db-70d9a",
    storageBucket: "shop-db-70d9a.appspot.com",
    messagingSenderId: "755910158058",
    appId: "1:755910158058:web:42b391edc91ec9f18a9993",
    measurementId: "G-EL7D9QTWFM"
  };
  firebase.initializeApp(config);

  export const auth=firebase.auth();
  export const firestore = firebase.firestore();
  
  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account'});

  export const signInWithGoogle =()=>auth.signInWithPopup(provider);
  export default firebase;


