<template>
  <v-list>{{userInfo}}</v-list>
</template>
<script>
import { db } from "@/plugins/firebase";
import "@firebase/firestore";
export default {
  data() {
    return {
      userInfo: null,
      latestMes: [],
      latestMesTime: [],
      cahtOpenTime: [],
      lastChatOpen: [],
      isUnreadList: [],
      mes: null
    };
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