<template>
  <v-app>
    <v-content>
      <v-container class="grey lighten-5">
        <v-row class="mt-10" no-gutters>
          <v-spacer></v-spacer>登録
          <v-spacer></v-spacer>
        </v-row>
        <v-row class="mt-10" no-gutters>
          <v-spacer></v-spacer>
          <v-btn to="/signUpEmail">メールアドレス</v-btn>
          <v-spacer></v-spacer>
        </v-row>
        <v-row class="mt-10" no-gutters>
          <v-spacer></v-spacer>
          <v-btn @click="signInGoogle">google</v-btn>
          <v-spacer></v-spacer>
        </v-row>
      </v-container>
    </v-content>
  </v-app>
</template>
<script>
import firebase from "@firebase/app";
// import { db } from "@/plugins/firebase";

export default {
  methods: {
    signInGoogle: function() {
      var provider = new firebase.auth.GoogleAuthProvider();
      firebase
        .auth()
        .signInWithPopup(provider)
        .then(() => {
          this.$router.push("/profile");
        })
        .catch(error => alert(error.message));
    }
  },
  data() {
    return {
      uid: this.$store.getters.user.uid,
      users: this.$store.getters.user
    };
  }
};
</script>