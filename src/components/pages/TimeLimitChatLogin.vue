<template>
  <div>
    <v-content>
      <v-container>
        <v-card class="mt-10 mx-auto" max-width="500" color="#FCE4EC">
          <div class="ml-3 pt-3 mb-2">チャットルームに参加しますか？</div>
          <v-alert
            style="font-size:11px;"
            class="py-2 mx-2"
            color="red"
            type="error"
          >先着１名なので参加できない場合もあります</v-alert>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn rounded color="#004D40" dark @click="toChatRoom" class="mb-3">参加</v-btn>
            <v-spacer></v-spacer>
          </v-card-actions>
        </v-card>
      </v-container>
    </v-content>
  </div>
</template>
<script>
export default {
  data() {
    return {
      notFoundList: null,
      chatLoginDialog: true
    };
  },
  methods: {
    toChatRoom() {
      this.$router.push({
        name: "timeLimitChat",
        params: { uid: this.$route.params["uid"] }
      });
    }
  },
  mounted() {},
  computed: {},
  created() {},
  firestore() {}
};
</script>