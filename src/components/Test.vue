<template>
  <v-btn @click="test"></v-btn>
</template>

<script>
// import { db } from "@/plugins/firebase";
// import { iosAuthorizationOfNotification } from "@/plugins/firebase";
import "@firebase/firestore";
// import firebase from "@firebase/app";

export default {
  data() {
    return {
      info: null
    };
  },
  methods: {
    test() {
      this.appJsInterface.showAlert("message");
    }
  },
  mounted() {},
  computed: {},
  created() {},
  firestore() {}
};
</script>