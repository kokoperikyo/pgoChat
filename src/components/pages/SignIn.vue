<template>
  <v-app>
    <v-content>
      <v-container>
        <v-card color="#ECEFF1" class="mx-auto" max-width="400px">
          <v-list-item>
            <v-spacer></v-spacer>
            <div class="mt-3">
              <v-btn fab class="mr-2" color="#01579B">
                <v-icon large color="white" class="fab fa-facebook-square"></v-icon>
              </v-btn>
              <v-btn fab class="mr-2" color="error">
                <v-icon large color="white" class="fab fa-google-plus-square" @click="signInGoogle"></v-icon>
              </v-btn>
              <v-btn fab color="primary">
                <v-icon large color="white" class="fab fa-twitter-square" @click="signInTwitter"></v-icon>
              </v-btn>
            </div>
            <v-spacer></v-spacer>
          </v-list-item>
          <v-card-text>
            <v-form>
              <v-text-field
                v-model="email"
                :error-messages="emailErrors"
                prepend-inner-icon="mail"
                placeholder="E-mail"
                solo
                required
                @input="$v.email.$touch()"
                @blur="$v.email.$touch()"
                background-color="white"
                clearable
              ></v-text-field>
              <v-text-field
                v-model="password"
                :error-messages="passwordErrors"
                :counter="10"
                prepend-inner-icon="lock"
                placeholder="password"
                solo
                required
                @input="$v.password.$touch()"
                @blur="$v.password.$touch()"
                background-color="white"
                clearable
              ></v-text-field>
            </v-form>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="primary" @click="signInEmail">ログイン</v-btn>
            </v-card-actions>
          </v-card-text>
          <v-divider></v-divider>
          <div class="mb-3">
            <v-list-item>
              <v-spacer></v-spacer>初めての方
              <v-btn class="ml-2" color="primary" to="/signUp">新規登録</v-btn>
            </v-list-item>
          </div>
          <v-divider></v-divider>
        </v-card>
      </v-container>
    </v-content>
  </v-app>
</template>
<script>
import { validationMixin } from "vuelidate";
import { required, minLength, email } from "vuelidate/lib/validators";
import firebase from "@firebase/app";
import "@firebase/firestore";

export default {
  mixins: [validationMixin],

  validations: {
    password: { required, maxLength: minLength(6) },
    email: { required, email }
  },

  data: () => ({
    email: "",
    password: ""
  }),

  computed: {
    passwordErrors() {
      const errors = [];
      if (!this.$v.password.$dirty) return errors;
      !this.$v.password.maxLength && errors.push("パスワードは6文字以上です");
      !this.$v.password.required && errors.push("パスワードは必須です");
      return errors;
    },
    emailErrors() {
      const errors = [];
      if (!this.$v.email.$dirty) return errors;
      !this.$v.email.email && errors.push("メールアドレスを入力してください");
      !this.$v.email.required && errors.push("メールアドレスは必須です");
      return errors;
    }
  },

  methods: {
    signInEmail() {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then(() => {
          this.$router.push("/profile");
        })
        .catch(error => {
          alert(error.message);
        });
    },
    signInGoogle() {
      var provider = new firebase.auth.GoogleAuthProvider();
      firebase
        .auth()
        .signInWithPopup(provider)
        .then(() => {
          this.$router.push("/profile");
        })
        .catch(error => alert(error.message));
    },
    signInTwitter() {
      var provider = new firebase.auth.TwitterAuthProvider();
      firebase
        .auth()
        .signInWithPopup(provider)
        .then(result => {
          this.$router.push("/profile");
          result.credential.accessToken; //token
          result.credential.secret; //secret
          result.user; //user
        })
        .catch(error => {
          // eslint-disable-next-line no-console
          console.log(error);
        });
    }
  }
};
</script>
<style>
</style>