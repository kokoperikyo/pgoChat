<template>
  <v-app id="app">
    <NavigationBar />
  </v-app>
</template>

<script>
import Firebase from "@/plugins/firebase";
import NavigationBar from "@/components/NavigationBar.vue";

export default {
  components: {
    NavigationBar
  },
  created: function() {
    Firebase.onAuth();
  }
};
</script>