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
  apiKey: "AIzaSyBkA8JBqg0sNJE0Bs5dsm6Z99mxZJOfSd4",
  authDomain: "devpgochat-e5d09.firebaseapp.com",
  databaseURL: "https://devpgochat-e5d09.firebaseio.com",
  projectId: "devpgochat-e5d09",
  storageBucket: "devpgochat-e5d09.appspot.com",
  messagingSenderId: "414367036342",
  appId: "1:414367036342:web:1a5fc5fbd797d2852d8717",
  measurementId: "G-VRFGE0313E"
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

// export const authorizationOfNotification = "AAAAUIgtsGI:APA91bGk8DommUasKO38No8CikclZXqB2oPyzEjmA5zZkJrYQZ52CPF36021qfw5i8SIpgVSAKqFZcH4pJO0gg5tZDjy-iIwK7lHBHrXHnZo44NqBBBCodBIXt-UGMIJsXxF6_jyQ9Ds"
export const authorizationOfNotification = ""