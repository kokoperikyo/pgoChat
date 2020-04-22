<template>
  <div></div>
</template>
<script>
import { db } from "@/plugins/firebase";

export default {
  data() {
    return {
      userInfo: null,
      message: null,
      lastChatOpen: null,
      LimitChatLogin: null
    };
  },
  mounted() {},
  methods: {
    friendRequest() {
      this.$emit("friendRequestNotion");
    },
    chatOn() {
      const now = new Date();
      const timeDate =
        now.getTime() - this.message[0].createdAt.toDate().getTime();
      const diffMinutesDate = timeDate / (1000 * 60);
      if (diffMinutesDate < 1) {
        this.$emit("chatNotificationOn");
      }
    },
    chatOff() {
      this.$emit("chatNotificationOff");
    },
    limitChatOn() {
      var docForChat =
        this.userInfo.myTimeLimitChat + this.$store.getters.user.uid;

      db.collection("timeLimitChat")
        .doc(docForChat)
        .get()
        .then(doc => {
          if (doc.data().isNotionIcon == true) {
            this.$emit("limitChatNotificationOn");
          } else {
            this.$emit("limitChatNotificationOff");
          }
        });
    }
  },
  watch: {
    message() {
      this.chatOn();
    },
    lastChatOpen() {
      this.chatOff();
    },
    LimitChatLogin() {
      this.limitChatOn();
    }
  },
  firestore() {
    return {
      userInfo: db.collection("users").doc(this.$store.getters.user.uid),
      message: db
        .collection("users")
        .doc(this.$store.getters.user.uid)
        .collection("messages")
        .where("toWho", "==", this.$store.getters.user.uid)
        .orderBy("createdAt", "desc")
        .limit(1),
      lastChatOpen: db
        .collection("users")
        .doc(this.$store.getters.user.uid)
        .collection("lastOpen"),
      LimitChatLogin: db.collection("timeLimitChat")
    };
  }
};
</script>