<template>
  <div>
    <v-row align="center" class="mx-1" style="height:100px;">
      <v-col :cols="isMobile" align="center" class="mt-5">
        <v-btn small rounded outlined color="#004D40" to="deleteAccount" width="120">
          <v-icon color="#004D40" small class="mr-1">mdi-exit-run</v-icon>退会
        </v-btn>
      </v-col>
      <v-col :cols="isMobile" align="center" class="mt-5" v-show="isMobileOrTab">
        <v-btn small rounded outlined color="#004D40" to="notificationMobile" width="120">
          <v-icon color="#004D40" small class="mr-1">mdi-bell-outline</v-icon>通知
        </v-btn>
      </v-col>
      <v-col :cols="isMobile" align="center" class="mt-5">
        <v-btn small rounded outlined color="#004D40" to="shareToke" width="120">
          <v-icon color="#004D40" small class="mr-1">mdi-chat-processing-outline</v-icon>トーク作成
        </v-btn>
      </v-col>
    </v-row>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  computed: {
    isMobileOrTab() {
      if (window.innerWidth <= 1024) {
        return true;
      } else {
        return false;
      }
    },
    isMobile() {
      if (navigator.userAgent.indexOf("Mobile") >= 0) {
        return 6;
      } else {
        return 4;
      }
    }
  },
  mounted() {}
};
</script>