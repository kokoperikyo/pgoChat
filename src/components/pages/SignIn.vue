<template>
  <v-app>
    <v-content>
      <v-container>
        <v-dialog v-model="alertDialog" max-width="290">
          <v-card>
            <v-card-title>{{this.dialogMes}}</v-card-title>
          </v-card>
        </v-dialog>
        <v-dialog v-model="resetPasswordDialog" max-width="360">
          <v-card class="px-3 pt-3 pb-1" color="#FCE4EC">
            <div class="mb-2 ml-1" style="font-size:12px;">登録しているメールアドレスを入力してください</div>
            <v-text-field
              v-model="inputEmailForReset"
              :error-messages="emailForResetErrors"
              prepend-inner-icon="mail"
              placeholder="メールアドレス"
              color="#8ac32b"
              required
              dense
              solo
              clearable
              @input="$v.inputEmailForReset.$touch()"
              @blur="$v.inputEmailForReset.$touch()"
            ></v-text-field>
            <v-row align="center" justify="center">
              <v-btn
                dark
                color="#8ac32b"
                depressed
                @click="resetPassword"
                :disabled="this.emailForResetErrors.length != 0 || this.inputEmailForReset == ''"
              >送信</v-btn>
            </v-row>
            <v-alert
              style="font-size:11px;"
              class="py-2 mt-5"
              color="red"
              type="info"
            >登録しているメールアドレスでない場合メールは届きません</v-alert>
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
                placeholder="メールアドレス"
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
                placeholder="パスワード"
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
              <div style="font-size:10px;">
                パスワードを忘れた方は
                <v-btn x-small text dark color="primary" @click="resetPasswordDialog = true">こちら</v-btn>
              </div>
              <v-spacer></v-spacer>
              <v-btn dark color="#8ac32b" @click="signInEmail" :disabled="isError" depressed>ログイン</v-btn>
            </v-card-actions>
          </v-card-text>
          <v-divider></v-divider>
          <div class="mb-3">
            <v-list-item>
              <v-spacer></v-spacer>初めての方
              <v-btn dark class="ml-2" color="#8ac32b" to="/signUp" depressed>新規登録</v-btn>
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
    email: { required, email },
    inputEmailForReset: { required, email }
  },

  data: () => ({
    email: "",
    password: "",
    alertDialog: false,
    dialogMes: "",
    resetPasswordDialog: false,
    inputEmailForReset: ""
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
    emailForResetErrors() {
      const errors = [];
      if (!this.$v.inputEmailForReset.$dirty) return errors;
      !this.$v.inputEmailForReset.email &&
        errors.push("メールアドレスを入力してください");
      !this.$v.inputEmailForReset.required &&
        errors.push("メールアドレスは必須です");
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
    },
    resetPassword() {
      this.resetPasswordDialog = false;
      var auth = firebase.auth();
      auth.sendPasswordResetEmail(this.inputEmailForReset).catch(function() {});
      this.inputEmailForReset = "";
    }
  }
};
</script>
<style>
</style>