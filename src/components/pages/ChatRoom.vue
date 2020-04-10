<template>
  <div class="pt-2">
    <div class>
      <span class="mx-2" style="font-size:12px;">新しいフレンドとのチャットはこちら</span>
      <v-btn link to="/friendList" x-small depressed dark rounded color="#8ac32b">フレンドリスト</v-btn>
    </div>
    <v-card flat class="overflow-y-auto scroll" :height="getChatCardHeifht">
      <v-list v-for="(item, i) in latestMesUid" :key="i" class="p-0">
        <v-list-item @click="goChat(item.id)">
          <v-list-item-avatar size="40" class="mr-3">
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
              color="#8ac32b"
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
  },
  computed: {
    getChatCardHeifht: function() {
      //ヘッダー、フッター、タブバー、パディング
      var header = 40;
      var footer = 80;
      var topComment = 32;
      var padOfiphone = 20;
      var padOfLargeiphone = 78;
      var padOfTab = 40;
      var andMobBar = 60;
      // iphoneの時
      if (navigator.userAgent.indexOf("iPhone") >= 0) {
        // iphone8plus以下
        if (window.innerHeight <= 716) {
          return this.screenHeight - header - footer - topComment - padOfiphone;
          // iphoneX以上
        } else {
          return (
            this.screenHeight - header - footer - topComment - padOfLargeiphone
          );
        }
      }
      //androidモバイルの時
      else if (
        navigator.userAgent.indexOf("Android") >= 0 &&
        navigator.userAgent.indexOf("Mobile") >= 0
      ) {
        return this.screenHeight - header - footer - topComment - andMobBar;
      }
      //androidタブレットの時
      else if (navigator.userAgent.indexOf("Android") >= 0) {
        return this.screenHeight - header - topComment - andMobBar;
      }
      //タブレットの時
      else if (window.innerWidth > 700 && window.innerWidth <= 1024) {
        return this.screenHeight - header - topComment - padOfTab;
      } else {
        return null;
      }
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