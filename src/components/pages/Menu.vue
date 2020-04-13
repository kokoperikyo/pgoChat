<template>
  <div>
    <v-row align="center" class="mx-1" style="height:100px;">
      <v-col cols="4" align="center">
        <v-icon color="#004D40">mdi-exit-run</v-icon>
        <v-btn small rounded outlined color="#004D40" to="deleteAccount">退会</v-btn>
      </v-col>
      <v-col cols="4" align="center" v-show="isMobile">
        <v-icon color="#004D40">mdi-bell-outline</v-icon>
        <v-btn small rounded outlined color="#004D40" to="notificationMobile">通知</v-btn>
      </v-col>
    </v-row>
  </div>
</template>
<script>
export default {
  computed: {
    isMobile() {
      if (window.innerWidth <= 1024) {
        return true;
      } else {
        return false;
      }
    }
  }
};
</script>