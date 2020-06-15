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



  export const createUserProfileDocument = async (userAuth, additionalData) =>{
    if (!userAuth)return;
     const userRef = firestore.doc(`users/${userAuth.uid}`);

     const snapShot = await userRef.get();
    if (!snapShot.exists){
        const {displayName, email}=userAuth;
        const createdAt = new Date();
        try{
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        }catch(error){
            console.log('error creating user',error.message);
        }    
    }
  return userRef;
  };
  firebase.initializeApp(config);

  export const auth=firebase.auth();
  export const firestore = firebase.firestore();
  
  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account'});

  export const signInWithGoogle =()=>auth.signInWithPopup(provider);
  export default firebase;


