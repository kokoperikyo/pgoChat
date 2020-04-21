<template>
  <div>
    <!-- <button @click="test">{{userInfo.name}}</button> -->
  </div>
</template>
<script>
import { db } from "@/plugins/firebase";

export default {
  data() {
    return {
      userInfo: null
    };
  },
  mounted() {
    setTimeout(() => {
      // eslint-disable-next-line no-console
      console.log("request");
      if (this.userInfo.friendRequestList.length != 0) {
        this.friendRequestNotion();
      }
    }, 2000);
  },
  methods: {
    friendRequestNotion() {
      this.$emit("friendRequestNotion");
    }
  },
  firestore() {
    return {
      userInfo: db.collection("users").doc(this.$store.getters.user.uid)
    };
  }
};
</script>