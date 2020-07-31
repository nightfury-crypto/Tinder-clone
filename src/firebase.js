import firebase from "firebase"
const firebaseConfig = {
  apiKey: "AIzaSyBKYnvOiMACdeNq0e_cbl65DlI2S21-je0",
  authDomain: "tinder-clone-5c480.firebaseapp.com",
  databaseURL: "https://tinder-clone-5c480.firebaseio.com",
  projectId: "tinder-clone-5c480",
  storageBucket: "tinder-clone-5c480.appspot.com",
  messagingSenderId: "551956645765",
  appId: "1:551956645765:web:d4b9d9280d4702ac31e6ec",
  measurementId: "G-5CGX8Q8PMY"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const database = firebase.firestore();

export default database;