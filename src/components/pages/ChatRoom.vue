<template>
  <div>
    <v-card color flat class="overflow-y-auto scroll" :height="getChatCardHeifht">
      <v-list color v-for="(item, i) in latestMesUid" :key="i" class="p-0">
        <v-list-item v-if="latestMesUid.length == 0 && delateDis == true">
          フレンドとチャットを開始してください
          <v-btn link to="/friendList" small rounded color="primary">フレンドリスト</v-btn>
        </v-list-item>
        <v-list-item v-else @click="goChat(item.id)">
          <v-list-item-avatar size="40" class="mr-3" color="white">
            <v-img :src="item.avatarUrl"></v-img>
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title>
              {{item.name}}
              <span
                v-if="getNickname(item.nicknameList)"
              >({{getNickname(item.nicknameList)}})</span>
            </v-list-item-title>
            <v-list-item-subtitle v-text="item.mes"></v-list-item-subtitle>
          </v-list-item-content>

          <v-list-item-action>
            <v-icon
              v-if="getUnreadIcon(item.postAt,item.id,item.whoesMes)"
              color="black"
              large
            >mdi-message-processing</v-icon>
          </v-list-item-action>
        </v-list-item>
        <v-divider v-if="i + 1 < latestMesUid.length" :key="i"></v-divider>
      </v-list>
    </v-card>
  </div>
</template>
<script>
import { db } from "@/plugins/firebase";
import "@firebase/firestore";
export default {
  data() {
    return {
      delateDis: false,
      userInfo: null,
      latestMesUid: [],
      lastChatOpen: [],
      mes: null,
      screenHeight: 0
    };
  },
  methods: {
    orderByNewMes() {
      this.latestMesUid.sort(function(a, b) {
        return a.postAt.toDate().getTime() < b.postAt.toDate().getTime()
          ? 1
          : -1;
      });
    },
    makeMesList() {
      this.userInfo.friends.forEach(friend => {
        db.collection("users")
          .doc(this.$store.getters.user.uid)
          .collection("messages")
          .where("ref", "in", [
            friend.id,
            this.$store.getters.user.uid + friend.id
          ])
          .orderBy("createdAt", "desc")
          .limit(1)
          .get()
          .then(querySnapshot => {
            querySnapshot.forEach(doc => {
              this.latestMesUid.push({
                postAt: doc.data().createdAt,
                id: friend.id,
                avatarUrl: friend.avatarUrl,
                name: friend.name,
                nicknameList: friend.nicknameList,
                mes: doc.data().message,
                whoesMes: doc.data().whoesMes
              });
            });
            this.orderByNewMes();
          });
      });
    },
    getFriend(uid) {
      db.collection("users")
        .doc(uid)
        .get()
        .then(doc => {
          return doc.data();
        });
    },
    getNickname(nicknameList) {
      if (nicknameList.length != 0) {
        const target = nicknameList.find(items => {
          return items.ref === this.$store.getters.user.uid;
        });
        if (target != undefined) {
          return target.nickname;
        }
      }
    },
    getUnreadIcon(latestMessageTime, friendId, whoesMes) {
      var lastChatOpen = this.getLastChatOpen(friendId);
      if (
        lastChatOpen.toDate().getTime() <
          latestMessageTime.toDate().getTime() &&
        whoesMes != this.$store.getters.user.uid
      ) {
        return true;
      } else {
        return false;
      }
    },
    getLastChatOpen(friendId) {
      const target = this.lastChatOpen.find(item => {
        return item.id === friendId;
      });
      return target.lastOpen;
    },
    goChat(friendId) {
      this.$router.push({ name: "chat", params: { uid: friendId } });
    }
  },
  mounted() {
    this.screenHeight = window.parent.screen.height;

    setTimeout(() => {
      this.makeMesList();
    }, 1500);
    setTimeout(() => {
      this.delateDis = true;
    }, 2000);
  },
  computed: {
    getChatCardHeifht: function() {
      //ヘッダー、フッター、タブバー、パディング
      return this.screenHeight - 40 - 80;
    }
  },
  watch: {
    mes() {
      this.latestMesUid = [];
      this.makeMesList();
    }
  },
  firestore() {
    return {
      userInfo: db.collection("users").doc(this.$store.getters.user.uid),
      mes: db
        .collection("users")
        .doc(this.$store.getters.user.uid)
        .collection("messages"),
      lastChatOpen: db
        .collection("users")
        .doc(this.$store.getters.user.uid)
        .collection("lastOpen")
    };
  }
};
</script>