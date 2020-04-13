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

export const iosAuthorizationOfNotification = "AAAAD-WZikw:APA91bF99_2he4aNCW1WjmtqJKB62-u6FZ7snpPlWOyX_rALIiV5NzWxOB_R5ga5ncC7C3bFLCvPJpva-BRt7zM7AhGbtVoB-PGHFiQMDZ1s9zHMtbsGeCY_pjiNqXEDdcIwcttVGQ7Y"
export const androidAuthorizationOfNotification = "AAAA-KY97PA:APA91bHAUDtL4x23mDeWaO6sJegmFhbyppOVLta8QqAo3g2oHC8AJF2ZCu4piupxQ7BAkxqX4ZLBeLaUKrKDt0ihTth9FVSCcxnD2RKeIjvS6WSdYiL2LBre9-AxQeOnl9a-Bica8fot"