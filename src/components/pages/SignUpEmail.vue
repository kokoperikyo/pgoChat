<template>
  <v-app id="app">
    <v-content>
      <div id="firebaseui-auth-container"></div>

      <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
          <v-col cols="12" sm="8" md="4">
            <v-card class="elevation-12">
              <v-card-text>
                <v-form>
                  <v-text-field
                    v-model="email"
                    :error-messages="emailErrors"
                    label="E-mail"
                    prepend-icon="mail"
                    required
                    @input="$v.email.$touch()"
                    @blur="$v.email.$touch()"
                  ></v-text-field>
                  <v-text-field
                    v-model="password"
                    :error-messages="passwordErrors"
                    :counter="10"
                    label="password"
                    prepend-icon="lock"
                    required
                    @input="$v.password.$touch()"
                    @blur="$v.password.$touch()"
                  ></v-text-field>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer />
                <v-btn color="primary" @click="signUp">登録</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import { validationMixin } from "vuelidate";
import { required, minLength, email } from "vuelidate/lib/validators";
import firebase from "@firebase/app";

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
    signUp: function() {
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.email, this.password)
        .then(() => {
          this.$router.push("/profile");
        })
        .catch(error => {
          alert(error.message);
        });
    }
  }
};
</script>