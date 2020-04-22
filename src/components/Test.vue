<template>
  <div>{{LimitChatLogin}}</div>
</template>

<script>
import { db } from "@/plugins/firebase";
// import firebase from "@firebase/app";

export default {
  data() {
    return {
      LimitChatLogin: null,
      userInfo: null
    };
  },
  methods: {
    test() {},
    test2() {},
    test3() {}
  },
  mounted() {
    setTimeout(() => {
      var docForChat =
        this.userInfo.myTimeLimitChat + this.$store.getters.user.uid;
      // eslint-disable-next-line no-console
      console.log(this.userInfo.myTimeLimitChat);
      db.collection("timeLimitChat")
        .doc(docForChat)
        .collection("isOpenChat")
        .doc(docForChat)
        .get()
        .then(doc2 => {
          // eslint-disable-next-line no-console
          console.log(doc2.data().st);
        });
    }, 2000);
  },
  computed: {},
  created() {},
  beforeDestroy() {},
  beforeUpdate() {},
  firestore() {
    return {
      userInfo: db.collection("users").doc(this.$store.getters.user.uid),

      LimitChatLogin: db.collection("timeLimitChat")
    };
  }
};
</script>