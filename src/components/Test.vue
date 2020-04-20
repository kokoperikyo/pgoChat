<template>
  <div>
    <v-btn @click="test">aa</v-btn>
    <v-btn @click="test2">sakuzyo</v-btn>
    <v-btn @click="test3">add</v-btn>
  </div>
</template>

<script>
import { db } from "@/plugins/firebase";
// import firebase from "@firebase/app";

export default {
  data() {
    return {};
  },
  methods: {
    test() {
      var a = "aaaa";
      window.sessionStorage.setItem(["tesst"], [`${a}`]);
    },
    test2() {
      var a = window.sessionStorage.getItem(["tesst"]);
      // eslint-disable-next-line no-console
      console.log(a);
    },
    test3() {
      const isOpenChat = db
        .collection("timeLimitChat")
        .doc("result + this.$store.getters.user.uid")
        .collection("isOpenChat");
      isOpenChat.add({
        st: true
      });
    }
  },
  mounted() {
    var st = "twiwdvhlzeexjevjebxkqsewgCljlwOUGBKsKk0jWnncdNN2";
    var userId = st.substr(20, 48);

    // eslint-disable-next-line no-console
    console.log(userId);
  },
  computed: {},
  created() {},
  beforeDestroy() {},
  beforeUpdate() {},
  firestore() {}
};
</script>