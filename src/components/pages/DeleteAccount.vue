<template>
  <div>
    <v-dialog v-model="exitModal" max-width="376">
      <v-card>
        <v-card-title class="pb-0">アカウント情報が全て削除されます</v-card-title>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn rounded color="primary" @click="deleteAccount" class="mr-5">退会</v-btn>
          <v-btn rounded color="primary" outlined @click="exitModal = false">閉じる</v-btn>
          <v-spacer></v-spacer>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-container fluid>
      <v-row align="center" justify="center">
        <v-btn rounded outlined @click="exitModal = true">退会</v-btn>
      </v-row>
    </v-container>
  </div>
</template>
<script>
import firebase from "@firebase/app";

export default {
  data: () => ({
    exitModal: false
  }),
  mounted() {
    // setTimeout(() => {
    //   this.$router.push("/profile");
    // }, 5000);
  },
  methods: {
    deleteAccount() {
      var user = firebase.auth().currentUser;

      user
        .delete()
        .then(function() {})
        .catch(function() {
          alert(
            "大変申し訳ございませんが、ログアウトして再度ログインした後実行してくだい"
          );
        });
    }
  }
};
</script>