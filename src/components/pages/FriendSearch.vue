<template>
  <div>
    {{friendIdList}}
    <v-text-field v-model="userName" label="フレンド名を入力してください" append-icon="search"></v-text-field>
    <v-card class="mx-auto" max-width="600" tile>
      <v-list>
        <v-list-item-group v-model="users" color="primary">
          <v-list-item v-for="(user, i) in users" :key="i" @click="btn(user.id)">
            <v-list-item-content>
              <v-list-item-title v-text="user.name"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
      <v-list>
        <v-list-item-group v-model="friendList" color="primary">
          <v-list-item v-for="(user, i) in friendList" :key="i" @click="btn(user.id)">
            <v-list-item-content>
              <v-list-item-title v-text="user.name"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-card>
  </div>
</template>
<script>
import { db } from "@/plugins/firebase";
import firebase from "@firebase/app";
import "@firebase/firestore";
export default {
  data() {
    return {
      userName: null,
      users: Object,
      friendIdList: [],
      friendList: []
    };
  },
  mounted() {
    //ユーザーの一括取得
    db.collection("users")
      .get()
      .then(snap => {
        const array = [];
        snap.forEach(doc => {
          array.push(doc.data());
        });
        this.users = array;
      });
    //ふれんどのuidをリストに保存
    // setTimeout(() => {
    db.collection("users")
      .doc(this.$store.getters.user.uid)
      .get()
      .then(doc => {
        const array = [];
        doc.data().friend.forEach(item => {
          array.push(item.id);
        });
        this.friendIdList = array;

        //フレンド一覧取得
        db.collection("users")
          .where("id", "in", this.friendIdList)
          .get()
          .then(snap => {
            const array = [];
            snap.forEach(doc => {
              array.push(doc.data());
            });
            this.friendList = array;
          });
      });
    // }, 3000);
  },
  methods: {
    //フレンド追加
    btn: function(id) {
      const users = db.collection("users");
      users.doc(this.$store.getters.user.uid).update({
        friend: firebase.firestore.FieldValue.arrayUnion(users.doc(id))
        // users.doc(id)
      });
    }
  }
};
</script>