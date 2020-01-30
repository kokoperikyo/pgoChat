<template>
  <v-app>
    <v-navigation-drawer
      v-if="userStatus"
      v-model="drawer"
      :clipped="$vuetify.breakpoint.lgAndUp"
      app
    >
      <v-list dense>
        <template v-for="item in items">
          <v-list-item :key="item.text" :to="item.link">
            <v-list-item-action>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>{{ item.text }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </template>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar :clipped-left="$vuetify.breakpoint.lgAndUp" app color="blue darken-3" dark>
      <v-app-bar-nav-icon v-if="userStatus" @click="drawer = !drawer" />
      <v-toolbar-title style="width: 300px" class="ml-0 pl-4">
        <span class="hidden-sm-and-down">ポケモンGOチャット</span>
      </v-toolbar-title>

      <v-spacer />
      <v-toolbar-items v-if="userStatus">
        <v-btn @click="doLogout" text>ログアウト</v-btn>
      </v-toolbar-items>
      <v-toolbar-items v-else>
        <v-btn text to="/signIn">ログイン</v-btn>
        <v-btn text to="/signUp">登録</v-btn>
      </v-toolbar-items>
    </v-app-bar>
    <v-content>
      <v-container>
        <router-view />
      </v-container>
    </v-content>
  </v-app>
</template>
<script>
import Firebase from "@/plugins/firebase";
import firebase from "@firebase/app";
// import { db } from "@/plugins/firebase";

export default {
  name: "navigation",
  created: function() {
    Firebase.onAuth();
  },
  computed: {
    userStatus() {
      // ログインするとtrue
      return this.$store.getters.isSignedIn;
    }
  },
  data() {
    return {
      islogin: Boolean,
      drawer: true,
      items: [
        {
          icon: "mdi-account-circle-outline",
          text: "プロフィール",
          link: { name: "profile" }
        },
        {
          icon: "mdi-account-group-outline",
          text: "フレンド一覧",
          link: { name: "friendList" }
        },
        {
          icon: "mdi-magnify",
          text: "フレンド検索",
          link: { name: "friendSearch" }
        }
      ]
    };
  },
  methods: {
    // ログイン処理
    doLogin() {
      Firebase.login();
    },
    // ログアウト処理
    doLogout() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.$router.push("/signIn");
        })
        .catch(error => {
          alert(error.message);
        });
    }
  }
  // mounted() {
  //   setTimeout(() => {
  //     db.collection("users")
  //       .doc(this.$store.getters.user.uid)
  //       .get()
  //       .then(doc => {
  //         // eslint-disable-next-line no-console
  //         console.log(doc);
  //       });
  //     // eslint-disable-next-line no-console
  //     console.log(this.$store.getters.user.uid);
  //   }, 5000);
  // }
};
</script>
<style scoped>
</style>
