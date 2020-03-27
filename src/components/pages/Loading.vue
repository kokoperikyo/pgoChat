<template>
  <v-container fluid>
    <v-row>
      <v-col cols="12">
        <v-row align="center" justify="center" class="grey lighten-5">
          <h3>ログイン中です.....</h3>
        </v-row>
      </v-col>
      <v-col cols="12">
        <v-row align="center" justify="center" class="grey lighten-5">
          <v-progress-circular indeterminate color="primary" :size="100" :width="10"></v-progress-circular>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  created() {},
  computed: {},
  mounted() {
    setTimeout(() => {
      this.$router.push("/profile");
    }, 5000);
  },
  methods: {}
};
</script>