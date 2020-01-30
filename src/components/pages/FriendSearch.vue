<template>
  <div>
    <v-alert v-show="addFriendSuccess" type="success">フレンド申請をしました</v-alert>
    <v-text-field v-model="searchUserName" label="探しているユーザー名を入力してください" append-icon="search"></v-text-field>
    <v-card class="mx-auto" tile>
      <v-list v-if="searchUserName">
        {{noResultMessage}}
        <v-list-item
          v-for="(serchedUser, i) in serchedUsers"
          :key="i"
          @click="addFriend(serchedUser.id)"
        >
          <v-list-item-avatar>
            <v-img :src="serchedUser.avatarUrl"></v-img>
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title v-text="serchedUser.name"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
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
      searchUserName: null,
      serchedUsers: Object,
      noResultMessage: null,
      user: null,
      friendIdList: [],
      friendNameList: [],
      addFriendSuccess: false
    };
  },
  mounted() {
    //最終ログインを更新
    db.collection("users")
      .doc(this.$store.getters.user.uid)
      .update({
        lastLogin: firebase.firestore.Timestamp.fromDate(new Date())
      });
    //フレンドID取得
    db.collection("users")
      .doc(this.$store.getters.user.uid)
      .get()
      .then(doc => {
        doc.data().friend.forEach(item => {
          this.friendIdList.push(item.id);
        });
        //フレンドネーム一覧取得
        db.collection("users")
          .where("id", "in", this.friendIdList)
          .get()
          .then(snap => {
            snap.forEach(doc => {
              this.friendNameList.push(doc.data().name);
            });
          });
      });
  },
  methods: {
    //フレンド追加
    addFriend: function(id) {
      // const users = db.collection("users");
      // users.doc(this.$store.getters.user.uid).update({
      //   friend: firebase.firestore.FieldValue.arrayUnion(users.doc(id))
      // });
      // this.$router.push({ name: "friendProfile", params: { uid: id } });
      const users = db.collection("users");
      users.doc(id).update({
        friendRequestList: firebase.firestore.FieldValue.arrayUnion({
          id: this.$store.getters.user.uid,
          userName: "s"
        })
      });
      // this.$router.push({ name: "friendProfile", params: { uid: id } });

      this.addFriendSuccess = true;
      setTimeout(() => {
        this.addFriendSuccess = false;
      }, 3000);
    }
  },
  watch: {
    searchUserName: function() {
      db.collection("users")
        .orderBy("name")
        .startAt(this.searchUserName)
        .endAt(this.searchUserName + "\uf8ff")
        .get()
        .then(snap => {
          const array = [];
          snap.forEach(doc => {
            // 自分と既存フレンドはフレンド検索から排除
            if (
              !this.friendNameList.includes(doc.data().name) &&
              doc.data().name != this.user.name
            ) {
              array.push(doc.data());
            }
          });
          this.serchedUsers = array;
          if (this.serchedUsers.length == 0) {
            this.noResultMessage = "一致するユーザーがいません";
          } else {
            this.noResultMessage = "";
          }
        });
    }
  },
  firestore() {
    return {
      user: db.collection("users").doc(this.$store.getters.user.uid)
    };
  }
};
</script>