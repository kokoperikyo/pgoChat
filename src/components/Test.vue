<template>
  <v-list>{{test}}</v-list>
</template>
<script>
// import { db } from "@/plugins/firebase";
import "@firebase/firestore";
export default {
  data() {
    return {};
  },
  computed: {
    test() {
      const ua = navigator.userAgent;
      const isIOS = ua.indexOf("iPhone") >= 0;
      return isIOS;
    }
  },
  firestore() {
    return {
      // userInfo: db.collection("users").doc(this.$store.getters.user.uid),
      // mes: db
      //   .collection("users")
      //   .doc(this.$store.getters.user.uid)
      //   .collection("messages"),
      // lastChatOpen: db
      //   .collection("users")
      //   .doc(this.$store.getters.user.uid)
      //   .collection("lastOpen")
    };
  }
};
</script>