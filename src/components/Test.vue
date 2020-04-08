<template>
  <div>
    {{info}}
    <v-btn @click="test"></v-btn>
  </div>
</template>

<script>
// import { db } from "@/plugins/firebase";
import { iosAuthorizationOfNotification } from "@/plugins/firebase";
import "@firebase/firestore";
import firebase from "@firebase/app";

export default {
  data() {
    return {
      info: null
    };
  },
  methods: {
    test() {
      let argObj = {
        // 受信者のトークンIDと通知内容
        to: "/topics/test",
        priority: "high",
        content_available: true,
        notification: {
          title: "おしらせ",
          body: "testtest",
          badge: "1"
        }
      };
      let optionObj = {
        //送信者のサーバーキー
        headers: {
          "Content-Type": "application/json",
          Authorization: "key=" + `${iosAuthorizationOfNotification}`
        }
      };
      this.axios.post("https://fcm.googleapis.com/fcm/send", argObj, optionObj);
    }
    // test() {
    //   this.axios
    //     .get("https://api.coindesk.com/v1/bpi/currentprice.json")
    //     .then(response => (this.info = response));
    // }
  },
  mounted() {
    var ua = navigator.userAgent;

    this.info = ua.indexOf("Mobile") > 0;
  },
  computed: {
    // test() {
    //   const ua = navigator.userAgent;
    //   const isIOS = ua.indexOf("iPhone") >= 0;
    //   return isIOS;
    // }
  },
  created() {
    const messaging = firebase.messaging();
    messaging
      .requestPermission()
      .then(() => {
        // eslint-disable-next-line no-console
        console.log("Have permission");
        return messaging.getToken();
      })
      .then(currentToken => {
        if (currentToken) {
          // プッシュ通知を受信し，表示できる状態
          // eslint-disable-next-line no-console
          console.log(currentToken);
        }
      });
    // .catch(err => {
    //   console.log("Error Occurred.");
    // });
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