<template>
  <v-app>
    <v-container>
      <v-list>
        <v-list-item-group v-model="messages" color="primary">
          <v-list-item v-for="(message, i) in messages" :key="i" @click="btn(message)">
            <v-list-item-content>
              <v-list-item-title v-text="message"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-container>
  </v-app>
</template>

<script>
import { db } from "@/plugins/firebase";
// import firebase from "@firebase/app";
// import "@firebase/firestore";

export default {
  data() {
    return {
      messages: []
    };
  },
  mounted() {
    // setTimeout(() => {
    //   db.collection("users")
    //     .doc(this.$store.getters.user.uid)
    //     .collection("messages")
    //     .add({
    //       message: "new",
    //       toWho: this.$route.params["uid"],
    //       createdAt: firebase.firestore.Timestamp.fromDate(new Date())
    //     });
    //   // eslint-disable-next-line no-console
    //   console.log(this.$store.getters.user.uid);
    // }, 3000);
    setTimeout(() => {
      db.collection("users")
        .doc(this.$store.getters.user.uid)
        .collection("messages")
        .where("toWho", "in", [this.$route.params["uid"], "自分"])
        .orderBy("createdAt", "desc")
        .get()
        .then(snap => {
          snap.forEach(doc => {
            this.messages.push(doc.data());
          });
          // eslint-disable-next-line no-console
          console.log(this.messages);
        });
    }, 3000);
  },
  methods: {},
  created() {}
};
</script>