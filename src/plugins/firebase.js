import Vue from 'vue'
import {
  firestorePlugin
} from 'vuefire'
import firebase from "@firebase/app";
import "@firebase/auth";
import 'firebase/firestore';
import store from "../store";

Vue.use(firestorePlugin)

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBbkj14_B5DG_kEG8KElA1dC7-XRm9P93g",
  authDomain: "pgochat-91c46.firebaseapp.com",
  databaseURL: "https://pgochat-91c46.firebaseio.com",
  projectId: "pgochat-91c46",
  storageBucket: "pgochat-91c46.appspot.com",
  messagingSenderId: "345882079330",
  appId: "1:345882079330:web:83a488bf6e42ee29bce13b",
  measurementId: "G-ZRKV1BLLK5"
});

export default {
  init() {
    firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION);
  },
  onAuth() {
    firebase.auth().onAuthStateChanged(user => {
      user = user ? user : {};
      store.commit('onAuthStateChanged', user);
      store.commit('onUserStatusChanged', user.uid ? true : false);
    });
  }
};

export const db = firebaseApp.firestore();