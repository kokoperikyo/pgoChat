import firebase from "@firebase/app";
import "@firebase/auth";
import store from "../store";


const config = {
  apiKey: "AIzaSyBbkj14_B5DG_kEG8KElA1dC7-XRm9P93g",
  authDomain: "pgochat-91c46.firebaseapp.com",
  databaseURL: "https://pgochat-91c46.firebaseio.com",
  projectId: "pgochat-91c46",
  storageBucket: "pgochat-91c46.appspot.com",
  messagingSenderId: "345882079330",
  appId: "1:345882079330:web:83a488bf6e42ee29bce13b",
  measurementId: "G-ZRKV1BLLK5"
};


export default {
  init() {
    firebase.initializeApp(config);
    firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION);
  },
  login() {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider)
  },
  logout() {
    firebase.auth().signOut()
  },
  onAuth() {
    firebase.auth().onAuthStateChanged(user => {
      user = user ? user : {};
      store.commit('onAuthStateChanged', user);
      store.commit('onUserStatusChanged', user.uid ? true : false);
    });
  }
};