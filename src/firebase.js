import firebase from "firebase";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDqzPeKeUXiVxhywv3om4o66oLXlLloCg4",
  authDomain: "twitter-ad507.firebaseapp.com",
  projectId: "twitter-ad507",
  storageBucket: "twitter-ad507.appspot.com",
  messagingSenderId: "1047241288710",
  appId: "1:1047241288710:web:9c1a08adfb7c76d6c72787",
  measurementId: "G-HT91LGJT7G"
};
  const firebaseapp =firebase.initializeApp(firebaseConfig);
  const db=firebaseapp.firestore();
  export default db;