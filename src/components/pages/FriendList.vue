<template>
  <v-card class="mx-auto" max-width="500">
    <v-sheet class="pa-4 primary lighten-2">
      <v-text-field
        v-model="search"
        dense
        hide-details
        clearable
        clear-icon="mdi-close-circle"
        background-color="#BDE7F9"
      ></v-text-field>
      <v-checkbox v-model="caseSensitive" dark hide-details label="完全一致検索"></v-checkbox>
    </v-sheet>
    <v-list>
      <v-treeview :items="items" :search="search" :filter="filter">
        <template v-slot:prepend="{ item }">
          <v-list-item-avatar size="10" :color="isOnline(item.lastLogin) ? '#04F620' : 'grey'"></v-list-item-avatar>
          <v-list-item-avatar class="mr-5">
            <v-img :src="item.avatarUrl"></v-img>
          </v-list-item-avatar>
        </template>
        <template v-slot:append="{ item }">
          <span class="mr-5">{{getLastLogin(item.lastLogin)}}</span>
          <v-btn outlined @click="goChat(item.id)">対戦</v-btn>
        </template>
      </v-treeview>
      <v-card class="mx-2 mt-5">
        <v-btn block outlined color="light-blue" dark to="/friendSearch">新しいフレンドを探す</v-btn>
      </v-card>
    </v-list>
  </v-card>
</template>
<script>
import { db } from "@/plugins/firebase";

export default {
  data: () => ({
    friendIdList: [],
    items: [],
    search: null,
    caseSensitive: false
  }),
  mounted() {
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
              this.items.push(doc.data());
            });
          });
      });
    // }, 3000);
  },
  methods: {
    getLastLogin: function(loginDate) {
      const now = new Date();
      const timeDate = now.getTime() - loginDate.toDate().getTime();
      const diffDayDate = timeDate / (1000 * 60 * 60 * 24);
      const diffHourDate = timeDate / (1000 * 60 * 60);
      const diffMinutesDate = timeDate / (1000 * 60);
      const day = Math.floor(diffDayDate);
      const hour = Math.floor(diffHourDate);
      const minutes = Math.floor(diffMinutesDate);
      if (day > 0) {
        return day + "日前";
      } else if (hour > 0) {
        return hour + "時間前";
      } else if (minutes > 0) {
        return minutes + "分前";
      } else {
        return "オンライン";
      }
    },
    isOnline: function(loginDate) {
      const now = new Date();
      const timeDate = now.getTime() - loginDate.toDate().getTime();
      const floorDate = Math.floor(timeDate / (1000 * 60));
      if (floorDate <= 1) {
        return true;
      } else {
        return false;
      }
    },
    goChat(uid) {
      this.$router.push({ name: "chat", params: { uid: uid } });
    }
  },
  computed: {
    filter() {
      return this.caseSensitive
        ? (item, search, textKey) => item[textKey].indexOf(search) > -1
        : undefined;
    }
  }
};
</script>