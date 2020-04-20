<template>
  <div>
    <v-row align="center" justify="center" class="pt-10">
      <div class="font-weight-black display-4">404</div>
    </v-row>
    <v-row align="center" justify="center" class="pt-5">
      <v-col align="center" :cols="isMobile">
        <v-img
          src="https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/404%2F%E3%82%B3%E3%82%99%E3%83%BC%E3%82%B9.png?alt=media&token=1a8f4ae4-663c-4e8e-9a4b-3e7e6e0d99f8"
        ></v-img>
      </v-col>
      <v-col align="center" :cols="isMobile">
        <v-img
          src="https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/404%2F%E3%82%B3%E3%82%99%E3%83%BC%E3%82%B9%E3%83%88.png?alt=media&token=99ab3b80-eb9e-41df-afb5-f86230ace5ae"
        ></v-img>
      </v-col>
      <v-col align="center" :cols="isMobile" class="mb-2">
        <v-img
          src="https://firebasestorage.googleapis.com/v0/b/pgochat-91c46.appspot.com/o/404%2F%E3%82%B1%E3%82%99%E3%83%B3%E3%82%AB%E3%82%99%E3%83%BC.png?alt=media&token=9c262c5c-1976-419e-bdaa-cb43a61a82c8"
        ></v-img>
      </v-col>
    </v-row>
  </div>
</template>
<script>
export default {
  computed: {
    isMobile() {
      if (navigator.userAgent.indexOf("Mobile") >= 0) {
        return 3;
      } else {
        return 2;
      }
    }
  }
};
</script>