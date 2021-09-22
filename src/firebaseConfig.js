import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyD2ysDr-yAhEpGyIgdhhBkgrvF0Y2SUNbI",
    authDomain: "whatsapp-clone-23f6d.firebaseapp.com",
    projectId: "whatsapp-clone-23f6d",
    storageBucket: "whatsapp-clone-23f6d.appspot.com",
    messagingSenderId: "302720066084",
    appId: "1:302720066084:web:d9e2885d91d14924f0eeb1"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth, provider};
  export default db;
