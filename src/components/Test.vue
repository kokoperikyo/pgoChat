<template>
  <v-app>
    <v-container></v-container>
  </v-app>
</template>

<script>
// import { db } from "@/plugins/firebase";
// import firebase from "@firebase/app";
// import "@firebase/firestore";

export default {
  data() {
    return {};
  },
  mounted() {
    // setTimeout(() => {
    //   db.collection("userss")
    //     .doc(this.$store.getters.user.uid)
    //     .collection("messages")
    //     .add({
    //       message: "testcccc",
    //       toWho: "c",
    //       createdAt: firebase.firestore.Timestamp.fromDate(new Date())
    //     });
    //   // eslint-disable-next-line no-console
    //   console.log(this.$store.getters.user.uid);
    // }, 3000);
  },
  methods: {},
  created() {}
};
</script>