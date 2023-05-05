import firebase from 'firebase/compat/app'
import 'firebase/compat/auth';
import 'firebase/compat/firestore'


const firebaseConfig = {
  apiKey: "AIzaSyDMMci4s6aS9qyJq-3FtVAWTp49IHH6XBc",
  authDomain: "typingtest-project.firebaseapp.com",
  projectId: "typingtest-project",
  storageBucket: "typingtest-project.appspot.com",
  messagingSenderId: "890425457943",
  appId: "1:890425457943:web:ec8f06c7b3dd470211cb52",
  measurementId: "G-VVFZRR8M61"
};

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const auth = firebase.auth()
  const db = firebaseApp.firestore();

  export {auth,db}