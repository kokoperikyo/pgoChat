<template>
  <div>
    <v-dialog v-model="regNotificationDialog" max-width="350">
      <v-card>
        <v-card-title class="headline pb-0">通知の登録が完了しました</v-card-title>
        <p class="ml-6 mt-3" style="font-size:10px;">20秒後にテスト通知が届きます</p>
        <p class="ml-6" style="font-size:10px;">アプリを閉じてお待ちください</p>
        <v-row justify="center">
          <v-icon color="#8ac32b" size="200" style="center">mdi-checkbox-marked-circle-outline</v-icon>
        </v-row>
      </v-card>
    </v-dialog>
    <div class="mt-2 mx-2">
      <p style="font-size:12px;">アプリ外でアカウントを登録された方には通知が届きません</p>
      <p style="font-size:12px;">こちらのボタンを押すと通知が届くようになります</p>
      <v-btn rounded outlined color="#004D40" @click="regNotification()">通知を受け取る</v-btn>
    </div>
  </div>
</template>
<script>
import { authorizationOfNotification } from "@/plugins/firebase";

export default {
  data() {
    return {
      regNotificationDialog: false
    };
  },
  methods: {
    regNotification() {
      var ua = navigator.userAgent;
      if (ua.indexOf("Android") > 0) {
        window.appJsInterface.subscribeUid(this.$store.getters.user.uid);
      } else if (window.innerWidth <= 1024) {
        window.webkit.messageHandlers.callbackHandler.postMessage(
          this.$store.getters.user.uid
        );
      }
      this.regNotificationDialog = true;

      setTimeout(() => {
        this.regNotificationDialog = false;
      }, 10000);

      setTimeout(() => {
        let argObj = {
          // 受信者のトークンIDと通知内容
          to: `/topics/${this.$store.getters.user.uid}`,
          priority: "high",
          content_available: true,
          notification: {
            title: "通知設定完了",
            badge: "1"
          }
        };
        let optionObj = {
          //送信者のサーバーキー
          headers: {
            "Content-Type": "application/json",
            Authorization: "key=" + `${authorizationOfNotification}`
          }
        };
        this.axios.post(
          "https://fcm.googleapis.com/fcm/send",
          argObj,
          optionObj
        );
      }, 20000);
    }
  }
};
</script>