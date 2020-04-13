<template>
  <v-app>
    <v-content>
      <v-container>
        <v-dialog v-model="alertDialog" max-width="290">
          <v-card>
            <v-card-title>{{this.dialogMes}}</v-card-title>
          </v-card>
        </v-dialog>
        <v-card color="#FCE4EC" class="mx-auto" max-width="400px">
          <v-list-item>
            <v-spacer></v-spacer>
            <div class="mt-3">
              <!-- <v-btn fab class="mr-2" color="#01579B">
                <v-icon large color="white" class="fab fa-facebook-square"></v-icon>
              </v-btn>-->
              <!-- <v-btn fab class="mr-2" color="error">
                <v-icon large color="white" class="fab fa-google-plus-square" @click="signInGoogle"></v-icon>
              </v-btn>-->
              <v-btn fab color="primary" depressed>
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
                color="#8ac32b"
                @input="$v.email.$touch()"
                @blur="$v.email.$touch()"
                background-color="white"
                clearable
              ></v-text-field>
              <v-text-field
                v-model="password"
                :error-messages="passwordErrors"
                prepend-inner-icon="lock"
                placeholder="password"
                solo
                required
                color="#8ac32b"
                @input="$v.password.$touch()"
                @blur="$v.password.$touch()"
                background-color="white"
                clearable
              ></v-text-field>
            </v-form>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn dark color="#8ac32b" @click="signInEmail" :disabled="isError">ログイン</v-btn>
            </v-card-actions>
          </v-card-text>
          <v-divider></v-divider>
          <div class="mb-3">
            <v-list-item>
              <v-spacer></v-spacer>初めての方
              <v-btn dark class="ml-2" color="#8ac32b" to="/signUp">新規登録</v-btn>
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
    password: "",
    alertDialog: false,
    dialogMes: ""
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
    },
    isError() {
      if (this.passwordErrors.length == 0 && this.emailErrors.length == 0) {
        return false;
      } else {
        return true;
      }
    }
  },

  methods: {
    alertMes(code) {
      if (code == "auth/invalid-email") {
        this.alertDialog = true;
        this.dialogMes = "正しいメールアドレスを入力してください";
      } else if (
        code == "auth/user-not-found" ||
        code == "auth/wrong-password"
      ) {
        this.alertDialog = true;
        this.dialogMes = "メールアドレスかパスワードが間違っています";
      }
    },
    signInEmail() {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then(() => {
          this.$router.push("/profile");
        })
        .catch(error => {
          this.alertMes(error.code);
        });
    },
    // signInGoogle() {
    //   var provider = new firebase.auth.GoogleAuthProvider();
    //   firebase
    //     .auth()
    //     .signInWithRedirect(provider)
    //     .catch(error => alert(error.message));
    //   this.$router.push("loading");
    // },
    signInTwitter() {
      var provider = new firebase.auth.TwitterAuthProvider();
      firebase
        .auth()
        .signInWithRedirect(provider)
        .catch(error => alert(error.message));
      this.$router.push("loading");
    }
  }
};
</script>
<style>
</style>